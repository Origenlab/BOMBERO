import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C37tG6Zv.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_DiQp1BQS.mjs';
import { $ as $$CTABanner } from '../../chunks/CTABanner_CozAoE6V.mjs';
import { a as $$CategoryCard, $ as $$WhyChooseUs } from '../../chunks/WhyChooseUs_Dj6VV4wI.mjs';
import { $ as $$FAQ } from '../../chunks/FAQ_Cd7__Cxx.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_Bt_mkftY.mjs';
import { $ as $$CTABar } from '../../chunks/CTABar_CWAheUS8.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_e85NYln-.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const productos = [
    {
      id: "estructurales",
      nombre: "Guantes Estructurales para Bombero",
      slug: "/productos/guantes-para-bomberos/estructurales",
      badge: "NFPA 1971",
      badgeColor: "ember",
      imagen: "/images/directorio/guantes-bombero-resistentes-01.avif",
      descripcion: "Protecci\xF3n cef\xE1lica m\xE1xima para las manos en combate de incendios estructurales. Sistema de capas m\xFAltiples: capa exterior resistente a la llama, barrera de humedad y forro t\xE9rmico. Certificado NFPA 1971 para uso con traje y casco estructural.",
      caracteristicas: [
        "Capa exterior: cuero de vaqueta curtida al cromo o Kevlar\xAE tejido",
        "Barrera de humedad Gore-Tex\xAE o equivalente NFPA",
        "Forro t\xE9rmico Nomex\xAE o PBI\xAE resistente al calor",
        "Pu\xF1o extendido de al menos 4 pulgadas sobre la mu\xF1eca",
        "Certificado NFPA 1971 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio estructural \xB7 Rescate urbano \xB7 Colapso de estructuras"
    },
    {
      id: "rescate",
      nombre: "Guantes de Rescate / Extricaci\xF3n",
      slug: "/productos/guantes-para-bomberos/rescate",
      badge: "NFPA 1951",
      badgeColor: "fire",
      imagen: null,
      placeholderPaths: [
        "M18 11V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5",
        "M13 11V4a3 3 0 0 0-3-3 3 3 0 0 0-3 3v7",
        "M8 11V7a3 3 0 0 0-3-3 3 3 0 0 0-3 3v8a8 8 0 0 0 16 0v-5"
      ],
      descripcion: "Guantes de perfil delgado para operaciones de rescate t\xE9cnico, extricaci\xF3n vehicular y trabajo en espacios confinados. M\xE1xima destreza t\xE1ctil con protecci\xF3n anticorte y antiperforaci\xF3n. Cumplen NFPA 1951 y EN 388.",
      caracteristicas: [
        "Perfil ultrafino para m\xE1xima destreza t\xE1ctil",
        "Protecci\xF3n anticorte nivel 4 (EN 388) en palma y dedos",
        "Protecci\xF3n antiperforaci\xF3n para vidrio y metal laminado",
        "Refuerzos en yemas de dedos \xEDndice y pulgar",
        "Certificado NFPA 1951 / EN 388 (edici\xF3n vigente)"
      ],
      aplicacion: "Rescate vehicular \xB7 Extricaci\xF3n \xB7 Espacios confinados \xB7 USAR"
    },
    {
      id: "hazmat",
      nombre: "Guantes HAZMAT para Bombero",
      slug: "/productos/guantes-para-bomberos/hazmat",
      badge: "NFPA 1991",
      badgeColor: "smoke",
      imagen: null,
      placeholderPaths: [
        "M18 11V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5",
        "M13 11V4a3 3 0 0 0-3-3 3 3 0 0 0-3 3v7",
        "M8 11V7a3 3 0 0 0-3-3 3 3 0 0 0-3 3v8a8 8 0 0 0 16 0v-5"
      ],
      descripcion: "Guantes de encapsulamiento para operaciones con materiales peligrosos. Disponibles en butilo, neopreno y l\xE1tex de alta resistencia qu\xEDmica. Resistentes a m\xE1s de 200 productos qu\xEDmicos industriales. Cumplen NFPA 1991 y EN 374.",
      caracteristicas: [
        "Material: butilo, neopreno o l\xE1tex seg\xFAn agente qu\xEDmico",
        "Resistencia a m\xE1s de 200 productos qu\xEDmicos",
        "Compatible con traje HAZMAT Nivel A y Nivel B",
        "Largo extendido para solapado con manga del traje",
        "Certificado NFPA 1991 / EN 374 (edici\xF3n vigente)"
      ],
      aplicacion: "HAZMAT \xB7 Derrame qu\xEDmico \xB7 Materiales peligrosos \xB7 CBRN"
    },
    {
      id: "forestales",
      nombre: "Guantes Forestales para Bombero",
      slug: "/productos/guantes-para-bomberos/forestales",
      badge: "NFPA 1977",
      badgeColor: "fire",
      imagen: null,
      placeholderPaths: [
        "M18 11V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5",
        "M13 11V4a3 3 0 0 0-3-3 3 3 0 0 0-3 3v7",
        "M8 11V7a3 3 0 0 0-3-3 3 3 0 0 0-3 3v8a8 8 0 0 0 16 0v-5"
      ],
      descripcion: "Guantes ligeros y transpirables para combate de incendios forestales e interface. Dise\xF1ados para trabajo f\xEDsico intenso y prolongado en campo abierto. Resistencia inherente a la llama sin comprometer la movilidad. Cumplen NFPA 1977.",
      caracteristicas: [
        "Tejido exterior Nomex\xAE ultraligero de resistencia inherente",
        "Alta transpirabilidad para operaciones prolongadas en campo",
        "Palma de cuero de vaqueta para agarre y resistencia a la abrasi\xF3n",
        "Construcci\xF3n sin costuras interiores para mayor comodidad",
        "Certificado NFPA 1977 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio forestal \xB7 Quemas controladas \xB7 Interface urbano-rural"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Guantes para Bomberos NFPA | Estructurales y Rescate | BOMBERO.MX", "description": "Guantes de bombero certificados NFPA 1971, 1951, 1991 y 1977. Guantes Estructurales, de Rescate, HAZMAT y Forestales con env\xEDo a los 32 estados de M\xE9xico. Asesor\xEDa t\xE9cnica sin costo. \xA1Cotiza ahora!", "keywords": [
    "guantes para bomberos",
    "guantes bombero NFPA 1971",
    "guantes estructurales bombero",
    "guantes rescate extricaci\xF3n",
    "guantes HAZMAT bombero",
    "guantes forestales NFPA 1977",
    "guantes bombero certificados M\xE9xico",
    "guantes Nomex bombero",
    "EPP manos bomberos M\xE9xico",
    "protecci\xF3n manos bombero",
    "comprar guantes bombero M\xE9xico",
    "guantes bombero NFPA certificado"
  ], "type": "website", "data-astro-cid-fmeps55c": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero" }
  ], "data-astro-cid-fmeps55c": true })}    ${maybeRenderHead()}<section class="hero" data-astro-cid-fmeps55c> <div class="hero__bg" data-astro-cid-fmeps55c> <div class="hero__gradient" data-astro-cid-fmeps55c></div> <div class="hero__grid" data-astro-cid-fmeps55c></div> <div class="hero__glow hero__glow--1" data-astro-cid-fmeps55c></div> <div class="hero__glow hero__glow--2" data-astro-cid-fmeps55c></div> </div> <div class="container hero__container" data-astro-cid-fmeps55c> <div class="hero__content" data-astro-cid-fmeps55c> <div class="hero__badge" data-astro-cid-fmeps55c> <span class="hero__badge-dot" data-astro-cid-fmeps55c></span>
4 Tipos de Guantes · Certificados NFPA
</div> <h1 class="hero__title" data-astro-cid-fmeps55c>
Guantes para
<span class="hero__title-highlight" data-astro-cid-fmeps55c>Bomberos</span>
Certificados NFPA
</h1> <p class="hero__subtitle" data-astro-cid-fmeps55c>
La protección de manos más exigente para cada tipo de operación. Guantes estructurales,
          de rescate, HAZMAT y forestales certificados NFPA con envío a los 32 estados de México.
          Asesoría técnica sin costo.
</p> </div> <div class="hero__seo" data-astro-cid-fmeps55c> <div class="hero__seo-block" data-astro-cid-fmeps55c> <h2 class="hero__seo-title" data-astro-cid-fmeps55c>Distribuidores de Guantes de Bombero Certificados NFPA en México</h2> <p class="hero__seo-text" data-astro-cid-fmeps55c>
En <strong data-astro-cid-fmeps55c>BOMBERO.MX</strong> somos distribuidores autorizados de <strong data-astro-cid-fmeps55c>guantes para bomberos</strong> de las marcas líderes mundiales. Nuestro catálogo incluye <strong data-astro-cid-fmeps55c>guantes estructurales NFPA 1971</strong>, <strong data-astro-cid-fmeps55c>guantes de rescate y extricación NFPA 1951</strong>, <strong data-astro-cid-fmeps55c>guantes HAZMAT NFPA 1991</strong> y <strong data-astro-cid-fmeps55c>guantes forestales NFPA 1977</strong> para cada tipo de operación. Complementa tus guantes con <a href="/productos/trajes-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-fmeps55c>trajes certificados NFPA</a>, <a href="/productos/cascos-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-fmeps55c>cascos de bombero</a> y <a href="/productos/botas-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-fmeps55c>botas certificadas</a> para un sistema EPP completo.
</p> </div> <div class="hero__seo-block" data-astro-cid-fmeps55c> <h2 class="hero__seo-title" data-astro-cid-fmeps55c>Guantes con Certificación NFPA para Cuerpos de Bomberos y Brigadas</h2> <p class="hero__seo-text" data-astro-cid-fmeps55c>
Cada <strong data-astro-cid-fmeps55c>guante de bombero</strong> de nuestro catálogo viene con certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-fmeps55c>licitación gubernamental</strong>. Los guantes estructurales deben usarse con <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-fmeps55c>traje estructural NFPA 1971</a> y <a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-fmeps55c>casco estructural</a>. Proveemos a cuerpos de bomberos municipales, brigadas industriales, aeropuertos y protección civil en los <strong data-astro-cid-fmeps55c>32 estados de México</strong>.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": "Cotizar Guantes de Bombero", "data-astro-cid-fmeps55c": true })}    <section class="section productos" id="catalogo" data-astro-cid-fmeps55c> <div class="container" data-astro-cid-fmeps55c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Guantes para Bomberos", "title": "4 Tipos de Guantes de Bombero", "description": "Desde combate estructural hasta operaciones HAZMAT. Cada guante est\xE1 dise\xF1ado para el entorno operativo espec\xEDfico del bombero.", "data-astro-cid-fmeps55c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-fmeps55c>
Los <strong data-astro-cid-fmeps55c>guantes de bombero</strong> son el componente del EPP que más interactúa con el entorno: manipulan herramientas, víctimas, agentes químicos y estructuras en llamas. Seleccionar el guante correcto según la operación es crítico para la <strong data-astro-cid-fmeps55c>destreza táctil, protección térmica y seguridad</strong>. En BOMBERO.MX solo distribuimos guantes que superan los requisitos NFPA vigentes.
</p> <p data-astro-cid-fmeps55c>
Todos nuestros guantes incluyen fichas técnicas y certificados de laboratorio. Son compatibles con el resto del EPP del catálogo: <a href="/productos/trajes-para-bomberos" data-astro-cid-fmeps55c>trajes Nomex® y PBI®</a>, <a href="/productos/cascos-para-bomberos" data-astro-cid-fmeps55c>cascos estructurales o forestales</a>, <a href="/productos/botas-para-bomberos" data-astro-cid-fmeps55c>botas certificadas</a> y sistemas SCBA de cualquier autonomía.
</p> ` })} <div class="productos__grid" data-astro-cid-fmeps55c> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...producto, "altSuffix": "Guante de bombero certificado", "data-astro-cid-fmeps55c": true })}`)} </div> </div> </section>    <section class="section section--dark specs" data-astro-cid-fmeps55c> <div class="container" data-astro-cid-fmeps55c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tecnolog\xEDa y Materiales", "title": "Materiales, Certificaciones y Aplicaciones", "description": "Los guantes de bombero de alto rendimiento combinan materiales de resistencia inherente, barreras de humedad y construcciones especializadas para cada tipo de riesgo.", "data-astro-cid-fmeps55c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-fmeps55c>
Los <strong data-astro-cid-fmeps55c>guantes estructurales NFPA 1971</strong> combinan cuero de vaqueta o Kevlar® en la capa exterior, barrera de humedad Gore-Tex® y forro Nomex® o PBI® para protección integral en incendios de edificios. Deben usarse con <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" style="color: white; text-decoration: underline;" data-astro-cid-fmeps55c>traje estructural NFPA 1971</a>, <a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" style="color: white; text-decoration: underline;" data-astro-cid-fmeps55c>casco estructural</a> y <a href="/productos/botas-para-bomberos/estructural" style="color: white; text-decoration: underline;" data-astro-cid-fmeps55c>botas de cuero</a>. Los <strong data-astro-cid-fmeps55c>guantes de rescate NFPA 1951</strong> priorizan la destreza táctil con protección anticorte nivel 4 para extricación vehicular y trabajo con herramienta hidráulica.
</p> <p data-astro-cid-fmeps55c>
Cada <strong data-astro-cid-fmeps55c>guante de bombero</strong> de nuestro catálogo incluye certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-fmeps55c>licitación pública</strong>. Combínalos con <a href="/productos/trajes-para-bomberos" style="color: white; text-decoration: underline;" data-astro-cid-fmeps55c>trajes certificados NFPA</a>, <a href="/productos/cascos-para-bomberos" style="color: white; text-decoration: underline;" data-astro-cid-fmeps55c>cascos de bombero</a> y <a href="/productos/botas-para-bomberos" style="color: white; text-decoration: underline;" data-astro-cid-fmeps55c>botas certificadas</a>. Proveemos documentación técnica a cuerpos de bomberos municipales, brigadas industriales y protección civil en los <strong data-astro-cid-fmeps55c>32 estados de México</strong>.
</p> ` })} <div class="specs__grid" data-astro-cid-fmeps55c> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Materiales y Construcci\xF3n", "icon": "glove", "description": "Cuero de vaqueta curtida al cromo y Kevlar\xAE tejido para estructurales. Tejido Nomex\xAE ultraligero para forestales. Butilo, neopreno y l\xE1tex para HAZMAT. Barreras Gore-Tex\xAE y forros Nomex\xAE/PBI\xAE seg\xFAn norma aplicable.", "data-astro-cid-fmeps55c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Certificaciones Aplicables", "icon": "certificate", "description": "NFPA 1971 para guantes estructurales, NFPA 1977 para forestales, NFPA 1951 para rescate y extricaci\xF3n, NFPA 1991 para HAZMAT. Normas europeas EN 388 y EN 374. Cada guante incluye certificado de laboratorio y ficha t\xE9cnica lista para licitaci\xF3n p\xFAblica.", "data-astro-cid-fmeps55c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Operaciones y Usuarios", "icon": "users", "description": "Cuerpos de bomberos municipales y estatales, brigadas industriales y petroqu\xEDmicas, equipos USAR de b\xFAsqueda y rescate, equipos HAZMAT, bomberos forestales y aeroportuarios ARFF en los 32 estados de M\xE9xico.", "data-astro-cid-fmeps55c": true })} </div> </div> </section>    <section class="section comparativa" data-astro-cid-fmeps55c> <div class="container" data-astro-cid-fmeps55c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tabla Comparativa", "title": "\xBFQu\xE9 Guante de Bombero Necesitas?", "description": "Compara los 4 tipos de guantes seg\xFAn su norma, aplicaci\xF3n y nivel de protecci\xF3n para elegir el equipo correcto.", "data-astro-cid-fmeps55c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-fmeps55c>
La elección del <strong data-astro-cid-fmeps55c>guante de bombero</strong> correcto depende del riesgo predominante: el <strong data-astro-cid-fmeps55c>guante estructural NFPA 1971</strong> es el estándar para incendios de edificios y debe usarse con <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" data-astro-cid-fmeps55c>traje estructural</a>, <a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" data-astro-cid-fmeps55c>casco estructural</a> y <a href="/productos/botas-para-bomberos/estructural" data-astro-cid-fmeps55c>botas de cuero</a>. El <strong data-astro-cid-fmeps55c>guante de rescate NFPA 1951</strong> ofrece mayor destreza táctil para extricación vehicular y trabajo técnico. El <strong data-astro-cid-fmeps55c>guante HAZMAT NFPA 1991</strong> es indispensable para incidentes con materiales peligrosos y requiere <a href="/productos/trajes-para-bomberos/traje-hazmat" data-astro-cid-fmeps55c>traje HAZMAT</a> y <a href="/productos/botas-para-bomberos/caucho" data-astro-cid-fmeps55c>botas de caucho</a>.
</p> <p data-astro-cid-fmeps55c>
En <strong data-astro-cid-fmeps55c>BOMBERO.MX</strong> asesoramos a tu corporación sin costo para seleccionar el guante adecuado según el riesgo predominante. Elaboramos especificaciones técnicas y comparativos de productos para <strong data-astro-cid-fmeps55c>licitaciones gubernamentales</strong> en toda la República Mexicana.
</p> ` })} <div class="comparativa__wrapper" data-astro-cid-fmeps55c> <table class="comparativa__table" data-astro-cid-fmeps55c> <thead data-astro-cid-fmeps55c> <tr data-astro-cid-fmeps55c> <th data-astro-cid-fmeps55c>Guante</th> <th data-astro-cid-fmeps55c>Norma Principal</th> <th data-astro-cid-fmeps55c>Aplicación</th> <th data-astro-cid-fmeps55c>Material Exterior</th> <th data-astro-cid-fmeps55c>Característica Clave</th> </tr> </thead> <tbody data-astro-cid-fmeps55c> <tr data-astro-cid-fmeps55c> <td data-astro-cid-fmeps55c><strong data-astro-cid-fmeps55c>Estructural</strong></td> <td data-astro-cid-fmeps55c><span class="cert-chip cert-chip--ember" data-astro-cid-fmeps55c>NFPA 1971</span></td> <td data-astro-cid-fmeps55c>Incendio estructural, colapso, rescate urbano</td> <td data-astro-cid-fmeps55c>Cuero vaqueta / Kevlar®</td> <td data-astro-cid-fmeps55c>Máx. protección térmica + barrera humedad</td> </tr> <tr data-astro-cid-fmeps55c> <td data-astro-cid-fmeps55c><strong data-astro-cid-fmeps55c>Rescate / Extricación</strong></td> <td data-astro-cid-fmeps55c><span class="cert-chip cert-chip--fire" data-astro-cid-fmeps55c>NFPA 1951</span></td> <td data-astro-cid-fmeps55c>Rescate vehicular, espacios confinados, USAR</td> <td data-astro-cid-fmeps55c>Cuero + Kevlar® anticorte</td> <td data-astro-cid-fmeps55c>Destreza táctil + anticorte nivel 4</td> </tr> <tr data-astro-cid-fmeps55c> <td data-astro-cid-fmeps55c><strong data-astro-cid-fmeps55c>HAZMAT</strong></td> <td data-astro-cid-fmeps55c><span class="cert-chip cert-chip--smoke" data-astro-cid-fmeps55c>NFPA 1991</span></td> <td data-astro-cid-fmeps55c>Materiales peligrosos, derrames químicos, CBRN</td> <td data-astro-cid-fmeps55c>Butilo / Neopreno / Látex</td> <td data-astro-cid-fmeps55c>Resistencia a +200 productos químicos</td> </tr> <tr data-astro-cid-fmeps55c> <td data-astro-cid-fmeps55c><strong data-astro-cid-fmeps55c>Forestal</strong></td> <td data-astro-cid-fmeps55c><span class="cert-chip cert-chip--fire" data-astro-cid-fmeps55c>NFPA 1977</span></td> <td data-astro-cid-fmeps55c>Incendio forestal, interface, quemas controladas</td> <td data-astro-cid-fmeps55c>Nomex® + cuero de palma</td> <td data-astro-cid-fmeps55c>Ligero, transpirable, resistencia inherente</td> </tr> </tbody> </table> </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-fmeps55c": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-fmeps55c": true })}    <section class="section relacionados" data-astro-cid-fmeps55c> <div class="container" data-astro-cid-fmeps55c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "Los guantes son parte de un sistema integral. Equipa a tu personal con protecci\xF3n completa certificada NFPA.", "data-astro-cid-fmeps55c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-fmeps55c>
Un <strong data-astro-cid-fmeps55c>equipo de protección personal</strong> efectivo requiere que todos sus componentes sean compatibles entre sí: los guantes deben trabajar con el <a href="/productos/trajes-para-bomberos" data-astro-cid-fmeps55c><strong data-astro-cid-fmeps55c>traje Nomex® o PBI®</strong></a>, el <a href="/productos/cascos-para-bomberos" data-astro-cid-fmeps55c><strong data-astro-cid-fmeps55c>casco</strong></a> y la <strong data-astro-cid-fmeps55c>capucha</strong> como un sistema integrado. El puño extendido del guante estructural solapado con la manga del <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" data-astro-cid-fmeps55c>traje estructural</a> es un requisito NFPA.
</p> <p data-astro-cid-fmeps55c>
En <strong data-astro-cid-fmeps55c>BOMBERO.MX</strong> equipamos a tu personal con todo el sistema de protección de una sola fuente: <a href="/productos/trajes-para-bomberos" data-astro-cid-fmeps55c>trajes certificados NFPA</a>, <a href="/productos/cascos-para-bomberos" data-astro-cid-fmeps55c>cascos estructurales o forestales</a>, <a href="/productos/botas-para-bomberos" data-astro-cid-fmeps55c>botas de cuero o caucho</a>, y equipos SCBA de 30, 45 y 60 minutos. Todo con ficha técnica y disponibilidad para los <strong data-astro-cid-fmeps55c>32 estados de México</strong>.
</p> ` })} <div class="rel__grid" data-astro-cid-fmeps55c> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Trajes de Bombero", "icon": "shield", "image": "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif", "href": "/productos/trajes-para-bomberos", "buttonText": "Trajes para Bombero", "items": [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
    { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" },
    { label: "Traje HAZMAT Nivel A / B", href: "/productos/trajes-para-bomberos/traje-hazmat" }
  ], "data-astro-cid-fmeps55c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Cascos para Bombero", "icon": "helmet", "image": "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", "href": "/productos/cascos-para-bomberos", "buttonText": "Cascos para Bombero", "items": [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" },
    { label: "Casco HAZMAT / Brigada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }
  ], "data-astro-cid-fmeps55c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Botas para Bombero", "icon": "boot", "image": "/images/directorio/botas-bombero-proteccion-01.avif", "href": "/productos/botas-para-bomberos", "buttonText": "Botas para Bombero", "items": [
    { label: "Bota Estructural (Cuero)", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Bota de Caucho (HAZMAT)", href: "/productos/botas-para-bomberos/caucho" },
    { label: "Bota Forestal", href: "/productos/botas-para-bomberos/forestal" },
    { label: "Ver todas las Botas", href: "/productos/botas-para-bomberos" }
  ], "data-astro-cid-fmeps55c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Capuchas y Gafas", "icon": "hood", "image": "/images/directorio/capucha-bombero-nomex-01.avif", "href": "/productos/capuchas-para-bomberos", "buttonText": "Capuchas y Gafas", "items": [
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex" },
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada" },
    { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos/goggle" }
  ], "data-astro-cid-fmeps55c": true })} </div> </div> </section>    ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-fmeps55c": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/index.astro";
const $$url = "/productos/guantes-para-bomberos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
