import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$CTABanner } from '../../chunks/CTABanner_CJ5vrrrF.mjs';
import { $ as $$CategoryCard, a as $$WhyChooseUs } from '../../chunks/WhyChooseUs_BCDa-qO3.mjs';
import { $ as $$FAQ } from '../../chunks/FAQ_BbVHhMJs.mjs';
import { $ as $$Breadcrumb, a as $$CTABar } from '../../chunks/CTABar_BFZT9nZk.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_DtmtO2cB.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const productos = [
    {
      id: "estructural",
      nombre: "Casco Estructural NFPA 1971",
      slug: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971",
      badge: "NFPA 1971",
      badgeColor: "ember",
      imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      descripcion: "Protecci\xF3n craneal m\xE1xima para combate de incendios estructurales. Cumple NFPA 1971 con resistencia a impactos, penetraci\xF3n y calor radiante. Construcci\xF3n en termopl\xE1stico de alta resistencia o material compuesto.",
      caracteristicas: [
        "Casco termopl\xE1stico certificado NFPA 1971",
        "Resistencia a impacto lateral y vertical",
        "Protecci\xF3n t\xE9rmica hasta 500\xB0F (260\xB0C)",
        "Sistema de retenci\xF3n ajustable de 4 puntos",
        "Certificado NFPA 1971 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio estructural \xB7 Rescate urbano \xB7 Operaciones interiores"
    },
    {
      id: "forestal",
      nombre: "Casco Forestal NFPA 1977",
      slug: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977",
      badge: "NFPA 1977",
      badgeColor: "fire",
      imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      descripcion: "Dise\xF1ado espec\xEDficamente para combate de incendios forestales. Ultraligero y ventilado para operaciones prolongadas en campo abierto. Cumple NFPA 1977 con protecci\xF3n facial integrada opcional.",
      caracteristicas: [
        "Peso ultraligero < 450 g",
        "Ventilaci\xF3n superior para clima c\xE1lido",
        "Protecci\xF3n facial mesh anti-chispas",
        "Compatible con protecci\xF3n auditiva",
        "Certificado NFPA 1977 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio forestal \xB7 Quemas controladas \xB7 Interface urbano-rural"
    },
    {
      id: "arff",
      nombre: "Casco ARFF Aeroportuario",
      slug: "/productos/cascos-para-bomberos/casco-arff-aeroportuario",
      badge: "NFPA 1971 / EN 443",
      badgeColor: "ember",
      imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      descripcion: "Casco de protecci\xF3n para bomberos aeroportuarios (ARFF). Dise\xF1ado para soportar radiaci\xF3n extrema y impactos en emergencias aeron\xE1uticas. Cumple NFPA 1971 y normas europeas EN 443.",
      caracteristicas: [
        "Visor de policarbonato anti-radiaci\xF3n dorado",
        "Resistencia t\xE9rmica mejorada para jet fuel",
        "Cumple NFPA 1971 / EN 443 / ICAO Annex 14",
        "Sistema de comunicaci\xF3n integrado compatible",
        "Reflectividad mejorada para operaciones nocturnas"
      ],
      aplicacion: "Aeropuertos \xB7 Emergencias aeron\xE1uticas \xB7 Rescate en pistas"
    },
    {
      id: "rescate",
      nombre: "Casco de Rescate T\xE9cnico NFPA 1951",
      slug: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951",
      badge: "NFPA 1951",
      badgeColor: "smoke",
      imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      descripcion: "Casco especializado para operaciones de rescate t\xE9cnico y USAR (Urban Search and Rescue). Protecci\xF3n superior contra impactos laterales y penetraci\xF3n. Cumple NFPA 1951 para rescate estructural.",
      caracteristicas: [
        "Protecci\xF3n de impacto lateral certificada",
        "Resistencia a penetraci\xF3n superior",
        "Compatible con arn\xE9s de escalada y rapel",
        "Ranuras para l\xE1mparas y c\xE1maras",
        "Certificado NFPA 1951 (edici\xF3n vigente)"
      ],
      aplicacion: "Rescate t\xE9cnico \xB7 USAR \xB7 Espacios confinados \xB7 Rescate vertical"
    },
    {
      id: "hazmat",
      nombre: "Casco HAZMAT Qu\xEDmico",
      slug: "/productos/cascos-para-bomberos/casco-hazmat-quimico",
      badge: "NFPA 1991 / 1992",
      badgeColor: "smoke",
      imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      descripcion: "Casco de protecci\xF3n para operaciones con materiales peligrosos. Compatible con trajes HAZMAT encapsulados Nivel A y B. Resistente a vapores qu\xEDmicos y salpicaduras de productos peligrosos.",
      caracteristicas: [
        "Compatible con traje HAZMAT encapsulado",
        "Resistente a vapores qu\xEDmicos y \xE1cidos",
        "Visor panor\xE1mico de visibilidad 180\xB0",
        "Sistema de ventilaci\xF3n para SCBA interno",
        "Certificado NFPA 1991 / NFPA 1992"
      ],
      aplicacion: "HAZMAT \xB7 Derrames qu\xEDmicos \xB7 Atm\xF3sferas IDLH \xB7 Nivel A/B"
    },
    {
      id: "industrial",
      nombre: "Casco de Brigada Industrial",
      slug: "/productos/cascos-para-bomberos/casco-brigada-industrial",
      badge: "Multi-norma",
      badgeColor: "fire",
      imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      descripcion: "Casco vers\xE1til para brigadas industriales y corporativos. Cumple m\xFAltiples normas NFPA seg\xFAn aplicaci\xF3n. Ideal para plantas petroqu\xEDmicas, refiner\xEDas y complejos industriales con riesgo de incendio.",
      caracteristicas: [
        "Compatible NFPA 1971 y NFPA 1977",
        "Dise\xF1o modular con accesorios intercambiables",
        "Protecci\xF3n facial y auditiva opcional",
        "Sistema de identificaci\xF3n de brigada",
        "Certificaci\xF3n dual para uso m\xFAltiple"
      ],
      aplicacion: "Brigadas industriales \xB7 Petroqu\xEDmica \xB7 Refiner\xEDas \xB7 Corporativos"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Cascos para Bomberos Certificados NFPA | Estructural, Forestal, Rescate, HAZMAT | BOMBERO.MX", "description": "Cascos de bombero certificados NFPA 1971, 1977 y 1951. Casco Estructural, Forestal, ARFF Aeroportuario, Rescate T\xE9cnico y HAZMAT con env\xEDo a los 32 estados de M\xE9xico. Asesor\xEDa t\xE9cnica sin costo. \xA1Cotiza ahora!", "keywords": [
    "cascos de bombero",
    "casco estructural NFPA 1971",
    "casco forestal NFPA 1977",
    "casco rescate NFPA 1951",
    "casco HAZMAT bombero",
    "casco ARFF aeroportuario",
    "equipo de protecci\xF3n personal bomberos",
    "EPP bomberos M\xE9xico",
    "casco bombero certificado",
    "comprar casco bombero M\xE9xico",
    "casco termopl\xE1stico bombero",
    "casco bombero NFPA"
  ], "type": "website", "data-astro-cid-4dypkc5d": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero" }
  ], "data-astro-cid-4dypkc5d": true })}    ${maybeRenderHead()}<section class="hero" data-astro-cid-4dypkc5d> <div class="hero__bg" data-astro-cid-4dypkc5d> <div class="hero__gradient" data-astro-cid-4dypkc5d></div> <div class="hero__grid" data-astro-cid-4dypkc5d></div> <div class="hero__glow hero__glow--1" data-astro-cid-4dypkc5d></div> <div class="hero__glow hero__glow--2" data-astro-cid-4dypkc5d></div> </div> <div class="container hero__container" data-astro-cid-4dypkc5d> <div class="hero__content" data-astro-cid-4dypkc5d> <div class="hero__badge" data-astro-cid-4dypkc5d> <span class="hero__badge-dot" data-astro-cid-4dypkc5d></span>
6 Tipos de Cascos · Certificados NFPA
</div> <h1 class="hero__title" data-astro-cid-4dypkc5d>
Cascos para
<span class="hero__title-highlight" data-astro-cid-4dypkc5d>Bomberos</span>
Certificados NFPA
</h1> <p class="hero__subtitle" data-astro-cid-4dypkc5d>
Protección craneal certificada para bomberos profesionales. Cascos estructurales,
          forestales, ARFF, de rescate técnico, HAZMAT e industriales certificados con envío a
          los 32 estados de México. Asesoría técnica sin costo.
</p> </div> <div class="hero__seo" data-astro-cid-4dypkc5d> <div class="hero__seo-block" data-astro-cid-4dypkc5d> <h2 class="hero__seo-title" data-astro-cid-4dypkc5d>Distribuidores de Cascos de Bombero Certificados NFPA en México</h2> <p class="hero__seo-text" data-astro-cid-4dypkc5d>
En <strong data-astro-cid-4dypkc5d>BOMBERO.MX</strong> somos el distribuidor autorizado #1 de <strong data-astro-cid-4dypkc5d>cascos de protección para bomberos</strong> en toda la República Mexicana. Nuestro catálogo incluye <strong data-astro-cid-4dypkc5d>cascos estructurales NFPA 1971</strong>, <strong data-astro-cid-4dypkc5d>cascos forestales NFPA 1977</strong>, cascos ARFF aeroportuarios, <strong data-astro-cid-4dypkc5d>cascos de rescate técnico NFPA 1951</strong>, cascos HAZMAT y cascos para brigadas industriales.
</p> </div> <div class="hero__seo-block" data-astro-cid-4dypkc5d> <h2 class="hero__seo-title" data-astro-cid-4dypkc5d>Cascos con Certificación NFPA para Cuerpos de Bomberos y Brigadas</h2> <p class="hero__seo-text" data-astro-cid-4dypkc5d>
Cada <strong data-astro-cid-4dypkc5d>casco de bombero</strong> cumple con las normativas más exigentes: <strong data-astro-cid-4dypkc5d>NFPA 1971</strong> para uso estructural, <strong data-astro-cid-4dypkc5d>NFPA 1977</strong> para operaciones forestales, <strong data-astro-cid-4dypkc5d>NFPA 1951</strong> para rescate técnico y <strong data-astro-cid-4dypkc5d>NFPA 1991/1992</strong> para operaciones HAZMAT. Proveemos documentación completa para licitaciones gubernamentales en los <strong data-astro-cid-4dypkc5d>32 estados de México</strong>.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": "Cotizar Cascos de Bombero", "data-astro-cid-4dypkc5d": true })}    <section class="section productos" id="catalogo" data-astro-cid-4dypkc5d> <div class="container" data-astro-cid-4dypkc5d> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Cascos para Bomberos", "title": "6 Tipos de Cascos de Bombero", "description": "Desde combate estructural hasta operaciones de rescate t\xE9cnico y HAZMAT. Cada casco est\xE1 dise\xF1ado para el entorno operativo m\xE1s exigente.", "data-astro-cid-4dypkc5d": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-4dypkc5d>
Un <strong data-astro-cid-4dypkc5d>casco de bombero</strong> es el primer elemento crítico del EPP: protege contra impactos, penetración, calor radiante y electricidad. En BOMBERO.MX seleccionamos únicamente <strong data-astro-cid-4dypkc5d>cascos certificados NFPA</strong> que superan los requerimientos mínimos de cada norma aplicable.
</p> <p data-astro-cid-4dypkc5d>
Todos nuestros <strong data-astro-cid-4dypkc5d>cascos estructurales NFPA 1971</strong>, forestales, ARFF, de rescate y HAZMAT incluyen fichas técnicas completas y certificados de laboratorio. Son compatibles con el resto del EPP del catálogo: traje, guantes, botas y SCBA.
</p> ` })} <div class="productos__grid" data-astro-cid-4dypkc5d> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...producto, "altSuffix": "Casco de bombero certificado", "data-astro-cid-4dypkc5d": true })}`)} </div> </div> </section>    <section class="section section--dark specs" data-astro-cid-4dypkc5d> <div class="container" data-astro-cid-4dypkc5d> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tecnolog\xEDa y Materiales", "title": "Materiales, Certificaciones y Aplicaciones", "description": "Los mejores cascos de bombero del mundo se fabrican con materiales termopl\xE1sticos de alta resistencia y compuestos avanzados que ofrecen protecci\xF3n superior sin comprometer el confort.", "data-astro-cid-4dypkc5d": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-4dypkc5d>
Los <strong data-astro-cid-4dypkc5d>cascos estructurales NFPA 1971</strong> combinan casco termoplástico resistente a impactos, sistema de suspensión de 4 puntos y visor de policarbonato que protege frente a llamas directas y calor radiante. Los <strong data-astro-cid-4dypkc5d>cascos forestales NFPA 1977</strong> priorizan el peso ultraligero y la ventilación para operaciones prolongadas en campo.
</p> <p data-astro-cid-4dypkc5d>
Todos nuestros <strong data-astro-cid-4dypkc5d>cascos de bombero</strong> incluyen certificados de laboratorio acreditado y fichas técnicas completas listas para <strong data-astro-cid-4dypkc5d>licitaciones gubernamentales</strong>. Proveemos documentación técnica a cuerpos de bomberos municipales, brigadas industriales y protección civil en los <strong data-astro-cid-4dypkc5d>32 estados de México</strong>.
</p> ` })} <div class="specs__grid" data-astro-cid-4dypkc5d> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Materiales de Alta Resistencia", "icon": "shield", "description": "Termopl\xE1stico de alto impacto (ABS, policarbonato) para resistencia superior. Fibra de vidrio y Kevlar\xAE en modelos de rescate t\xE9cnico. Sistemas de suspensi\xF3n ajustables de 4 y 6 puntos. Visores de policarbonato anti-impacto y anti-radiaci\xF3n.", "data-astro-cid-4dypkc5d": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Certificaciones Internacionales", "icon": "certificate", "description": "NFPA 1971 para cascos estructurales, NFPA 1977 para forestales, NFPA 1951 para rescate t\xE9cnico. Normas europeas EN 443 y EN 16473. Documentaci\xF3n completa de laboratorio lista para licitaciones en los 32 estados de M\xE9xico.", "data-astro-cid-4dypkc5d": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Aplicaciones y Operaciones", "icon": "users", "description": "Cuerpos de bomberos municipales y estatales, brigadas industriales y petroqu\xEDmicas, bomberos aeroportuarios ARFF, equipos de rescate t\xE9cnico USAR, protecci\xF3n civil estatal y federal en toda la Rep\xFAblica Mexicana.", "data-astro-cid-4dypkc5d": true })} </div> </div> </section>    <section class="section comparativa" data-astro-cid-4dypkc5d> <div class="container" data-astro-cid-4dypkc5d> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tabla Comparativa", "title": "\xBFQu\xE9 Casco de Bombero Necesitas?", "description": "Compara los 6 tipos de cascos seg\xFAn su norma, aplicaci\xF3n y nivel de protecci\xF3n para elegir el equipo correcto.", "data-astro-cid-4dypkc5d": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-4dypkc5d>
La elección del <strong data-astro-cid-4dypkc5d>casco de bombero</strong> correcto depende del riesgo predominante: el <strong data-astro-cid-4dypkc5d>casco estructural NFPA 1971</strong> es el estándar para incendios de edificios, el <strong data-astro-cid-4dypkc5d>forestal NFPA 1977</strong> para trabajo en campo y el <strong data-astro-cid-4dypkc5d>casco de rescate NFPA 1951</strong> para operaciones técnicas. Los <strong data-astro-cid-4dypkc5d>cascos ARFF</strong> y HAZMAT protegen frente a riesgos especializados.
</p> <p data-astro-cid-4dypkc5d>
En <strong data-astro-cid-4dypkc5d>BOMBERO.MX</strong> asesoramos sin costo a tu corporación para seleccionar el casco adecuado según el tipo de riesgo. Elaboramos especificaciones técnicas y comparativos de productos para <strong data-astro-cid-4dypkc5d>licitaciones públicas</strong> en toda la República Mexicana.
</p> ` })} <div class="comparativa__wrapper" data-astro-cid-4dypkc5d> <table class="comparativa__table" data-astro-cid-4dypkc5d> <thead data-astro-cid-4dypkc5d> <tr data-astro-cid-4dypkc5d> <th data-astro-cid-4dypkc5d>Casco</th> <th data-astro-cid-4dypkc5d>Norma Principal</th> <th data-astro-cid-4dypkc5d>Aplicación</th> <th data-astro-cid-4dypkc5d>Peso</th> <th data-astro-cid-4dypkc5d>Material</th> </tr> </thead> <tbody data-astro-cid-4dypkc5d> <tr data-astro-cid-4dypkc5d> <td data-astro-cid-4dypkc5d><strong data-astro-cid-4dypkc5d>Estructural</strong></td> <td data-astro-cid-4dypkc5d><span class="cert-chip cert-chip--ember" data-astro-cid-4dypkc5d>NFPA 1971</span></td> <td data-astro-cid-4dypkc5d>Incendio estructural, rescate urbano, operaciones interiores</td> <td data-astro-cid-4dypkc5d>700 – 900 g</td> <td data-astro-cid-4dypkc5d>Termoplástico / Compuesto</td> </tr> <tr data-astro-cid-4dypkc5d> <td data-astro-cid-4dypkc5d><strong data-astro-cid-4dypkc5d>Forestal</strong></td> <td data-astro-cid-4dypkc5d><span class="cert-chip cert-chip--fire" data-astro-cid-4dypkc5d>NFPA 1977</span></td> <td data-astro-cid-4dypkc5d>Incendio forestal, interface, quemas controladas</td> <td data-astro-cid-4dypkc5d>< 450 g</td> <td data-astro-cid-4dypkc5d>Termoplástico ligero</td> </tr> <tr data-astro-cid-4dypkc5d> <td data-astro-cid-4dypkc5d><strong data-astro-cid-4dypkc5d>ARFF Aeroportuario</strong></td> <td data-astro-cid-4dypkc5d><span class="cert-chip cert-chip--ember" data-astro-cid-4dypkc5d>NFPA 1971 / EN 443</span></td> <td data-astro-cid-4dypkc5d>Emergencias aeronáuticas, rescate en pistas</td> <td data-astro-cid-4dypkc5d>800 – 1,000 g</td> <td data-astro-cid-4dypkc5d>Termoplástico + visor anti-radiación</td> </tr> <tr data-astro-cid-4dypkc5d> <td data-astro-cid-4dypkc5d><strong data-astro-cid-4dypkc5d>Rescate Técnico</strong></td> <td data-astro-cid-4dypkc5d><span class="cert-chip cert-chip--smoke" data-astro-cid-4dypkc5d>NFPA 1951</span></td> <td data-astro-cid-4dypkc5d>Rescate técnico, USAR, espacios confinados</td> <td data-astro-cid-4dypkc5d>600 – 800 g</td> <td data-astro-cid-4dypkc5d>Compuesto reforzado</td> </tr> <tr data-astro-cid-4dypkc5d> <td data-astro-cid-4dypkc5d><strong data-astro-cid-4dypkc5d>HAZMAT</strong></td> <td data-astro-cid-4dypkc5d><span class="cert-chip cert-chip--smoke" data-astro-cid-4dypkc5d>NFPA 1991 / 1992</span></td> <td data-astro-cid-4dypkc5d>Materiales peligrosos, derrames químicos, IDLH</td> <td data-astro-cid-4dypkc5d>900 – 1,200 g</td> <td data-astro-cid-4dypkc5d>Polímero resistente a químicos</td> </tr> <tr data-astro-cid-4dypkc5d> <td data-astro-cid-4dypkc5d><strong data-astro-cid-4dypkc5d>Brigada Industrial</strong></td> <td data-astro-cid-4dypkc5d><span class="cert-chip cert-chip--fire" data-astro-cid-4dypkc5d>Multi-norma</span></td> <td data-astro-cid-4dypkc5d>Brigadas industriales, petroquímica, refinerías</td> <td data-astro-cid-4dypkc5d>650 – 850 g</td> <td data-astro-cid-4dypkc5d>Termoplástico dual-uso</td> </tr> </tbody> </table> </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-4dypkc5d": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-4dypkc5d": true })}    <section class="section relacionados" data-astro-cid-4dypkc5d> <div class="container" data-astro-cid-4dypkc5d> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "El casco es el primer elemento del sistema de protecci\xF3n. Equipa a tu personal con el EPP completo.", "data-astro-cid-4dypkc5d": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-4dypkc5d>
Un <strong data-astro-cid-4dypkc5d>sistema de EPP completo</strong> requiere que casco, traje, guantes y botas sean compatibles y cumplan la misma edición de norma NFPA. El <strong data-astro-cid-4dypkc5d>casco estructural NFPA 1971</strong> debe usarse con traje NFPA 1971, guantes estructurales, botas de cuero y <strong data-astro-cid-4dypkc5d>SCBA autónomo</strong> para garantizar protección integral en cada operación.
</p> <p data-astro-cid-4dypkc5d>
En <strong data-astro-cid-4dypkc5d>BOMBERO.MX</strong> equipamos a tu personal con todo el sistema de protección personal de una sola fuente: trajes, guantes, botas y SCBA certificados NFPA, con asesoría técnica sin costo y disponibilidad inmediata para los <strong data-astro-cid-4dypkc5d>32 estados de México</strong>.
</p> ` })} <div class="rel__grid" data-astro-cid-4dypkc5d> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Trajes para Bombero", "icon": "shield", "image": "/images/directorio/traje-bombero-estructural-nfpa-01.avif", "href": "/productos/trajes-para-bomberos", "buttonText": "Trajes para Bombero", "items": [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
    { label: "Traje HAZMAT Nivel A/B", href: "/productos/trajes-para-bomberos/traje-hazmat" },
    { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" }
  ], "data-astro-cid-4dypkc5d": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Guantes para Bombero", "icon": "glove", "image": "/images/directorio/guantes-bombero-resistentes-01.avif", "href": "/productos/guantes-para-bomberos", "buttonText": "Guantes para Bombero", "items": [
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Guantes de Rescate / Extricaci\xF3n", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" }
  ], "data-astro-cid-4dypkc5d": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Botas para Bombero", "icon": "boot", "image": "/images/directorio/botas-bombero-proteccion-01.avif", "href": "/productos/botas-para-bomberos", "buttonText": "Botas para Bombero", "items": [
    { label: "Bota Estructural (Cuero)", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Bota de Caucho (HAZMAT)", href: "/productos/botas-para-bomberos/caucho" },
    { label: "Bota Forestal", href: "/productos/botas-para-bomberos/forestal" }
  ], "data-astro-cid-4dypkc5d": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Equipos SCBA", "icon": "shield", "href": "/productos/scba", "buttonText": "Equipos SCBA", "items": [
    { label: "SCBA 30 / 45 / 60 min", href: "/productos/scba/autonomia" },
    { label: "Cilindros y Botellas", href: "/productos/scba/cilindros" },
    { label: "M\xE1scaras Faciales Completas", href: "/productos/scba/mascaras" },
    { label: "Accesorios SCBA", href: "/productos/scba/accesorios" }
  ], "data-astro-cid-4dypkc5d": true })} </div> </div> </section>    ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-4dypkc5d": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/index.astro";
const $$url = "/productos/cascos-para-bomberos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
