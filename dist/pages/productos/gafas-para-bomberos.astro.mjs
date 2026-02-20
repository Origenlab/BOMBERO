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
      id: "goggle",
      nombre: "Goggle de Bombero",
      slug: "/productos/gafas-para-bomberos/goggle",
      badge: "NFPA 1971 / ANSI Z87.1",
      badgeColor: "ember",
      imagen: null,
      placeholderPaths: [
        "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z",
        "M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
      ],
      descripcion: "Goggle de protecci\xF3n ocular total para combate de incendios estructurales y operaciones de rescate. Marco sellado con ventilaci\xF3n indirecta, lente policarbonato resistente a impactos, salpicaduras y calor radiante. Compatible con casco NFPA 1971 y m\xE1scara SCBA. Certificado NFPA 1971 y ANSI Z87.1.",
      caracteristicas: [
        "Marco sellado con ventilaci\xF3n indirecta antiempa\xF1ante",
        "Lente policarbonato antirayado resistente a impacto balistico",
        "Protecci\xF3n frente a calor radiante y salpicaduras",
        "Compatible con casco NFPA 1971 y m\xE1scara SCBA",
        "Certificado NFPA 1971 / ANSI Z87.1 / EN 166"
      ],
      aplicacion: "Incendio estructural \xB7 Rescate urbano \xB7 Operaciones con part\xEDculas y salpicaduras"
    },
    {
      id: "seguridad",
      nombre: "Gafas de Seguridad Antiimpacto",
      slug: "/productos/gafas-para-bomberos/seguridad",
      badge: "ANSI Z87.1",
      badgeColor: "fire",
      imagen: null,
      placeholderPaths: [
        "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z",
        "M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
      ],
      descripcion: "Gafas de perfil bajo para operaciones de rescate t\xE9cnico, extricaci\xF3n vehicular y trabajo en espacios confinados donde el uso de goggle resulta inc\xF3modo. Lente policarbonato con protecci\xF3n UV y antiempa\xF1ante. Montura flexible que se adapta bajo el casco de rescate. Certificadas ANSI Z87.1 y EN 166.",
      caracteristicas: [
        "Lente policarbonato envolvente de alta resistencia al impacto",
        "Tratamiento antiempa\xF1ante y protecci\xF3n UV 400",
        "Montura flexible con arcos antideslizantes",
        "Perfil ultra bajo compatible con casco de rescate NFPA 1951",
        "Certificadas ANSI Z87.1 / EN 166 (edici\xF3n vigente)"
      ],
      aplicacion: "Rescate vehicular \xB7 Extricaci\xF3n \xB7 Espacios confinados \xB7 Operaciones en altura"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Gafas para Bomberos | Goggle NFPA 1971 y ANSI Z87.1 | BOMBERO.MX", "description": "Gafas y goggles para bombero certificados NFPA 1971 y ANSI Z87.1. Goggle sellado antiimpacto y gafas de seguridad para rescate. Env\xEDo a los 32 estados de M\xE9xico. \xA1Cotiza ahora!", "keywords": [
    "gafas para bomberos",
    "goggle bombero NFPA 1971",
    "protecci\xF3n visual bombero",
    "gafas seguridad antiimpacto bombero",
    "goggle sellado bombero M\xE9xico",
    "gafas bombero ANSI Z87.1",
    "protecci\xF3n ocular bombero certificada",
    "goggle rescate bombero",
    "EPP visual bombero M\xE9xico",
    "comprar gafas bombero M\xE9xico",
    "goggle policarbonato bombero",
    "gafas bombero rescate extricacion"
  ], "type": "website", "data-astro-cid-w6um6f3c": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Productos", href: "/productos" },
    { label: "Gafas y Protecci\xF3n Visual para Bombero" }
  ], "data-astro-cid-w6um6f3c": true })}    ${maybeRenderHead()}<section class="hero" data-astro-cid-w6um6f3c> <div class="hero__bg" data-astro-cid-w6um6f3c> <div class="hero__gradient" data-astro-cid-w6um6f3c></div> <div class="hero__grid" data-astro-cid-w6um6f3c></div> <div class="hero__glow hero__glow--1" data-astro-cid-w6um6f3c></div> <div class="hero__glow hero__glow--2" data-astro-cid-w6um6f3c></div> </div> <div class="container hero__container" data-astro-cid-w6um6f3c> <div class="hero__content" data-astro-cid-w6um6f3c> <div class="hero__badge" data-astro-cid-w6um6f3c> <span class="hero__badge-dot" data-astro-cid-w6um6f3c></span>
2 Tipos de Protección Visual · NFPA 1971 / ANSI Z87.1
</div> <h1 class="hero__title" data-astro-cid-w6um6f3c>
Gafas y Protección
<span class="hero__title-highlight" data-astro-cid-w6um6f3c>Visual para Bomberos</span>
Certificadas
</h1> <p class="hero__subtitle" data-astro-cid-w6um6f3c>
La protección ocular especializada para cada tipo de operación. Goggle sellado para
          combate estructural y gafas antiimpacto para rescate técnico. Certificadas NFPA 1971
          y ANSI Z87.1 con envío a los 32 estados de México.
</p> </div> <div class="hero__seo" data-astro-cid-w6um6f3c> <div class="hero__seo-block" data-astro-cid-w6um6f3c> <h2 class="hero__seo-title" data-astro-cid-w6um6f3c>Distribuidores de Protección Visual para Bombero Certificada en México</h2> <p class="hero__seo-text" data-astro-cid-w6um6f3c>
En <strong data-astro-cid-w6um6f3c>BOMBERO.MX</strong> somos distribuidores autorizados de <strong data-astro-cid-w6um6f3c>gafas y goggles para bomberos</strong> de las marcas líderes mundiales. Nuestro catálogo incluye <strong data-astro-cid-w6um6f3c>goggles sellados NFPA 1971</strong> para combate estructural y <strong data-astro-cid-w6um6f3c>gafas de seguridad ANSI Z87.1</strong> para rescate técnico y extricación vehicular. Certificados para uso operativo real.
</p> </div> <div class="hero__seo-block" data-astro-cid-w6um6f3c> <h2 class="hero__seo-title" data-astro-cid-w6um6f3c>Protección Visual con Certificación para Cuerpos de Bomberos y Brigadas</h2> <p class="hero__seo-text" data-astro-cid-w6um6f3c>
Cada <strong data-astro-cid-w6um6f3c>goggle o gafa de bombero</strong> de nuestro catálogo viene con certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-w6um6f3c>licitación gubernamental</strong>. La protección ocular certificada es un requisito operativo: más del 10 % de las lesiones de bombero involucran los ojos en operaciones de rescate y combate en los <strong data-astro-cid-w6um6f3c>32 estados de México</strong>.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": "Cotizar Protecci\xF3n Visual para Bombero", "data-astro-cid-w6um6f3c": true })}    <section class="section productos" id="catalogo" data-astro-cid-w6um6f3c> <div class="container" data-astro-cid-w6um6f3c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Gafas y Protecci\xF3n Visual", "title": "2 Tipos de Protecci\xF3n Ocular para Bombero", "description": "El goggle sellado para combate estructural y las gafas antiimpacto para rescate t\xE9cnico: cada uno dise\xF1ado para el entorno operativo del bombero.", "data-astro-cid-w6um6f3c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-w6um6f3c>
La <strong data-astro-cid-w6um6f3c>protección visual del bombero</strong> debe adaptarse al tipo de operación: el <strong data-astro-cid-w6um6f3c>goggle sellado</strong> es la opción para combate de incendios estructurales donde hay riesgo de salpicaduras, partículas en suspensión y calor radiante. Las <strong data-astro-cid-w6um6f3c>gafas antiimpacto</strong> ofrecen mayor comodidad y campo visual para rescate técnico, extricación vehicular y operaciones en espacios confinados.
</p> <p data-astro-cid-w6um6f3c>
Todos nuestros productos de protección visual incluyen fichas técnicas y certificados de laboratorio. Son compatibles con el sistema EPP del catálogo: cascos NFPA 1971 y 1951, capuchas Nomex® y máscaras SCBA. Disponibles con envío inmediato a los <strong data-astro-cid-w6um6f3c>32 estados de México</strong>.
</p> ` })} <div class="productos__grid" data-astro-cid-w6um6f3c> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...producto, "altSuffix": "Protecci\xF3n visual de bombero certificada", "data-astro-cid-w6um6f3c": true })}`)} </div> </div> </section>    <section class="section section--dark specs" data-astro-cid-w6um6f3c> <div class="container" data-astro-cid-w6um6f3c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tecnolog\xEDa y Materiales", "title": "Materiales, Certificaciones y Aplicaciones", "description": "La protecci\xF3n visual de bombero combina policarbonato de alta resistencia al impacto con marcos sellados y tratamientos \xF3pticos especializados para entornos extremos.", "data-astro-cid-w6um6f3c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-w6um6f3c>
El <strong data-astro-cid-w6um6f3c>policarbonato</strong> es el material estándar para lentes de protección visual en bomberos: es 250 veces más resistente al impacto que el vidrio, ligero y puede tratarse con recubrimientos antiempañantes y antirayado. Los <strong data-astro-cid-w6um6f3c>goggles sellados</strong> con ventilación indirecta evitan el empañamiento durante el trabajo físico intenso manteniendo el sellado perimetral frente a partículas y salpicaduras.
</p> <p data-astro-cid-w6um6f3c>
Cada <strong data-astro-cid-w6um6f3c>goggle o gafa de bombero</strong> de nuestro catálogo incluye certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-w6um6f3c>licitación pública</strong>. Proveemos documentación técnica a cuerpos de bomberos municipales, brigadas industriales y protección civil en los <strong data-astro-cid-w6um6f3c>32 estados de México</strong>.
</p> ` })} <div class="specs__grid" data-astro-cid-w6um6f3c> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Materiales y \xD3ptica", "icon": "goggles", "description": "Lentes de policarbonato de alta resistencia al impacto bal\xEDstico. Tratamiento antiempa\xF1ante permanente o renovable seg\xFAn modelo. Recubrimiento antirayado de dureza superior. Marcos en TPE o silicona resistente al calor. Bandas ajustables con sistema de retenci\xF3n.", "data-astro-cid-w6um6f3c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Certificaciones Aplicables", "icon": "certificate", "description": "NFPA 1971 para goggles de combate estructural. ANSI Z87.1 para resistencia al impacto de alta velocidad. EN 166 y EN 172 para protecci\xF3n ocular europea. Cada producto incluye certificado de laboratorio y ficha t\xE9cnica lista para licitaci\xF3n p\xFAblica en los 32 estados de M\xE9xico.", "data-astro-cid-w6um6f3c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Operaciones y Usuarios", "icon": "users", "description": "Cuerpos de bomberos municipales y estatales en combate estructural. Equipos de rescate t\xE9cnico y extricaci\xF3n vehicular. Brigadas industriales y petroqu\xEDmicas. Equipos USAR de b\xFAsqueda y rescate en espacios confinados. Protecci\xF3n civil estatal y federal.", "data-astro-cid-w6um6f3c": true })} </div> </div> </section>    <section class="section comparativa" data-astro-cid-w6um6f3c> <div class="container" data-astro-cid-w6um6f3c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tabla Comparativa", "title": "\xBFQu\xE9 Protecci\xF3n Visual Necesitas?", "description": "Compara el goggle y las gafas de seguridad seg\xFAn su norma, aplicaci\xF3n y nivel de sellado para elegir la protecci\xF3n ocular correcta.", "data-astro-cid-w6um6f3c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-w6um6f3c>
La elección entre <strong data-astro-cid-w6um6f3c>goggle sellado</strong> y <strong data-astro-cid-w6um6f3c>gafas antiimpacto</strong> depende del riesgo operativo: el goggle es obligatorio en combate estructural por su sellado perimetral frente a salpicaduras y partículas, mientras que las gafas antiimpacto ofrecen mayor campo visual y comodidad para operaciones de rescate donde el riesgo de salpicadura es menor.
</p> <p data-astro-cid-w6um6f3c>
En <strong data-astro-cid-w6um6f3c>BOMBERO.MX</strong> asesoramos a tu corporación sin costo para definir el estándar de protección visual adecuado para cada tipo de operación. Elaboramos especificaciones técnicas para <strong data-astro-cid-w6um6f3c>licitaciones gubernamentales</strong> en toda la República Mexicana.
</p> ` })} <div class="comparativa__wrapper" data-astro-cid-w6um6f3c> <table class="comparativa__table" data-astro-cid-w6um6f3c> <thead data-astro-cid-w6um6f3c> <tr data-astro-cid-w6um6f3c> <th data-astro-cid-w6um6f3c>Protección Visual</th> <th data-astro-cid-w6um6f3c>Norma</th> <th data-astro-cid-w6um6f3c>Sellado</th> <th data-astro-cid-w6um6f3c>Aplicación</th> <th data-astro-cid-w6um6f3c>Característica Clave</th> </tr> </thead> <tbody data-astro-cid-w6um6f3c> <tr data-astro-cid-w6um6f3c> <td data-astro-cid-w6um6f3c><strong data-astro-cid-w6um6f3c>Goggle de Bombero</strong></td> <td data-astro-cid-w6um6f3c><span class="cert-chip cert-chip--ember" data-astro-cid-w6um6f3c>NFPA 1971 / ANSI Z87.1</span></td> <td data-astro-cid-w6um6f3c>Sellado perimetral total</td> <td data-astro-cid-w6um6f3c>Combate estructural, salpicaduras, partículas</td> <td data-astro-cid-w6um6f3c>Ventilación indirecta, máxima protección</td> </tr> <tr data-astro-cid-w6um6f3c> <td data-astro-cid-w6um6f3c><strong data-astro-cid-w6um6f3c>Gafas Antiimpacto</strong></td> <td data-astro-cid-w6um6f3c><span class="cert-chip cert-chip--fire" data-astro-cid-w6um6f3c>ANSI Z87.1 / EN 166</span></td> <td data-astro-cid-w6um6f3c>Envolvente sin sellado total</td> <td data-astro-cid-w6um6f3c>Rescate técnico, extricación, espacios confinados</td> <td data-astro-cid-w6um6f3c>Mayor campo visual, perfil bajo para casco</td> </tr> </tbody> </table> </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-w6um6f3c": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-w6um6f3c": true })}    <section class="section relacionados" data-astro-cid-w6um6f3c> <div class="container" data-astro-cid-w6um6f3c> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "La protecci\xF3n visual trabaja en sistema con el casco, la capucha y el SCBA. Equipa a tu personal con protecci\xF3n integral certificada NFPA.", "data-astro-cid-w6um6f3c": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-w6um6f3c>
La <strong data-astro-cid-w6um6f3c>protección visual del bombero</strong> debe ser compatible con el casco y la capucha del sistema EPP: el goggle debe caber bajo el visor del casco estructural, y las gafas deben ajustarse correctamente bajo el casco de rescate sin interferir con los arcos de sujeción. El uso de la <strong data-astro-cid-w6um6f3c>máscara SCBA</strong> ya incluye protección ocular, pero el goggle o gafas son necesarios en operaciones sin equipo autónomo.
</p> <p data-astro-cid-w6um6f3c>
En <strong data-astro-cid-w6um6f3c>BOMBERO.MX</strong> verificamos la compatibilidad del EPP completo antes de la entrega. Proveemos cascos, capuchas, trajes y SCBA certificados NFPA con asesoría técnica sin costo y disponibilidad inmediata para los <strong data-astro-cid-w6um6f3c>32 estados de México</strong>.
</p> ` })} <div class="rel__grid" data-astro-cid-w6um6f3c> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Cascos para Bombero", "icon": "helmet", "image": "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", "href": "/productos/cascos-para-bomberos", "buttonText": "Cascos para Bombero", "items": [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" },
    { label: "Casco HAZMAT / Brigada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }
  ], "data-astro-cid-w6um6f3c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Capuchas y Monjas", "icon": "hood", "image": "/images/directorio/capucha-bombero-nomex-01.avif", "href": "/productos/capuchas-para-bomberos", "buttonText": "Capuchas para Bombero", "items": [
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex" },
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada" }
  ], "data-astro-cid-w6um6f3c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Trajes de Bombero", "icon": "shield", "image": "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif", "href": "/productos/trajes-para-bomberos", "buttonText": "Trajes para Bombero", "items": [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
    { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" },
    { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }
  ], "data-astro-cid-w6um6f3c": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Botas y Guantes para Bombero", "icon": "boot", "image": "/images/directorio/botas-bombero-proteccion-01.avif", "href": "/productos/botas-para-bomberos", "buttonText": "Botas y Guantes", "items": [
    { label: "Botas Estructurales NFPA 1971", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Botas de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho" },
    { label: "Botas Forestales NFPA 1977", href: "/productos/botas-para-bomberos/forestal" },
    { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales" }
  ], "data-astro-cid-w6um6f3c": true })} </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-w6um6f3c": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/gafas-para-bomberos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/gafas-para-bomberos/index.astro";
const $$url = "/productos/gafas-para-bomberos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
