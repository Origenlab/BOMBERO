#!/usr/bin/env python3
"""
BOMBERO.MX — Full site generator for 10 categories × 7 subcategories × 4 products
All files use CategoriaLayout and ProductoLayout exactly as existing patterns.
"""
import os, sys

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
def esc(s): return str(s).replace("\\","\\\\").replace("`","\\`").replace("${","\\${").replace('"','\\"')

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  + {path.replace(BASE+'/', '')}")

# ─────────────────────────────────────────────────────────────────────────────
# TEMPLATE HELPERS
# ─────────────────────────────────────────────────────────────────────────────

def categoria_page(
    cat_slug, cat_label, cat_href,
    subcat_slug, subcat_label,
    hero_badge, hero_title, hero_highlight, hero_subtitle,
    cta_quote,
    products,           # list of dicts with: slug, nombre, badge, badgeColor, descripcion, caracteristicas(5), aplicacion
    specs_cards,        # list of 3 dicts: title, icon, description
    tabla_headers,      # list of strings
    tabla_rows,         # list of lists of cell dicts {text, chip?}
    faqs,               # list of {q, a}
    related_cards,      # list of {title, icon, image, href, buttonText, items:[{label,href}]}
    image_offset=0,
):
    SLUG = f"/productos/{cat_slug}/{subcat_slug}/"
    keywords = [
        f"{subcat_label} certificado México",
        f"{subcat_label} bomberos México",
        f"comprar {subcat_label} México",
        f"{subcat_label} NFPA",
        f"{cat_label} {subcat_label}",
    ]
    
    cards_js = []
    for i, p in enumerate(products):
        chars = "[" + ", ".join(f'"{esc(c)}"' for c in p["caracteristicas"]) + "]"
        cards_js.append(f"""  {{
    nombre: "{esc(p['nombre'])}",
    slug: "{SLUG}{p['slug']}/",
    badge: "{esc(p['badge'])}",
    badgeColor: "{p['badgeColor']}" as const,
    imagen: "{img(image_offset + i)}",
    descripcion: "{esc(p['descripcion'])}",
    caracteristicas: {chars},
    aplicacion: "{esc(p['aplicacion'])}",
  }}""")
    
    specs_js = []
    for s in specs_cards:
        specs_js.append(f'  {{ title: "{esc(s["title"])}", icon: "{s["icon"]}", description: "{esc(s["description"])}" }}')
    
    rows_js = []
    for row in tabla_rows:
        cells = []
        for c in row:
            if "chip" in c:
                cells.append(f'{{ text: "{esc(c["text"])}", chip: "{c["chip"]}" as const }}')
            else:
                cells.append(f'{{ text: "{esc(c["text"])}" }}')
        rows_js.append(f"  {{ cells: [{', '.join(cells)}] }}")
    
    faqs_js = []
    for f in faqs:
        faqs_js.append(f'  {{ q: "{esc(f["q"])}", a: "{esc(f["a"])}" }}')
    
    rel_js = []
    for r in related_cards:
        items_js = ", ".join(f'{{ label: "{esc(i["label"])}", href: "{i["href"]}" }}' for i in r.get("items", []))
        rel_js.append(f"""  {{
    title: "{esc(r['title'])}",
    icon: "{r.get('icon','shield')}",
    image: "{r['image']}",
    href: "{r['href']}",
    buttonText: "{esc(r['buttonText'])}",
    items: [{items_js}],
  }}""")
    
    hdrs = "[" + ", ".join(f'"{h}"' for h in tabla_headers) + "]"
    
    return f"""---

import CategoriaLayout from "@layouts/CategoriaLayout.astro";

const SLUG = "{SLUG}";

const productoCards = [
{chr(10).join(cards_js)}
];

const specsCards = [
{chr(10).join(specs_js)}
];

const tablaHeaders = {hdrs};

const tablaRows = [
{chr(10).join(rows_js)}
];

const relacionadoCards = [
{chr(10).join(rel_js)}
];

const faqs = [
{chr(10).join(faqs_js)}
];
---

<CategoriaLayout
  title="{esc(subcat_label)} | {esc(cat_label)} | BOMBERO.MX"
  description="{esc(hero_subtitle[:155])}"
  keywords={{[{", ".join(f'"{k}"' for k in keywords)}]}}
  type="product"
  canonical={{SLUG}}
  image="{img(image_offset)}"
  breadcrumb={{[
    {{ label: "Inicio", href: "/" }},
    {{ label: "Productos", href: "/productos/" }},
    {{ label: "{esc(cat_label)}", href: "{cat_href}" }},
    {{ label: "{esc(subcat_label)}" }},
  ]}}
  heroBadge="{esc(hero_badge)}"
  heroTitle="{esc(hero_title)}"
  heroTitleHighlight="{esc(hero_highlight)}"
  heroSubtitle="{esc(hero_subtitle)}"
  heroSeoBlocks={{[
    {{
      title: "Distribuidores de {esc(subcat_label)} en México",
      text: "En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de <strong>{esc(subcat_label)}</strong> certificado para cuerpos de bomberos, protección civil e industria en los 32 estados de México.",
    }},
    {{
      title: "Documentación Técnica para Licitaciones",
      text: "Cada equipo incluye <strong>ficha técnica y certificado de laboratorio</strong> acreditado ISO/IEC 17025 — documentación indispensable para <strong>licitaciones gubernamentales</strong> en México.",
    }},
  ]}}
  ctaBarQuote="{esc(cta_quote)}"
  productosLabel="{esc(subcat_label)}"
  productosTitle="Modelos de {esc(subcat_label)}"
  productosDesc="Selecciona el modelo adecuado para tu aplicación operativa. Todos los equipos certificados con normas NFPA, UL o EN vigentes."
  productosContent={{`<p>Los <strong>{esc(subcat_label)}</strong> disponibles en BOMBERO.MX están certificados con las normas más exigentes del mercado. Documentación completa para <strong>licitaciones en los 32 estados de México</strong>. Asesoría técnica gratuita para especificaciones y proyectos.</p>`}}
  productoCards={{productoCards}}
  specsTitle="Certificaciones y Especificaciones Técnicas"
  specsDesc="Cada equipo ha sido evaluado en laboratorio acreditado y cumple las normas internacionales aplicables."
  specsContent={{`<p>La selección del equipo correcto requiere analizar el entorno operativo, el nivel de riesgo y las normas aplicables. En <strong>BOMBERO.MX</strong> elaboramos especificaciones técnicas para <strong>licitaciones públicas</strong> sin costo adicional.</p>`}}
  specsCards={{specsCards}}
  comparativaTitle="Comparativa de Modelos"
  comparativaDesc="Compara especificaciones técnicas clave para seleccionar el equipo correcto."
  comparativaContent={{`<p>Consulta a nuestro equipo técnico para una <strong>recomendación personalizada</strong> según el entorno operativo y los requisitos de tu corporación o brigada industrial.</p>`}}
  tablaHeaders={{tablaHeaders}}
  tablaRows={{tablaRows}}
  relacionadosTitle="Catálogo Relacionado"
  relacionadosDesc="Explora los equipos complementarios certificados para completar tu sistema de protección."
  relacionadosContent={{`<p>Todos los equipos de <strong>BOMBERO.MX</strong> están certificados con la misma edición de norma vigente y documentados para <strong>licitaciones en los 32 estados de México</strong>.</p>`}}
  relacionadoCards={{relacionadoCards}}
  faqs={{faqs}}
/>
"""


def producto_page(
    cat_slug, cat_label, cat_href,
    subcat_slug, subcat_label,
    prod_slug, prod_nombre,
    hero_badge, hero_title, hero_highlight, hero_subtitle,
    cta_quote,
    categoria_badge,
    prod_badges,   # list of {modifier, text}
    prod_title, prod_title_sub, prod_desc,
    prod_features, prod_app_tags,
    gallery_imgs,  # list of {src, alt}
    capas,         # list of {num, titulo, descripcion, specs:[{label,valor}], color}
    especificaciones,  # list of {categoria, label, valor}
    cat_class,     # dict {cat: css-class}
    aplicaciones,  # list of {titulo, desc}
    certs_title, certs_desc, cert_items,  # list of {code, desc}
    specs_rapidas, # list of {label, valor}
    otros_modelos, # list of {label, href}
    epp,           # list of {label, href, tag}
    faqs,          # list of {q, a}
    relacionados,  # list of {title, badge, description, href, buttonText, image}
    image_idx=0,
):
    SLUG = f"/productos/{cat_slug}/{subcat_slug}/{prod_slug}/"
    
    badges_js = "[" + ", ".join(f'{{ modifier: "{esc(b["modifier"])}", text: "{esc(b["text"])}" }}' for b in prod_badges) + "]"
    feats_js = "[" + ", ".join(f'"{esc(f)}"' for f in prod_features) + "]"
    tags_js = "[" + ", ".join(f'"{esc(t)}"' for t in prod_app_tags) + "]"
    
    gallery_js = []
    for g in gallery_imgs:
        gallery_js.append(f'  {{ src: "{g["src"]}", alt: "{esc(g["alt"])}" }}')
    
    capas_js = []
    for c in capas:
        specs_inner = ", ".join(f'{{ label: "{esc(s["label"])}", valor: "{esc(s["valor"])}" }}' for s in c["specs"])
        capas_js.append(f"""  {{
    num: "{c['num']}",
    titulo: "{esc(c['titulo'])}",
    descripcion: "{esc(c['descripcion'])}",
    specs: [{specs_inner}],
    color: "{c['color']}" as const,
  }}""")
    
    specs_js = []
    for e in especificaciones:
        specs_js.append(f'  {{ categoria: "{esc(e["categoria"])}", label: "{esc(e["label"])}", valor: "{esc(e["valor"])}" }}')
    
    cat_class_js = "{ " + ", ".join(f'"{k}": "{v}"' for k, v in cat_class.items()) + " }"
    
    aplic_js = []
    for a in aplicaciones:
        aplic_js.append(f'  {{ titulo: "{esc(a["titulo"])}", desc: "{esc(a["desc"])}" }}')
    
    cert_js = []
    for c in cert_items:
        cert_js.append(f'  {{ code: "{esc(c["code"])}", desc: "{esc(c["desc"])}" }}')
    
    sr_js = []
    for s in specs_rapidas:
        sr_js.append(f'  {{ label: "{esc(s["label"])}", valor: "{esc(s["valor"])}" }}')
    
    om_js = []
    for m in otros_modelos:
        om_js.append(f'  {{ label: "{esc(m["label"])}", href: "{m["href"]}" }}')
    
    epp_js = []
    for e in epp:
        epp_js.append(f'  {{ label: "{esc(e["label"])}", href: "{e["href"]}", tag: "{esc(e["tag"])}" }}')
    
    faqs_js = []
    for f in faqs:
        faqs_js.append(f'  {{ q: "{esc(f["q"])}", a: "{esc(f["a"])}" }}')
    
    rel_js = []
    for r in relacionados:
        rel_js.append(f"""  {{
    title: "{esc(r['title'])}",
    badge: "{esc(r['badge'])}",
    description: "{esc(r['description'])}",
    href: "{r['href']}",
    buttonText: "{esc(r['buttonText'])}",
    image: "{r['image']}",
  }}""")
    
    IMAGE = img(image_idx)
    
    return f"""---

import ProductoLayout from "@layouts/ProductoLayout.astro";

const IMAGE = "{IMAGE}";
---

<ProductoLayout
  title="{esc(prod_nombre)} | {esc(subcat_label)} | BOMBERO.MX"
  description="{esc(prod_desc[:155])}"
  keywords={{["{esc(prod_nombre.lower())}", "{esc(subcat_label.lower())} México", "{esc(cat_label.lower())} certificado México"]}}
  canonical="{SLUG}"
  image={{IMAGE}}

  breadcrumb={{[
    {{ label: "Inicio", href: "/" }},
    {{ label: "Productos", href: "/productos/" }},
    {{ label: "{esc(cat_label)}", href: "{cat_href}" }},
    {{ label: "{esc(subcat_label)}", href: "/productos/{cat_slug}/{subcat_slug}/" }},
    {{ label: "{esc(prod_nombre)}" }},
  ]}}

  heroBadge="{esc(hero_badge)}"
  heroTitle="{esc(hero_title)}"
  heroTitleHighlight="{esc(hero_highlight)}"
  heroSubtitle="{esc(hero_subtitle)}"
  heroSeoBlocks={{[
    {{
      title: "{esc(prod_nombre)} — Distribuidor Autorizado México",
      text: "En <strong>BOMBERO.MX</strong> distribuimos <strong>{esc(prod_nombre)}</strong> certificado para cuerpos de bomberos y protección civil en los 32 estados de México. Documentación técnica completa para licitaciones.",
    }},
    {{
      title: "Certificaciones Internacionales con Documentación Incluida",
      text: "Cada equipo incluye <strong>ficha técnica y certificado de laboratorio</strong> acreditado ISO/IEC 17025 — indispensable para <strong>licitaciones gubernamentales</strong> en los 32 estados de México.",
    }},
  ]}}

  ctaBarQuote="{esc(cta_quote)}"

  productoCategoria="{esc(categoria_badge)}"
  productoBadges={{{badges_js}}}
  productoMasVendido={{false}}
  productoTitle="{esc(prod_title)}"
  productoTitleSub="{esc(prod_title_sub)}"
  productoDesc="{esc(prod_desc)}"
  productoFeatures={{{feats_js}}}
  productoAppTags={{{tags_js}}}

  gallery={{[
{chr(10).join(gallery_js)}
  ]}}

  capasEyebrow="Componentes y Construcción"
  capasTitle="Anatomía del Equipo"
  capasDesc="Cada componente cumple una función específica certificada en laboratorio independiente."
  capas={{[
{chr(10).join(capas_js)}
  ]}}

  especificaciones={{[
{chr(10).join(specs_js)}
  ]}}
  catClass={{{cat_class_js}}}

  aplicacionesTitle="Aplicaciones del {esc(prod_title)}"
  aplicacionesContent="<p>Este equipo está diseñado para entornos operativos específicos donde el nivel de riesgo y los requerimientos de protección son críticos. La selección correcta del equipo salva vidas.</p>"
  aplicaciones={{[
{chr(10).join(aplic_js)}
  ]}}

  certsTitle="{esc(certs_title)}"
  certsDesc="{esc(certs_desc)}"
  certItems={{[
{chr(10).join(cert_js)}
  ]}}

  specsRapidas={{[
{chr(10).join(sr_js)}
  ]}}
  otrosModelos={{[
{chr(10).join(om_js)}
  ]}}
  otrosModelosSeeAllHref="/productos/{cat_slug}/{subcat_slug}/"
  epp={{[
{chr(10).join(epp_js)}
  ]}}
  eppSeeAllHref="/productos/"
  articulos={{[
    {{ label: "Catálogo {esc(cat_label)}", href: "{cat_href}", tag: "Catálogo" }},
    {{ label: "{esc(subcat_label)}", href: "/productos/{cat_slug}/{subcat_slug}/", tag: "Producto" }},
    {{ label: "EPP Completo para Bomberos", href: "/productos/", tag: "Guía" }},
  ]}}
  directorioLinks={{[
    {{ label: "Bomberos CDMX", href: "/directorio/ciudad-de-mexico/" }},
    {{ label: "Bomberos Guadalajara", href: "/directorio/jalisco/" }},
    {{ label: "Bomberos Monterrey", href: "/directorio/nuevo-leon/" }},
    {{ label: "Directorio Nacional", href: "/directorio/" }},
  ]}}

  faqTitle="Preguntas — {esc(prod_nombre)}"
  faqDescription="Resolvemos las dudas técnicas más frecuentes sobre certificaciones, uso y mantenimiento."
  faqs={{[
{chr(10).join(faqs_js)}
  ]}}

  relacionados={{[
{chr(10).join(rel_js)}
  ]}}
/>
"""


# ─────────────────────────────────────────────────────────────────────────────
# STANDARD FAQs, SPECS, EPP, CERTS reused across categories
# ─────────────────────────────────────────────────────────────────────────────

def std_certs():
    return [
        {"code": "NFPA", "desc": "National Fire Protection Association — norma de referencia"},
        {"code": "UL", "desc": "Underwriters Laboratories — certificación de producto"},
        {"code": "EN 137", "desc": "Norma europea para equipos de respiración autónoma"},
        {"code": "ISO 9001", "desc": "Sistema de gestión de calidad del fabricante"},
        {"code": "ISO/IEC 17025", "desc": "Laboratorio acreditado para pruebas de certificación"},
    ]

def std_epp_bombero():
    return [
        {"label": "Traje Estructural NFPA 1971", "href": "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/", "tag": "Traje"},
        {"label": "Casco Estructural NFPA 1971", "href": "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/", "tag": "Casco"},
        {"label": "Guantes Estructurales", "href": "/productos/guantes-para-bomberos/estructurales/", "tag": "Guantes"},
        {"label": "Botas Estructurales", "href": "/productos/botas-para-bomberos/estructural/", "tag": "Pies"},
        {"label": "SCBA NFPA 1981", "href": "/productos/scba/circuito-abierto-nfpa-1981/", "tag": "Respiración"},
    ]

def std_faqs_equipo(nombre, norma="NFPA"):
    return [
        {"q": f"¿Qué certificación requiere el {nombre}?",
         "a": f"El <strong>{nombre}</strong> debe cumplir con la norma <strong>{norma}</strong> vigente. Cada equipo de BOMBERO.MX incluye el certificado de laboratorio acreditado ISO/IEC 17025 — documentación indispensable para licitaciones gubernamentales en México."},
        {"q": "¿Qué documentación se entrega con cada equipo?",
         "a": "Cada equipo incluye <strong>ficha técnica completa</strong>, <strong>manual de usuario</strong> y <strong>certificado de laboratorio</strong> acreditado. La documentación está disponible en español y en los formatos requeridos para licitaciones públicas en los 32 estados de México."},
        {"q": "¿Tienen servicio técnico y soporte en México?",
         "a": "Sí. <strong>BOMBERO.MX</strong> ofrece soporte técnico especializado, asesoría para especificaciones en licitaciones y servicio postventa en los 32 estados de México. Contacta a nuestro equipo a través de WhatsApp o correo electrónico."},
    ]

def std_related_3(cat_slug, cat_label, exclude_subcat=""):
    cats = [
        {"title": "Trajes de Bombero", "badge": "NFPA 1971", "desc": "Trajes estructurales y forestales certificados.", "href": "/productos/trajes-para-bomberos/", "btn": "Ver Trajes", "img": "/images/base/traje-estructural.avif"},
        {"title": "Cascos para Bombero", "badge": "NFPA 1971", "desc": "Cascos estructurales y de rescate certificados.", "href": "/productos/cascos-para-bomberos/", "btn": "Ver Cascos", "img": "/images/base/casco-estructural.avif"},
        {"title": "SCBA Autónomo", "badge": "NFPA 1981", "desc": "Equipos de respiración autónoma certificados.", "href": "/productos/scba/", "btn": "Ver SCBA", "img": "/images/base/equipo-completo.avif"},
        {"title": "Extintores", "badge": "NOM-154-SCFI", "desc": "Extintores portátiles y rodantes certificados.", "href": "/productos/extintores/", "btn": "Ver Extintores", "img": "/images/base/camion-bomberos.avif"},
    ]
    result = []
    for c in cats:
        if c["href"] != f"/productos/{cat_slug}/":
            result.append({"title": c["title"], "badge": c["badge"], "description": c["desc"], "href": c["href"], "buttonText": c["btn"], "image": c["img"]})
        if len(result) == 3:
            break
    return result


# ─────────────────────────────────────────────────────────────────────────────
# CAT 1: EXTINTORES
# ─────────────────────────────────────────────────────────────────────────────

def gen_extintores():
    cat_slug = "extintores"
    cat_label = "Extintores"
    cat_href = "/productos/extintores/"
    
    subcats = [
        # (subcat_slug, subcat_label, hero_badge, hero_title, hero_highlight, hero_subtitle, cta, products)
        ("co2", "Extintores CO₂", "CO₂ · Clase B/C · NOM-154-SCFI", "Extintores CO₂", "Sin Residuo",
         "Extintores de CO₂ para fuegos clase B y C. Sin residuo ni daño eléctrico. 2 a 25 kg certificados NOM-154-SCFI-2005 y UL 154.",
         "Cotizar Extintores CO₂",
         [
             ("extintor-co2-2kg","CO₂ 2 kg","2 kg","smoke","Extintor de CO₂ 2 kg para equipos eléctricos y laboratorios. Sin residuo. Clase B y C. Certificado NOM-154-SCFI-2005.",
              ["CO₂ 2 kg a 55–60 bar","Clase B y C certificado","Sin residuo ni daño eléctrico","Alcance: 1.5–2.5 m","NOM-154-SCFI-2005"],
              "Cómputo · Servidores · Laboratorios"),
             ("extintor-co2-5kg","CO₂ 5 kg — Sala de Servidores","5 kg","ember","Extintor de CO₂ 5 kg para salas de servidores y cuartos de telecomunicaciones. Mayor tiempo de descarga. Certificado NOM-154-SCFI-2005.",
              ["CO₂ 5 kg a 55–60 bar","Manguera flexible 90 cm","Manómetro clase 2.5","Alcance: 2.0–3.5 m","NOM-154-SCFI-2005 / UL 154"],
              "Servidores · Telecomunicaciones · Electrónica"),
             ("extintor-co2-10kg","CO₂ 10 kg Rodante — Subestaciones","10 kg","fire","Extintor rodante de CO₂ 10 kg para subestaciones eléctricas y centros de datos. Manguera 1.5 m con corneta antiestática.",
              ["CO₂ 10 kg en carro de acero","Manguera 1.5 m antiestática","Ruedas de goma 200 mm","Alcance: 3.0–4.5 m","NOM-154-SCFI-2005"],
              "Subestaciones · Control industrial · Data center"),
             ("extintor-co2-25kg","CO₂ 25 kg Rodante — Gran Capacidad","25 kg","fire","Extintor rodante de CO₂ 25 kg para data centers de escala masiva y subestaciones de alta tensión. Manguera 3 m.",
              ["CO₂ 25 kg en carro reforzado","Manguera armada 3 m","Ruedas neumáticas 250 mm","Alcance: 4.0–6.0 m","NOM-154-SCFI-2005 / UL 154"],
              "Alta tensión · Data center · Generadores"),
         ], 2),
        ("polvo-abc", "Extintores Polvo ABC", "Polvo ABC · Clase A/B/C · NOM-154-SCFI", "Extintores Polvo ABC", "Multipropósito",
         "Extintores de polvo químico seco ABC para fuegos clase A, B y C. El extintor multipropósito más versátil. 1 kg a 150 kg certificados NOM-154-SCFI-2005.",
         "Cotizar Extintores Polvo ABC",
         [
             ("extintor-abc-1kg","Polvo ABC 1 kg — Automotriz","1 kg","smoke","Extintor compacto de polvo ABC 1 kg para vehículos y motocicletas. Cabe en guantera. Clase A, B y C.",
              ["Polvo fosfato monoamónico ABC","Presión N₂: 14–18 bar","Dimensiones: 27 × 9 cm","Alcance: 1.0–2.0 m","NOM-154-SCFI-2005"],
              "Vehículos · Motos · Embarcaciones"),
             ("extintor-abc-4kg","Polvo ABC 4 kg — Oficinas","4 kg","fire","El extintor más vendido para oficinas y locales comerciales. Polvo ABC fosfato monoamónico, clase A, B y C. Bracket de pared incluido.",
              ["4 kg polvo fosfato monoamónico","Manguera 60 cm con boquilla","Manómetro indicador de presión","Alcance: 2.5–4.0 m","NOM-154-SCFI-2005 / UL 299"],
              "Oficinas · Comercio · Industria ligera"),
             ("extintor-abc-9kg","Polvo ABC 9 kg — Industrial","9 kg","ember","Extintor de polvo ABC 9 kg para plantas industriales y hangares. 20 s de descarga y 6 m de alcance. Clase A, B y C.",
              ["9 kg polvo ABC industrial","Manguera armada 80 cm","Alcance: 4.0–6.0 m","Soporte mural incluido","NOM-154-SCFI-2005 / UL 299"],
              "Industria · Hangares · Bodegas"),
             ("extintor-abc-50kg","Polvo ABC 50 kg — Rodante","50 kg","fire","Extintor rodante de polvo ABC 50 kg para la gran industria petroquímica y aeropuertos. 60 s de descarga continua.",
              ["50 kg polvo ABC sobre carro de acero","Manguera armada 5 m con lanza","Ruedas neumáticas 300 mm","Alcance: 6.0–9.0 m","NOM-154-SCFI-2005"],
              "Petroquímica · Aeropuertos · Gran industria"),
         ], 4),
        ("espuma-afff", "Extintores Espuma AFFF", "AFFF · Clase A/B · NOM-154-SCFI", "Extintores Espuma AFFF", "Líquidos Inflamables",
         "Extintores de espuma AFFF para fuegos clase A y B. Ideales para hidrocarburos, gasolina y líquidos inflamables. 9 L a 100 L certificados NOM-154-SCFI-2005.",
         "Cotizar Extintores Espuma AFFF",
         [
             ("espuma-afff-9l","Espuma AFFF 9 L — Portátil","9 L","smoke","Extintor de espuma AFFF 9 L para fuegos de hidrocarburos y líquidos inflamables. Cobertura de 1 m² de espuma blanket. Clase A y B.",
              ["AFFF 6×3 al 3% / 6%","Capacidad: 9 L de solución","Cobertura: ~1 m² blanket","Alcance: 3.0–5.0 m","NOM-154-SCFI-2005 / UL 162"],
              "Hidrocarburos · Gasolina · Dieseléctrico"),
             ("espuma-afff-50l","Espuma AFFF 50 L — Rodante","50 L","ember","Extintor rodante de espuma AFFF 50 L para plantas de proceso, depósitos de combustible y estaciones de servicio. Manguera 5 m.",
              ["AFFF 50 L en carro de acero","Manguera 5 m con lanza ejectora","Caudal: ~15 L/min","Cobertura: ~8 m² blanket","NOM-154-SCFI-2005"],
              "Depósitos combustible · Proceso · Aviación"),
             ("espuma-afff-100l","Espuma AFFF 100 L — Estación","100 L","fire","Extintor de espuma AFFF 100 L para estaciones de bomberos y plantas petroquímicas. Mayor capacidad para incendios de gran superficie.",
              ["AFFF 100 L sobre carro robusto","Manguera 8 m con monitor","Cobertura: ~16 m² blanket","Alcance: 6.0–10.0 m","NOM-154-SCFI-2005 / NFPA 11"],
              "Refinerías · Estaciones bomberos · Plantas"),
             ("espuma-afff-alcohol","Espuma AFFF-AR — Alcoholes","AR","smoke","Extintor de espuma AFFF-AR (Alcohol Resistant) para alcoholes, cetonas y disolventes. Concentrado al 3%×3%/6%×6%. Clase A y B.",
              ["AFFF-AR resistente a alcoholes","Concentración 3%×3% y 6%×6%","Compatible con etanol, metanol","Clase A, B certificado","NOM-154-SCFI-2005 / UL 162"],
              "Alcoholes · Cetonas · Disolventes"),
         ], 1),
        ("agua-presurizada", "Extintores Agua Presurizada", "Agua · Clase A · NOM-154-SCFI", "Extintores Agua", "Sólidos Combustibles",
         "Extintores de agua presurizada para fuegos clase A en sólidos combustibles. Máxima efectividad en madera, papel y tela. 9 L a 15 L certificados.",
         "Cotizar Extintores Agua Presurizada",
         [
             ("agua-presurizada-9l","Agua Presurizada 9 L — Clase A","9 L","smoke","Extintor de agua presurizada 9 L para fuegos clase A de sólidos combustibles. Máxima efectividad en papel, madera y tela.",
              ["Agua potable 9 L presurizada","Presión: 12–14 bar con aire","Clase A certificado","Alcance: 6.0–8.0 m","NOM-154-SCFI-2005 / UL 8"],
              "Papel · Madera · Libros · Archivos"),
             ("agua-presurizada-15l","Agua Presurizada 15 L — Archivo","15 L","ember","Extintor de agua 15 L de mayor capacidad para archivo histórico, bibliotecas y bodegas de papel.",
              ["Agua 15 L presurizada N₂","Mayor tiempo de descarga: ~55 s","Boquilla regulable chorro/niebla","Alcance: 6.0–8.0 m","NOM-154-SCFI-2005"],
              "Archivos · Bibliotecas · Papel"),
             ("agua-neblina-9l","Agua Niebla 9 L — Sistemas Eléctricos","9 L","fire","Extintor de agua nebulizada 9 L para fuegos clase A y equipos eléctricos de hasta 35 kV. La niebla no conduce electricidad.",
              ["Agua desmineralizada nebulizada","Clase A y seguro en 35 kV","Boquilla de micronebulización","Alcance: 3.0–5.0 m","NOM-154-SCFI-2005 / LPCB"],
              "Clase A · Eléctrico hasta 35 kV"),
             ("agua-aditivo-9l","Agua + Aditivo AFFF 9 L","9 L","smoke","Extintor de agua con aditivo humectante para mayor penetración en sólidos y mayor efectividad en clase A profundo.",
              ["Agua + 1% aditivo humectante","Mayor penetración en sólidos","Clase A mejorado certificado","Alcance: 5.0–7.0 m","NOM-154-SCFI-2005"],
              "Sólidos profundos · Incendio clase A"),
         ], 0),
        ("halon-sustitutos", "Agentes Limpios (FM-200 / Novec)", "FM-200 · Novec 1230 · NFPA 2001", "Agentes Limpios", "Sin Residuo",
         "Extintores de agentes limpios FM-200 (HFC-227ea) y Novec 1230 para protección de equipos electrónicos de valor. Certificados NFPA 2001 y UL 2166.",
         "Cotizar Agentes Limpios FM-200 / Novec",
         [
             ("fm200-2kg","FM-200 2 kg — Electrónica","2 kg","smoke","Extintor de FM-200 (HFC-227ea) 2 kg para protección de equipos electrónicos de alto valor. Sin residuo, sin daño al equipo. NFPA 2001.",
              ["FM-200 (HFC-227ea) 2 kg","Sin residuo — cero daño al equipo","Clase B y C certificado","Concentración extinción: 7.0% v/v","NFPA 2001 / UL 2166"],
              "Electrónica de alto valor · Servidores"),
             ("fm200-7kg","FM-200 7 kg — Sala Servidores","7 kg","ember","Extintor de FM-200 7 kg para salas de servidores y archivos de valor. Mayor cobertura volumétrica. NFPA 2001.",
              ["FM-200 7 kg alta capacidad","Concentración 7.0% v/v estándar","Tiempo descarga: <10 s NFPA 2001","Sin residuo ni corrosión","NFPA 2001 / UL 2166 / ISO 14520"],
              "Data centers · Archivos · Museos"),
             ("novec-1230-3kg","Novec 1230 3 kg — Artes y Museos","3 kg","fire","Extintor de Novec 1230 (FK-5-1-12) 3 kg. GWP = 1, ODP = 0. El agente más ecológico del mercado. Certificado NFPA 2001.",
              ["Novec 1230 (FK-5-1-12) 3 kg","GWP = 1 · ODP = 0 — Ecológico","Sin residuo — seguro en arte","Concentración: 4.2–5.9% v/v","NFPA 2001 / EPA SNAP approved"],
              "Museos · Arte · Archivos históricos"),
             ("halon-sustituto-6kg","Agente Limpio 6 kg — Universal","6 kg","smoke","Extintor de agente limpio HFC/FIC 6 kg para sistemas fijos de supresión portátil. Compatible con sensores de ionización.",
              ["Agente HFC/FIC 6 kg","Compatible con sistema de detección","Sin residuo activo","Concentración personalizable","NFPA 2001 / UL 2166"],
              "Sistemas mixtos · Protección especial"),
         ], 6),
        ("modular-industrial", "Sistemas Modulares Industriales", "Modular · Industrial · NFPA 17", "Sistemas Modulares", "Industria y Aeropuertos",
         "Sistemas modulares de extinción industrial para fábricas, plantas y aeropuertos. Polvo seco y agentes limpios en configuración automática o manual. NFPA 17.",
         "Cotizar Sistemas Modulares Industriales",
         [
             ("modular-fm200-50kg","Sistema Modular FM-200 50 kg — Sala Técnica","50 kg","smoke","Sistema modular de FM-200 50 kg para salas técnicas y cuartos de servidores de hasta 400 m³. Activación automática o manual. NFPA 2001.",
              ["FM-200 50 kg en módulo fijo","Activación automática 24 V DC","Cobertura hasta 400 m³","Tiempo descarga < 10 s NFPA 2001","NFPA 2001 / FM approved"],
              "Salas técnicas · Control · Data center"),
             ("modular-polvo-100kg","Sistema Modular Polvo 100 kg — Pintura","100 kg","ember","Sistema modular de polvo seco 100 kg para cabinas de pintura, hangares y procesos industriales. Activación neumática o eléctrica.",
              ["Polvo BC/ABC 100 kg modular","Activación neumática 24 bar o eléctrica","Distribuidores de descarga 6 puntos","Área cobertura: ~300 m²","NFPA 17 / FM approved"],
              "Cabinas pintura · Hangares · Industria"),
             ("modular-espuma-200l","Sistema Modular Espuma 200 L — Aviación","200 L","fire","Sistema modular de espuma AFFF 200 L para hangares de aviación y plataformas. Descarga en < 30 s. Certificado NFPA 11 y ICAO.",
              ["AFFF 200 L presurizado modular","Descarga total < 30 s — ICAO","Rociadores de alta expansion","Área cobertura: hasta 500 m²","NFPA 11 / ICAO / FAA"],
              "Hangares aviación · Plataformas · ARFF"),
             ("sistema-aerosol","Sistema Aerosol Condensado — Compacto","Aerosol","smoke","Sistema de aerosol condensado de potasio para protección de espacios confinados. Sin agente a presión, sin cilindros. NFPA 2010.",
              ["Generador de aerosol condensado K","Sin presión almacenada — seguro","Instalación en espacio confinado","Activación térmica o eléctrica","NFPA 2010 / UL 2775"],
              "Espacios confinados · Cofres · Cajas"),
         ], 7),
        ("carros-extincion", "Carros de Extinción Rodantes", "Carro · 25-150 kg · NOM-154-SCFI", "Carros de Extinción", "25 a 150 kg",
         "Carros de extinción rodantes de polvo, espuma y CO₂ de 25 a 150 kg. Para industria pesada, aeropuertos y procesos de alto riesgo. Certificados NOM-154-SCFI-2005.",
         "Cotizar Carros de Extinción",
         [
             ("carro-25kg","Carro de Extinción 25 kg — Polvo ABC","25 kg","smoke","Carro de extinción de polvo ABC 25 kg para industria y estaciones de servicio. Carro de acero tubular, manguera 5 m.",
              ["Polvo ABC 25 kg en carro robusto","Manguera armada 5 m con lanza","Carro acero tubular galvanizado","Ruedas neumáticas 200 mm","NOM-154-SCFI-2005 / UL 299"],
              "Industria · Estaciones servicio"),
             ("carro-50kg","Carro de Extinción 50 kg — Industrial","50 kg","ember","Carro de extinción de polvo ABC 50 kg para plantas industriales y bodegas de alto riesgo. 60 s de descarga.",
              ["Polvo ABC 50 kg en carro industrial","60 s descarga continua","Manguera 5 m con lanza dispersora","Ruedas neumáticas 250 mm","NOM-154-SCFI-2005"],
              "Plantas industriales · Bodegas · Proceso"),
             ("carro-100kg","Carro de Extinción 100 kg — Petroquímica","100 kg","fire","Carro de extinción 100 kg de polvo BC/ABC para refinerías y plantas petroquímicas. La mayor capacidad portátil para riesgo grave.",
              ["Polvo ABC/BC 100 kg rodante","2+ minutos de descarga continua","Manguera 8 m con monitor portátil","Ruedas neumáticas 300 mm","NOM-154-SCFI-2005 / NFPA 10"],
              "Refinerías · Plantas proceso · Alto riesgo"),
             ("carro-150kg","Carro de Extinción 150 kg — Aeropuertos","150 kg","fire","Carro de extinción 150 kg para áreas de combustible en aeropuertos y plantas. Manguera de 10 m. ICAO compatible.",
              ["150 kg polvo o AFFF rodante","Manguera 10 m con lanza jumbo","Carro de acero reforzado","ICAO / NFPA 10 compatible","NOM-154-SCFI-2005"],
              "Aeropuertos · Combustible · ARFF"),
         ], 9),
    ]
    
    for (subcat_slug, subcat_label, hero_badge, hero_title, hero_highlight, hero_subtitle,
         cta_quote, products_raw, img_off) in subcats:
        
        products = []
        for p in products_raw:
            (p_slug, p_nombre, p_badge, p_bc, p_desc, p_chars, p_aplic) = p
            products.append({
                "slug": p_slug, "nombre": p_nombre, "badge": p_badge,
                "badgeColor": p_bc, "descripcion": p_desc,
                "caracteristicas": p_chars, "aplicacion": p_aplic
            })
        
        # Related cards
        rel_subcats = [s for s in subcats if s[0] != subcat_slug][:3]
        rel_cards_cat = []
        for rs in rel_subcats:
            rel_cards_cat.append({
                "title": rs[1], "icon": "shield",
                "image": img(rs[8]),
                "href": f"/productos/extintores/{rs[0]}/",
                "buttonText": f"Ver {rs[1]}",
                "items": [{"label": p["slug"].replace("-", " ").title(), "href": f"/productos/extintores/{rs[0]}/{p['slug']}/"} for p in [{"slug": rp[0]} for rp in rs[7][:2]]],
            })
        
        # specs cards
        sc = [
            {"title": "Agente Extintor y Eficiencia", "icon": "shield", "description": f"{subcat_label} certificado para las clases de fuego indicadas. Cada unidad incluye ficha técnica (FDS) y certificado de laboratorio NOM-154-SCFI-2005 para licitaciones gubernamentales en México."},
            {"title": "Normas Aplicables", "icon": "certificate", "description": "NOM-154-SCFI-2005 (México), UL 299/154/162/2166 (USA), NFPA 10/11/17 (International). Documentación completa en español para licitaciones públicas en los 32 estados."},
            {"title": "Selección por Riesgo", "icon": "users", "description": "La selección correcta del extintor depende de la clase de fuego y el área de cobertura (NFPA 10). Asesoría técnica gratuita para proyectos y especificaciones de licitación."},
        ]
        
        # tabla
        thrs = ["Modelo", "Capacidad", "Clase Fuego", "Norma", "Alcance (m)"]
        trows = [{"cells": [{"text": p["nombre"].split("—")[0].strip()[:30]}, {"text": p["badge"]}, {"text": "A, B, C"}, {"text": "NOM-154-SCFI", "chip": "ember"}, {"text": "2–9 m", "chip": "smoke"}]} for p in products]
        
        faqs = [
            {"q": "¿Qué certificación requieren los extintores en México?", "a": "En México los extintores deben cumplir con la <strong>NOM-154-SCFI-2005</strong>. Adicionalmente se aceptan certificaciones <strong>UL 299</strong> (polvo), <strong>UL 154</strong> (CO₂) y <strong>UL 162</strong> (espuma). BOMBERO.MX entrega documentación completa para licitaciones."},
            {"q": "¿Con qué frecuencia se mantiene un extintor?", "a": "Inspección mensual visual por el usuario, mantenimiento anual por empresa autorizada (NOM-002-STPS), y prueba hidrostática cada 5 o 12 años según tipo de cilindro (<strong>NFPA 10</strong>)."},
            {"q": "¿Incluye señalética y bracket de instalación?", "a": "Sí. Los modelos portátiles incluyen <strong>bracket de pared</strong> y <strong>señalética NOM</strong> para instalación conforme a NOM-026-STPS. Los modelos rodantes incluyen señalética y calzos de seguridad."},
        ]
        
        # Generate subcategory page
        content = categoria_page(
            cat_slug, cat_label, cat_href,
            subcat_slug, subcat_label,
            hero_badge, hero_title, hero_highlight, hero_subtitle, cta_quote,
            products, sc, thrs, [{"cells": list(r["cells"])} for r in trows], faqs, rel_cards_cat, img_off
        )
        write_file(f"{BASE}/{cat_slug}/{subcat_slug}/index.astro", content)
        
        # Generate product pages
        for i, p in enumerate(products):
            p_img = img(img_off + i)
            content = producto_page(
                cat_slug, cat_label, cat_href,
                subcat_slug, subcat_label,
                p["slug"], p["nombre"],
                f"{subcat_label} · NOM-154-SCFI", p["nombre"].split("—")[0].strip(), "Certificado",
                p["descripcion"],
                f"Cotizar {p['nombre'].split('—')[0].strip()}",
                subcat_label,
                [{"modifier": "nfpa", "text": "NOM-154-SCFI"}, {"modifier": "tpp", "text": "NFPA 10"}],
                p["nombre"].split("—")[0].strip(), p["badge"], p["descripcion"],
                p["caracteristicas"],
                [a.strip() for a in p["aplicacion"].split("·")][:3],
                [{"src": p_img, "alt": f"{p['nombre']} certificado NOM-154-SCFI BOMBERO.MX"},
                 {"src": "/images/base/estacion-bomberos.avif", "alt": "Uso del extintor en emergencia"},
                 {"src": "/images/base/equipo-completo.avif", "alt": "Equipo de protección contra incendios"}],
                # capas genéricas para extintores
                [
                    {"num":"01","titulo":"Cilindro a Presión","descripcion":"Cilindro de acero de alta resistencia pintado rojo RAL 3000. Presurizado con agente y propelente. Válvula de seguridad calibrada.","specs":[{"label":"Material","valor":"Acero / Aluminio"},{"label":"Presión","valor":"12–60 bar"},{"label":"Prueba","valor":"2× presión servicio"},{"label":"Pintura","valor":"Epóxico rojo NOM"}],"color":"ember"},
                    {"num":"02","titulo":"Válvula y Sistema de Descarga","descripcion":"Válvula de latón con pasador de seguridad y precinto inviolable. Gatillo ergonómico de acero inoxidable. Compatible con todas las normas.","specs":[{"label":"Material","valor":"Latón CW614N"},{"label":"Sello","valor":"Viton® / NBR"},{"label":"Pasador","valor":"Acero inox."},{"label":"Precinto","valor":"Numerado inviolable"}],"color":"smoke"},
                    {"num":"03","titulo":"Agente Extintor Certificado","descripcion":f"Agente extintor {subcat_label.split()[1] if len(subcat_label.split())>1 else 'certificado'} de calidad industrial. Cumple las normas de pureza y eficiencia aplicables. Sin aditivos no declarados.","specs":[{"label":"Clase fuego","valor":"Según modelo"},{"label":"Pureza","valor":"Industrial / Técnica"},{"label":"Estabilidad","valor":"5 años sin recarga"},{"label":"Norma","valor":"NOM-154-SCFI"}],"color":"fire"},
                ],
                # especificaciones
                [
                    {"categoria":"Agente","label":"Tipo","valor":subcat_label},
                    {"categoria":"Agente","label":"Capacidad","valor":p["badge"]},
                    {"categoria":"Agente","label":"Clase de fuego","valor":"Según modelo"},
                    {"categoria":"Construcción","label":"Cilindro","valor":"Acero soldado"},
                    {"categoria":"Construcción","label":"Presión","valor":"12–60 bar"},
                    {"categoria":"Operación","label":"Alcance","valor":"2–9 m según modelo"},
                    {"categoria":"Certificación","label":"Norma México","valor":"NOM-154-SCFI-2005"},
                    {"categoria":"Certificación","label":"Norma UL","valor":"UL 299 / UL 154 / UL 162"},
                ],
                {"Agente":"proteccion","Construcción":"construccion","Operación":"ergonomia","Certificación":"certificacion"},
                [
                    {"titulo":"Instalación en Edificios","desc":"Conforme a NFPA 10 y NOM-002-STPS para edificios comerciales e industriales."},
                    {"titulo":"Vehículos y Transporte","desc":"Protección móvil en flotas, camiones y transporte de materiales peligrosos."},
                    {"titulo":"Industria y Proceso","desc":"Plantas de producción, bodegas y zonas de almacenamiento de materiales inflamables."},
                    {"titulo":"Instituciones Públicas","desc":"Escuelas, hospitales y edificios gubernamentales con requerimientos normativos."},
                ],
                "Certificaciones del Extintor",
                "Cumplimiento total con <strong>NOM-154-SCFI-2005</strong> y normas internacionales UL/NFPA. Documentación completa disponible para licitaciones.",
                std_certs(),
                [{"label":"Agente","valor":subcat_label},{"label":"Capacidad","valor":p["badge"]},
                 {"label":"Clase fuego","valor":"A/B/C"},{"label":"Norma","valor":"NOM-154-SCFI"},
                 {"label":"Alcance","valor":"2–9 m"},{"label":"Certificación","valor":"UL/NFPA"}],
                [{"label":"Ver todos los Extintores CO₂","href":f"/productos/extintores/co2/"},
                 {"label":"Ver Extintores Polvo ABC","href":f"/productos/extintores/polvo-abc/"},
                 {"label":"Ver Espuma AFFF","href":f"/productos/extintores/espuma-afff/"},
                 {"label":"Agentes Limpios FM-200","href":f"/productos/extintores/halon-sustitutos/"}],
                std_epp_bombero(),
                std_faqs_equipo(p["nombre"].split("—")[0].strip(), "NOM-154-SCFI-2005"),
                std_related_3(cat_slug, cat_label),
                img_off + i,
            )
            write_file(f"{BASE}/{cat_slug}/{subcat_slug}/{p['slug']}/index.astro", content)


# ─────────────────────────────────────────────────────────────────────────────
# GENERIC CATEGORY GENERATOR
# Uses a data table to produce all remaining 9 categories
# ─────────────────────────────────────────────────────────────────────────────

# Each entry: (cat_slug, cat_label, cat_href, subcats)
# Each subcat: (slug, label, hero_badge, hero_title, hero_highlight, hero_subtitle, cta, img_off, products)
# Each product: (slug, nombre, badge, badgeColor, descripcion, chars[5], aplicacion)

GENERIC_CATS = [
    ("scba", "SCBA — Respiración Autónoma", "/productos/scba/", [
        ("circuito-abierto-nfpa-1981", "SCBA Circuito Abierto NFPA 1981",
         "SCBA · NFPA 1981 · 30/45/60 min", "SCBA Circuito Abierto", "NFPA 1981",
         "Equipos de respiración autónoma SCBA circuito abierto para bomberos. 30, 45 y 60 minutos a 40 L/min. Cilindros de carbono 300 bar. Certificados NFPA 1981 y EN 137.",
         "Cotizar SCBA NFPA 1981", 0,
         [
             ("scba-30min","SCBA 30 min — Circuito Abierto","30 min","smoke","SCBA de circuito abierto 30 min a 40 L/min con cilindro de fibra de carbono 6.0 L 300 bar. Máscara panorámica incluida. NFPA 1981.",
              ["Cilindro carbono 6.0 L 300 bar","Duración: 30 min @ 40 L/min","Máscara panorámica NFPA 1981","Arnés ajustable multitalla","NFPA 1981 / EN 137"],
              "Incendio estructural · Rescate · 1ª intervención"),
             ("scba-45min","SCBA 45 min — Estándar","45 min","fire","SCBA de circuito abierto 45 min estándar para operaciones de incendio estructural. Cilindro 6.8 L carbono 300 bar. Visor HUD integrado.",
              ["Cilindro carbono 6.8 L 300 bar","Duración: 45 min @ 40 L/min","HUD display presión integrado","Arnés ergonómico con soporte lumbar","NFPA 1981 / EN 137"],
              "Estructural · HAZMAT · Rescate urbano"),
             ("scba-60min","SCBA 60 min — Larga Duración","60 min","ember","SCBA 60 min para operaciones de larga duración y ambientes IDLH extendidos. Cilindro 9.0 L carbono 300 bar. NFPA 1981.",
              ["Cilindro carbono 9.0 L 300 bar","Duración: 60 min @ 40 L/min","Sistema de alarma PASS integrado","RIC-PAC compatible","NFPA 1981 / EN 137 / EN 402"],
              "Operaciones largas · IDLH · HAZMAT nivel A"),
             ("scba-45min-panoramico","SCBA 45 min — Máscara Panorámica","45 min","smoke","SCBA 45 min con máscara facial panorámica de visibilidad amplia. Campo visual 220°. Compatible con sistemas de comunicación TETRA.",
              ["Máscara panorámica 220° campo visual","Cilindro 6.8 L 300 bar carbono","Compatible com comunicación TETRA","Válvula de demanda certificada","NFPA 1981 / EN 136"],
              "Incendio · Búsqueda y rescate · CBRN"),
         ]),
        ("circuito-cerrado-minero", "SCBA Circuito Cerrado Minero",
         "Circuito Cerrado · 60-240 min · EN 145", "SCBA Circuito Cerrado", "Minas y Confinados",
         "Equipos de respiración de circuito cerrado para minas y espacios confinados. 60, 120 y 240 minutos de autonomía. Certificados EN 145 y MSHA.",
         "Cotizar SCBA Circuito Cerrado", 1,
         [
             ("cc-60min","Circuito Cerrado 60 min — Espacio Confinado","60 min","smoke","Aparato de respiración de circuito cerrado 60 min para espacios confinados industriales. Regeneración química CO₂. EN 145.",
              ["Autonomía: 60 min circuito cerrado","Canister de cal sodada regenerativa","Sin emisión de gas al exterior","Peso: ~8.5 kg con O₂","EN 145 / MSHA / EN 402"],
              "Espacios confinados · Mantenimiento industrial"),
             ("cc-120min","Circuito Cerrado 120 min — Minería","120 min","fire","Equipo de circuito cerrado 120 min para operaciones en minas subterráneas. Cilindro O₂ 3.0 L 200 bar. EN 145.",
              ["Autonomía: 120 min con O₂ puro","Cilindro O₂ 3.0 L 200 bar","Cal sodada de alta capacidad","Sistema de alarma PASS integrado","EN 145 / MSHA"],
              "Minas subterráneas · Túneles · Sótanos"),
             ("cc-240min","Circuito Cerrado 240 min — Rescate Minero","240 min","ember","Equipo de circuito cerrado 240 min para rescate en minería profunda. Máxima autonomía del mercado. MSHA certified.",
              ["4 h de autonomía total","Doble canister cal sodada","O₂ suministro continuo auto-regulado","Maletín de transporte incluido","EN 145 / MSHA / ISO 23328"],
              "Rescate minero · Profundidad extrema"),
             ("cc-rescate","Kit Rescate Circuito Cerrado — BG4","BG4","smoke","Kit de rescate minero BG4 con 4 h de autonomía, comunicación de voz y sistema de enfriamiento de aire. El estándar de rescate en minería.",
              ["Autonomía BG4: 4 h certificada","Enfriamiento termoeléctrico del aire","Comunicación de voz integrada","Resistencia a gases CBRN","EN 145 / MSHA / VDE"],
              "Rescate minero · Brigadas · Gases tóxicos"),
         ]),
        ("mascara-facial", "Máscaras Faciales para SCBA",
         "Máscara · Panorámica · NFPA 1981 / EN 136", "Máscaras Faciales", "HUD Integrado",
         "Máscaras faciales panorámicas para SCBA con HUD display integrado. Visor de policarbonato 220°, válvula de demanda certificada. NFPA 1981 y EN 136.",
         "Cotizar Máscaras Faciales SCBA", 2,
         [
             ("mascara-panoramica","Máscara Panorámica — Policarbonato","220°","fire","Máscara facial panorámica de policarbonato 220° para SCBA. Compatible con todos los reguladores NFPA 1981. Sello de silicona de baja presión.",
              ["Visor panorámico PC 220°","Sello de silicona baja presión","Compatible SCBA universal","Protección UV y anti-rayado","NFPA 1981 / EN 136 / EN 14387"],
              "SCBA · Incendio estructural · HAZMAT"),
             ("mascara-hud","Máscara con HUD — Display Digital","HUD","ember","Máscara con HUD display digital integrado en visor. Muestra presión del cilindro, tiempo restante y alertas PASS. NFPA 1981.",
              ["HUD display presión en tiempo real","Alertas visuales tiempo restante","Pantalla integrada en visor","Compatible con cilindros 300 bar","NFPA 1981 / EN 136"],
              "SCBA avanzado · Operaciones críticas"),
             ("mascara-nbq","Máscara CBRN — Protección Total","CBRN","smoke","Máscara facial para agentes CBRN (químico, biológico, radiológico y nuclear). Filtros clase ABEK2P3. Compatible con SCBA y filtros NBC.",
              ["Filtros ABEK2P3 para CBRN","Sello hermético 6 puntos de contacto","Compatible SCBA + filtros NBC","Resistente a líquidos peligrosos","EN 136 / EN 14387 / STANAG 4571"],
              "CBRN · HAZMAT · Defensa civil"),
             ("mascara-reutilizable","Máscara Reutilizable — Mantenimiento Fácil","Multi-uso","smoke","Máscara facial reutilizable de bajo mantenimiento. Visor reemplazable, arnés ajustable y válvulas de exhale intercambiables.",
              ["Visor reemplazable individual","Arnés ajustable 4 puntos","Válvulas de exhale intercambiables","Esterilizable con solución NaOCl 0.5%","NFPA 1981 / EN 136"],
              "Mantenimiento · Entrenamiento · Emergencias"),
         ]),
        ("cilindros-repuesto", "Cilindros de Repuesto SCBA",
         "Cilindros · 300 bar · Carbono / Aluminio", "Cilindros SCBA", "300 bar",
         "Cilindros de repuesto para SCBA: fibra de carbono 6.0, 6.8 y 9.0 L a 300 bar. También aluminio 6.8 L 200 bar. Certificados DOT/TC, EN 12245 y NFPA 1981.",
         "Cotizar Cilindros SCBA", 3,
         [
             ("cilindro-6l-300bar","Cilindro Carbono 6.0 L 300 bar","6.0 L","smoke","Cilindro de fibra de carbono 6.0 L 300 bar para SCBA 30 min. Peso 1.5 kg vacío. Compatible con todos los fabricantes NFPA 1981.",
              ["Fibra de carbono 6.0 L 300 bar","Peso vacío: 1.5 kg","Duración: 30 min @ 40 L/min","Compatible NFPA 1981 universal","DOT/TC / EN 12245 / ISO 11119-3"],
              "SCBA 30 min · Incendio estructural"),
             ("cilindro-9l-300bar","Cilindro Carbono 9.0 L 300 bar","9.0 L","fire","Cilindro de fibra de carbono 9.0 L 300 bar para SCBA 60 min. Máxima capacidad estándar. Peso 2.4 kg vacío.",
              ["Fibra de carbono 9.0 L 300 bar","Peso vacío: 2.4 kg","Duración: 60 min @ 40 L/min","Rosca de conexión M18×1.5","DOT/TC / EN 12245 / NFPA 1981"],
              "SCBA 60 min · Operaciones largas"),
             ("cilindro-aluminum-6l","Cilindro Aluminio 6.8 L 200 bar","6.8 L Al","smoke","Cilindro de aluminio 6.8 L 200 bar. Alternativa económica. Vida útil 15 años. Para entrenamiento y brigadas con menor frecuencia de uso.",
              ["Aluminio 6.8 L 200 bar","Peso vacío: 2.8 kg","Costo optimizado para entrenamiento","Vida útil: 15 años","DOT 3AL / EN 12245"],
              "Entrenamiento · Brigadas · Respaldo"),
             ("cilindro-carbono-9l","Cilindro Carbono 6.8 L 300 bar","6.8 L","ember","Cilindro de fibra de carbono 6.8 L 300 bar para SCBA 45 min. El modelo más vendido. Compatible universalmente con NFPA 1981.",
              ["Fibra de carbono 6.8 L 300 bar","Duración: 45 min @ 40 L/min","Peso vacío: 1.8 kg — ultraligero","Rosca M18×1.5 universal","DOT/TC / EN 12245 / NFPA 1981"],
              "SCBA 45 min · Estándar bombero"),
         ]),
        ("sistemas-comunicacion", "Sistemas de Comunicación para SCBA",
         "Comunicación · Bluetooth · TETRA / DMR", "Comunicación SCBA", "Integrada",
         "Sistemas de comunicación integrados para SCBA: amplificadores de voz, Bluetooth y radio TETRA/DMR en máscara. Operación con guantes y SCBA puesto.",
         "Cotizar Comunicación para SCBA", 4,
         [
             ("radio-integrado-scba","Radio Integrado en Máscara — TETRA","TETRA","fire","Sistema de radio TETRA integrado en máscara SCBA. Comunicación full-duplex con el puesto de mando. Compatible con máscaras NFPA 1981.",
              ["Radio TETRA integrado en máscara","Full-duplex manos libres","Compatible NFPA 1981 universal","Resistente agua IP67","NFPA 1981 / ETSI TETRA"],
              "Comando · Operaciones · Rescate"),
             ("bluetooth-scba","Sistema Bluetooth — Manos Libres SCBA","BT","smoke","Sistema Bluetooth para SCBA con auricular en oído y micrófono de garganta. Pairing con radio portátil. Compatible con máscaras panorámicas.",
              ["Bluetooth 5.0 clase 2","Autonomía batería: 12 h","Micrófono de garganta vibración","Pairing doble radio + smartphone","IP67 / MIL-STD-810G"],
              "Radio interoperabilidad · Comando"),
             ("amplificador-voz","Amplificador de Voz para Máscara","Voz","smoke","Amplificador de voz electrónico para máscaras SCBA. Convierte el habla a través de la máscara en comunicación inteligible. No requiere radio.",
              ["Amplificación 18 dB de voz","Montaje exterior máscara estándar","Pila AA 100+ horas","Sin configuración — plug & play","EN 136 / NFPA 1981 compatible"],
              "Comunicación básica · Sin radio"),
             ("sistema-manos-libres","Sistema Manos Libres — Comando Avanzado","Cmd","ember","Sistema avanzado PTT + display para SCBA. Controla radio, monitorea presión y recibe alertas de equipo completo sin quitarse los guantes.",
              ["PTT inalámbrico de muñeca","Display presión SCBA en tiempo real","Alertas de equipos del equipo","Compatible TETRA/P25/DMR","IP68 / MIL-STD-810H"],
              "Comando avanzado · Gestión incidentes"),
         ]),
        ("soporte-comando", "Soporte de Comando y RIC-PAC",
         "RIC-PAC · Comando · NFPA 1981", "Soporte de Comando", "RIC-PAC",
         "Sistemas de soporte de comando para SCBA: RIC-PAC, alargadores de manguera, manifolds y kits de rescate rápido para el bombero atrapado.",
         "Cotizar Sistemas RIC-PAC", 5,
         [
             ("ricpac-scba","RIC-PAC — Rescate Rápido Bombero Atrapado","RIC-PAC","fire","El RIC-PAC es el SCBA de rescate para el bombero atrapado. 15 min de emergencia, conexión rápida con manguera de 3 m. NFPA 1981.",
              ["SCBA emergencia 15 min","Manguera de transfusión 3 m","Acople rápido con SCBA del atrapado","Peso: < 4 kg listo para uso","NFPA 1981 / NFPA 1710"],
              "Rescate bombero atrapado · RIT"),
             ("maletero-rescate","Maletero RIT — Kit de Rescate Rápido","RIT","ember","Maletero de rescate RIT (Rapid Intervention Team) con RIC-PAC, cuerda guía y herramientas básicas de desorientación.",
              ["RIC-PAC + cuerda guía 30 m","Herramientas de extricación ligera","Maletero rugged de polietileno","Despliegue completo en < 60 s","NFPA 1981 / NFPA 1710 / NFPA 1407"],
              "RIT · Rescate técnico · Comando ICS"),
             ("soporte-30min","Manifold de SCBA — Estación 4 Líneas","4 líneas","smoke","Manifold de recarga de SCBA con 4 líneas de 300 bar para operación continua en escena. Sin compresor.",
              ["4 líneas de llenado simultáneo","Presión de trabajo: 300 bar","Aislamiento individual por línea","Manómetro por línea","EN 12245 / DOT compatible"],
              "Operaciones largas · Recarga en escena"),
             ("soporte-emergencia","Transmisor de Alarma PASS — Integrado","PASS","fire","Dispositivo PASS (Personal Alert Safety System) de activación automática para bombero atrapado. Alarma audible 95 dB y visual. NFPA 1982.",
              ["Alarma PASS 95 dB certificada","Activación automática 30 s inmovilidad","Modo manual de emergencia","Integrable con radio TETRA","NFPA 1982 / EN 61000"],
              "Seguridad bombero · Alerta atrapado"),
         ]),
        ("mantenimiento-recarga", "Mantenimiento y Recarga de SCBA",
         "Recarga · Mantenimiento · 300 bar", "Mantenimiento SCBA", "Recarga y Test",
         "Equipos de recarga, test de presión y mantenimiento para cilindros SCBA de 200 y 300 bar. Compresores de respiración certificados y kits de servicio.",
         "Cotizar Equipos de Recarga SCBA", 6,
         [
             ("compresor-300bar","Compresor de Respiración 300 bar — Portátil","300 bar","fire","Compresor de aire respirable 300 bar para recarga de cilindros SCBA en escena o en cuartel. Motor gasolina o eléctrico. Filtros de carbono activado.",
              ["Presión de trabajo: 300 bar","Caudal: 100–250 L/min","Filtros coalescentes + carbono activado","Análisis de aire según EN 12021","CE / EN 12245 / DIN 3188"],
              "Estaciones bomberos · Campo · Recarga"),
             ("banco-recarga-multiple","Banco de Recarga 4 Puertos — Cuartel","4 puertos","ember","Banco de recarga de 4 cilindros simultáneos 300 bar para cuartel. Panel de válvulas individuales y manómetros calibrados.",
              ["4 cilindros simultáneos 300 bar","Válvulas individuales de aislamiento","Manómetros calibrados por línea","Conexión a compresor o cascada","CE / DIN 3188"],
              "Cuartel · Brigada · Operación intensa"),
             ("kit-mantenimiento","Kit de Mantenimiento SCBA — Completo","Kit","smoke","Kit de mantenimiento y revisión anual para SCBA: herramientas de torque, lubricante certificado, O-rings y checklist de inspección.",
              ["Herramientas de torque calibradas","Lubricante certificado Molykote®","O-rings de reemplazo Viton®","Checklist de inspección NFPA 1981","NFPA 1981 / EN 137"],
              "Mantenimiento anual · Servicio · Revisión"),
             ("probador-presion","Probador de Presión y Caudal — Test SCBA","Test","smoke","Instrumento de prueba de presión y caudal para verificación de SCBA. Mide caudal, presión de demanda y hermeticidad de máscara.",
              ["Prueba de caudal y presión","Verificación hermeticidad máscara","Calibrado trazable NIST/CENAM","Almacenamiento de resultados","NFPA 1981 / EN 137"],
              "Inspección · Certificación anual · Laboratorio"),
         ]),
    ]),
    ("equipo-contra-incendios", "Equipo Contra Incendios", "/productos/equipo-contra-incendios/", [
        ("mangueras-ataque", "Mangueras de Ataque",
         "Mangueras · 38-65mm · NFPA 1963", "Mangueras de Ataque", "Tipo 1, 2 y 3",
         "Mangueras de ataque contra incendios tipo 1, 2 y 3: 38 mm, 45 mm y 65 mm. Presión de trabajo 12–16 bar. Certificadas NFPA 1963 y UL 19.",
         "Cotizar Mangueras de Ataque", 0,
         [
             ("manguera-38mm","Manguera Tipo 1 — 38 mm · NFPA 1963","38 mm","smoke","Manguera de ataque tipo 1 de 38 mm para líneas de ataque interior. Presión 16 bar. Revestimiento de goma nitrilo y cubierta de poliéster.",
              ["Diámetro interno: 38 mm (1.5\")","Presión trabajo: 16 bar","Long. estándar: 15 y 30 m","Cubierta poliéster / NBR interior","NFPA 1963 / UL 19"],
              "Ataque interior · Primera línea · Rescate"),
             ("manguera-45mm","Manguera Tipo 2 — 45 mm · NFPA 1963","45 mm","ember","Manguera de ataque tipo 2 de 45 mm para líneas de ataque exterior. Mayor caudal que tipo 1. Coplas de aluminio anodizado.",
              ["Diámetro interno: 45 mm (1.75\")","Presión trabajo: 14 bar","Caudal máximo: 900 L/min","Coplas aluminio anodizado","NFPA 1963 / UL 19"],
              "Ataque exterior · Apoyo · Alimentación"),
             ("manguera-65mm","Manguera Tipo 3 — 65 mm · NFPA 1963","65 mm","fire","Manguera de alimentación tipo 3 de 65 mm para suministro desde hidrante a bomba. Mayor caudal del sistema. Coplas de aluminio.",
              ["Diámetro interno: 65 mm (2.5\")","Presión trabajo: 12 bar","Caudal máximo: 1,800 L/min","Coplas de aluminio doble rosca","NFPA 1963 / UL 19"],
              "Alimentación hidrante · Suministro · Bomba"),
             ("manguera-dura","Manguera Dura de Aspiración — 100 mm","100 mm","smoke","Manguera dura de aspiración de 100 mm para carga de bomba desde fuente natural. Hélice de acero galvanizado interior.",
              ["Diámetro: 100 mm (4\")","Aspiración hasta 3.5 m negativo","Hélice acero galvanizado interior","Longitud: 2 m por sección","NFPA 1901 / NFPA 1963"],
              "Aspiración depósito · Río · Pileta"),
         ]),
        ("boquillas-lanzas", "Boquillas y Lanzas",
         "Boquillas · Niebla · NFPA 1964", "Boquillas y Lanzas", "Combinadas y Monitores",
         "Boquillas y lanzas para combate de incendios: combinadas niebla/chorro, monitores portátiles y lanzas para incendio eléctrico. Certificadas NFPA 1964.",
         "Cotizar Boquillas y Lanzas", 1,
         [
             ("boquilla-combinada","Boquilla Combinada — Niebla y Chorro","Combinada","fire","Boquilla combinada de 65 mm para niebla y chorro directo. Caudal variable 100–1000 L/min. Patrón ajustable 0°–120°. NFPA 1964.",
              ["Caudal: 100–1,000 L/min","Patrón: chorro a niebla 0°–120°","Material: aluminio + cuerpo polímero","Presión trabajo: 5–12 bar","NFPA 1964 / UL 385"],
              "Ataque interior · Exterior · Cobertura"),
             ("boquilla-niebla","Boquilla de Alta Presión Niebla — Fog","Fog","smoke","Boquilla de alta presión para niebla fina. Máxima absorción de calor por superficie de contacto del agua. Efectiva para incendio en espacios confinados.",
              ["Alta presión: 7–12 bar","Niebla fina máxima absorción calor","Caudal: 100–400 L/min","Ángulo niebla: 30°–120° ajustable","NFPA 1964"],
              "Espacios confinados · Ataque agresivo"),
             ("monitor-portatil","Monitor Portátil — 1,000 L/min","Monitor","ember","Monitor portátil articulado para flujos de 500–2,500 L/min. Base de trípode. Para grandes incendios industriales y control de perímetro.",
              ["Caudal: 500–2,500 L/min","Base de trípode ajustable 360°","Conexión 65 mm o 100 mm","Oscilación automática opcional","NFPA 1964"],
              "Industrial · Perímetro · Gran incendio"),
             ("lanza-electrico","Lanza para Incendio Eléctrico — NBR","Eléctrico","smoke","Lanza especial para combate de incendio en presencia de corriente eléctrica. Tubo de polipropileno no conductor. Uso hasta 6 kV.",
              ["No conductora hasta 6 kV","Material PP no conductor","Caudal: 60–120 L/min chorro","Longitud: 1.2 m recta","EN 1839 / NFPA 1964 compatible"],
              "Eléctrico < 6 kV · Subestaciones"),
         ]),
        ("hidrantes-sistemas", "Hidrantes y Sistemas Hidráulicos",
         "Hidrantes · NFPA 24 · NFPA 291", "Hidrantes", "Residenciales e Industriales",
         "Hidrantes contra incendios residenciales e industriales. Hidrantes de columna seca, húmeda y empotrados. Certificados NFPA 24, NFPA 291 y AWWA C502.",
         "Cotizar Hidrantes y Sistemas", 2,
         [
             ("hidrante-columna","Hidrante Columna Seca — Residencial","Columna","smoke","Hidrante de columna seca para redes de agua potable municipales. Salidas 38 mm y 65 mm. Cuerpo de hierro fundido dúctil. AWWA C502.",
              ["Columna seca — antihielo","Salidas: 1 × 65 mm + 2 × 38 mm","Cuerpo hierro fundido dúctil","Rosca NST estándar bombero","AWWA C502 / NFPA 291 / NOM-017"],
              "Red municipal · Residencial · Comercial"),
             ("hidrante-industrial","Hidrante Industrial — Alta Presión","Industrial","fire","Hidrante industrial de alta presión para redes privadas. Salidas 65 mm y 100 mm. Presión trabajo hasta 20 bar. NFPA 24.",
              ["Alta presión hasta 20 bar","Salidas: 2 × 65 mm + 1 × 100 mm","Aislamiento individual por salida","Rosca NST / Storz opcional","NFPA 24 / AWWA C503"],
              "Industria · Refinería · Proceso"),
             ("hidrante-empotrado","Hidrante Empotrado — Subsuelo","Empotrado","smoke","Hidrante empotrado (bajo tierra) para zonas donde el hidrante de columna no es viable. Tapa de hierro fundido con señalización.",
              ["Instalación bajo nivel del suelo","Tapa de hierro fundido pintada","Salidas 65 mm o 100 mm","Válvula de cierre a 1 m profundidad","AWWA C503 / NFPA 291"],
              "Urbano · Zona de tráfico · Aeropuertos"),
             ("sistema-siames","Conexión Siamesa — 2 × 65 mm","Siamesa","ember","Conexión siamesa para alimentación de sistemas rociadores por camión bomba. 2 × 65 mm de entrada. Válvula check integrada. NFPA 13.",
              ["2 entradas × 65 mm NST","Válvula check individual por entrada","Material bronce naval","Rosca NST compatible camiones","NFPA 13 / NFPA 14"],
              "Edificios · Sistemas rociadores · Standpipe"),
         ]),
        ("sistemas-rociadores", "Sistemas de Rociadores",
         "Rociadores · NFPA 13 · ESFR", "Sistemas de Rociadores", "Sprinklers NFPA 13",
         "Rociadores automáticos ESFR, convencionales y de respuesta rápida para edificios, bodegas y riesgo especial. Certificados UL 199, FM 2000 y NFPA 13.",
         "Cotizar Sistemas de Rociadores", 3,
         [
             ("rociador-convencional","Rociador Convencional — 68°C","68°C","smoke","Rociador convencional de temperatura media 68°C para protección general. Patrón hemisférico. Ampolla de vidrio. UL 199.",
              ["Temperatura activación: 68°C","Patrón hemisférico 180°","Ampolla de vidrio de 3 mm roja","K-factor: 80 (5.6 US)","UL 199 / FM 2000 / NFPA 13"],
              "Oficinas · Bodegas · Habitación"),
             ("rociador-esfr","Rociador ESFR — Bodega Alta","ESFR","fire","Rociador de respuesta temprana supresión rápida (ESFR) para bodegas de gran altura. K-factor 360. Sin sprinkler en rack.",
              ["ESFR para altura hasta 12 m","K-factor: 360 (25.2 US)","Temperatura activación: 74°C","Sin rociadores en estantería","UL 199 / FM 1960 / NFPA 13"],
              "Bodegas altura · Logística · Almacén"),
             ("rociador-lateral","Rociador Lateral de Pared — Residencial","Lateral","smoke","Rociador lateral de pared para instalación en pasillo o habitación sin falso plafón. Perfecto para edificios residenciales.",
              ["Montaje lateral en pared","Sin necesidad de plafón","Patrón cuarto de esfera","K-factor: 80 (5.6 US)","UL 1626 / NFPA 13R"],
              "Residencial · Hotel · Pasillos"),
             ("rociador-especial","Rociador Especial — Cocina Industrial","Cocina","ember","Rociador de respuesta rápida para campanas de cocina industrial. Temperatura de activación 93°C o 141°C. NFPA 17A.",
              ["Temperatura: 93°C o 141°C","Para fuegos clase K (aceites)","Compatible con supresión química","K-factor adaptado a cocinas","UL 300 / NFPA 17A"],
              "Cocinas industriales · Restaurantes"),
         ]),
        ("detectores-alarmas", "Detectores y Sistemas de Alarma",
         "Detectores · NFPA 72 · EN 54", "Detectores y Alarmas", "Humo, Calor y Gas",
         "Detectores de humo, calor, llama y gases para sistemas de detección temprana. Certificados UL 217, UL 268, NFPA 72 y EN 54.",
         "Cotizar Detectores y Alarmas", 4,
         [
             ("detector-humo","Detector de Humo Iónico — Interconectable","Humo","smoke","Detector de humo iónico para edificios residenciales e industriales. Alarma 85 dB. Interconectable con hasta 12 unidades. UL 217.",
              ["Cámara iónica bi-polar","Alarma: 85 dB @ 3 m","Interconectable 12 unidades","Indicador LED visual","UL 217 / EN 54-7 / NFPA 72"],
              "Residencial · Oficinas · Corredores"),
             ("detector-calor","Detector de Calor Fijo — 57°C/135°F","Calor","ember","Detector de calor de temperatura fija 57°C para cocinas, garajes y áreas con humo de proceso. No generará falsas alarmas por cocción.",
              ["Temperatura fija: 57°C (135°F)","Tipo bimetálico sin electrónica","Ideal: cocinas, garajes, desvanes","Sin falsas alarmas por humo cocina","UL 521 / EN 54-5 / NFPA 72"],
              "Cocinas · Garajes · Talleres"),
             ("detector-llama","Detector de Llama UV/IR — Industrial","UV/IR","fire","Detector de llama dual UV/IR para detección instantánea de incendio en hangares y plantas. Alcance: 50 m a 45°. Response: < 30 ms.",
              ["Dual UV/IR — mayor inmunidad falsos","Alcance: 50 m cono 45°","Respuesta: < 30 ms detección","Salidas 4–20 mA + relé","FM / UL / ATEX Zone 1"],
              "Hangares · Plantas proceso · ARFF"),
             ("panel-alarma","Panel de Alarma Contra Incendios — 8 Zonas","Panel","smoke","Panel de alarma convencional 8 zonas para edificios pequeños y medianos. 24 V DC, batería de respaldo 24 h, salidas de sirenas.",
              ["8 zonas de detección","Batería respaldo 24 h","Salidas sirena y relé libre","Histórico de eventos 1000 entradas","UL 864 / EN 54-2 / NFPA 72"],
              "Edificios · Hoteles · Plantas medianas"),
         ]),
        ("gabinetes-cie", "Gabinetes Contra Incendios",
         "Gabinetes · Tipo I/II/III · NOM-002-STPS", "Gabinetes CIE", "Tipos I, II y III",
         "Gabinetes contra incendios tipo I, II y III conforme a NOM-002-STPS y NFPA 1. Equipados con manguera, válvula y extintor. Para oficinas, plantas e industria.",
         "Cotizar Gabinetes CIE", 5,
         [
             ("gabinete-tipo-1","Gabinete Tipo I — Residencial / Oficina","Tipo I","smoke","Gabinete CIE tipo I para edificios residenciales y de oficinas. Manguera 20 m de 38 mm, válvula de globo y extintor 4 kg ABC incluido.",
              ["Manguera 20 m × 38 mm enrollada","Válvula de globo cromada 38 mm","Extintor 4 kg ABC incluido","Gabinete acero pintado rojo","NOM-002-STPS / NFPA 14"],
              "Residencial · Oficinas · Hoteles"),
             ("gabinete-tipo-2","Gabinete Tipo II — Industrial","Tipo II","ember","Gabinete CIE tipo II para plantas industriales. Manguera 30 m de 45 mm, válvula angular y extintor 9 kg ABC. Mayor caudal y alcance.",
              ["Manguera 30 m × 45 mm semirrígida","Válvula angular acero inox. 45 mm","Extintor 9 kg ABC incluido","Gabinete 1.2 m × 0.8 m × 0.3 m","NOM-002-STPS / NFPA 14"],
              "Plantas industriales · Bodegas · Proceso"),
             ("gabinete-tipo-3","Gabinete Tipo III — Exterior","Tipo III","fire","Gabinete CIE tipo III para instalación exterior. Cuerpo de acero inoxidable, manguera 30 m y equipo completo para operación con guantes.",
              ["Exterior — acero inoxidable 304","Manguera 30 m × 65 mm","Boquilla regulable combinada","Resistente a UV, lluvia y vandalismo","NOM-002-STPS / NFPA 14"],
              "Exterior · Plantas · Estacionamientos"),
             ("gabinete-presurizado","Gabinete Presurizado — Sistema Húmedo","Húmedo","smoke","Gabinete con sistema húmedo preconectado. Manguera presurizada lista para uso inmediato. Para áreas sin riesgo de congelación.",
              ["Sistema húmedo — siempre presurizado","Manguera semirrígida 25 m","Tiempo respuesta inmediato","Manómetro de presión de red","NFPA 14 / NOM-002-STPS"],
              "Sistemas húmedos · Carga inmediata"),
         ]),
        ("herramientas-ventilacion", "Herramientas de Ventilación Táctica",
         "Ventilación · PPV · VN · NFPA 1", "Ventilación Táctica", "PPV y VN",
         "Ventiladores tácticos PPV (presión positiva) y VN (ventilación natural) para control de humo en incendios estructurales. Gasolina, eléctrico y batería.",
         "Cotizar Herramientas de Ventilación", 6,
         [
             ("ventilador-ppv-gasolina","Ventilador PPV Gasolina — 50,000 m³/h","PPV Gas","fire","Ventilador de presión positiva de gasolina para ventilación táctica. 50,000 m³/h. Motor Honda GX160. Ángulo de tobera ajustable.",
              ["Caudal: 50,000 m³/h","Motor Honda GX160 5.5 HP","Velocidad tobera: >2,500 rpm","Ángulo ajustable 0°–40°","NFPA 1 / Factory Mutual"],
              "Estructural · Control humo · Rescate"),
             ("ventilador-ppv-electrico","Ventilador PPV Eléctrico — Interior","PPV Eléctrico","smoke","Ventilador PPV eléctrico para uso en interiores. Sin emisiones. Motor 1,500 W 220 V / 110 V. Ruedas para desplazamiento rápido.",
              ["Caudal: 20,000 m³/h","Motor eléctrico 1,500 W","Sin emisiones — interior","Ruedas de transporte rápido","CE / NFPA 1"],
              "Interior · Evacuación · Sin combustión"),
             ("ventilador-bateria","Ventilador Batería Li-Ion — Portátil","Batería","ember","Ventilador de batería de ion de litio para espacios confinados y operaciones sin red eléctrica. 18 V, 20,000 m³/h, 45 min.",
              ["Batería 18 V Li-Ion intercambiable","Caudal: 20,000 m³/h","Autonomía: 45 min carga completa","Peso: 8 kg — ultraportátil","CE / NFPA 1"],
              "Portátil · Confinados · Sin red"),
             ("kit-ventilacion-tactica","Kit Ventilación Táctica — Sistema Completo","Kit","smoke","Kit completo de ventilación táctica con ventilador PPV, extensión de tobera, manguera de chimenea y guía de operación táctica.",
              ["PPV + extensión de tobera 60 cm","Manguera de chimenea 3 m","Cubierta de ventana incluida","Guía táctica operativa","NFPA 1 / NFPA 1710"],
              "Operaciones estructurales · Entrenamiento"),
         ]),
    ]),
    ("hazmat", "HAZMAT — Equipos CBRN", "/productos/hazmat/", [
        ("trajes-nivel-a", "Trajes HAZMAT Nivel A",
         "Nivel A · NFPA 1991 · Encapsulado", "Trajes Nivel A", "Encapsulamiento Total",
         "Trajes de encapsulamiento total Nivel A para protección contra gases y vapores peligrosos. NFPA 1991 y ASTM F1001. Completamente herméticos.",
         "Cotizar Trajes Nivel A HAZMAT", 1,
         [
             ("traje-nivel-a-butilo","Traje Nivel A Butilo — Gases Ácidos","Butilo","fire","Traje de encapsulamiento total de hule butilo para ácidos, bases y solventes orgánicos. NFPA 1991. Capa interior de Nomex para protección adicional.",
              ["Encapsulamiento total hule butilo","Resistencia ácidos, bases, solventes","Capa interior Nomex® certificada","Visor de policarbonato 4 mm","NFPA 1991 / ASTM F1001"],
              "Ácidos · Cloruros · Solventes orgánicos"),
             ("traje-nivel-a-viton","Traje Nivel A Vitón — Hidrocarburos","Vitón","ember","Traje de encapsulamiento total de Vitón/FKM para hidrocarburos, gases halogenados y productos químicos agresivos. NFPA 1991.",
              ["Vitón/FKM encapsulamiento total","Resistencia superior a hidrocarburos","Certificado EN 943-1 Tipo 1A","Cremallera hermética NFPA 1991","NFPA 1991 / EN 943-1"],
              "Hidrocarburos · Gases halogenados"),
             ("traje-nivel-a-cbrn","Traje Nivel A CBRN — Defensa Civil","CBRN","smoke","Traje de encapsulamiento total para agentes CBRN (químico, biológico, radiológico y nuclear). NFPA 1994 clase 1. Compatible con SCBA.",
              ["NFPA 1994 Clase 1 CBRN","Resistencia a agentes GB, GA, GD","Sellado ZIP hermético certificado","Compatible SCBA 30 min+","NFPA 1994 / STANAG 4571"],
              "Defensa civil · CBRN · Terror"),
             ("traje-nivel-a-desechable","Traje Nivel A Desechable — Respuesta","Desechable","smoke","Traje de encapsulamiento desechable de Tychem® 10000 para primera respuesta química. Sin contaminación cruzada.",
              ["Tychem® 10000 desechable","Sin contaminación cruzada","Disponible tallas S a 4XL","Compatible SCBA externo","NFPA 1992 / EN 943-2"],
              "Primera respuesta · Sin lavado"),
         ]),
        ("trajes-nivel-b", "Trajes HAZMAT Nivel B",
         "Nivel B · NFPA 1992 · Salpicaduras", "Trajes Nivel B", "Sin Encapsulamiento",
         "Trajes HAZMAT Nivel B para protección contra salpicaduras de líquidos peligrosos sin encapsulamiento. NFPA 1992 y EN 14605. Para primera respuesta.",
         "Cotizar Trajes Nivel B", 2,
         [
             ("traje-nivel-b-tychem","Traje Nivel B Tychem® TK — Desechable","Tychem TK","smoke","Traje de salpicaduras Tychem® TK desechable de DuPont. Resistencia superior a productos corrosivos. Clase 3B EN 14605.",
              ["Tychem® TK film laminado","Resistencia corrosivos clase 3B","Desechable — sin descontaminación","Costuras termoselladas","NFPA 1992 / EN 14605 Tipo 3B"],
              "Derrame químico · Respuesta · Industria"),
             ("traje-nivel-b-reutilizable","Traje Nivel B Butilo Reutilizable","Butilo","ember","Traje de salpicaduras de hule butilo reutilizable. Lavable hasta 20 ciclos. Ideal para brigadas industriales con exposición frecuente.",
              ["Hule butilo reutilizable","Resistente a ácidos y álcalis","20 ciclos de lavado certificados","Cierre doble con guardapolvo","NFPA 1992 / EN 14605"],
              "Brigada industrial · Frecuencia alta"),
             ("traje-nivel-b-pvc","Traje PVC Nivel B — Economía","PVC","smoke","Traje de PVC de bajo costo para trabajos de bajo riesgo de salpicaduras. Reutilizable. Para mantenimiento con exposición mínima.",
              ["PVC 0.40 mm de espesor","Soldadura HF resistente","Reutilizable — lavable","Talla única ajustable","EN 14605 Tipo 4"],
              "Mantenimiento · Bajo riesgo · Economía"),
             ("conjunto-nivel-b","Conjunto Nivel B Completo — Kit HAZMAT","Kit B","fire","Kit HAZMAT Nivel B completo: traje, guantes exterior/interior, botas de goma, cinta de sellado y bolsa de transporte.",
              ["Traje + guantes doble capa","Botas de goma resistentes","Cinta de sellado 25 m incluida","Bolsa de transporte impermeable","NFPA 1992 / OSHA 1910.120"],
              "Primera respuesta · Completamente equipado"),
         ]),
        ("trajes-nivel-c", "Trajes HAZMAT Nivel C",
         "Nivel C · EN 13034 · Purificador", "Trajes Nivel C", "Con Purificador",
         "Trajes HAZMAT Nivel C para uso con respirador purificador de aire. Tyvek®, SMS y tejidos microporo. Para derrames de bajo riesgo de vapor.",
         "Cotizar Trajes Nivel C", 0,
         [
             ("traje-nivel-c-tyvek","Traje Tyvek® 400 — Nivel C Básico","Tyvek 400","smoke","Traje Tyvek® 400 desechable para trabajo con productos químicos de baja peligrosidad. Clase 5/6 EN 13034. El más económico.",
              ["Tyvek® 400 — microporo DuPont","Clase 5 y 6 EN 13034","Desechable — sin lavado","Capucha integrada","EN 13034 / EN 1073-2"],
              "Laboratorio · Asbestos · Bajo riesgo"),
             ("traje-nivel-c-tychem","Traje Tychem® C — Nivel C Avanzado","Tychem C","ember","Traje Tychem® C de doble capa para exposición a salpicaduras de productos químicos de riesgo moderado. Clase 3B.",
              ["Tychem® C film barrera dual","Clase 3B EN 14605","Costuras termoselladas","Talla S a 4XL disponible","EN 14605 / NFPA 1992"],
              "Industria química · Laboratorio"),
             ("traje-nivel-c-dupont","Traje Tyvek® 500 — Alto Rendimiento","Tyvek 500","fire","Traje Tyvek® 500 reforzado para mayor durabilidad. Resistencia superior a abrasión y rasgado. Para trabajo prolongado.",
              ["Tyvek® 500 reforzado abrasión","Resistencia rasgado 2× básico","Costuras selladas en áreas críticas","Clase 5/6 EN 13034","EN 13034 / NFPA 1992"],
              "Trabajo prolongado · Exteriores"),
             ("mascara-purificador","Máscara con Purificador ABEK1P3","Purificador","smoke","Máscara facial completa con filtros ABEK1P3 para vapores orgánicos, inorgánicos, ácidos, amoníaco y partículas. Nivel C.",
              ["Filtros ABEK1P3 intercambiables","Visor panorámico policarbonato","Sellado 6 puntos de contacto","Indicador de saturación del filtro","EN 136 / EN 14387 / NIOSH"],
              "Gases orgánicos · ABEK · Nivel C"),
         ]),
        ("detectores-multigas", "Detectores Multigas",
         "Multigas · LEL/O₂/CO/H₂S · ATEX", "Detectores Multigas", "LEL, O₂, CO, H₂S",
         "Detectores de gas portátiles para LEL, O₂, CO, H₂S y VOC. Certificados ATEX Zona 1. Para espacios confinados, HAZMAT y atmosferas peligrosas.",
         "Cotizar Detectores Multigas", 3,
         [
             ("detector-4gas","Detector 4 Gases — LEL/O₂/CO/H₂S","4 gas","fire","Detector multigas de 4 canales: LEL (% LIE), O₂ (%), CO (ppm) y H₂S (ppm). ATEX Zona 1. Alarma sonora + visual + vibración.",
              ["4 sensores simultáneos","LEL 0–100% / O₂ 0–30%","CO 0–500 ppm / H₂S 0–100 ppm","ATEX Zona 1 / IECEx","ATEX / IECEx / EN 60079 / NFPA 72"],
              "Espacios confinados · HAZMAT · Industria"),
             ("detector-voc","Detector VOC — PID 10.6 eV","PID VOC","ember","Detector de compuestos orgánicos volátiles (VOC) con sensor PID de 10.6 eV. Rango 0–2,000 ppm. Sensibilidad < 0.1 ppm para benceno.",
              ["PID lámpara 10.6 eV","Rango: 0–2,000 ppm","Sensibilidad: < 0.1 ppm benceno","Calibración automática con Isobutileno","ATEX / IECEx / EN 45544"],
              "VOC · Benceno · Solventes · Petroquímica"),
             ("detector-co2-atmosfera","Detector CO₂ Atmosférico — 0–5%","CO₂ atm","smoke","Detector de CO₂ atmosférico para espacios cerrados y estacionamientos. Rango 0–5%. Sensor infrarrojo NDIR de alta precisión.",
              ["Sensor NDIR infrarrojo CO₂","Rango: 0–5% v/v","Respuesta < 30 s T90","Alarma 1% y 2% configurable","EN 50543 / NFPA 72"],
              "Estacionamientos · CO₂ atmosférico"),
             ("estacion-multigas","Estación Fija Multigas — 8 Zonas","Fija","smoke","Estación fija de detección de gas para hasta 8 zonas. Panel de control con histórico de eventos. Certificado para Zona 1 y 2.",
              ["8 zonas de detección simultánea","Panel control con display OLED","Historial 10,000 eventos","Salidas 4-20 mA y relé NC/NA","ATEX / IECEx / EN 60079-0"],
              "Plantas industriales · Sistemas fijos"),
         ]),
        ("kit-descontaminacion", "Kits de Descontaminación",
         "Descontaminación · NFPA 472 · OSHA 1910.120", "Kits de Descontaminación", "HAZMAT Completo",
         "Kits y sistemas de descontaminación para operaciones HAZMAT. Duchas de descontaminación, soluciones neutralizadoras y empaque para materiales contaminados.",
         "Cotizar Kits de Descontaminación", 4,
         [
             ("ducha-decon","Ducha de Descontaminación Plegable — 3 m","3 m","smoke","Ducha de descontaminación plegable de 3 m de largo. 3 estaciones. Incluye colectores de drenaje. Desplegable en < 5 min. NFPA 472.",
              ["3 estaciones ducha","Despliegue: < 5 minutos","Colectores drenaje incluidos","Caudal: 20 L/min por estación","NFPA 472 / OSHA 1910.120"],
              "HAZMAT · Descontaminación masiva"),
             ("solucion-decon","Solución Descontaminante Universal — 20 L","20 L","ember","Solución descontaminante universal al 0.5% de hipoclorito de sodio para neutralizar agentes químicos comunes. Lista para usar.",
              ["NaOCl 0.5% listo para uso","Neutraliza ácidos y bases","Compatible con trajes Nivel A/B/C","Envase 20 L etiquetado GHS","NFPA 472 / ONU 1791"],
              "Agentes químicos · Decon estándar"),
             ("bolsas-contaminadas","Bolsas para Material Contaminado — 200 L","200 L","smoke","Bolsas de polietileno de alta densidad 200 L para empaque de material contaminado. Cierre zip-lock doble y etiqueta de peligro.",
              ["HDPE 200 micrones de espesor","Cierre zip-lock doble hermético","Capacidad 200 L — ropa completa","Etiqueta peligro GHS incluida","DOT 49 CFR / NOM-052-SEMARNAT"],
              "Empaque material contaminado · Trajes"),
             ("maletero-decon","Maletero de Descontaminación — HAZMAT","Kit","fire","Maletero completo de descontaminación HAZMAT: ducha, solución, bolsas, señalética y guía de operación NFPA 472.",
              ["Ducha plegable 1 estación","Solución NaOCl 5 L","10 bolsas HDPE 200 L","Señalética y guía operativa","NFPA 472 / OSHA 1910.120"],
              "Primera respuesta · HAZMAT completo"),
         ]),
        ("equipos-identificacion", "Equipos de Identificación HAZMAT",
         "Identificación · Raman · FTIR · HAZMAT", "Identificación HAZMAT", "Raman y FTIR",
         "Equipos portátiles de identificación química: espectrómetros Raman portátiles, FTIR de contacto y detectores de fotometría de llama para operaciones HAZMAT.",
         "Cotizar Equipos de Identificación", 5,
         [
             ("raman-portatil","Espectrómetro Raman Portátil — 1064 nm","Raman","fire","Espectrómetro Raman portátil 1064 nm para identificación no destructiva de sustancias a través de envases. Base de datos 14,000+ sustancias.",
              ["Láser 1064 nm no destructivo","14,000+ sustancias en base datos","A través del envase sin abrir","Resultado en < 60 s","FIRST Responder HAZMAT"],
              "Primera respuesta · HAZMAT · CBRN"),
             ("ftir-portatil","Espectrómetro FTIR Portátil — Líquidos","FTIR","ember","FTIR portátil para identificación de líquidos y sólidos en contacto o a distancia. Base de datos 100,000+ compuestos. IP67.",
              ["FTIR con ATR de contacto","100,000+ compuestos base datos","IP67 lluvia y polvo","WiFi + USB para informes","NFPA 472 / OSHA HAZMAT"],
              "Identificación líquidos · CBRN · Droga"),
             ("detector-explosivos","Detector de Explosivos — IED/TATP","IED","smoke","Detector portátil de trazas de explosivos IED/TATP con tecnología de ionización diferencial de movilidad (DMS). Detección < 1 s.",
              ["DMS — ionización diferencial","Detecta TATP, HMTD, RDX, PETN","Respuesta: < 1 segundo","No radioactivo — seguro de usar","DHS / TSA / NFPA 1"],
              "Antiterrorismo · Búsqueda IED · CBRN"),
             ("fotometro-llama","Fotómetro de Llama — Metales Alcalinos","FPD","smoke","Fotómetro de llama portátil para detección de metales alcalinos (Li, Na, K) en productos químicos y residuos peligrosos.",
              ["Detección Li, Na, K en campo","Sensibilidad < 1 ppm","Llama de hidrógeno propano","Calibración automática","NIOSH / OSHA HAZMAT"],
              "Metales alcalinos · Residuos peligrosos"),
         ]),
        ("comunicaciones-hazmat", "Comunicaciones para HAZMAT",
         "Comunicaciones · ATEX · HAZMAT", "Comunicaciones HAZMAT", "Intrínsecamente Seguros",
         "Radios y sistemas de comunicación intrínsecamente seguros para zonas ATEX en operaciones HAZMAT. Comunicación en Zona 1 y 2 certificada.",
         "Cotizar Comunicaciones HAZMAT", 6,
         [
             ("radio-intrinsico","Radio Intrínsecamente Seguro — ATEX Zona 1","ATEX Z1","fire","Radio portátil intrínsecamente seguro certificado ATEX Zona 1 para operaciones en atmósferas explosivas. 5 W, IP68, sumergible.",
              ["ATEX Zona 1 — IECEx certified","5 W de potencia RF","IP68 — sumergible 2 m","Batería 2,200 mAh Li-Ion","ATEX / IECEx / ETSI EN 300 113"],
              "HAZMAT · Zona 1 ATEX · Gas inflamable"),
             ("radio-tetra-hazmat","Radio TETRA para HAZMAT — Intrínseco","TETRA","ember","Radio TETRA intrínsecamente seguro para comunicación digital cifrada en operaciones HAZMAT. Full-duplex, GPS integrado.",
              ["TETRA digital full-duplex","GPS integrado 3 m precisión","Cifrado AES 256 bits","ATEX Zona 1 / IECEx","ETSI TETRA / ATEX"],
              "Comando HAZMAT · Cifrado · GPS"),
             ("intercomunicador-hazmat","Intercomunicador para Traje Nivel A","Nivel A","smoke","Sistema de comunicación con micrófono externo para trajes de encapsulamiento Nivel A. Permite comunicación sin quitar el traje.",
              ["Micrófono exterior al traje","Amplificación 24 dB de voz","Alimentación batería 24 h","Montaje universal nivel A","NFPA 1994 / ATEX compatible"],
              "Traje Nivel A · Dentro del traje"),
             ("sistema-area-hazmat","Sistema de Comunicación de Área — HAZMAT","Sistema","smoke","Sistema de comunicación de área para establecer red de mando en incidentes HAZMAT. Repetidor portátil + 4 terminales.",
              ["Repetidor portátil 5 km","4 terminales incluidas","Cifrado AES 128","Zona de seguridad + zona caliente","ETSI TETRA / DMR NFPA"],
              "ICS · Mando HAZMAT · Zona caliente"),
         ]),
    ]),
    ("herramientas-rescate", "Herramientas de Rescate", "/productos/herramientas-rescate/", [
        ("herramientas-hidraulicas", "Herramientas Hidráulicas de Rescate",