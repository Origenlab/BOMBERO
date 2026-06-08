/**
 * blog-enhance.ts — Homologación editorial de artículos del blog
 *
 * Aplica a TODOS los artículos en render-time:
 *  1. Índice de contenidos automático (TOC) con anchors a cada H2/H3
 *  2. IDs estables en headings (slugificados) para enlaces internos
 *  3. Inyección de imágenes temáticas con ALT optimizado (artículos con <2 imágenes)
 *  4. Inserción de tablas/FAQ complementarias (blog-enriquecimiento.ts)
 *  5. Extracción de FAQPage JSON-LD (GEO / motores de IA generativa)
 *  6. Tabla homologada de equipamiento para artículos de ciudades
 */

import { marked } from "marked";
import { faqExtra, tablasExtra } from "../data/blog-enriquecimiento";
import type { ArticuloData } from "../data/blog-articulos";

export interface TocItem {
  depth: 2 | 3;
  text: string;
  id: string;
}

export interface ArticuloPreparado {
  html: string;
  toc: TocItem[];
  faqSchema: object | null;
}

/* ─── Utilidades ───────────────────────────────────────────────────────── */

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function stripMd(text: string): string {
  return text.replace(/\*\*|__|`|\*/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
}

/* ─── Selección de imágenes temáticas ──────────────────────────────────── */

interface ImgCandidate {
  re: RegExp;
  src: string;
  alt: string;
}

// Mapa palabra clave → imagen específica (prioridad sobre el pool de categoría)
const IMG_KEYWORDS: ImgCandidate[] = [
  { re: /scba|respirator|aire/i, src: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif", alt: "Equipo SCBA de aire autónomo para bomberos certificado NFPA" },
  { re: /casco/i, src: "/images/directorio/casco-bombero-bullard-amarillo-visor-01.avif", alt: "Casco estructural para bombero con visor certificado NFPA" },
  { re: /guante/i, src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes de protección para bombero resistentes al calor NFPA" },
  { re: /bota/i, src: "/images/directorio/botas-bombero-proteccion-01.avif", alt: "Botas de protección para bombero certificadas NFPA 1971" },
  { re: /capucha|monja/i, src: "/images/directorio/capucha-bombero-nomex-01.avif", alt: "Capucha Nomex de protección térmica para bombero" },
  { re: /gafa|visual|ocular/i, src: "/images/directorio/bombero-profesional-retrato-closeup-goggle-01.avif", alt: "Protección ocular profesional para bombero con goggles certificados" },
  { re: /hazmat|quimic|peligros/i, src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo Hazmat para materiales peligrosos nivel A" },
  { re: /forestal/i, src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Unidad forestal de bomberos para combate de incendios de vegetación" },
  { re: /extintor/i, src: "/images/directorio/extintor-polvo-quimico-01.avif", alt: "Extintor de polvo químico seco certificado para protección contra incendio" },
  { re: /sprinkler|rociador|nfpa-13/i, src: "/images/directorio/manguera-incendios-presion-01.avif", alt: "Sistema hidráulico contra incendios a presión conforme a NFPA" },
  { re: /detec|humo|gas/i, src: "/images/directorio/detector-multigas-hazmat-01.avif", alt: "Detector multigas profesional para atmósferas peligrosas" },
  { re: /camara-termica|tic/i, src: "/images/directorio/camara-termica-bomberos-01.avif", alt: "Cámara térmica TIC para bomberos conforme a NFPA 1801" },
  { re: /rescate-en-altura|cuerda|vertical/i, src: "/images/directorio/cuerdas-rappel-bomberos-01.avif", alt: "Cuerdas y sistemas de rescate vertical certificados NFPA 1983" },
  { re: /rescate|extricacion|jaws/i, src: "/images/directorio/equipo-corte-rescate-01.avif", alt: "Equipo hidráulico de corte y rescate vehicular para bomberos" },
  { re: /traje|epp|ropa/i, src: "/images/directorio/traje-bombero-estructural-nfpa-01.avif", alt: "Traje estructural de bombero certificado NFPA 1971" },
  { re: /monitor|refineria|petrol/i, src: "/images/directorio/estacion-bomberos-refineria-01.avif", alt: "Protección contra incendios industrial en instalación de refinería" },
  { re: /espuma/i, src: "/images/directorio/sistema-espuma-incendios-01.avif", alt: "Sistema de espuma contra incendios para hidrocarburos NFPA 11" },
  { re: /flashover|backdraft|supervivencia/i, src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento de bomberos en comportamiento del fuego y flashover" },
  { re: /licitacion|municipio|cotizar/i, src: "/images/directorio/camion-bomberos-equipado-01.avif", alt: "Unidad de bomberos municipal equipada conforme a estándares NFPA" },
];

// Pools por categoría (fallback) — imágenes existentes en /public/images/
const IMG_POOLS: Record<string, ImgCandidate[]> = {
  industrial: [
    { re: /./, src: "/images/directorio/estacion-bomberos-industrial-01.avif", alt: "Brigada y equipo contra incendio en instalación industrial en México" },
    { re: /./, src: "/images/directorio/sistema-espuma-incendios-01.avif", alt: "Sistema de espuma para protección de riesgos industriales" },
    { re: /./, src: "/images/directorio/manguera-incendios-presion-01.avif", alt: "Red hidráulica contra incendios industrial a presión" },
    { re: /./, src: "/images/directorio/brigada-bomberos-capacitacion-01.avif", alt: "Capacitación de brigada industrial contra incendios" },
  ],
  normativas: [
    { re: /./, src: "/images/blog/blog-normativa-nfpa-bomberos-mexico.avif", alt: "Normativas NFPA aplicables a bomberos y brigadas en México" },
    { re: /./, src: "/images/directorio/capacitacion-bomberos-profesional-01.avif", alt: "Capacitación profesional de bomberos conforme a normativa NFPA" },
  ],
  mantenimiento: [
    { re: /./, src: "/images/directorio/autobomba-panel-bombeo-manometros-01.avif", alt: "Panel de bombeo con manómetros — mantenimiento de equipos contra incendio" },
    { re: /./, src: "/images/directorio/cilindro-scba-bomberos-01.avif", alt: "Inspección y mantenimiento de cilindros SCBA para bomberos" },
  ],
  tecnicas: [
    { re: /./, src: "/images/accion/bomberos-accion-incendio-estructural.avif", alt: "Bomberos en acción aplicando técnicas de combate de incendio estructural" },
    { re: /./, src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento práctico de técnicas de bomberos con fuego real" },
  ],
  forestales: [
    { re: /./, src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Camión forestal para combate de incendios de vegetación en México" },
    { re: /./, src: "/images/directorio/motobomba-incendios-forestal-01.avif", alt: "Motobomba forestal portátil para incendios de vegetación" },
  ],
  equipo: [
    { re: /./, src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo de protección personal completo para bombero certificado NFPA" },
    { re: /./, src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Equipo de protección para bomberos profesionales en México" },
    { re: /./, src: "/images/accion/estacion-bomberos-mexico-moderna.avif", alt: "Estación de bomberos moderna equipada en México" },
  ],
  rescate: [
    { re: /./, src: "/images/directorio/equipo-rescate-tecnico-01.avif", alt: "Equipo de rescate técnico certificado para bomberos" },
    { re: /./, src: "/images/directorio/equipo-rescate-vertical-01.avif", alt: "Equipo de rescate vertical y trabajo en cuerdas NFPA 1983" },
  ],
};

function poolFor(categoria: string): ImgCandidate[] {
  const key = categoria
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  for (const k of Object.keys(IMG_POOLS)) {
    if (key.includes(k)) return IMG_POOLS[k];
  }
  return IMG_POOLS.equipo;
}

function pickImages(slug: string, articulo: ArticuloData, count: number): ImgCandidate[] {
  const haystack = slug + " " + articulo.titulo + " " + articulo.tags.join(" ");
  const matched = IMG_KEYWORDS.filter((c) => c.re.test(haystack));
  const pool = poolFor(articulo.categoria).filter(
    (p) => p.src !== articulo.imagen && !matched.some((m) => m.src === p.src)
  );
  const h = hashStr(slug);
  const rotated = pool.slice(h % pool.length).concat(pool.slice(0, h % pool.length));
  return matched.slice(0, count).concat(rotated).slice(0, count);
}

function figureHtml(img: ImgCandidate, caption: string): string {
  return `\n\n<figure class="articulo-figure">\n  <img src="${img.src}" alt="${img.alt}" loading="lazy" width="900" height="600" />\n  <figcaption>${caption}</figcaption>\n</figure>\n\n`;
}

/* ─── Tabla homologada para artículos de ciudades ──────────────────────── */

const CITY_RE = /^bomberos-([a-z-]+)-equipo-nfpa$/;

function cityTable(cityName: string): string {
  return `\n\n## Equipamiento NFPA Esencial por Función Operativa\n\nLa siguiente tabla resume el equipamiento mínimo recomendado para un cuerpo de bomberos como el de ${cityName}, organizado por función operativa y con su norma NFPA de referencia. Esta matriz es la base que utilizamos al preparar cotizaciones y documentación técnica para licitaciones municipales.\n\n| Función operativa | Equipamiento clave | Norma de referencia | Prioridad |\n|-------------------|--------------------|---------------------|-----------|\n| **Combate estructural** | Traje completo (chaquetón + pantalón), casco, capucha, guantes, botas | NFPA 1971 | Crítica |\n| **Protección respiratoria** | SCBA con cilindro de respaldo y máscara facial | NFPA 1981 / 1852 | Crítica |\n| **Rescate vehicular** | Herramienta hidráulica de corte/separación, estabilizadores | NFPA 1936 | Alta |\n| **Rescate con cuerdas** | Arneses, cuerdas estáticas, mosquetones, poleas | NFPA 1983 | Alta |\n| **Atención prehospitalaria** | Botiquín avanzado, camilla, oxígeno portátil | Protocolos locales | Alta |\n| **Detección de atmósferas** | Detector multigas (O2, CO, H2S, LEL) | NFPA 1670 | Media-Alta |\n| **Incendio forestal** | Traje ligero NFPA 1977, herramienta manual, motobomba | NFPA 1977 | Según región |\n\n> **Recomendación profesional:** antes de cualquier adquisición municipal, valide que cada partida especifique la edición vigente de la norma NFPA y la certificación de un laboratorio acreditado (UL, Intertek o SEI). Esto evita impugnaciones en licitación y garantiza equipo operable por una década.\n`;
}

/* ─── FAQ → JSON-LD (GEO) ──────────────────────────────────────────────── */

function extractFaq(md: string): { question: string; answer: string }[] {
  const lines = md.split("\n");
  const faqs: { question: string; answer: string }[] = [];
  let faqDepth = 0; // profundidad del heading "Preguntas Frecuentes" (2 o 3)
  let q: string | null = null;
  let buf: string[] = [];
  const push = () => {
    if (q && buf.join(" ").trim()) {
      faqs.push({ question: stripMd(q), answer: stripMd(buf.join(" ").replace(/\s+/g, " ")).slice(0, 600) });
    }
    buf = [];
    q = null;
  };
  for (const line of lines) {
    const h = line.match(/^(#{2,4})\s+(.+)/);
    if (h) {
      const depth = h[1].length;
      if (!faqDepth) {
        if (/preguntas\s+frecuentes/i.test(h[2])) faqDepth = depth;
        continue;
      }
      if (depth <= faqDepth) { push(); faqDepth = 0; continue; } // fin de la sección FAQ
      if (depth === faqDepth + 1) { push(); q = h[2]; continue; } // nueva pregunta
      continue;
    }
    // Formato alterno: pregunta en negritas como párrafo ("**¿...?**")
    const bq = line.match(/^\*\*(¿[^*]+\?)\*\*\s*$/);
    if (faqDepth && bq) { push(); q = bq[1]; continue; }
    if (faqDepth && q && line.trim() && !line.startsWith("|") && !line.startsWith(">")) buf.push(line.trim());
  }
  if (faqDepth) push();
  return faqs;
}

/* ─── Pipeline principal ───────────────────────────────────────────────── */

export function prepararArticulo(slug: string, articulo: ArticuloData, ctaInline: string): ArticuloPreparado {
  let md = articulo.contenido;

  // 1. Tabla complementaria (manual o de ciudad) — antes de FAQ/relacionados
  const cityMatch = slug.match(CITY_RE);
  const hasTable = /\|---/.test(md);
  let extraBlock = tablasExtra[slug] || "";
  if (!extraBlock && !hasTable && cityMatch) {
    const cityName = (articulo.titulo.split(/[:—|]/)[0] || "su ciudad")
      .replace(/bomberos( de)?/i, "")
      .trim() || "su ciudad";
    extraBlock = cityTable(cityName);
  }

  // 2. FAQ complementaria
  const hasFaq = /preguntas\s+frecuentes/i.test(md);
  const faqBlock = !hasFaq && faqExtra[slug] ? faqExtra[slug] : "";

  // Insertar extras antes de la sección de artículos relacionados (si existe) o al final
  const relIdx = md.search(/^#{2,3}\s+Art[ií]culos (de esta serie|relacionados)/im);
  const insertion = extraBlock + faqBlock;
  if (insertion) {
    md = relIdx >= 0 ? md.slice(0, relIdx) + insertion + "\n\n" + md.slice(relIdx) : md + insertion;
  }

  // 3. Inyección de imágenes si el artículo tiene menos de 2
  const imgCount = (md.match(/<img|<figure|!\[/g) || []).length;
  if (imgCount < 2) {
    const imgs = pickImages(slug, articulo, 2 - imgCount);
    const h2Positions: number[] = [];
    const re = /^##\s+(.+)$/gm;
    let mm: RegExpExecArray | null;
    while ((mm = re.exec(md)) !== null) h2Positions.push(mm.index);
    // Insertar después del 2º y 4º H2 (antes del siguiente heading)
    const targets = [2, 4].slice(0, imgs.length);
    let offset = 0;
    targets.forEach((t, i) => {
      const pos = h2Positions[Math.min(t, Math.max(h2Positions.length - 1, 0))];
      if (pos === undefined) return;
      const insertAt = pos + offset;
      const fig = figureHtml(imgs[i], `${stripMd(articulo.titulo)} — equipamiento y práctica profesional en México.`);
      md = md.slice(0, insertAt) + fig + md.slice(insertAt);
      offset += fig.length;
    });
  }

  // 4. TOC + ids en headings
  const toc: TocItem[] = [];
  const usedIds = new Set<string>();
  const renderer = new marked.Renderer();
  const origHeading = renderer.heading.bind(renderer);
  renderer.heading = ({ tokens, depth }: { tokens: any[]; depth: number }) => {
    const text = tokens.map((t: any) => t.text ?? t.raw ?? "").join("");
    const clean = stripMd(text);
    let id = slugifyHeading(clean) || "seccion";
    while (usedIds.has(id)) id = id + "-2";
    usedIds.add(id);
    if (depth === 2 || depth === 3) toc.push({ depth: depth as 2 | 3, text: clean, id });
    return `<h${depth} id="${id}">${clean}</h${depth}>\n`;
  };
  void origHeading;

  const html = marked(md, { renderer }) as string;

  // 5. FAQPage JSON-LD
  const faqs = extractFaq(md);
  const faqSchema =
    faqs.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return { html: html + ctaInline, toc, faqSchema };
}

/* ─── HTML del índice de contenidos ────────────────────────────────────── */

export function tocHtml(toc: TocItem[]): string {
  if (toc.length < 3) return "";
  const items = toc
    .map(
      (t) =>
        `<li class="toc-item toc-item--h${t.depth}"><a href="#${t.id}">${t.text}</a></li>`
    )
    .join("\n");
  return `<nav class="toc-box" aria-label="Índice de contenidos">\n<p class="toc-box__title">📑 Índice de Contenidos</p>\n<ol class="toc-box__list">\n${items}\n</ol>\n</nav>`;
}
