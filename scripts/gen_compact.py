#!/usr/bin/env python3
"""
Compact generator for BOMBERO.MX - 10 categories × 7 subcategories × 4 products.
Uses CategoriaLayout for subcategory pages and ProductoLayout for product pages.
"""
import os

BASE = "/Users/frankoropeza/Desktop/clientes/BOMBERO/src/pages/productos"

IMGS = [
    "/images/base/equipo-completo.avif",
    "/images/base/traje-hazmat.avif",
    "/images/base/casco-estructural.avif",
    "/images/base/traje-estructural.avif",
    "/images/base/guantes-estructural.avif",
    "/images/base/botas-bombero.avif",
    "/images/base/estacion-bomberos.avif",
    "/images/base/camion-bomberos.avif",
    "/images/base/gafas-bombero.avif",
    "/images/base/capucha-bombero.avif",
]

def img(i): return IMGS[abs(i) % len(IMGS)]
def e(s): return str(s).replace('\\','\\\\').replace('`','\\`').replace('${','\\${').replace('"','\\"')

def write_f(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

count = 0

def gen_subcat_page(cat_slug, cat_label, subcat_slug, subcat_label, products, norma, img_off):
    """Generate CategoriaLayout page for a subcategory."""
    global count
    SLUG = f"/productos/{cat_slug}/{subcat_slug}/"
    
    cards = []
    for i, p in enumerate(products):
        cs = ", ".join(f'"{e(c)}"' for c in p[4])
        cards.append(f"""  {{
    nombre: "{e(p[0])}",
    slug: "{SLUG}{p[1]}/",
    badge: "{e(p[2])}",
    badgeColor: "{['smoke','fire','ember','smoke'][i%4]}" as const,
    imagen: "{img(img_off+i)}",
    descripcion: "{e(p[3])}",
    caracteristicas: [{cs}],
    aplicacion: "{e(p[5])}",
  }}""")

    rows = []
    for p in products:
        rows.append(f'  {{ cells: [{{text:"{e(p[0][:35])}"}}, {{text:"{e(p[2])}"}}, {{text:"{e(norma)}", chip:"ember" as const}}, {{text:"{e(p[5].split("·")[0].strip()[:20])}"}}] }}')

    content = f"""---
import CategoriaLayout from "@layouts/CategoriaLayout.astro";

const SLUG = "{SLUG}";
const productoCards = [
{chr(10).join(cards)}
];
const specsCards = [
  {{ title: "Especificaciones Técnicas", icon: "shield", description: "Todos los modelos de {e(subcat_label)} cumplen o superan los requisitos de la norma {e(norma)}. Cada equipo incluye ficha técnica y certificado de laboratorio acreditado ISO/IEC 17025." }},
  {{ title: "Certificaciones Internacionales", icon: "certificate", description: "Certificados {e(norma)} vigente. Documentación en español para licitaciones gubernamentales en los 32 estados de México. Asesoría técnica sin costo." }},
  {{ title: "Aplicaciones Operativas", icon: "users", description: "Equipos probados en campo por cuerpos de bomberos y brigadas industriales profesionales. Compatibles con el sistema EPP certificado de BOMBERO.MX." }},
];
const tablaHeaders = ["Modelo", "Variante", "Certificación", "Uso Principal"];
const tablaRows = [
{chr(10).join(rows)}
];
const relacionadoCards = [
  {{ title: "Trajes de Bombero", icon: "shield", image: "/images/base/traje-estructural.avif", href: "/productos/trajes-para-bomberos/", buttonText: "Ver Trajes", items: [{{label:"Traje Estructural NFPA 1971",href:"/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/"}}] }},
  {{ title: "Cascos para Bombero", icon: "helmet", image: "/images/base/casco-estructural.avif", href: "/productos/cascos-para-bomberos/", buttonText: "Ver Cascos", items: [{{label:"Casco Estructural NFPA 1971",href:"/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/"}}] }},
  {{ title: "SCBA Autónomo", icon: "shield", image: "/images/base/equipo-completo.avif", href: "/productos/scba/", buttonText: "Ver SCBA", items: [{{label:"SCBA NFPA 1981",href:"/productos/scba/circuito-abierto-nfpa-1981/"}}] }},
  {{ title: "Guantes de Bombero", icon: "glove", image: "/images/base/guantes-estructural.avif", href: "/productos/guantes-para-bomberos/", buttonText: "Ver Guantes", items: [{{label:"Guantes Estructurales NFPA",href:"/productos/guantes-para-bomberos/estructurales/"}}] }},
];
const faqs = [
  {{ q: "¿Qué certificación requiere el {e(subcat_label)}?", a: "El <strong>{e(subcat_label)}</strong> debe cumplir con la norma <strong>{e(norma)}</strong> vigente. En BOMBERO.MX cada equipo incluye certificado de laboratorio acreditado ISO/IEC 17025, ficha técnica completa y documentación para licitaciones en los 32 estados de México." }},
  {{ q: "¿Realizan envíos a toda la República?", a: "Sí. <strong>BOMBERO.MX</strong> realiza envíos a los <strong>32 estados de México</strong>. Envío inmediato en stock disponible. Para pedidos especiales o licitaciones, consulta tiempos de entrega con nuestro equipo técnico." }},
  {{ q: "¿Incluyen documentación para licitaciones?", a: "Cada equipo incluye <strong>ficha técnica</strong>, <strong>certificado de laboratorio</strong> y <strong>manual de uso</strong>. Elaboramos especificaciones técnicas para licitaciones gubernamentales sin costo adicional." }},
];
---

<CategoriaLayout
  title="{e(subcat_label)} | {e(cat_label)} | BOMBERO.MX"
  description="{e(subcat_label)} certificado {e(norma)} para bomberos y protección civil. Distribución a los 32 estados de México. Cotiza ahora en BOMBERO.MX."
  keywords={{["{e(subcat_label)} México", "{e(subcat_label)} certificado", "{e(cat_label)} {e(subcat_label)}", "comprar {e(subcat_label)} México", "{e(subcat_label)} {e(norma)}"]}}
  type="product"
  canonical={{SLUG}}
  image="{img(img_off)}"
  breadcrumb={{[
    {{ label: "Inicio", href: "/" }},
    {{ label: "Productos", href: "/productos/" }},
    {{ label: "{e(cat_label)}", href: "/productos/{cat_slug}/" }},
    {{ label: "{e(subcat_label)}" }},
  ]}}
  heroBadge="{e(subcat_label)} · {e(norma)}"
  heroTitle="{e(subcat_label)}"
  heroTitleHighlight="Certificado {e(norma)}"
  heroSubtitle="{e(subcat_label)} certificado para cuerpos de bomberos, brigadas industriales y protección civil. Distribución a los 32 estados de México con documentación completa para licitaciones."
  heroSeoBlocks={{[
    {{ title: "Distribuidores de {e(subcat_label)} en México", text: "En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de <strong>{e(subcat_label)}</strong> certificado para los 32 estados de México. Documentación técnica completa para licitaciones gubernamentales." }},
    {{ title: "Certificación {e(norma)} con Documentación", text: "Cada equipo incluye <strong>ficha técnica y certificado de laboratorio</strong> acreditado ISO/IEC 17025 — indispensable para <strong>licitaciones gubernamentales</strong> en México." }},
  ]}}
  ctaBarQuote="Cotizar {e(subcat_label)}"
  productosLabel="{e(subcat_label)}"
  productosTitle="Modelos de {e(subcat_label)}"
  productosDesc="Selecciona el modelo adecuado para tu operación. Todos certificados {e(norma)} vigente."
  productosContent={{`<p>Los <strong>{e(subcat_label)}</strong> de BOMBERO.MX están certificados con las normas más exigentes del mercado. Documentación completa para <strong>licitaciones en los 32 estados de México</strong>.</p>`}}
  productoCards={{productoCards}}
  specsTitle="Certificaciones y Especificaciones"
  specsDesc="Equipos evaluados en laboratorio acreditado con normas internacionales vigentes."
  specsContent={{`<p>En <strong>BOMBERO.MX</strong> elaboramos especificaciones técnicas para <strong>licitaciones públicas</strong> sin costo adicional. Contacta a nuestro equipo técnico.</p>`}}
  specsCards={{specsCards}}
  comparativaTitle="Comparativa de {e(subcat_label)}"
  comparativaDesc="Compara modelos para seleccionar el equipo correcto según tu operación."
  comparativaContent={{`<p>Consulta a nuestro equipo técnico para una <strong>recomendación personalizada</strong> según el entorno operativo de tu corporación.</p>`}}
  tablaHeaders={{tablaHeaders}}
  tablaRows={{tablaRows}}
  relacionadosTitle="Catálogo Relacionado"
  relacionadosDesc="Equipos complementarios certificados para completar tu sistema de protección."
  relacionadosContent={{`<p>Todos los equipos de <strong>BOMBERO.MX</strong> están certificados y documentados para <strong>licitaciones en los 32 estados de México</strong>.</p>`}}
  relacionadoCards={{relacionadoCards}}
  faqs={{faqs}}
/>
"""
    path = f"{BASE}/{cat_slug}/{subcat_slug}/index.astro"
    write_f(path, content)
    count += 1


def gen_product_page(cat_slug, cat_label, subcat_slug, subcat_label, prod_name, prod_slug, badge, desc, chars, applic, norma, img_idx):
    """Generate ProductoLayout page for a product."""
    global count
    SLUG = f"/productos/{cat_slug}/{subcat_slug}/{prod_slug}/"
    p_img = img(img_idx)
    feats = ", ".join(f'"{e(c)}"' for c in chars)
    tags = ", ".join(f'"{e(t.strip())}"' for t in applic.split("·")[:4])
    
    # Build specs from characteristics
    specs = []
    for c in chars[:5]:
        parts = c.split(":")
        if len(parts) >= 2:
            specs.append(f'  {{ categoria: "Especificación", label: "{e(parts[0].strip())}", valor: "{e(parts[1].strip())}" }}')
        else:
            specs.append(f'  {{ categoria: "Especificación", label: "Característica", valor: "{e(c)}" }}')
    specs.append(f'  {{ categoria: "Certificación", label: "Norma principal", valor: "{e(norma)}" }}')
    specs.append(f'  {{ categoria: "Certificación", label: "Documentación", valor: "Ficha técnica + Certificado laboratorio" }}')

    content = f"""---
import ProductoLayout from "@layouts/ProductoLayout.astro";
const IMAGE = "{p_img}";
---

<ProductoLayout
  title="{e(prod_name)} | {e(subcat_label)} | BOMBERO.MX"
  description="{e(desc[:155])}"
  keywords={{["{e(prod_name.lower())}", "{e(subcat_label.lower())} México", "{e(cat_label.lower())} certificado"]}}
  canonical="{SLUG}"
  image={{IMAGE}}
  breadcrumb={{[
    {{ label: "Inicio", href: "/" }},
    {{ label: "Productos", href: "/productos/" }},
    {{ label: "{e(cat_label)}", href: "/productos/{cat_slug}/" }},
    {{ label: "{e(subcat_label)}", href: "/productos/{cat_slug}/{subcat_slug}/" }},
    {{ label: "{e(prod_name)}" }},
  ]}}
  heroBadge="{e(subcat_label)} · {e(norma)}"
  heroTitle="{e(prod_name.split('—')[0].strip())}"
  heroTitleHighlight="{e(badge)}"
  heroSubtitle="{e(desc)}"
  heroSeoBlocks={{[
    {{ title: "{e(prod_name)} — Distribuidor México", text: "En <strong>BOMBERO.MX</strong> distribuimos <strong>{e(prod_name)}</strong> certificado {e(norma)} para los 32 estados de México. Documentación para licitaciones incluida." }},
    {{ title: "Certificación {e(norma)} con Ficha Técnica", text: "Cada unidad incluye <strong>ficha técnica y certificado de laboratorio</strong> acreditado ISO/IEC 17025 — indispensable para <strong>licitaciones gubernamentales</strong>." }},
  ]}}
  ctaBarQuote="Cotizar {e(prod_name.split('—')[0].strip())}"
  productoCategoria="{e(subcat_label)}"
  productoBadges={{[{{ modifier: "nfpa", text: "{e(norma)}" }}, {{ modifier: "tpp", text: "{e(badge)}" }}]}}
  productoMasVendido={{false}}
  productoTitle="{e(prod_name.split('—')[0].strip())}"
  productoTitleSub="{e(badge)}"
  productoDesc="{e(desc)}"
  productoFeatures={{[{feats}]}}
  productoAppTags={{[{tags}]}}
  gallery={{[
    {{ src: IMAGE, alt: "{e(prod_name)} certificado {e(norma)} BOMBERO.MX" }},
    {{ src: "/images/base/estacion-bomberos.avif", alt: "Equipo en uso — BOMBERO.MX" }},
    {{ src: "/images/base/equipo-completo.avif", alt: "Sistema de protección completo — BOMBERO.MX" }},
  ]}}
  capasEyebrow="Componentes del Equipo"
  capasTitle="Construcción y Materiales"
  capasDesc="Cada componente ha sido probado y certificado según las normas internacionales aplicables."
  capas={{[
    {{ num: "01", titulo: "Componente Principal", descripcion: "{e(desc[:120])}", specs: [{{label:"Certificación",valor:"{e(norma)}"}},{{label:"Tipo",valor:"{e(badge)}"}},{{label:"Calidad",valor:"Industrial certificada"}},{{label:"Origen",valor:"Fabricante autorizado"}}], color: "ember" as const }},
    {{ num: "02", titulo: "Sistema de Protección", descripcion: "Diseño optimizado para el entorno operativo específico. Materiales de grado profesional certificados en laboratorio.", specs: [{{label:"Material",valor:"Grado profesional"}},{{label:"Resistencia",valor:"Según norma"}},{{label:"Durabilidad",valor:"Servicio intensivo"}},{{label:"Mantenimiento",valor:"Según fabricante"}}], color: "smoke" as const }},
    {{ num: "03", titulo: "Certificación y Documentación", descripcion: "Cada equipo incluye ficha técnica completa, certificado de laboratorio acreditado y manual de uso en español.", specs: [{{label:"Norma",valor:"{e(norma)}"}},{{label:"Laboratorio",valor:"ISO/IEC 17025"}},{{label:"Idioma",valor:"Español"}},{{label:"Licitaciones",valor:"32 estados México"}}], color: "fire" as const }},
  ]}}
  especificaciones={{[
{chr(10).join(specs)}
  ]}}
  catClass={{{{ "Especificación": "proteccion", "Certificación": "certificacion" }}}}
  aplicacionesTitle="Aplicaciones del {e(prod_name.split('—')[0].strip())}"
  aplicacionesContent="<p>Equipo diseñado para entornos operativos donde el nivel de riesgo requiere protección certificada. La selección correcta del equipo salva vidas.</p>"
  aplicaciones={{[
    {{ titulo: "{e(applic.split('·')[0].strip())}", desc: "Aplicación principal del equipo en operaciones profesionales de emergencia y rescate." }},
    {{ titulo: "{e(applic.split('·')[1].strip() if len(applic.split('·'))>1 else 'Operaciones Generales')}", desc: "Uso complementario en escenarios operativos que requieren este nivel de protección certificada." }},
    {{ titulo: "Brigadas Industriales", desc: "Protección certificada para brigadas industriales y de protección civil con requerimientos de norma." }},
    {{ titulo: "Licitaciones Gubernamentales", desc: "Documentación completa para especificaciones técnicas en licitaciones públicas de los 32 estados de México." }},
  ]}}
  certsTitle="Certificaciones del {e(prod_name.split('—')[0].strip())}"
  certsDesc="Cumplimiento con normas nacionales e internacionales. <strong>Documentación completa</strong> para licitaciones."
  certItems={{[
    {{ code: "{e(norma)}", desc: "Norma principal de certificación" }},
    {{ code: "ISO/IEC 17025", desc: "Laboratorio acreditado para pruebas" }},
    {{ code: "ISO 9001", desc: "Sistema de gestión de calidad fabricante" }},
    {{ code: "NFPA", desc: "National Fire Protection Association" }},
    {{ code: "CE / UL", desc: "Marcado de conformidad aplicable" }},
  ]}}
  specsRapidas={{[
    {{ label: "Modelo", valor: "{e(badge)}" }},
    {{ label: "Norma", valor: "{e(norma)}" }},
    {{ label: "Tipo", valor: "{e(subcat_label)}" }},
    {{ label: "Aplicación", valor: "{e(applic.split('·')[0].strip()[:20])}" }},
    {{ label: "Documentación", valor: "Incluida" }},
    {{ label: "Envío", valor: "32 estados MX" }},
  ]}}
  otrosModelos={{[
    {{ label: "Ver todos los modelos", href: "/productos/{cat_slug}/{subcat_slug}/" }},
    {{ label: "Ver {e(cat_label)}", href: "/productos/{cat_slug}/" }},
    {{ label: "Catálogo completo", href: "/productos/" }},
  ]}}
  otrosModelosSeeAllHref="/productos/{cat_slug}/{subcat_slug}/"
  epp={{[
    {{ label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/", tag: "Traje" }},
    {{ label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/", tag: "Casco" }},
    {{ label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales/", tag: "Guantes" }},
    {{ label: "Botas Estructurales", href: "/productos/botas-para-bomberos/estructural/", tag: "Pies" }},
    {{ label: "SCBA NFPA 1981", href: "/productos/scba/circuito-abierto-nfpa-1981/", tag: "Respiración" }},
  ]}}
  articulos={{[
    {{ label: "Catálogo {e(cat_label)}", href: "/productos/{cat_slug}/", tag: "Catálogo" }},
    {{ label: "{e(subcat_label)}", href: "/productos/{cat_slug}/{subcat_slug}/", tag: "Producto" }},
    {{ label: "EPP Completo para Bomberos", href: "/productos/", tag: "Guía" }},
  ]}}
  directorioLinks={{[
    {{ label: "Bomberos CDMX", href: "/directorio/ciudad-de-mexico/" }},
    {{ label: "Bomberos Guadalajara", href: "/directorio/jalisco/" }},
    {{ label: "Bomberos Monterrey", href: "/directorio/nuevo-leon/" }},
    {{ label: "Directorio Nacional", href: "/directorio/" }},
  ]}}
  faqTitle="Preguntas — {e(prod_name)}"
  faqDescription="Dudas técnicas sobre certificaciones, uso y mantenimiento."
  faqs={{[
    {{ q: "¿Qué certificación tiene este equipo?", a: "Este equipo cumple con la norma <strong>{e(norma)}</strong> vigente. Incluye <strong>certificado de laboratorio</strong> acreditado ISO/IEC 17025 y ficha técnica completa." }},
    {{ q: "¿Incluye documentación para licitaciones?", a: "Sí. Cada unidad incluye <strong>ficha técnica</strong>, <strong>certificado de laboratorio</strong> y <strong>manual de uso</strong> en español — documentación para licitaciones en los 32 estados de México." }},
    {{ q: "¿Realizan envíos a toda la República?", a: "<strong>BOMBERO.MX</strong> realiza envíos a los <strong>32 estados de México</strong>. Stock disponible para envío inmediato. Cotización especial para cuerpos de bomberos y licitaciones." }},
  ]}}
  relacionados={{[
    {{ title: "Trajes de Bombero", badge: "NFPA 1971", description: "Trajes estructurales y forestales certificados NFPA.", href: "/productos/trajes-para-bomberos/", buttonText: "Ver Trajes", image: "/images/base/traje-estructural.avif" }},
    {{ title: "Cascos Certificados", badge: "NFPA 1971", description: "Cascos estructurales y de rescate certificados NFPA.", href: "/productos/cascos-para-bomberos/", buttonText: "Ver Cascos", image: "/images/base/casco-estructural.avif" }},
    {{ title: "Equipo Completo", badge: "EPP", description: "Sistema EPP completo certificado para bomberos profesionales.", href: "/productos/", buttonText: "Ver Catálogo", image: "/images/base/equipo-completo.avif" }},
  ]}}
/>
"""
    path = f"{BASE}/{cat_slug}/{subcat_slug}/{prod_slug}/index.astro"
    write_f(path, content)
    count += 1


# ═══════════════════════════════════════════════════════════════════════════
# ALL 10 CATEGORIES DATA
# Format per product: (nombre, slug, badge, descripcion, [5 chars], aplicacion)
# ═══════════════════════════════════════════════════════════════════════════

ALL_CATS = {
    # ── 1. EXTINTORES ──────────────────────────────────────────────────────
    "extintores": ("Extintores", [
        ("co2", "Extintores CO₂", "NOM-154-SCFI / UL 154", [
            ("Extintor CO₂ 2 kg — Escritorios", "extintor-co2-2kg", "2 kg", "Extintor de CO₂ 2 kg para equipos eléctricos y laboratorios. Sin residuo ni daño al equipo. Clase B y C. NOM-154-SCFI.",
             ["Capacidad: 2 kg CO₂ a 55–60 bar","Clase de fuego: B y C certificado","Sin residuo — seguro en electrónica","Alcance efectivo: 1.5–2.5 m","NOM-154-SCFI-2005 / UL 154"], "Cómputo · Servidores · Laboratorios"),
            ("Extintor CO₂ 5 kg — Sala Servidores", "extintor-co2-5kg", "5 kg", "Extintor de CO₂ 5 kg para salas de servidores y telecomunicaciones. Mayor tiempo de descarga. Manguera 90 cm. NOM-154.",
             ["Capacidad: 5 kg CO₂ a 55–60 bar","Manguera flexible 90 cm con corneta","Manómetro indicador clase 2.5","Alcance efectivo: 2.0–3.5 m","NOM-154-SCFI-2005 / UL 154"], "Servidores · Telecomunicaciones · Electrónica"),
            ("Extintor CO₂ 10 kg — Rodante", "extintor-co2-10kg", "10 kg", "Extintor rodante de CO₂ 10 kg para subestaciones eléctricas y centros de datos. Manguera 1.5 m antiestática. NOM-154.",
             ["Capacidad: 10 kg CO₂ sobre carro acero","Manguera 1.5 m con corneta antiestática","Ruedas de goma maciza 200 mm","Alcance efectivo: 3.0–4.5 m","NOM-154-SCFI-2005 / UL 154"], "Subestaciones · Control industrial · Data center"),
            ("Extintor CO₂ 25 kg — Gran Capacidad", "extintor-co2-25kg", "25 kg", "Extintor rodante CO₂ 25 kg para data centers de escala masiva y subestaciones de alta tensión. Manguera 3 m. NOM-154.",
             ["Capacidad: 25 kg CO₂ en carro reforzado","Manguera armada 3 m con lanza corneta","Ruedas neumáticas 250 mm todo terreno","Alcance efectivo: 4.0–6.0 m","NOM-154-SCFI-2005 / UL 154"], "Alta tensión · Data center · Generadores"),
        ]),
        ("polvo-abc", "Extintores Polvo ABC", "NOM-154-SCFI / UL 299", [
            ("Extintor Polvo ABC 1 kg — Automotriz", "extintor-abc-1kg", "1 kg", "Extintor compacto polvo ABC 1 kg para vehículos y motocicletas. Cabe en guantera. Clase A, B y C certificado.",
             ["Polvo fosfato monoamónico ABC 90%","Presión N₂: 14–18 bar","Dimensiones compactas: 27 × 9 cm","Alcance efectivo: 1.0–2.0 m","NOM-154-SCFI-2005 / UL 299"], "Vehículos · Motocicletas · Embarcaciones"),
            ("Extintor Polvo ABC 4.5 kg — Oficina", "extintor-abc-4kg", "4.5 kg", "Extintor polvo ABC 4.5 kg para oficinas y locales comerciales. El más recomendado por NFPA 10 para riesgo ordinario.",
             ["Polvo fosfato monoamónico ABC 4.5 kg","Manguera flexible 60 cm con boquilla","Manómetro indicador de presión","Bracket de pared y señalética NOM","NOM-154-SCFI-2005 / UL 299"], "Oficinas · Comercio · Industria ligera"),
            ("Extintor Polvo ABC 9 kg — Industrial", "extintor-abc-9kg", "9 kg", "Extintor polvo ABC 9 kg para plantas industriales y hangares. 20 s de descarga y alcance 6 m. Clase A, B y C.",
             ["Capacidad: 9 kg polvo ABC industrial","Manguera armada 80 cm con boquilla","Alcance efectivo: 4.0–6.0 m","Soporte mural galvanizado incluido","NOM-154-SCFI-2005 / UL 299"], "Industria · Hangares · Bodegas grandes"),
            ("Extintor Polvo ABC 50 kg — Rodante", "extintor-abc-50kg", "50 kg", "Extintor rodante polvo ABC 50 kg para petroquímica y aeropuertos. Manguera 5 m con lanza. 60 s de descarga.",
             ["Capacidad: 50 kg polvo ABC rodante","Manguera armada 5 m con lanza dispersora","Ruedas neumáticas 300 mm todo terreno","Alcance efectivo: 6.0–9.0 m","NOM-154-SCFI-2005"], "Petroquímica · Aeropuertos · Gran industria"),
        ]),
        ("espuma-afff", "Extintores Espuma AFFF", "NOM-154-SCFI / UL 162", [
            ("Extintor Espuma AFFF 9 L — Portátil", "espuma-afff-9l", "9 L", "Extintor de espuma AFFF 9 L para fuegos de hidrocarburos y líquidos inflamables. Clase A y B. Cobertura 1 m².",
             ["AFFF al 3% o 6% concentración","Capacidad: 9 L de solución lista","Cobertura blanket: ~1 m²","Alcance efectivo: 3.0–5.0 m","NOM-154-SCFI-2005 / UL 162"], "Hidrocarburos · Gasolina · Diesel"),
            ("Extintor Espuma AFFF 50 L — Rodante", "espuma-afff-50l", "50 L", "Extintor rodante espuma AFFF 50 L para depósitos de combustible y procesos. Manguera 5 m con lanza. NOM-154.",
             ["AFFF 50 L en carro de acero robusto","Manguera 5 m con lanza ejectora","Cobertura blanket: ~8 m²","Caudal: ~15 L/min descarga","NOM-154-SCFI-2005 / NFPA 11"], "Depósitos combustible · Proceso · Aviación"),
            ("Extintor Espuma AFFF 100 L — Estación", "espuma-afff-100l", "100 L", "Extintor espuma AFFF 100 L para estaciones de bomberos y petroquímica. Manguera 8 m. Mayor capacidad.",
             ["AFFF 100 L en carro industrial","Manguera 8 m con monitor portátil","Cobertura blanket: ~16 m²","Alcance efectivo: 6.0–10.0 m","NOM-154-SCFI-2005 / NFPA 11"], "Refinerías · Estaciones bomberos · Plantas"),
            ("Extintor Espuma AFFF-AR — Alcoholes", "espuma-afff-ar", "AR", "Extintor espuma AFFF-AR resistente a alcoholes para cetonas, éteres y disolventes polares. Concentrado 3×3% o 6×6%.",
             ["AFFF-AR resistente a alcoholes","Concentración: 3×3% o 6×6%","Compatible con etanol y metanol","Clase de fuego A y B certificado","NOM-154-SCFI-2005 / UL 162"], "Alcoholes · Cetonas · Disolventes polares"),
        ]),
        ("agua-presurizada", "Extintores Agua Presurizada", "NOM-154-SCFI / UL 8", [
            ("Extintor Agua Presurizada 9 L — Clase A", "agua-presurizada-9l", "9 L", "Extintor de agua presurizada 9 L para sólidos combustibles clase A. Máxima efectividad en madera, papel y tela.",
             ["Agua potable presurizada 9 L","Presión: 12–14 bar con aire/N₂","Clase A certificado exclusivo","Alcance efectivo: 6.0–8.0 m","NOM-154-SCFI-2005 / UL 8"], "Papel · Madera · Textiles · Archivos"),
            ("Extintor Agua Neblina 9 L — Eléctrico", "agua-neblina-9l", "Neblina", "Extintor de agua nebulizada para clase A y equipos eléctricos hasta 35 kV. La niebla no conduce electricidad.",
             ["Agua desmineralizada nebulizada 9 L","Clase A + seguro en eléctrico 35 kV","Boquilla de micronebulización","Alcance efectivo: 3.0–5.0 m","NOM-154-SCFI-2005 / LPCB"], "Clase A · Eléctrico hasta 35 kV · Limpio"),
            ("Extintor Agua 15 L — Archivo", "agua-presurizada-15l", "15 L", "Extintor de agua presurizada 15 L de mayor capacidad para bibliotecas, archivos y bodegas de papel.",
             ["Agua 15 L con N₂ presurizado","Mayor tiempo de descarga: ~55 s","Boquilla regulable chorro/niebla","Alcance efectivo: 6.0–8.0 m","NOM-154-SCFI-2005"], "Archivos · Bibliotecas · Bodegas papel"),
            ("Extintor Agua + Aditivo 9 L — Penetración", "agua-aditivo-9l", "Aditivo", "Extintor de agua con aditivo humectante 1% para mayor penetración en sólidos. Clase A mejorado.",
             ["Agua + aditivo humectante 1%","Mayor penetración en sólidos profundos","Clase A mejorado certificado","Alcance efectivo: 5.0–7.0 m","NOM-154-SCFI-2005"], "Sólidos profundos · Incendio Clase A"),
        ]),
        ("halon-sustitutos", "Agentes Limpios FM-200 / Novec", "NFPA 2001 / UL 2166", [
            ("Extintor FM-200 2 kg — Electrónica", "fm200-2kg", "2 kg", "Extintor FM-200 (HFC-227ea) 2 kg para equipos electrónicos de valor. Sin residuo, sin daño. NFPA 2001.",
             ["FM-200 (HFC-227ea) 2 kg","Sin residuo — cero daño al equipo","Clase de fuego B y C certificada","Concentración extinción: 7.0% v/v","NFPA 2001 / UL 2166"], "Electrónica de valor · Servidores"),
            ("Extintor FM-200 7 kg — Sala Servidores", "fm200-7kg", "7 kg", "Extintor FM-200 7 kg para salas de servidores grandes y archivos de valor. Mayor cobertura volumétrica. NFPA 2001.",
             ["FM-200 7 kg alta capacidad","Tiempo descarga: < 10 s NFPA 2001","Sin residuo ni corrosión","Cobertura volumétrica ampliada","NFPA 2001 / UL 2166 / ISO 14520"], "Data centers · Archivos · Museos"),
            ("Extintor Novec 1230 — Ecológico", "novec-1230-3kg", "3 kg", "Extintor Novec 1230 (FK-5-1-12) 3 kg. GWP=1, ODP=0. El agente más ecológico del mercado. NFPA 2001.",
             ["Novec 1230 (FK-5-1-12) 3 kg","GWP = 1 · ODP = 0 ecológico","Sin residuo — seguro para arte","Concentración: 4.2–5.9% v/v","NFPA 2001 / EPA SNAP approved"], "Museos · Arte · Archivos históricos"),
            ("Extintor Agente Limpio 6 kg — Universal", "agente-limpio-6kg", "6 kg", "Extintor de agente limpio HFC 6 kg para protección universal de equipos sensibles. Compatible con detectores.",
             ["Agente HFC 6 kg alta pureza","Compatible con sistema de detección","Sin residuo activo post-descarga","Concentración certificada NFPA 2001","NFPA 2001 / UL 2166"], "Protección especial · Sistemas mixtos"),
        ]),
        ("modular-industrial", "Sistemas Modulares Industriales", "NFPA 17 / FM Approved", [
            ("Sistema Modular FM-200 50 kg — Sala Técnica", "modular-fm200-50kg", "FM-200", "Sistema modular FM-200 50 kg para salas técnicas y data centers hasta 400 m³. Activación automática 24 VDC.",
             ["FM-200 50 kg en módulo fijo","Activación automática 24 VDC","Cobertura volumétrica hasta 400 m³","Descarga total < 10 s NFPA 2001","NFPA 2001 / FM Approved"], "Salas técnicas · Control · Data center"),
            ("Sistema Modular Polvo 100 kg — Pintura", "modular-polvo-100kg", "Polvo 100", "Sistema modular polvo seco 100 kg para cabinas de pintura y hangares. Activación neumática o eléctrica.",
             ["Polvo BC/ABC 100 kg modular fijo","Activación neumática 24 bar o eléctrica","6 distribuidores de descarga","Cobertura de área: ~300 m²","NFPA 17 / FM Approved"], "Cabinas pintura · Hangares · Industria"),
            ("Sistema Modular Espuma 200 L — Aviación", "modular-espuma-200l", "AFFF 200", "Sistema modular espuma AFFF 200 L para hangares de aviación. Descarga < 30 s. NFPA 11 e ICAO.",
             ["AFFF 200 L presurizado modular","Descarga total < 30 s estándar ICAO","Rociadores de alta expansión","Cobertura: hasta 500 m²","NFPA 11 / ICAO / FAA"], "Hangares aviación · Plataformas · ARFF"),
            ("Sistema Aerosol Condensado — Compacto", "sistema-aerosol", "Aerosol", "Sistema de aerosol condensado para espacios confinados. Sin presión almacenada. Activación térmica o eléctrica.",
             ["Generador aerosol condensado K","Sin presión almacenada — seguro","Instalación espacio confinado","Activación térmica o eléctrica 24V","NFPA 2010 / UL 2775"], "Espacios confinados · Cofres · Turbinas"),
        ]),
        ("carros-extincion", "Carros de Extinción Rodantes", "NOM-154-SCFI / NFPA 10", [
            ("Carro de Extinción 25 kg — Polvo ABC", "carro-25kg", "25 kg", "Carro de extinción polvo ABC 25 kg para industria y estaciones de servicio. Manguera 5 m. Carro acero tubular.",
             ["Polvo ABC 25 kg en carro acero","Manguera armada 5 m con lanza","Ruedas neumáticas 200 mm","Carro acero tubular galvanizado","NOM-154-SCFI-2005 / UL 299"], "Industria · Estaciones servicio"),
            ("Carro de Extinción 50 kg — Industrial", "carro-50kg", "50 kg", "Carro de extinción polvo ABC 50 kg para plantas industriales y bodegas. 60 s de descarga continua.",
             ["Polvo ABC 50 kg carro industrial","60 s de descarga continua","Manguera 5 m con lanza dispersora","Ruedas neumáticas 250 mm","NOM-154-SCFI-2005"], "Plantas industriales · Bodegas · Proceso"),
            ("Carro de Extinción 100 kg — Petroquímica", "carro-100kg", "100 kg", "Carro de extinción 100 kg polvo BC/ABC para refinerías. Mayor capacidad portátil. Monitor portátil de 8 m.",
             ["Polvo ABC/BC 100 kg rodante","2+ minutos descarga continua","Manguera 8 m con monitor portátil","Ruedas neumáticas 300 mm","NOM-154-SCFI-2005 / NFPA 10"], "Refinerías · Proceso · Alto riesgo"),
            ("Carro de Extinción 150 kg — Aeropuertos", "carro-150kg", "150 kg", "Carro de extinción 150 kg para áreas de combustible en aeropuertos. Manguera 10 m. ICAO compatible.",
             ["150 kg polvo o AFFF rodante","Manguera 10 m con lanza jumbo","Carro acero reforzado industrial","Compatible ICAO / NFPA 10","NOM-154-SCFI-2005"], "Aeropuertos · Combustible · ARFF"),
        ]),
    ]),
    # ── 2. SCBA ────────────────────────────────────────────────────────────
    "scba": ("SCBA — Respiración Autónoma", [
        ("circuito-abierto-nfpa-1981", "SCBA Circuito Abierto NFPA 1981", "NFPA 1981 / EN 137", [
            ("SCBA 30 min — Circuito Abierto", "scba-30min", "30 min", "SCBA circuito abierto 30 min a 40 L/min. Cilindro carbono 6.0 L 300 bar. Máscara panorámica incluida. NFPA 1981.",
             ["Cilindro carbono 6.0 L 300 bar","Duración: 30 min @ 40 L/min","Máscara panorámica NFPA 1981","Arnés ajustable ergonómico multitalla","NFPA 1981 / EN 137 certificado"], "Incendio estructural · Rescate · 1ª intervención"),
            ("SCBA 45 min — Estándar Bombero", "scba-45min", "45 min", "SCBA estándar 45 min para incendio estructural. Cilindro carbono 6.8 L 300 bar. HUD display integrado. NFPA 1981.",
             ["Cilindro carbono 6.8 L 300 bar","Duración: 45 min @ 40 L/min","HUD display presión integrado","PASS automático integrado","NFPA 1981 / EN 137"], "Estructural · HAZMAT · Rescate urbano"),
            ("SCBA 60 min — Larga Duración", "scba-60min", "60 min", "SCBA 60 min para operaciones largas en IDLH extendido. Cilindro 9.0 L 300 bar. Alarma PASS integrada. NFPA 1981.",
             ["Cilindro carbono 9.0 L 300 bar","Duración: 60 min @ 40 L/min","Sistema alarma PASS integrado","RIC-PAC compatible de fábrica","NFPA 1981 / EN 137 / EN 402"], "Operaciones largas · IDLH · HAZMAT A"),
            ("SCBA 45 min — Máscara Panorámica 220°", "scba-panoramico", "220°", "SCBA 45 min con máscara panorámica 220° de campo visual. Compatible con comunicación TETRA digital.",
             ["Máscara panorámica 220° visión","Cilindro 6.8 L 300 bar carbono","Compatible comunicación TETRA","Válvula demanda certificada","NFPA 1981 / EN 136"], "Incendio · Búsqueda y rescate · CBRN"),
        ]),
        ("circuito-cerrado-minero", "SCBA Circuito Cerrado Minero", "EN 145 / MSHA", [
            ("Circuito Cerrado 60 min — Confinado", "cc-60min", "60 min", "Aparato circuito cerrado 60 min para espacios confinados industriales. Regeneración química CO₂. EN 145.",
             ["Autonomía: 60 min circuito cerrado","Canister cal sodada regenerativa","Sin emisión de gas al exterior","Peso operación: ~8.5 kg con O₂","EN 145 / MSHA / EN 402"], "Espacios confinados · Mantenimiento"),
            ("Circuito Cerrado 120 min — Minería", "cc-120min", "120 min", "Circuito cerrado 120 min para minas subterráneas. Cilindro O₂ 3.0 L 200 bar. EN 145 certificado.",
             ["Autonomía: 120 min con O₂ puro","Cilindro O₂ 3.0 L 200 bar","Cal sodada de alta capacidad","PASS integrado sistema alarma","EN 145 / MSHA"], "Minas subterráneas · Túneles · Sótanos"),
            ("Circuito Cerrado 240 min — Rescate Minero", "cc-240min", "240 min", "Circuito cerrado 240 min para rescate en minería profunda. Máxima autonomía. MSHA certified.",
             ["4 h autonomía total certificada","Doble canister cal sodada","O₂ suministro auto-regulado","Maletín transporte incluido","EN 145 / MSHA / ISO 23328"], "Rescate minero · Profundidad extrema"),
            ("Kit Rescate Minero BG4 — 4 h", "cc-bg4", "BG4", "Kit rescate minero BG4 con 4 h autonomía, comunicación de voz y enfriamiento de aire. Estándar de rescate minero.",
             ["Autonomía BG4: 4 h certificada","Enfriamiento termoeléctrico aire","Comunicación voz integrada","Resistencia gases CBRN","EN 145 / MSHA / VDE"], "Rescate minero · Brigadas · Gases tóxicos"),
        ]),
        ("mascara-facial", "Máscaras Faciales para SCBA", "NFPA 1981 / EN 136", [
            ("Máscara Panorámica — Policarbonato 220°", "mascara-panoramica", "220°", "Máscara facial panorámica policarbonato 220° para SCBA. Compatible reguladores NFPA 1981. Sello silicona.",
             ["Visor panorámico PC 220°","Sello silicona baja presión","Compatible SCBA universal","Protección UV y anti-rayado","NFPA 1981 / EN 136"], "SCBA · Incendio estructural · HAZMAT"),
            ("Máscara con HUD — Display Digital", "mascara-hud", "HUD", "Máscara con HUD display digital. Presión del cilindro, tiempo restante y alertas PASS en visor. NFPA 1981.",
             ["HUD display presión tiempo real","Alertas visuales tiempo restante","Pantalla integrada en visor","Compatible cilindros 300 bar","NFPA 1981 / EN 136"], "SCBA avanzado · Operaciones críticas"),
            ("Máscara CBRN — Protección Total", "mascara-cbrn", "CBRN", "Máscara facial para agentes CBRN. Filtros ABEK2P3. Compatible SCBA y filtros NBC. EN 136.",
             ["Filtros ABEK2P3 para CBRN","Sello hermético 6 puntos","Compatible SCBA + filtros NBC","Resistente líquidos peligrosos","EN 136 / EN 14387 / STANAG 4571"], "CBRN · HAZMAT · Defensa civil"),
            ("Máscara Reutilizable — Bajo Mantenimiento", "mascara-reutilizable", "Multi-uso", "Máscara facial reutilizable de bajo mantenimiento. Visor reemplazable, arnés ajustable, válvulas intercambiables.",
             ["Visor reemplazable individual","Arnés ajustable 4 puntos","Válvulas exhale intercambiables","Esterilizable NaOCl 0.5%","NFPA 1981 / EN 136"], "Mantenimiento · Entrenamiento"),
        ]),
        ("cilindros-repuesto", "Cilindros de Repuesto SCBA", "DOT/TC / EN 12245", [
            ("Cilindro Carbono 6.0 L 300 bar — 30 min", "cilindro-6l", "6.0 L", "Cilindro fibra carbono 6.0 L 300 bar para SCBA 30 min. Peso 1.5 kg vacío. Compatible universal NFPA 1981.",
             ["Fibra carbono 6.0 L 300 bar","Peso vacío: 1.5 kg ultraligero","Duración: 30 min @ 40 L/min","Compatible NFPA 1981 universal","DOT/TC / EN 12245 / ISO 11119"], "SCBA 30 min · Incendio estructural"),
            ("Cilindro Carbono 6.8 L 300 bar — 45 min", "cilindro-68l", "6.8 L", "Cilindro fibra carbono 6.8 L 300 bar para SCBA 45 min. El más vendido. Compatible universal. Peso 1.8 kg.",
             ["Fibra carbono 6.8 L 300 bar","Duración: 45 min @ 40 L/min","Peso vacío: 1.8 kg ultraligero","Rosca M18×1.5 universal","DOT/TC / EN 12245 / NFPA 1981"], "SCBA 45 min · Estándar bombero"),
            ("Cilindro Carbono 9.0 L 300 bar — 60 min", "cilindro-9l", "9.0 L", "Cilindro fibra carbono 9.0 L 300 bar para SCBA 60 min. Máxima capacidad estándar. Peso 2.4 kg vacío.",
             ["Fibra carbono 9.0 L 300 bar","Peso vacío: 2.4 kg","Duración: 60 min @ 40 L/min","Rosca M18×1.5 estándar","DOT/TC / EN 12245 / NFPA 1981"], "SCBA 60 min · Operaciones largas"),
            ("Cilindro Aluminio 6.8 L 200 bar — Económico", "cilindro-aluminio", "Al 6.8L", "Cilindro aluminio 6.8 L 200 bar. Alternativa económica. Vida útil 15 años. Para entrenamiento y respaldo.",
             ["Aluminio 6.8 L 200 bar","Peso vacío: 2.8 kg","Vida útil: 15 años sin prueba","Costo optimizado entrenamiento","DOT 3AL / EN 12245"], "Entrenamiento · Brigadas · Respaldo"),
        ]),
        ("sistemas-comunicacion", "Comunicación Integrada SCBA", "NFPA 1981 / ETSI TETRA", [
            ("Radio TETRA Integrado en Máscara", "radio-tetra-scba", "TETRA", "Radio TETRA integrado en máscara SCBA. Full-duplex manos libres con puesto de mando. IP67. NFPA 1981.",
             ["Radio TETRA integrado en máscara","Full-duplex manos libres","Compatible NFPA 1981 universal","Resistente agua IP67","NFPA 1981 / ETSI TETRA"], "Comando · Operaciones · Rescate"),
            ("Sistema Bluetooth — Manos Libres", "bluetooth-scba", "BT 5.0", "Sistema Bluetooth 5.0 para SCBA con micrófono de garganta. Pairing con radio portátil. IP67.",
             ["Bluetooth 5.0 clase 2","Autonomía batería: 12 h continuas","Micrófono garganta vibración","Pairing doble radio + smartphone","IP67 / MIL-STD-810G"], "Radio interoperabilidad · Comando"),
            ("Amplificador de Voz para Máscara", "amplificador-voz", "Voz", "Amplificador de voz electrónico para máscaras SCBA. 18 dB de amplificación. Pila AA 100+ horas. Plug & play.",
             ["Amplificación 18 dB de voz clara","Montaje exterior máscara estándar","Pila AA 100+ horas autonomía","Sin configuración — plug & play","EN 136 / NFPA 1981 compatible"], "Comunicación básica · Sin radio"),
            ("PTT Inalámbrico — Comando Avanzado", "ptt-comando", "PTT", "PTT inalámbrico de muñeca con display de presión SCBA. Alertas de equipos. Compatible TETRA/P25/DMR.",
             ["PTT inalámbrico de muñeca","Display presión SCBA tiempo real","Alertas equipos del equipo","Compatible TETRA/P25/DMR","IP68 / MIL-STD-810H"], "Comando avanzado · Gestión incidentes"),
        ]),
        ("soporte-comando", "Soporte Comando y RIC-PAC", "NFPA 1981 / NFPA 1982", [
            ("RIC-PAC — Rescate Bombero Atrapado", "ricpac", "RIC-PAC", "RIC-PAC SCBA de rescate para bombero atrapado. 15 min emergencia, manguera 3 m acople rápido. NFPA 1981.",
             ["SCBA emergencia 15 min","Manguera transfusión 3 m","Acople rápido SCBA del atrapado","Peso: < 4 kg listo para uso","NFPA 1981 / NFPA 1710"], "Rescate bombero atrapado · RIT"),
            ("Maletero RIT — Kit Rescate Rápido", "maletero-rit", "RIT Kit", "Maletero RIT con RIC-PAC, cuerda guía 30 m y herramientas básicas. Despliegue completo < 60 s. NFPA 1710.",
             ["RIC-PAC + cuerda guía 30 m","Herramientas extricación ligera","Maletero polietileno rugged","Despliegue completo < 60 s","NFPA 1981 / NFPA 1710"], "RIT · Rescate técnico · Comando"),
            ("PASS Integrado — Alarma Bombero", "pass-integrado", "PASS", "PASS (Personal Alert Safety System) de activación automática. Alarma 95 dB. 30 s inmovilidad. NFPA 1982.",
             ["Alarma PASS 95 dB certificada","Activación automática 30 s inmovilidad","Modo manual de emergencia","Integrable con radio TETRA","NFPA 1982 / EN 61000"], "Seguridad bombero · Alerta atrapado"),
            ("Manifold Recarga 4 Líneas — 300 bar", "manifold-4lineas", "4 líneas", "Manifold de recarga SCBA 4 líneas simultáneas 300 bar. Aislamiento individual por línea. Para operación en escena.",
             ["4 líneas llenado simultáneo","Presión de trabajo: 300 bar","Aislamiento individual por línea","Manómetro calibrado por línea","EN 12245 / DOT compatible"], "Operaciones largas · Recarga escena"),
        ]),
        ("mantenimiento-recarga", "Mantenimiento y Recarga SCBA", "EN 12021 / DIN 3188", [
            ("Compresor Respiración 300 bar — Portátil", "compresor-300bar", "300 bar", "Compresor aire respirable 300 bar para recarga SCBA. Motor gasolina o eléctrico. Filtros carbono activado. EN 12021.",
             ["Presión trabajo: 300 bar","Caudal: 100–250 L/min","Filtros coalescentes + carbón activado","Análisis aire según EN 12021","CE / EN 12245 / DIN 3188"], "Estaciones bomberos · Campo · Recarga"),
            ("Banco Recarga 4 Puertos — Cuartel", "banco-recarga", "4 puertos", "Banco recarga 4 cilindros simultáneos 300 bar para cuartel. Panel válvulas individuales y manómetros calibrados.",
             ["4 cilindros simultáneos 300 bar","Válvulas individuales aislamiento","Manómetros calibrados por línea","Conexión compresor o cascada","CE / DIN 3188"], "Cuartel · Brigada · Operación intensiva"),
            ("Kit Mantenimiento SCBA — Completo", "kit-mantenimiento-scba", "Kit", "Kit de mantenimiento anual SCBA: torque, lubricante Molykote®, O-rings Viton® y checklist NFPA 1981.",
             ["Herramientas torque calibradas","Lubricante certificado Molykote®","O-rings reemplazo Viton®","Checklist inspección NFPA 1981","NFPA 1981 / EN 137"], "Mantenimiento anual · Servicio"),
            ("Probador Presión y Caudal — Test SCBA", "probador-scba", "Test", "Instrumento prueba presión y caudal para verificación SCBA. Mide caudal, presión demanda y hermeticidad máscara.",
             ["Prueba caudal y presión dinámica","Verificación hermeticidad máscara","Calibrado trazable NIST/CENAM","Almacenamiento 1000 resultados","NFPA 1981 / EN 137"], "Inspección · Certificación anual"),
        ]),
    ]),
    # ── 3. EQUIPO CONTRA INCENDIOS ─────────────────────────────────────────
    "equipo-contra-incendios": ("Equipo Contra Incendios", [
        ("mangueras-ataque", "Mangueras de Ataque", "NFPA 1963 / UL 19", [
            ("Manguera Tipo 1 — 38 mm NFPA 1963", "manguera-38mm", "38 mm", "Manguera ataque tipo 1 de 38 mm (1.5 pulgadas). Presión 16 bar. Revestimiento nitrilo, cubierta poliéster. NFPA 1963.",
             ["Diámetro interno: 38 mm (1.5\")","Presión trabajo: 16 bar (232 psi)","Longitudes: 15 y 30 m estándar","Cubierta poliéster / NBR interior","NFPA 1963 / UL 19"], "Ataque interior · Primera línea · Rescate"),
            ("Manguera Tipo 2 — 45 mm NFPA 1963", "manguera-45mm", "45 mm", "Manguera ataque tipo 2 de 45 mm (1.75\"). Mayor caudal. Coplas aluminio anodizado. NFPA 1963.",
             ["Diámetro interno: 45 mm (1.75\")","Presión trabajo: 14 bar (200 psi)","Caudal máximo: 900 L/min","Coplas aluminio anodizado NST","NFPA 1963 / UL 19"], "Ataque exterior · Apoyo · Alimentación"),
            ("Manguera Tipo 3 — 65 mm NFPA 1963", "manguera-65mm", "65 mm", "Manguera alimentación tipo 3 de 65 mm (2.5\"). Suministro desde hidrante a bomba. Coplas aluminio doble rosca.",
             ["Diámetro interno: 65 mm (2.5\")","Presión trabajo: 12 bar (175 psi)","Caudal máximo: 1,800 L/min","Coplas aluminio doble rosca NST","NFPA 1963 / UL 19"], "Alimentación hidrante · Suministro · Bomba"),
            ("Manguera Dura Aspiración — 100 mm", "manguera-aspiracion", "100 mm", "Manguera dura de aspiración 100 mm para carga de bomba desde fuente natural. Hélice acero galvanizado interior.",
             ["Diámetro: 100 mm (4\")","Aspiración hasta 3.5 m negativo","Hélice acero galvanizado interior","Longitud: 2 m por sección","NFPA 1901 / NFPA 1963"], "Aspiración depósito · Río · Pileta"),
        ]),
        ("boquillas-lanzas", "Boquillas y Lanzas", "NFPA 1964 / UL 385", [
            ("Boquilla Combinada Niebla/Chorro — 65 mm", "boquilla-combinada", "Combinada", "Boquilla combinada 65 mm para niebla y chorro directo. Caudal 100–1,000 L/min. Patrón 0°–120°. NFPA 1964.",
             ["Caudal: 100–1,000 L/min variable","Patrón: chorro a niebla 0°–120°","Material: aluminio + polímero","Presión trabajo: 5–12 bar","NFPA 1964 / UL 385"], "Ataque interior · Exterior · Cobertura"),
            ("Boquilla Alta Presión Niebla — Fog", "boquilla-niebla", "Fog HP", "Boquilla alta presión para niebla fina. Máxima absorción calor. Efectiva en espacios confinados e incendio agresivo.",
             ["Alta presión: 7–12 bar","Niebla fina máxima absorción calor","Caudal: 100–400 L/min","Ángulo niebla: 30°–120° ajustable","NFPA 1964"], "Espacios confinados · Ataque agresivo"),
            ("Monitor Portátil — 2,500 L/min", "monitor-portatil", "Monitor", "Monitor portátil articulado 500–2,500 L/min. Trípode. Para grandes incendios industriales y perímetro.",
             ["Caudal: 500–2,500 L/min","Base trípode articulado 360°","Conexión 65 mm o 100 mm","Oscilación automática opcional","NFPA 1964"], "Industrial · Perímetro · Gran incendio"),
            ("Lanza Incendio Eléctrico — No Conductora", "lanza-electrico", "Eléctrico", "Lanza especial no conductora para combate de incendio eléctrico. Polipropileno hasta 6 kV. Chorro regulable.",
             ["No conductora hasta 6 kV","Material polipropileno no conductor","Caudal: 60–120 L/min chorro","Longitud: 1.2 m recta","EN 1839 / NFPA 1964"], "Eléctrico < 6 kV · Subestaciones"),
        ]),
        ("hidrantes-sistemas", "Hidrantes y Sistemas", "NFPA 24 / AWWA C502", [
            ("Hidrante Columna Seca — Residencial", "hidrante-columna", "Columna", "Hidrante columna seca para redes municipales. Salidas 38 mm y 65 mm. Hierro fundido dúctil. AWWA C502.",
             ["Columna seca — antihielo","Salidas: 1×65mm + 2×38mm","Cuerpo hierro fundido dúctil","Rosca NST estándar bombero","AWWA C502 / NFPA 291 / NOM-017"], "Red municipal · Residencial · Comercial"),
            ("Hidrante Industrial Alta Presión", "hidrante-industrial", "Industrial", "Hidrante industrial alta presión 20 bar. Salidas 65 y 100 mm. Aislamiento individual por salida. NFPA 24.",
             ["Alta presión hasta 20 bar","Salidas: 2×65mm + 1×100mm","Aislamiento individual por salida","Rosca NST / Storz opcional","NFPA 24 / AWWA C503"], "Industria · Refinería · Proceso"),
            ("Conexión Siamesa — 2 × 65 mm", "siamesa-65mm", "Siamesa", "Conexión siamesa para sistemas rociadores. 2 × 65 mm con válvula check. Bronce naval. NFPA 13.",
             ["2 entradas × 65 mm NST","Válvula check individual por entrada","Material bronce naval fundido","Rosca NST camiones bomba","NFPA 13 / NFPA 14"], "Edificios · Rociadores · Standpipe"),
            ("Hidrante Empotrado — Subsuelo", "hidrante-empotrado", "Empotrado", "Hidrante empotrado bajo tierra para zonas sin columna. Tapa hierro fundido con señalización. AWWA C503.",
             ["Instalación bajo nivel suelo","Tapa hierro fundido pintada","Salidas 65 mm o 100 mm","Válvula cierre a 1 m profundidad","AWWA C503 / NFPA 291"], "Urbano · Tráfico · Aeropuertos"),
        ]),
        ("sistemas-rociadores", "Sistemas de Rociadores", "NFPA 13 / UL 199", [
            ("Rociador Convencional — 68°C", "rociador-68c", "68°C", "Rociador convencional temperatura media 68°C. Patrón hemisférico. Ampolla vidrio 3 mm roja. UL 199.",
             ["Temperatura activación: 68°C","Patrón hemisférico 180°","Ampolla vidrio 3 mm roja","K-factor: 80 (5.6 US)","UL 199 / FM 2000 / NFPA 13"], "Oficinas · Bodegas · Habitación"),
            ("Rociador ESFR — Bodega Alta", "rociador-esfr", "ESFR", "Rociador ESFR supresión rápida para bodegas hasta 12 m altura. K-factor 360. Sin rociadores en rack.",
             ["ESFR altura hasta 12 m","K-factor: 360 (25.2 US)","Temperatura activación: 74°C","Sin rociadores en estantería","UL 199 / FM 1960 / NFPA 13"], "Bodegas altura · Logística · Almacén"),
            ("Rociador Lateral Pared — Residencial", "rociador-lateral", "Lateral", "Rociador lateral de pared sin falso plafón. Para edificios residenciales y pasillos. UL 1626.",
             ["Montaje lateral en pared","Sin necesidad de plafón","Patrón cuarto de esfera","K-factor: 80 (5.6 US)","UL 1626 / NFPA 13R"], "Residencial · Hotel · Pasillos"),
            ("Rociador Cocina Industrial — 93/141°C", "rociador-cocina", "Cocina", "Rociador respuesta rápida campana cocina industrial. 93°C o 141°C. Compatible supresión química. NFPA 17A.",
             ["Temperatura: 93°C o 141°C","Para fuegos clase K (aceites)","Compatible supresión química","K-factor adaptado a cocinas","UL 300 / NFPA 17A"], "Cocinas industriales · Restaurantes"),
        ]),
        ("detectores-alarmas", "Detectores y Alarmas", "NFPA 72 / UL 217", [
            ("Detector Humo Iónico — Interconectable", "detector-humo", "Humo", "Detector humo iónico interconectable. Alarma 85 dB. Hasta 12 unidades enlazadas. LED indicador visual. UL 217.",
             ["Cámara iónica bi-polar","Alarma: 85 dB @ 3 m","Interconectable 12 unidades","Indicador LED visual","UL 217 / EN 54-7 / NFPA 72"], "Residencial · Oficinas · Corredores"),
            ("Detector Calor Fijo — 57°C", "detector-calor", "Calor", "Detector calor temperatura fija 57°C para cocinas y garajes. Sin falsas alarmas por cocción. Bimetálico. UL 521.",
             ["Temperatura fija: 57°C (135°F)","Tipo bimetálico sin electrónica","Sin falsas alarmas por humo cocina","Ideal: cocinas, garajes, desvanes","UL 521 / EN 54-5 / NFPA 72"], "Cocinas · Garajes · Talleres"),
            ("Detector Llama UV/IR — Industrial", "detector-llama", "UV/IR", "Detector llama dual UV/IR para hangares y plantas. Alcance 50 m. Respuesta < 30 ms. FM / ATEX.",
             ["Dual UV/IR mayor inmunidad falsos","Alcance: 50 m cono 45°","Respuesta: < 30 ms detección","Salidas 4–20 mA + relé","FM / UL / ATEX Zone 1"], "Hangares · Plantas proceso · ARFF"),
            ("Panel Alarma 8 Zonas — Convencional", "panel-alarma-8z", "8 zonas", "Panel alarma contra incendios 8 zonas convencional. 24 VDC, batería respaldo 24 h. UL 864.",
             ["8 zonas detección","Batería respaldo 24 h","Salidas sirena y relé libre","Histórico 1000 eventos","UL 864 / EN 54-2 / NFPA 72"], "Edificios · Hoteles · Plantas medianas"),
        ]),
        ("gabinetes-cie", "Gabinetes Contra Incendios", "NOM-002-STPS / NFPA 14", [
            ("Gabinete CIE Tipo I — Residencial", "gabinete-tipo1", "Tipo I", "Gabinete CIE tipo I para residencial y oficinas. Manguera 20 m × 38 mm, válvula globo, extintor 4 kg ABC incluido.",
             ["Manguera 20 m × 38 mm enrollada","Válvula globo cromada 38 mm","Extintor 4 kg ABC incluido","Gabinete acero pintado rojo","NOM-002-STPS / NFPA 14"], "Residencial · Oficinas · Hoteles"),
            ("Gabinete CIE Tipo II — Industrial", "gabinete-tipo2", "Tipo II", "Gabinete CIE tipo II industrial. Manguera 30 m × 45 mm semirrígida, válvula angular inox, extintor 9 kg ABC.",
             ["Manguera 30 m × 45 mm semirrígida","Válvula angular acero inox 45 mm","Extintor 9 kg ABC incluido","Gabinete 1.2m × 0.8m × 0.3m","NOM-002-STPS / NFPA 14"], "Plantas industriales · Bodegas"),
            ("Gabinete CIE Tipo III — Exterior", "gabinete-tipo3", "Tipo III", "Gabinete CIE tipo III exterior acero inoxidable 304. Manguera 30 m × 65 mm, boquilla regulable combinada.",
             ["Exterior — acero inoxidable 304","Manguera 30 m × 65 mm","Boquilla regulable combinada","Resistente UV, lluvia, vandalismo","NOM-002-STPS / NFPA 14"], "Exterior · Estacionamientos · Plantas"),
            ("Gabinete Presurizado — Húmedo", "gabinete-humedo", "Húmedo", "Gabinete presurizado sistema húmedo. Manguera presurizada lista para uso inmediato. Sin riesgo congelación.",
             ["Sistema húmedo — siempre presurizado","Manguera semirrígida 25 m","Respuesta inmediata — sin carga","Manómetro presión de red","NFPA 14 / NOM-002-STPS"], "Sistemas húmedos · Carga inmediata"),
        ]),
        ("herramientas-ventilacion", "Ventilación Táctica PPV", "NFPA 1 / FM", [
            ("Ventilador PPV Gasolina — 50,000 m³/h", "ventilador-ppv-gas", "PPV Gas", "Ventilador presión positiva gasolina 50,000 m³/h. Motor Honda GX160. Ángulo tobera ajustable 0°–40°.",
             ["Caudal: 50,000 m³/h","Motor Honda GX160 5.5 HP","Velocidad tobera: >2,500 rpm","Ángulo ajustable 0°–40°","NFPA 1 / Factory Mutual"], "Estructural · Control humo · Rescate"),
            ("Ventilador PPV Eléctrico — Interior", "ventilador-ppv-elec", "PPV Elec", "Ventilador PPV eléctrico 20,000 m³/h sin emisiones para uso interior. Motor 1,500 W. Ruedas transporte.",
             ["Caudal: 20,000 m³/h","Motor eléctrico 1,500 W","Sin emisiones — uso interior","Ruedas transporte rápido","CE / NFPA 1"], "Interior · Evacuación · Sin combustión"),
            ("Ventilador Batería Li-Ion — Portátil", "ventilador-bateria", "Batería", "Ventilador batería Li-Ion 18 V para confinados y sin red. 20,000 m³/h, 45 min autonomía. 8 kg portátil.",
             ["Batería 18 V Li-Ion intercambiable","Caudal: 20,000 m³/h","Autonomía: 45 min carga completa","Peso: 8 kg — ultraportátil","CE / NFPA 1"], "Portátil · Confinados · Sin red"),
            ("Kit Ventilación Táctica — Completo", "kit-ventilacion", "Kit", "Kit ventilación táctica: PPV + extensión tobera + manguera chimenea + cubierta ventana + guía operativa.",
             ["PPV + extensión tobera 60 cm","Manguera chimenea 3 m","Cubierta ventana incluida","Guía táctica operativa","NFPA 1 / NFPA 1710"], "Operaciones estructurales · Entrenamiento"),
        ]),
    ]),
    # ── 4. HAZMAT ──────────────────────────────────────────────────────────
    "hazmat": ("HAZMAT — Equipos CBRN", [
        ("trajes-nivel-a", "Trajes HAZMAT Nivel A", "NFPA 1991 / ASTM F1001", [
            ("Traje Nivel A Butilo — Ácidos", "traje-butilo-a", "Butilo", "Traje encapsulamiento total hule butilo para ácidos, bases y solventes orgánicos. Capa interior Nomex®. NFPA 1991.",
             ["Encapsulamiento total hule butilo","Resistencia ácidos, bases, solventes","Capa interior Nomex® certificada","Visor policarbonato 4 mm","NFPA 1991 / ASTM F1001"], "Ácidos · Cloruros · Solventes orgánicos"),
            ("Traje Nivel A Vitón — Hidrocarburos", "traje-viton-a", "Vitón", "Traje encapsulamiento Vitón/FKM para hidrocarburos y gases halogenados. Cremallera hermética. NFPA 1991.",
             ["Vitón/FKM encapsulamiento total","Resistencia superior hidrocarburos","Cremallera hermética certificada","Compatible SCBA externo","NFPA 1991 / EN 943-1"], "Hidrocarburos · Gases halogenados"),
            ("Traje Nivel A CBRN — Defensa Civil", "traje-cbrn-a", "CBRN", "Traje encapsulamiento CBRN para agentes químicos, biológicos, radiológicos y nucleares. NFPA 1994 clase 1.",
             ["NFPA 1994 Clase 1 CBRN total","Resistencia agentes GB, GA, GD","Sellado ZIP hermético certificado","Compatible SCBA 30 min+","NFPA 1994 / STANAG 4571"], "Defensa civil · CBRN · Terrorismo"),
            ("Traje Nivel A Desechable — Tychem 10000", "traje-desechable-a", "Desechable", "Traje encapsulamiento desechable Tychem® 10000 para primera respuesta química. Sin contaminación cruzada.",
             ["Tychem® 10000 desechable","Sin contaminación cruzada","Tallas S a 4XL disponibles","Compatible SCBA externo","NFPA 1992 / EN 943-2"], "Primera respuesta · Sin lavado"),
        ]),
        ("trajes-nivel-b", "Trajes HAZMAT Nivel B", "NFPA 1992 / EN 14605", [
            ("Traje Nivel B Tychem TK — Desechable", "traje-tychem-b", "Tychem TK", "Traje salpicaduras Tychem® TK desechable para corrosivos. Clase 3B EN 14605. Costuras termoselladas.",
             ["Tychem® TK film laminado","Resistencia corrosivos clase 3B","Desechable — sin descontaminación","Costuras termoselladas","NFPA 1992 / EN 14605"], "Derrame químico · Respuesta · Industria"),
            ("Traje Nivel B Butilo — Reutilizable", "traje-butilo-b", "Butilo", "Traje salpicaduras butilo reutilizable. 20 ciclos lavado. Para brigadas industriales con exposición frecuente.",
             ["Hule butilo reutilizable","20 ciclos lavado certificados","Resistente ácidos y álcalis","Cierre doble con guardapolvo","NFPA 1992 / EN 14605"], "Brigada industrial · Frecuencia alta"),
            ("Traje PVC Nivel B — Económico", "traje-pvc-b", "PVC", "Traje PVC bajo costo para riesgo bajo de salpicaduras. Reutilizable, soldadura HF. Mantenimiento con exposición mínima.",
             ["PVC 0.40 mm de espesor","Soldadura HF resistente","Reutilizable — lavable","Talla única ajustable","EN 14605 Tipo 4"], "Mantenimiento · Bajo riesgo · Economía"),
            ("Kit Nivel B Completo — HAZMAT", "kit-nivel-b", "Kit B", "Kit HAZMAT Nivel B completo: traje, guantes doble capa, botas goma, cinta sellado 25 m, bolsa transporte.",
             ["Traje + guantes doble capa","Botas goma resistentes químicos","Cinta sellado 25 m incluida","Bolsa transporte impermeable","NFPA 1992 / OSHA 1910.120"], "Primera respuesta · Kit completo"),
        ]),
        ("trajes-nivel-c", "Trajes HAZMAT Nivel C", "EN 13034 / NFPA 1992", [
            ("Traje Tyvek 400 — Nivel C Básico", "traje-tyvek-400", "Tyvek 400", "Traje Tyvek® 400 desechable para productos químicos baja peligrosidad. Clase 5/6. El más económico.",
             ["Tyvek® 400 microporo DuPont","Clase 5 y 6 EN 13034","Desechable — sin lavado","Capucha integrada elástica","EN 13034 / EN 1073-2"], "Laboratorio · Asbestos · Bajo riesgo"),
            ("Traje Tychem C — Avanzado", "traje-tychem-c", "Tychem C", "Traje Tychem® C doble capa para salpicaduras riesgo moderado. Clase 3B. Costuras termoselladas.",
             ["Tychem® C film barrera dual","Clase 3B EN 14605","Costuras termoselladas","Tallas S a 4XL disponibles","EN 14605 / NFPA 1992"], "Industria química · Laboratorio"),
            ("Traje Tyvek 500 — Alto Rendimiento", "traje-tyvek-500", "Tyvek 500", "Traje Tyvek® 500 reforzado para mayor durabilidad. 2× resistencia a rasgado vs básico. Trabajo prolongado.",
             ["Tyvek® 500 reforzado abrasión","Resistencia rasgado 2× básico","Costuras selladas áreas críticas","Clase 5/6 EN 13034","EN 13034 / NFPA 1992"], "Trabajo prolongado · Exteriores"),
            ("Máscara Purificador ABEK1P3 — Nivel C", "mascara-abek1p3", "Purificador", "Máscara facial con filtros ABEK1P3 para vapores orgánicos, inorgánicos, ácidos y partículas. Nivel C.",
             ["Filtros ABEK1P3 intercambiables","Visor panorámico policarbonato","Sellado 6 puntos de contacto","Indicador saturación del filtro","EN 136 / EN 14387 / NIOSH"], "Gases orgánicos · ABEK · Nivel C"),
        ]),
        ("detectores-multigas", "Detectores Multigas", "ATEX / IECEx / EN 60079", [
            ("Detector 4 Gases — LEL/O₂/CO/H₂S", "detector-4gas", "4 gas", "Detector multigas 4 canales: LEL, O₂, CO y H₂S simultáneos. ATEX Zona 1. Alarma sonora + visual + vibración.",
             ["4 sensores simultáneos en tiempo real","LEL 0–100% / O₂ 0–30%","CO 0–500 ppm / H₂S 0–100 ppm","ATEX Zona 1 / IECEx certificado","ATEX / IECEx / EN 60079"], "Espacios confinados · HAZMAT · Industria"),
            ("Detector VOC — PID 10.6 eV", "detector-voc-pid", "PID VOC", "Detector VOC con sensor PID 10.6 eV. Rango 0–2,000 ppm. Sensibilidad < 0.1 ppm benceno. ATEX.",
             ["PID lámpara 10.6 eV","Rango: 0–2,000 ppm total","Sensibilidad: < 0.1 ppm benceno","Calibración auto Isobutileno","ATEX / IECEx / EN 45544"], "VOC · Benceno · Solventes · Petroquímica"),
            ("Detector CO₂ Atmosférico — 0–5%", "detector-co2-atm", "CO₂", "Detector CO₂ atmosférico para espacios cerrados. NDIR infrarrojo. Rango 0–5%. Alarma configurable.",
             ["Sensor NDIR infrarrojo CO₂","Rango: 0–5% v/v","Respuesta < 30 s T90","Alarma 1% y 2% configurable","EN 50543 / NFPA 72"], "Estacionamientos · CO₂ atmosférico"),
            ("Estación Fija Multigas — 8 Zonas", "estacion-multigas-8z", "Fija 8z", "Estación fija detección gas 8 zonas. Panel control OLED. 10,000 eventos histórico. ATEX zona 1/2.",
             ["8 zonas detección simultánea","Panel control display OLED","Historial 10,000 eventos","Salidas 4-20 mA y relé NC/NA","ATEX / IECEx / EN 60079-0"], "Plantas industriales · Sistemas fijos"),
        ]),
        ("kit-descontaminacion", "Kits de Descontaminación", "NFPA 472 / OSHA 1910.120", [
            ("Ducha Descontaminación Plegable — 3 Estaciones", "ducha-decon-3est", "3 est.", "Ducha descontaminación plegable 3 estaciones. Colectores drenaje incluidos. Despliegue < 5 min. NFPA 472.",
             ["3 estaciones ducha plegables","Despliegue: < 5 minutos","Colectores drenaje incluidos","Caudal: 20 L/min por estación","NFPA 472 / OSHA 1910.120"], "HAZMAT · Descontaminación masiva"),
            ("Solución Descontaminante — NaOCl 20 L", "solucion-decon-20l", "20 L", "Solución descontaminante universal NaOCl 0.5% lista para usar. 20 L. Neutraliza agentes químicos comunes.",
             ["NaOCl 0.5% listo para uso","Neutraliza ácidos y bases comunes","Compatible trajes Nivel A/B/C","Envase 20 L etiquetado GHS","NFPA 472 / ONU 1791"], "Agentes químicos · Decon estándar"),
            ("Bolsas Material Contaminado — HDPE 200 L", "bolsas-contaminadas", "200 L", "Bolsas HDPE 200 micrones 200 L para empaque material contaminado. Cierre zip-lock doble. Etiqueta GHS.",
             ["HDPE 200 micrones espesor","Cierre zip-lock doble hermético","Capacidad 200 L — ropa completa","Etiqueta peligro GHS incluida","DOT 49 CFR / NOM-052-SEMARNAT"], "Empaque material contaminado"),
            ("Maletero Descontaminación — Kit HAZMAT", "maletero-decon", "Kit DECON", "Maletero completo descontaminación: ducha 1 estación, solución NaOCl 5 L, 10 bolsas 200 L, señalética y guía.",
             ["Ducha plegable 1 estación","Solución NaOCl 5 L incluida","10 bolsas HDPE 200 L","Señalética y guía NFPA 472","NFPA 472 / OSHA 1910.120"], "Primera respuesta · Kit completo"),
        ]),
        ("equipos-identificacion", "Equipos de Identificación HAZMAT", "NFPA 472 / OSHA", [
            ("Espectrómetro Raman Portátil — 1064 nm", "raman-portatil", "Raman", "Espectrómetro Raman portátil 1064 nm. Identificación a través del envase. 14,000+ sustancias. < 60 s resultado.",
             ["Láser 1064 nm no destructivo","14,000+ sustancias en base datos","A través del envase sin abrir","Resultado en < 60 s","NFPA 472 / First Responder"], "Primera respuesta · HAZMAT · CBRN"),
            ("Espectrómetro FTIR Portátil — Líquidos", "ftir-portatil", "FTIR", "FTIR portátil para identificación líquidos y sólidos. ATR de contacto. 100,000+ compuestos. IP67.",
             ["FTIR con ATR de contacto","100,000+ compuestos base datos","IP67 lluvia y polvo","WiFi + USB para informes","NFPA 472 / OSHA HAZMAT"], "Identificación líquidos · CBRN"),
            ("Detector Explosivos — IED/TATP", "detector-explosivos", "IED", "Detector trazas explosivos IED/TATP. Tecnología DMS ionización diferencial. Detección < 1 s. No radioactivo.",
             ["DMS ionización diferencial","Detecta TATP, HMTD, RDX, PETN","Respuesta: < 1 segundo","No radioactivo — seguro de usar","DHS / TSA / NFPA 1"], "Antiterrorismo · Búsqueda IED"),
            ("Fotómetro de Llama — Metales Alcalinos", "fotometro-llama", "FPD", "Fotómetro llama portátil para detección metales alcalinos Li, Na, K en campo. Sensibilidad < 1 ppm.",
             ["Detección Li, Na, K en campo","Sensibilidad < 1 ppm","Llama hidrógeno propano","Calibración automática","NIOSH / OSHA HAZMAT"], "Metales alcalinos · Residuos peligrosos"),
        ]),
        ("comunicaciones-hazmat", "Comunicaciones HAZMAT", "ATEX / ETSI TETRA", [
            ("Radio Intrínseco ATEX Zona 1 — 5 W", "radio-atex-z1", "ATEX Z1", "Radio portátil intrínsecamente seguro ATEX Zona 1. 5 W, IP68, sumergible 2 m. Batería Li-Ion 2,200 mAh.",
             ["ATEX Zona 1 IECEx certified","5 W potencia RF","IP68 sumergible 2 m","Batería 2,200 mAh Li-Ion","ATEX / IECEx / ETSI EN 300 113"], "HAZMAT · Zona 1 ATEX · Gas inflamable"),
            ("Radio TETRA Intrínseco — Cifrado", "radio-tetra-hazmat", "TETRA", "Radio TETRA intrínsecamente seguro. Digital cifrado AES 256. GPS integrado 3 m. Full-duplex. ATEX Zona 1.",
             ["TETRA digital full-duplex","GPS integrado 3 m precisión","Cifrado AES 256 bits","ATEX Zona 1 / IECEx","ETSI TETRA / ATEX"], "Comando HAZMAT · Cifrado · GPS"),
            ("Intercomunicador Traje Nivel A", "intercom-nivel-a", "Nivel A", "Intercomunicador externo para trajes encapsulamiento Nivel A. 24 dB amplificación. Batería 24 h. Universal.",
             ["Micrófono exterior al traje","Amplificación 24 dB voz","Alimentación batería 24 h","Montaje universal nivel A","NFPA 1994 / ATEX compatible"], "Dentro del traje Nivel A · Comunicación"),
            ("Sistema Área Comunicación — HAZMAT", "sistema-area-hazmat", "Sistema", "Sistema comunicación de área para incidentes HAZMAT. Repetidor portátil 5 km + 4 terminales. AES 128.",
             ["Repetidor portátil 5 km radio","4 terminales incluidas","Cifrado AES 128 bits","Zona seguridad + zona caliente","ETSI TETRA / DMR"], "ICS · Mando HAZMAT · Zona caliente"),
        ]),
    ]),
    # ── 5. HERRAMIENTAS DE RESCATE ─────────────────────────────────────────
    "herramientas-rescate": ("Herramientas de Rescate", [
        ("herramientas-hidraulicas", "Herramientas Hidráulicas de Rescate", "NFPA 1936 / EN 13204", [
            ("Cizalla Hidráulica — 700 bar", "cizalla-hidraulica", "Cizalla", "Cizalla hidráulica de rescate vehicular 700 bar. Corte columnas A/B/C. Fuerza 1,000 kN punta. NFPA 1936.",
             ["Fuerza de corte: 1,000 kN punta","Presión hidráulica: 700 bar","Apertura mandíbulas: 200 mm","Peso: ~16 kg sin manguera","NFPA 1936 / EN 13204"], "Rescate vehicular · Extricación · Corte"),
            ("Expansor Hidráulico — 700 bar", "expansor-hidraulico", "Expansor", "Expansor hidráulico de rescate 700 bar. Fuerza apertura 400 kN. Para separar estructuras y puertas aplastadas.",
             ["Fuerza apertura: 400 kN","Presión hidráulica: 700 bar","Apertura puntas: 800 mm","Peso: ~18 kg sin manguera","NFPA 1936 / EN 13204"], "Apertura puertas · Separación · Rescate"),
            ("Combi-Tool — Cizalla + Expansor", "combi-tool", "Combi", "Herramienta combinada cizalla + expansor en una sola unidad. Versatilidad máxima. 700 bar. NFPA 1936.",
             ["Cizalla + expansor combinado","Presión: 700 bar sistema","Fuerza corte: 800 kN","Fuerza apertura: 350 kN","NFPA 1936 / EN 13204"], "Versatilidad máxima · Rescate rápido"),
            ("Cilindro RAM — Extensión Hidráulica", "cilindro-ram", "RAM", "Cilindro RAM hidráulico para apuntalamiento y extensión. 10 a 100 ton. Para estabilización vehicular y estructural.",
             ["Capacidad: 10–100 ton según modelo","Carrera: 200–600 mm","Presión: 700 bar sistema","Peso: 8–25 kg según capacidad","NFPA 1936 / EN 13204"], "Apuntalamiento · Estabilización · Extensión"),
        ]),
        ("herramientas-electricas", "Herramientas Eléctricas de Rescate", "NFPA 1936 / DeWalt / Milwaukee", [
            ("Sierra Sable de Batería — 18 V", "sierra-sable-18v", "Sierra", "Sierra sable de batería 18 V para corte de metales y madera en rescate. Hoja bimetálica de rescate. 3,000 CPM.",
             ["Motor brushless 18 V Li-Ion","3,000 CPM velocidad variable","Hojas bimetálicas de rescate","Batería 5.0 Ah intercambiable","NFPA 1936 compatible"], "Corte metal · Rescate vehicular · Madera"),
            ("Amoladora de Batería — Corte Rápido", "amoladora-bateria", "Amoladora", "Amoladora angular de batería 18 V para corte rápido en rescate. Disco 125 mm. 8,500 RPM. MIL-SPEC.",
             ["Motor brushless 18 V","8,500 RPM velocidad","Disco 125 mm corte/desbaste","Batería 5.0 Ah intercambiable","MIL-STD-810G durabilidad"], "Corte rápido · Acceso forzado · Rescate"),
            ("Taladro de Impacto — Acceso Forzado", "taladro-impacto", "Taladro", "Taladro de impacto 18 V para acceso forzado en rescate urbano. 2,000 Nm de torque. Brocas SDS-Plus.",
             ["Motor brushless 18 V","2,000 Nm torque de impacto","Brocas SDS-Plus para concreto","Batería 5.0 Ah intercambiable","NFPA 1936 compatible"], "Acceso forzado · Concreto · Rescate"),
            ("Kit Herramientas Eléctricas — Rescate", "kit-electrico-rescate", "Kit", "Kit completo de herramientas eléctricas de rescate: sierra, amoladora, taladro, 4 baterías y cargador rápido.",
             ["Sierra + amoladora + taladro","4 baterías 5.0 Ah Li-Ion","Cargador rápido doble","Maletín de transporte rugged","NFPA 1936 compatible"], "Kit completo · Rescate · Acceso"),
        ]),
        ("herramientas-manuales", "Herramientas Manuales de Rescate", "NFPA 1936 / ASTM", [
            ("Hacha de Bombero — Mango Fibra", "hacha-bombero", "Hacha", "Hacha de bombero con cabeza de acero forjado y mango de fibra de vidrio. Diseño pick-head. Antivibraciones.",
             ["Cabeza acero forjado 1.4 kg","Mango fibra vidrio antivibraciones","Diseño pick-head estándar","Longitud total: 91 cm","NFPA 1936 / ASTM E45"], "Acceso forzado · Ventilación · Rescate"),
            ("Halligan Bar — Barra de Fuerza", "halligan-bar", "Halligan", "Barra de fuerza Halligan de acero al cromo-vanadio. Punta, cuña y horquilla. La herramienta esencial del bombero.",
             ["Acero al cromo-vanadio forjado","Punta + cuña + horquilla","Longitud: 76 cm (30\")","Peso: 5.4 kg","NFPA 1936 / ASTM A681"], "Acceso forzado · Puertas · Ventanas"),
            ("Set Irons — Halligan + Hacha", "set-irons", "Irons Set", "Set Irons completo: Halligan Bar + Hacha de bombero. El combo clásico para acceso forzado. Anilla de unión.",
             ["Halligan Bar 76 cm + Hacha 91 cm","Anilla de unión incluida","Acero forjado + fibra vidrio","El estándar de acceso forzado","NFPA 1936"], "Acceso forzado · Operaciones · Combo"),
            ("Kit Herramientas Manuales — 8 Piezas", "kit-manual-8pzas", "Kit 8pz", "Kit de 8 herramientas manuales para rescate: halligan, hacha, palanca, punzón, cincel, cuña, llave multipunto y bolsa.",
             ["8 herramientas esenciales","Bolsa de transporte Cordura","Acero forjado todo el set","Peso total: ~15 kg","NFPA 1936 / ASTM"], "Rescate urbano · Acceso · Kit completo"),
        ]),
        ("equipos-apuntalamiento", "Equipos de Apuntalamiento", "NFPA 1670 / Paratech", [
            ("Sistema Apuntalamiento Estructural — Paratech", "apuntalamiento-paratech", "Paratech", "Sistema apuntalamiento estructural Paratech con puntales neumáticos 1–5 ton. Para derrumbes y estructuras inestables.",
             ["Puntales neumáticos 1–5 ton","Extensión: 60 cm a 3.6 m","Presión trabajo: 8 bar","Kit completo 4 puntales","NFPA 1670 / Paratech"], "Derrumbes · Estructuras inestables"),
            ("Puntales de Madera — Kit Shore", "puntales-madera", "Shore Kit", "Kit de apuntalamiento con puntales de madera (4×4 y 4×6) y accesorios. Para estabilización en rescate urbano.",
             ["Madera tratada 4×4 y 4×6","Cuñas y bases de distribución","Clavos de apuntalamiento 16d","Manual técnico NFPA 1670","NFPA 1670 / ASTM D245"], "Rescate urbano · Estabilización básica"),
            ("Strut System — Estabilización Vehicular", "strut-vehicular", "Strut", "Sistema de struts para estabilización vehicular: 3 puntales telescópicos con base magnética y cabezal ajustable.",
             ["3 puntales telescópicos ajustables","Base magnética de 50 kg fuerza","Cabezal articulado 360°","Capacidad: 10 ton por strut","NFPA 1670 / EN 13204"], "Extricación vehicular · Estabilización"),
            ("Cribbing Blocks — Juego 18 Piezas", "cribbing-blocks", "Cribbing", "Juego de 18 bloques de cribbing de polímero reciclado para apuntalamiento y nivelación. Resistente a aceites.",
             ["18 bloques polímero reciclado","Resistente aceites y combustible","Capacidad: 25 ton por stack","No absorbe agua","NFPA 1670"], "Nivelación · Apuntalamiento · Cribbing"),
        ]),
        ("airbags-elevacion", "Airbags de Elevación", "NFPA 1670 / EN 13731", [
            ("Airbag Alta Presión — 20 ton", "airbag-alta-20ton", "20 ton", "Airbag de alta presión 20 ton para elevación y separación en rescate. 8 bar. Neopreno reforzado con Kevlar.",
             ["Capacidad: 20 ton a 8 bar","Neopreno reforzado Kevlar","Altura elevación: 5–30 cm","Regulador presión incluido","NFPA 1670 / EN 13731"], "Rescate vehicular · Elevación · Separación"),
            ("Airbag Alta Presión — 40 ton", "airbag-alta-40ton", "40 ton", "Airbag alta presión 40 ton para rescate pesado. Elevación estructural y vehicular. Controlador dual incluido.",
             ["Capacidad: 40 ton a 8 bar","Controlador dual regulado","Altura elevación: 10–50 cm","Peso: 12 kg vacío","NFPA 1670 / EN 13731"], "Rescate pesado · Estructura · Vehículo grande"),
            ("Airbag Baja Presión — 1 bar", "airbag-baja-1bar", "Baja presión", "Airbag baja presión 1 bar para elevación suave y estabilización de cargas sensibles. Gran superficie de contacto.",
             ["Baja presión: 1 bar máximo","Gran superficie de contacto","Elevación suave y controlada","Capacidad: 5–15 ton","NFPA 1670 / EN 13731"], "Elevación suave · Cargas sensibles"),
            ("Kit Airbags — Sistema Completo", "kit-airbags", "Kit", "Kit completo de airbags: 2 alta presión (20+40 ton) + controlador dual + mangueras + bolsa transporte. NFPA 1670.",
             ["2 airbags: 20 + 40 ton","Controlador dual con regulador","Mangueras 10 m incluidas","Bolsa transporte Cordura","NFPA 1670 / EN 13731"], "Kit completo · Rescate · Operaciones"),
        ]),
        ("iluminacion-rescate", "Iluminación de Rescate", "NFPA 1971 / ATEX", [
            ("Torre de Luz LED — 50,000 lm", "torre-luz-led", "Torre LED", "Torre de luz LED portátil 50,000 lm para iluminación de escena nocturna. Extensión 4.5 m. Generador incluido.",
             ["Luminosidad: 50,000 lm LED","Extensión telescópica 4.5 m","Generador Honda portátil","Autonomía: 8 h continuas","NFPA 1901 / IP65"], "Escena nocturna · Rescate · Operaciones"),
            ("Faro Portátil LED — Recargable", "faro-portatil-led", "Faro LED", "Faro portátil LED recargable 5,000 lm. Batería Li-Ion 8 h. Trípode incluido. IP67 sumergible.",
             ["Luminosidad: 5,000 lm LED","Batería Li-Ion recargable 8 h","Trípode ajustable incluido","IP67 sumergible 1 m","CE / IP67"], "Iluminación portátil · Campo · Rescate"),
            ("Linterna de Bombero — ATEX", "linterna-bombero-atex", "ATEX", "Linterna de bombero certificada ATEX Zona 1. LED 300 lm. Cuerpo polímero antiimpacto. Batería AA.",
             ["LED 300 lm — haz ajustable","ATEX Zona 1 certificada","Cuerpo polímero antiimpacto","Pilas AA 2× — 12 h continuas","ATEX / IECEx / NFPA 1971"], "ATEX · HAZMAT · Incendio estructural"),
            ("Linterna Casco — Montaje Rápido", "linterna-casco", "Casco", "Linterna de casco con montaje rápido para cascos NFPA 1971. LED dual (spot + flood). Batería recargable.",
             ["LED dual: spot 200 lm + flood","Montaje rápido casco NFPA 1971","Batería recargable Li-Ion","IP68 sumergible 2 m","NFPA 1971 / IP68"], "Casco bombero · Hands-free · Rescate"),
        ]),
        ("cuerdas-sistemas", "Cuerdas y Sistemas de Rescate", "NFPA 1983 / EN 1891", [
            ("Cuerda Estática Kernmantle 11 mm — NFPA", "cuerda-estatica-11mm", "11 mm", "Cuerda estática kernmantle 11 mm certificada NFPA 1983 para rescate. Poliamida 6.6. Resistencia 30 kN.",
             ["Kernmantle 11 mm poliamida 6.6","Resistencia rotura: 30 kN","Elongación: < 3% a 10% carga","Longitudes: 30, 60, 100, 200 m","NFPA 1983 / EN 1891 Tipo A"], "Rescate vertical · Rappel · Descenso"),
            ("Polea Doble — Rescate 4:1", "polea-doble-rescate", "Polea 4:1", "Polea doble para sistema de ventaja mecánica 4:1 en rescate. Placa de aluminio 7075. Carga 40 kN.",
             ["Carga trabajo: 40 kN (MBS)","Placa aluminio 7075 forjado","Rodamientos sellados inox","Diámetro polea: 50 mm","NFPA 1983 / EN 12278"], "Rescate vertical · Ventaja mecánica"),
            ("Descensor de Rack — Freno Variable", "descensor-rack", "Rack", "Descensor de rack con 6 barras para rappel controlado. Disipación de calor superior. Carga 250 kg persona.",
             ["6 barras de acero inoxidable","Carga persona: 250 kg","Disipación calor por convección","Compatible cuerdas 10–13 mm","NFPA 1983 / EN 341"], "Rappel · Descenso controlado · Evacuación"),
            ("Kit Cuerdas Rescate — Sistema Completo", "kit-cuerdas-rescate", "Kit", "Kit sistema de cuerdas para rescate: 2 cuerdas 60 m, poleas, descensor, mosquetones, bolsa y manual.",
             ["2 cuerdas estáticas 60 m × 11 mm","2 poleas dobles + mosquetones HMS","Descensor rack + freno de seguridad","Bolsa transporte 60 L","NFPA 1983 / EN 1891"], "Kit completo · Rescate vertical · Equipo"),
        ]),
    ]),
    # ── 6. RESCATE ACUÁTICO ────────────────────────────────────────────────
    "rescate-acuatico": ("Rescate Acuático", [
        ("trajes-neopreno", "Trajes de Neopreno para Rescate", "EN 14225 / NFPA 1952", [
            ("Traje Seco de Rescate — Trilaminate", "traje-seco-trilam", "Seco", "Traje seco trilaminate para rescate en agua fría. Sellos de cuello y muñeca de latex. Válvula de inflado.",
             ["Trilaminate 3 capas impermeable","Sellos latex cuello y muñeca","Válvula inflado y purga","Refuerzo rodillas y codos","EN 14225-2 / NFPA 1952"], "Agua fría · Rescate · Inmersión prolongada"),
            ("Traje Semiseco 5 mm — Rescate", "traje-semiseco-5mm", "Semiseco", "Traje semiseco neopreno 5 mm para rescate acuático en agua templada. Cremallera estanca. Refuerzo en rodillas.",
             ["Neopreno 5 mm alta elasticidad","Cremallera posterior estanca","Refuerzo rodillas Supratex","Costuras pegadas y cosidas","EN 14225-1 / NFPA 1952"], "Agua templada · Rescate · Operaciones"),
            ("Traje Húmedo 3 mm — Agua Cálida", "traje-humedo-3mm", "Húmedo 3mm", "Traje húmedo neopreno 3 mm para rescate en agua cálida tropical. Máxima movilidad. Protección UV.",
             ["Neopreno 3 mm flexible","Costuras flatlock anti-irritación","Protección UV 50+","Cremallera frontal corta","EN 14225-1"], "Agua cálida · Rescate rápido · Surf rescue"),
            ("Traje Rescate Aguas Bravas — Whitewater", "traje-aguas-bravas", "Whitewater", "Traje de rescate para aguas bravas (whitewater) con protección de impacto integrada. Neopreno reforzado 4 mm.",
             ["Neopreno 4 mm reforzado impacto","Protectores espuma EVA integrados","Costuras selladas triple capa","Drenaje rápido integrado","NFPA 1952 / EN 14225"], "Aguas bravas · Ríos · Inundaciones"),
        ]),
        ("chalecos-rescate", "Chalecos de Rescate PFD", "NFPA 1952 / USCG Type V", [
            ("PFD Tipo V — Rescatista Profesional", "pfd-tipo-v", "Tipo V", "PFD Tipo V para rescatistas profesionales. Flotabilidad 100 N. Arnés integrado. Quick-release. NFPA 1952.",
             ["Flotabilidad: 100 N mínimo","Arnés integrado NFPA 1952","Quick-release de emergencia","Bolsillos para herramientas","NFPA 1952 / USCG Type V"], "Rescate acuático · Profesional · Inundaciones"),
            ("PFD Rescate Aguas Bravas — Whitewater", "pfd-whitewater", "Whitewater", "PFD para rescate en aguas bravas con protección de impacto lateral. Tira reflectante. Quick-release lumbar.",
             ["Espuma PE flotabilidad 100 N","Protección impacto lateral","Quick-release cintura lumbar","Tira reflectante SOLAS","NFPA 1952 / EN ISO 12402-5"], "Aguas bravas · Ríos · Rescate activo"),
            ("PFD Inflable Manual — Emergencia", "pfd-inflable-manual", "Inflable", "PFD inflable manual 150 N para operaciones donde el PFD permanente no es práctico. Recarga CO₂.",
             ["Flotabilidad: 150 N inflado","Activación manual — tirón","Cilindro CO₂ 33 g recargable","Peso: 350 g desinflado","EN ISO 12402-3 / SOLAS"], "Emergencia · Backup · Operaciones"),
            ("Chaleco Salvavidas Víctima — 50 N", "chaleco-victima-50n", "Víctima", "Chaleco salvavidas para víctimas de inundación y rescate. 50 N flotabilidad. Talla universal. Reflectante.",
             ["Flotabilidad: 50 N auxiliar","Talla universal ajustable","Reflectante alta visibilidad","Asa de agarre posterior","EN ISO 12402-5 / CE"], "Víctimas · Inundaciones · Evacuación"),
        ]),
        ("tablas-rescate", "Tablas de Rescate Acuático", "NFPA 1952 / USCG", [
            ("Tabla de Rescate — Polietileno", "tabla-rescate-pe", "PE", "Tabla de rescate de polietileno rotomoldeado para rescate en aguas abiertas. Asas perimetrales. Flotabilidad 150 kg.",
             ["Polietileno rotomoldeado UV","Flotabilidad: 150 kg de carga","Asas perimetrales 8 puntos","Longitud: 1.8 m × 0.6 m","NFPA 1952 / USCG"], "Aguas abiertas · Playa · Inundaciones"),
            ("Tabla Espinal Acuática — Rescate", "tabla-espinal-acuatica", "Espinal", "Tabla espinal flotante para inmovilización y rescate acuático. Correas de sujeción. Flotabilidad neutra ajustable.",
             ["Polietileno flotante 15 kg","Correas sujeción 3 puntos","Inmovilizador cefálico incluido","Longitud: 1.83 m estándar","NFPA 1952 / EN 1865"], "Inmovilización acuática · Rescate espinal"),
            ("Sled de Rescate — Hielo/Agua", "sled-rescate-hielo", "Sled", "Sled de rescate para hielo y agua abierta. Superficie antiderrapante. Asas de arrastre. 200 kg carga.",
             ["Polietileno alta densidad","Carga: 200 kg máximo","Superficie antiderrapante","Asas arrastre 4 puntos","NFPA 1670 / USCG"], "Hielo · Agua abierta · Rescate estático"),
            ("Torpedo de Rescate — Flotador", "torpedo-rescate", "Torpedo", "Torpedo flotador de rescate (rescue tube) para rescate en piscina, playa y aguas abiertas. Cinta 180 cm.",
             ["Espuma EVA alta flotabilidad","Cinta bandolera 180 cm","Longitud torpedo: 100 cm","Peso: 1.2 kg","USCG / EN ISO 12402"], "Playa · Piscina · Rescate rápido"),
        ]),
        ("botes-inflables", "Botes Inflables de Rescate", "NFPA 1925 / SOLAS", [
            ("IRB Rescate — Motor Fuera de Borda", "irb-rescate-motor", "IRB", "Bote inflable de rescate (IRB) con motor fuera de borda 25 HP. Piso de aluminio rígido. 6 personas.",
             ["Inflable PVC/Hypalon 1.2 mm","Motor fuera borda 25 HP","