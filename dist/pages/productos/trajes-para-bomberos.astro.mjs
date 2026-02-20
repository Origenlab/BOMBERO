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
      id: "estructural",
      nombre: "Traje Estructural NFPA 1971",
      slug: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      badge: "NFPA 1971",
      badgeColor: "ember",
      imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      descripcion: "Protecci\xF3n m\xE1xima para combate de incendios estructurales. Cumple y supera los requisitos de la norma NFPA 1971. Construido con materiales de capas m\xFAltiples: capa exterior resistente al fuego, barrera de humedad y capa t\xE9rmica.",
      caracteristicas: [
        "Capa exterior: Nomex\xAE o PBI\xAE certificada",
        "Barrera Gore-Tex\xAE o equivalente NFPA",
        "Protecci\xF3n t\xE9rmica TPP \u2265 35 cal/cm\xB2",
        "Bandas retroreflectivas SOLAS clase 2",
        "Certificado NFPA 1971 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio estructural \xB7 Rescate urbano \xB7 Colapso de estructuras"
    },
    {
      id: "forestal",
      nombre: "Traje Forestal NFPA 1977",
      slug: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      badge: "NFPA 1977",
      badgeColor: "fire",
      imagen: "/images/directorio/pick-up-bomberos-forestal-01.avif",
      descripcion: "Dise\xF1ado espec\xEDficamente para el combate de incendios forestales y de interface. Ligero y transpirable para operaciones prolongadas en campo abierto. Cumple NFPA 1977 con m\xE1xima movilidad.",
      caracteristicas: [
        "Tejido Nomex\xAE ultraligero (<400 g/m\xB2)",
        "Alta transpirabilidad para trabajo f\xEDsico intenso",
        "Resistencia a la llama inherente (no tratada)",
        "Compatible con equipo de mochila forestal",
        "Certificado NFPA 1977 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio forestal \xB7 Quemas controladas \xB7 Interface urbano-rural"
    },
    {
      id: "arff",
      nombre: "Traje ARFF Aeroportuario",
      slug: "/productos/trajes-para-bomberos/traje-arff-aeroportuario",
      badge: "NFPA 1971 / EN 1486",
      badgeColor: "ember",
      imagen: "/images/directorio/camion-bomberos-aeropuerto-01.avif",
      descripcion: "Traje de protecci\xF3n de proximidad para bomberos aeroportuarios (ARFF \u2013 Aircraft Rescue and Firefighting). Dise\xF1ado para soportar la radiaci\xF3n extrema de incendios de combustible de aviaci\xF3n.",
      caracteristicas: [
        "Capa exterior aluminizada de alta reflectividad",
        "Protecci\xF3n frente a jet fuel y combustibles de aviaci\xF3n",
        "Cumple NFPA 1971 / EN 1486 / ICAO Annex 14",
        "Rango de protecci\xF3n: hasta 1000\xB0C de radiaci\xF3n",
        "Sistema de cierre r\xE1pido para emergencias"
      ],
      aplicacion: "Aeropuertos \xB7 Pistas de aterrizaje \xB7 Emergencias aeron\xE1uticas"
    },
    {
      id: "aproximacion",
      nombre: "Traje de Aproximaci\xF3n",
      slug: "/productos/trajes-para-bomberos/traje-aproximacion",
      badge: "Alta Temperatura",
      badgeColor: "fire",
      imagen: "/images/directorio/estacion-bomberos-petrolera-01.avif",
      descripcion: "Traje de protecci\xF3n de proximidad para operaciones en ambientes de alta radiaci\xF3n t\xE9rmica. Permite la aproximaci\xF3n segura a fuentes de calor intenso como derrames inflamables, hornos industriales o incendios de metales.",
      caracteristicas: [
        "Capa exterior aluminizada reflectiva \u2265 90%",
        "Protecci\xF3n continua hasta 150\xB0C ambiente",
        "Protecci\xF3n radial hasta 1,800\xB0F (982\xB0C)",
        "Visor de vidrio con recubrimiento met\xE1lico dorado",
        "Compatible con SCBA aut\xF3nomo externo"
      ],
      aplicacion: "Petroqu\xEDmica \xB7 Fundiciones \xB7 Derrame de metales fundidos"
    },
    {
      id: "hazmat",
      nombre: "Traje HAZMAT",
      slug: "/productos/trajes-para-bomberos/traje-hazmat",
      badge: "NFPA 1991 / 1992",
      badgeColor: "smoke",
      imagen: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      descripcion: "Traje de encapsulamiento total para protecci\xF3n contra materiales peligrosos. Disponible en Nivel A (encapsulado con SCBA interno) y Nivel B (protecci\xF3n respiratoria externa). Cumple NFPA 1991 y 1992.",
      caracteristicas: [
        "Nivel A: encapsulamiento total herm\xE9tico",
        "Nivel B: traje splash-proof con SCBA externo",
        "Resistente a m\xE1s de 200 productos qu\xEDmicos",
        "Certificado NFPA 1991 / NFPA 1992 / EN 943",
        "Pruebas de permeaci\xF3n qu\xEDmica seg\xFAn ASTM F1001"
      ],
      aplicacion: "HAZMAT \xB7 Derrame qu\xEDmico \xB7 Incidentes con materiales peligrosos"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Trajes para Bomberos NFPA | Estructural, Forestal, HAZMAT | BOMBERO.MX", "description": "Trajes de bombero certificados NFPA 1971 y 1977. Traje Estructural, Forestal, ARFF Aeroportuario, Aproximaci\xF3n y HAZMAT con env\xEDo a los 32 estados de M\xE9xico. Asesor\xEDa t\xE9cnica sin costo. \xA1Cotiza ahora!", "keywords": [
    "trajes de bombero",
    "traje estructural NFPA 1971",
    "traje forestal NFPA 1977",
    "traje HAZMAT bombero",
    "traje ARFF aeroportuario",
    "traje de aproximaci\xF3n bomberos",
    "equipo de protecci\xF3n personal bomberos",
    "EPP bomberos M\xE9xico",
    "traje Nomex bombero",
    "traje PBI bombero",
    "comprar traje bombero M\xE9xico",
    "traje bombero certificado"
  ], "type": "website", "data-astro-cid-uv3ea2x3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Productos", href: "/productos" },
    { label: "Trajes de Bombero" }
  ], "data-astro-cid-uv3ea2x3": true })}    ${maybeRenderHead()}<section class="hero" data-astro-cid-uv3ea2x3> <div class="hero__bg" data-astro-cid-uv3ea2x3> <div class="hero__gradient" data-astro-cid-uv3ea2x3></div> <div class="hero__grid" data-astro-cid-uv3ea2x3></div> <div class="hero__glow hero__glow--1" data-astro-cid-uv3ea2x3></div> <div class="hero__glow hero__glow--2" data-astro-cid-uv3ea2x3></div> </div> <div class="container hero__container" data-astro-cid-uv3ea2x3> <div class="hero__content" data-astro-cid-uv3ea2x3> <div class="hero__badge" data-astro-cid-uv3ea2x3> <span class="hero__badge-dot" data-astro-cid-uv3ea2x3></span>
5 Tipos de Trajes · Certificados NFPA
</div> <h1 class="hero__title" data-astro-cid-uv3ea2x3>
Trajes para
<span class="hero__title-highlight" data-astro-cid-uv3ea2x3>Bomberos</span>
Certificados NFPA
</h1> <p class="hero__subtitle" data-astro-cid-uv3ea2x3>
El equipo de protección personal más crítico para el bombero. Trajes estructurales,
          forestales, ARFF, de aproximación y HAZMAT certificados con envío a los 32 estados
          de México. Asesoría técnica sin costo.
</p> </div> <div class="hero__seo" data-astro-cid-uv3ea2x3> <div class="hero__seo-block" data-astro-cid-uv3ea2x3> <h2 class="hero__seo-title" data-astro-cid-uv3ea2x3>Distribuidores de Trajes de Bombero Certificados NFPA en México</h2> <p class="hero__seo-text" data-astro-cid-uv3ea2x3>
En <strong data-astro-cid-uv3ea2x3>BOMBERO.MX</strong> somos el distribuidor autorizado #1 de <strong data-astro-cid-uv3ea2x3>trajes de protección para bomberos</strong> en toda la República Mexicana. Nuestro catálogo incluye <strong data-astro-cid-uv3ea2x3>trajes estructurales NFPA 1971</strong>, <strong data-astro-cid-uv3ea2x3>trajes forestales NFPA 1977</strong>, trajes ARFF aeroportuarios, <strong data-astro-cid-uv3ea2x3>trajes HAZMAT Nivel A y B</strong> y trajes de aproximación de alta temperatura. Complementa tu traje con <a href="/productos/cascos-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-uv3ea2x3>cascos certificados NFPA</a> y <a href="/productos/botas-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-uv3ea2x3>botas de bombero</a> para un sistema EPP completo.
</p> </div> <div class="hero__seo-block" data-astro-cid-uv3ea2x3> <h2 class="hero__seo-title" data-astro-cid-uv3ea2x3>Sistema EPP Completo: Traje, Casco y Botas Certificados</h2> <p class="hero__seo-text" data-astro-cid-uv3ea2x3>
Cada <strong data-astro-cid-uv3ea2x3>traje de bombero</strong> cumple con las normativas más exigentes: <strong data-astro-cid-uv3ea2x3>NFPA 1971</strong>, <strong data-astro-cid-uv3ea2x3>NFPA 1977</strong>, <strong data-astro-cid-uv3ea2x3>NFPA 1991 y 1992</strong>. Para protección integral, el traje debe combinarse con <a href="/productos/cascos-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-uv3ea2x3>casco estructural NFPA 1971</a> y <a href="/productos/botas-para-bomberos" style="color: var(--color-fire-400); text-decoration: underline;" data-astro-cid-uv3ea2x3>botas certificadas</a>. Proveemos documentación completa para licitaciones en los <strong data-astro-cid-uv3ea2x3>32 estados de México</strong>.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": "Cotizar Trajes de Bombero", "data-astro-cid-uv3ea2x3": true })}    <section class="section productos" id="catalogo" data-astro-cid-uv3ea2x3> <div class="container" data-astro-cid-uv3ea2x3> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Trajes para Bomberos", "title": "5 Tipos de Trajes de Bombero", "description": "Desde combate estructural hasta operaciones con materiales peligrosos. Cada traje est\xE1 dise\xF1ado para el entorno operativo m\xE1s exigente.", "data-astro-cid-uv3ea2x3": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-uv3ea2x3>
Un <strong data-astro-cid-uv3ea2x3>traje de bombero</strong> no es simplemente ropa de protección: es un sistema integrado de múltiples capas que debe equilibrar <strong data-astro-cid-uv3ea2x3>protección térmica, resistencia química, movilidad y durabilidad</strong>. En BOMBERO.MX seleccionamos únicamente trajes que superan los requerimientos mínimos de la norma NFPA aplicable.
</p> <p data-astro-cid-uv3ea2x3>
Todos nuestros <strong data-astro-cid-uv3ea2x3>trajes estructurales NFPA 1971</strong>, forestales, ARFF y HAZMAT incluyen fichas técnicas completas y certificados de laboratorio. Para un <strong data-astro-cid-uv3ea2x3>sistema de protección completo</strong>, combina el traje con <a href="/productos/cascos-para-bomberos" data-astro-cid-uv3ea2x3>casco NFPA certificado</a>, guantes estructurales y <a href="/productos/botas-para-bomberos" data-astro-cid-uv3ea2x3>botas de cuero o caucho</a> según la operación.
</p> ` })} <div class="productos__grid" data-astro-cid-uv3ea2x3> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...producto, "altSuffix": "Traje de bombero certificado", "data-astro-cid-uv3ea2x3": true })}`)} </div> </div> </section>    <section class="section section--dark specs" data-astro-cid-uv3ea2x3> <div class="container" data-astro-cid-uv3ea2x3> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tecnolog\xEDa y Materiales", "title": "Materiales, Certificaciones y Aplicaciones", "description": "Los mejores trajes de bombero del mundo se fabrican con materiales de alto rendimiento que ofrecen protecci\xF3n inherente sin comprometer la movilidad ni la comodidad del operativo.", "data-astro-cid-uv3ea2x3": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-uv3ea2x3>
Los <strong data-astro-cid-uv3ea2x3>trajes estructurales NFPA 1971</strong> combinan capa exterior de Nomex® o PBI Gold®, barrera de humedad Gore-Tex® y capa térmica en un sistema de tres capas que protege frente a llamas directas y calor radiante. Para protección completa, el traje estructural debe usarse con <a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" style="color: white; text-decoration: underline;" data-astro-cid-uv3ea2x3>casco estructural NFPA 1971</a> y <a href="/productos/botas-para-bomberos/estructural" style="color: white; text-decoration: underline;" data-astro-cid-uv3ea2x3>botas estructurales de cuero</a>. Los <strong data-astro-cid-uv3ea2x3>trajes forestales NFPA 1977</strong> priorizan el tejido ultraligero y la transpirabilidad para operaciones prolongadas en campo.
</p> <p data-astro-cid-uv3ea2x3>
Todos nuestros <strong data-astro-cid-uv3ea2x3>trajes de bombero</strong> incluyen certificados de laboratorio acreditado y fichas técnicas completas listas para <strong data-astro-cid-uv3ea2x3>licitaciones gubernamentales</strong>. Compatibles con <a href="/productos/cascos-para-bomberos" style="color: white; text-decoration: underline;" data-astro-cid-uv3ea2x3>cascos certificados NFPA</a> y <a href="/productos/botas-para-bomberos" style="color: white; text-decoration: underline;" data-astro-cid-uv3ea2x3>botas de bombero</a> de nuestro catálogo para equipar tu cuerpo de bomberos con un solo proveedor en los <strong data-astro-cid-uv3ea2x3>32 estados de México</strong>.
</p> ` })} <div class="specs__grid" data-astro-cid-uv3ea2x3> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Materiales de Alta Protecci\xF3n", "icon": "shield", "description": "Nomex\xAE IIIA y PBI Gold\xAE para resistencia inherente a la llama y estabilidad t\xE9rmica m\xE1xima. Kevlar\xAE para resistencia al corte y punci\xF3n. Gore-Tex\xAE como barrera de humedad certificada. Materiales aluminizados para reflexi\xF3n de radiaci\xF3n extrema.", "data-astro-cid-uv3ea2x3": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Certificaciones Internacionales", "icon": "certificate", "description": "NFPA 1971 para trajes estructurales, NFPA 1977 para forestales, NFPA 1991 y 1992 para HAZMAT. Normas europeas EN 469 y EN 943. Documentaci\xF3n completa de laboratorio lista para licitaciones en los 32 estados de M\xE9xico.", "data-astro-cid-uv3ea2x3": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Aplicaciones y Operaciones", "icon": "users", "description": "Cuerpos de bomberos municipales y estatales, brigadas industriales y petroqu\xEDmicas, bomberos aeroportuarios ARFF, protecci\xF3n civil estatal y federal, y brigadas de emergencias especiales en toda la Rep\xFAblica Mexicana.", "data-astro-cid-uv3ea2x3": true })} </div> </div> </section>    <section class="section comparativa" data-astro-cid-uv3ea2x3> <div class="container" data-astro-cid-uv3ea2x3> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tabla Comparativa", "title": "\xBFQu\xE9 Traje de Bombero Necesitas?", "description": "Compara los 5 tipos de trajes seg\xFAn su norma, aplicaci\xF3n y nivel de protecci\xF3n para elegir el equipo correcto.", "data-astro-cid-uv3ea2x3": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-uv3ea2x3>
La elección del <strong data-astro-cid-uv3ea2x3>traje de bombero</strong> correcto depende del riesgo predominante: el <strong data-astro-cid-uv3ea2x3>traje estructural NFPA 1971</strong> es el estándar para incendios de edificios y debe usarse con <a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" data-astro-cid-uv3ea2x3>casco estructural</a> y <a href="/productos/botas-para-bomberos/estructural" data-astro-cid-uv3ea2x3>botas de cuero NFPA 1971</a>. El <strong data-astro-cid-uv3ea2x3>forestal NFPA 1977</strong> para trabajo en campo se complementa con <a href="/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" data-astro-cid-uv3ea2x3>casco forestal ligero</a> y <a href="/productos/botas-para-bomberos/forestal" data-astro-cid-uv3ea2x3>botas forestales</a>. El <strong data-astro-cid-uv3ea2x3>traje HAZMAT NFPA 1991/1992</strong> requiere <a href="/productos/botas-para-bomberos/caucho" data-astro-cid-uv3ea2x3>botas de caucho químico</a> y <a href="/productos/cascos-para-bomberos/casco-hazmat-quimico" data-astro-cid-uv3ea2x3>casco HAZMAT</a> para protección completa.
</p> <p data-astro-cid-uv3ea2x3>
En <strong data-astro-cid-uv3ea2x3>BOMBERO.MX</strong> asesoramos sin costo a tu corporación para seleccionar el traje, casco y botas adecuados según el tipo de riesgo. Elaboramos especificaciones técnicas de <strong data-astro-cid-uv3ea2x3>sistemas EPP completos</strong> para <strong data-astro-cid-uv3ea2x3>licitaciones públicas</strong> en toda la República Mexicana.
</p> ` })} <div class="comparativa__wrapper" data-astro-cid-uv3ea2x3> <table class="comparativa__table" data-astro-cid-uv3ea2x3> <thead data-astro-cid-uv3ea2x3> <tr data-astro-cid-uv3ea2x3> <th data-astro-cid-uv3ea2x3>Traje</th> <th data-astro-cid-uv3ea2x3>Norma Principal</th> <th data-astro-cid-uv3ea2x3>Aplicación</th> <th data-astro-cid-uv3ea2x3>Nivel de Protección Térmica</th> <th data-astro-cid-uv3ea2x3>Material Exterior</th> </tr> </thead> <tbody data-astro-cid-uv3ea2x3> <tr data-astro-cid-uv3ea2x3> <td data-astro-cid-uv3ea2x3><strong data-astro-cid-uv3ea2x3>Estructural</strong></td> <td data-astro-cid-uv3ea2x3><span class="cert-chip cert-chip--ember" data-astro-cid-uv3ea2x3>NFPA 1971</span></td> <td data-astro-cid-uv3ea2x3>Incendio estructural, colapso, rescate urbano</td> <td data-astro-cid-uv3ea2x3>Alto — TPP ≥ 35 cal/cm²</td> <td data-astro-cid-uv3ea2x3>Nomex® / PBI Gold®</td> </tr> <tr data-astro-cid-uv3ea2x3> <td data-astro-cid-uv3ea2x3><strong data-astro-cid-uv3ea2x3>Forestal</strong></td> <td data-astro-cid-uv3ea2x3><span class="cert-chip cert-chip--fire" data-astro-cid-uv3ea2x3>NFPA 1977</span></td> <td data-astro-cid-uv3ea2x3>Incendio forestal, interface, quemas controladas</td> <td data-astro-cid-uv3ea2x3>Medio — Alta transpirabilidad</td> <td data-astro-cid-uv3ea2x3>Nomex® ligero</td> </tr> <tr data-astro-cid-uv3ea2x3> <td data-astro-cid-uv3ea2x3><strong data-astro-cid-uv3ea2x3>ARFF Aeroportuario</strong></td> <td data-astro-cid-uv3ea2x3><span class="cert-chip cert-chip--ember" data-astro-cid-uv3ea2x3>NFPA 1971 / EN 1486</span></td> <td data-astro-cid-uv3ea2x3>Emergencias aeronáuticas, combustibles de aviación</td> <td data-astro-cid-uv3ea2x3>Muy alto — Aluminizado reflectivo</td> <td data-astro-cid-uv3ea2x3>Aluminizado + Nomex®</td> </tr> <tr data-astro-cid-uv3ea2x3> <td data-astro-cid-uv3ea2x3><strong data-astro-cid-uv3ea2x3>Aproximación</strong></td> <td data-astro-cid-uv3ea2x3><span class="cert-chip cert-chip--fire" data-astro-cid-uv3ea2x3>Alta Temperatura</span></td> <td data-astro-cid-uv3ea2x3>Petroquímica, fundiciones, metales fundidos</td> <td data-astro-cid-uv3ea2x3>Extremo — hasta 982°C radial</td> <td data-astro-cid-uv3ea2x3>Aluminizado ≥ 90% reflexión</td> </tr> <tr data-astro-cid-uv3ea2x3> <td data-astro-cid-uv3ea2x3><strong data-astro-cid-uv3ea2x3>HAZMAT</strong></td> <td data-astro-cid-uv3ea2x3><span class="cert-chip cert-chip--smoke" data-astro-cid-uv3ea2x3>NFPA 1991 / 1992</span></td> <td data-astro-cid-uv3ea2x3>Materiales peligrosos, derrames químicos, CBRN</td> <td data-astro-cid-uv3ea2x3>Especial — Encapsulamiento total</td> <td data-astro-cid-uv3ea2x3>Polímero químicamente inerte</td> </tr> </tbody> </table> </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-uv3ea2x3": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-uv3ea2x3": true })}    <section class="section relacionados" data-astro-cid-uv3ea2x3> <div class="container" data-astro-cid-uv3ea2x3> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "El traje es solo el comienzo. Equipa a tu personal con el sistema de protecci\xF3n completo.", "data-astro-cid-uv3ea2x3": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-uv3ea2x3>
Un <strong data-astro-cid-uv3ea2x3>sistema de EPP completo</strong> requiere que traje, casco, guantes y botas sean compatibles y cumplan la misma edición de norma NFPA. El <strong data-astro-cid-uv3ea2x3>traje estructural NFPA 1971</strong> debe usarse con <a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" data-astro-cid-uv3ea2x3>casco estructural NFPA 1971</a>, guantes estructurales, <a href="/productos/botas-para-bomberos/estructural" data-astro-cid-uv3ea2x3>botas de cuero certificadas</a> y <strong data-astro-cid-uv3ea2x3>SCBA autónomo</strong> para garantizar protección integral en cada operación.
</p> <p data-astro-cid-uv3ea2x3>
En <strong data-astro-cid-uv3ea2x3>BOMBERO.MX</strong> equipamos a tu personal con todo el sistema de protección personal de una sola fuente: <a href="/productos/cascos-para-bomberos" data-astro-cid-uv3ea2x3>cascos para bombero</a>, guantes, <a href="/productos/botas-para-bomberos" data-astro-cid-uv3ea2x3>botas certificadas NFPA</a>, <a href="/productos/capuchas-para-bomberos" data-astro-cid-uv3ea2x3>capuchas</a> y <a href="/productos/gafas-para-bomberos" data-astro-cid-uv3ea2x3>gafas de protección</a>, con asesoría técnica sin costo y disponibilidad inmediata para los <strong data-astro-cid-uv3ea2x3>32 estados de México</strong>.
</p> ` })} <div class="rel__grid" data-astro-cid-uv3ea2x3> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Cascos para Bombero", "icon": "helmet", "image": "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", "href": "/productos/cascos-para-bomberos", "buttonText": "Cascos para Bombero", "items": [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }
  ], "data-astro-cid-uv3ea2x3": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Guantes para Bombero", "icon": "glove", "image": "/images/directorio/guantes-bombero-resistentes-01.avif", "href": "/productos/guantes-para-bomberos", "buttonText": "Guantes para Bombero", "items": [
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Guantes de Rescate / Extricaci\xF3n", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" }
  ], "data-astro-cid-uv3ea2x3": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Botas para Bombero", "icon": "boot", "image": "/images/directorio/botas-bombero-proteccion-01.avif", "href": "/productos/botas-para-bomberos", "buttonText": "Botas para Bombero", "items": [
    { label: "Bota Estructural (Cuero)", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Bota de Caucho (HAZMAT)", href: "/productos/botas-para-bomberos/caucho" },
    { label: "Bota Forestal", href: "/productos/botas-para-bomberos/forestal" }
  ], "data-astro-cid-uv3ea2x3": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Capuchas y Protecci\xF3n Visual", "icon": "shield", "image": "/images/directorio/capucha-bombero-nomex-01.avif", "href": "/productos/capuchas-para-bomberos", "buttonText": "Capuchas y Gafas", "items": [
    { label: "Capucha Nomex\xAE Estructural", href: "/productos/capuchas-para-bomberos/nomex" },
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada" },
    { label: "Gafas y Goggle de Bombero", href: "/productos/gafas-para-bomberos" }
  ], "data-astro-cid-uv3ea2x3": true })} </div> </div> </section>    ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-uv3ea2x3": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/index.astro";
const $$url = "/productos/trajes-para-bomberos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
