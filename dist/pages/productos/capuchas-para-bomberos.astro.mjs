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
      id: "nomex",
      nombre: "Capucha / Monja Nomex\xAE Estructural",
      slug: "/productos/capuchas-para-bomberos/nomex",
      badge: "NFPA 1971",
      badgeColor: "ember",
      imagen: "/images/directorio/capucha-bombero-nomex-01.avif",
      descripcion: "La capucha est\xE1ndar de protecci\xF3n cef\xE1lica para combate de incendios estructurales. Fabricada en tejido Nomex\xAE IIIA de resistencia inherente, cubre cuello, ment\xF3n, orejas y frente. Dise\xF1ada para usar bajo el casco estructural y sobre la m\xE1scara del SCBA. Certificada NFPA 1971.",
      caracteristicas: [
        "Tejido Nomex\xAE IIIA de resistencia inherente a la llama",
        "Protecci\xF3n de cuello, ment\xF3n, orejas y zona frontal",
        "Compatible con casco NFPA 1971 y m\xE1scara SCBA",
        "Costuras en hilo Nomex\xAE resistente a la llama",
        "Certificada NFPA 1971 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio estructural \xB7 Rescate urbano \xB7 Colapso de estructuras"
    },
    {
      id: "pbi",
      nombre: "Capucha / Monja PBI Gold\xAE Premium",
      slug: "/productos/capuchas-para-bomberos/pbi",
      badge: "NFPA 1971",
      badgeColor: "ember",
      imagen: null,
      placeholderPaths: [
        "M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
        "M3 20a9 9 0 0 1 18 0"
      ],
      descripcion: "Capucha de m\xE1ximo rendimiento fabricada en mezcla PBI Gold\xAE/Nomex\xAE para bomberos de alta exposici\xF3n t\xE9rmica. El PBI Gold\xAE no arde ni se derrite, ofreciendo una barrera adicional frente a llamas directas. Ideal para combate interior agresivo o rescate en estructuras en colapso. Certificada NFPA 1971.",
      caracteristicas: [
        "Tejido PBI Gold\xAE + Nomex\xAE de alto rendimiento t\xE9rmico",
        "No arde, no funde ni se encoge ante llama directa",
        "Mayor protecci\xF3n t\xE9rmica que capucha est\xE1ndar de Nomex\xAE",
        "Compatible con todo casco NFPA 1971 y sistema SCBA",
        "Certificada NFPA 1971 (edici\xF3n vigente)"
      ],
      aplicacion: "Combate interior agresivo \xB7 Rescate en colapso \xB7 Alta exposici\xF3n t\xE9rmica"
    },
    {
      id: "particulada",
      nombre: "Capucha / Monja Particulada",
      slug: "/productos/capuchas-para-bomberos/particulada",
      badge: "NFPA 1971 + Bloqueo de Part\xEDculas",
      badgeColor: "fire",
      imagen: null,
      placeholderPaths: [
        "M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
        "M3 20a9 9 0 0 1 18 0"
      ],
      descripcion: "Capucha con capa interior de bloqueo de part\xEDculas para reducir la exposici\xF3n del bombero a carcin\xF3genos presentes en el humo. Cumple NFPA 1971 y a\xF1ade protecci\xF3n contra part\xEDculas ultrafinas (PM2.5) que atraviesan tejidos convencionales. Dise\xF1o est\xE1ndar compatible con todo casco y SCBA.",
      caracteristicas: [
        "Capa exterior Nomex\xAE certificada NFPA 1971",
        "Capa interior de bloqueo de part\xEDculas PM2.5 / carcin\xF3genos",
        "Reduce la absorci\xF3n de toxinas d\xE9rmicas en zona de cabeza",
        "Lavable y compatible con protocolo de descontaminaci\xF3n",
        "Certificada NFPA 1971 + protecci\xF3n contra part\xEDculas"
      ],
      aplicacion: "Combate estructural \xB7 Prevenci\xF3n oncol\xF3gica \xB7 Protocolo de reducci\xF3n de exposici\xF3n"
    },
    {
      id: "forestal",
      nombre: "Capucha / Monja Forestal",
      slug: "/productos/capuchas-para-bomberos#catalogo",
      badge: "NFPA 1977",
      badgeColor: "fire",
      imagen: null,
      placeholderPaths: [
        "M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
        "M3 20a9 9 0 0 1 18 0"
      ],
      descripcion: "Capucha ligera y transpirable para operaciones de incendio forestal e interface. Fabricada en Nomex\xAE ultraligero de baja densidad para m\xE1xima comodidad en jornadas prolongadas en campo abierto. Compatible con casco forestal NFPA 1977 y sistema de comunicaci\xF3n. Certificada NFPA 1977.",
      caracteristicas: [
        "Nomex\xAE ultraligero de baja densidad para m\xE1xima ventilaci\xF3n",
        "Perfil reducido compatible con casco forestal de ala completa",
        "El\xE1stico facial para ajuste seguro sin interferir con la visi\xF3n",
        "Costuras planas para mayor comodidad en uso prolongado",
        "Certificada NFPA 1977 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio forestal \xB7 Quemas controladas \xB7 Interface urbano-rural"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Capuchas para Bomberos NFPA | Nomex\xAE, PBI, Particulada | BOMBERO.MX", "description": "Capuchas y monjas para bombero certificadas NFPA 1971 y 1977. Nomex\xAE estructural, PBI Gold\xAE premium, particulada anti-carcin\xF3genos y forestal. Env\xEDo a los 32 estados. \xA1Cotiza ahora!", "keywords": [
    "capuchas para bomberos",
    "monja bombero NFPA 1971",
    "capucha Nomex bombero",
    "capucha PBI Gold bombero",
    "capucha particulada bombero",
    "capucha forestal NFPA 1977",
    "capucha bombero certificada M\xE9xico",
    "monja Nomex SCBA compatible",
    "protecci\xF3n cef\xE1lica bombero cuello",
    "comprar capucha bombero M\xE9xico",
    "EPP cabeza cuello bombero",
    "capucha bombero anti carcin\xF3genos"
  ], "type": "website", "data-astro-cid-vvfg7ie7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Productos", href: "/productos" },
    { label: "Capuchas y Monjas para Bombero" }
  ], "data-astro-cid-vvfg7ie7": true })}    ${maybeRenderHead()}<section class="hero" data-astro-cid-vvfg7ie7> <div class="hero__bg" data-astro-cid-vvfg7ie7> <div class="hero__gradient" data-astro-cid-vvfg7ie7></div> <div class="hero__grid" data-astro-cid-vvfg7ie7></div> <div class="hero__glow hero__glow--1" data-astro-cid-vvfg7ie7></div> <div class="hero__glow hero__glow--2" data-astro-cid-vvfg7ie7></div> </div> <div class="container hero__container" data-astro-cid-vvfg7ie7> <div class="hero__content" data-astro-cid-vvfg7ie7> <div class="hero__badge" data-astro-cid-vvfg7ie7> <span class="hero__badge-dot" data-astro-cid-vvfg7ie7></span>
4 Tipos de Capuchas · Certificadas NFPA
</div> <h1 class="hero__title" data-astro-cid-vvfg7ie7>
Capuchas y Monjas
<span class="hero__title-highlight" data-astro-cid-vvfg7ie7>para Bomberos</span>
Certificadas NFPA
</h1> <p class="hero__subtitle" data-astro-cid-vvfg7ie7>
La protección de cuello, mentón y orejas que completa el sistema EPP del bombero.
          Capuchas Nomex®, PBI Gold®, particuladas y forestales certificadas NFPA, compatibles
          con todo casco y SCBA. Envío a los 32 estados de México.
</p> </div> <div class="hero__seo" data-astro-cid-vvfg7ie7> <div class="hero__seo-block" data-astro-cid-vvfg7ie7> <h2 class="hero__seo-title" data-astro-cid-vvfg7ie7>Distribuidores de Capuchas para Bombero Certificadas NFPA en México</h2> <p class="hero__seo-text" data-astro-cid-vvfg7ie7>
En <strong data-astro-cid-vvfg7ie7>BOMBERO.MX</strong> somos distribuidores autorizados de <strong data-astro-cid-vvfg7ie7>capuchas y monjas para bomberos</strong> de las marcas líderes mundiales. Nuestro catálogo incluye <strong data-astro-cid-vvfg7ie7>capuchas Nomex® NFPA 1971</strong>, <strong data-astro-cid-vvfg7ie7>capuchas PBI Gold® premium</strong>, capuchas particuladas de bloqueo de carcinógenos y <strong data-astro-cid-vvfg7ie7>capuchas forestales NFPA 1977</strong> para cada tipo de operación.
</p> </div> <div class="hero__seo-block" data-astro-cid-vvfg7ie7> <h2 class="hero__seo-title" data-astro-cid-vvfg7ie7>Capuchas con Certificación NFPA para Cuerpos de Bomberos y Brigadas</h2> <p class="hero__seo-text" data-astro-cid-vvfg7ie7>
Cada <strong data-astro-cid-vvfg7ie7>capucha de bombero</strong> de nuestro catálogo viene con certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-vvfg7ie7>licitación gubernamental</strong>. La capucha es un componente crítico del EPP: protege la piel del cuello, mentón y orejas que el casco no cubre y que quedan expuestas al calor radiante en <strong data-astro-cid-vvfg7ie7>los 32 estados de México</strong>.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": "Cotizar Capuchas para Bombero", "data-astro-cid-vvfg7ie7": true })}    <section class="section productos" id="catalogo" data-astro-cid-vvfg7ie7> <div class="container" data-astro-cid-vvfg7ie7> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Capuchas y Monjas para Bomberos", "title": "4 Tipos de Capuchas para Bombero", "description": "Desde combate estructural hasta operaciones forestales. Cada capucha cubre con precisi\xF3n las zonas de cabeza, cuello y orejas que el casco no protege.", "data-astro-cid-vvfg7ie7": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-vvfg7ie7>
La <strong data-astro-cid-vvfg7ie7>capucha o monja de bombero</strong> es el componente del EPP que cierra la brecha de protección entre el casco y el traje: cubre cuello, nuca, mentón y orejas frente al <strong data-astro-cid-vvfg7ie7>calor radiante, llamas directas y vapores calientes</strong>. Una capucha incorrecta o deteriorada puede causar quemaduras en segundos. En BOMBERO.MX solo distribuimos capuchas con certificación NFPA vigente.
</p> <p data-astro-cid-vvfg7ie7>
Todas nuestras capuchas son compatibles con los cascos estructurales, forestales y de rescate de nuestro catálogo, y con cualquier máscara SCBA del mercado. Incluyen fichas técnicas y certificados de laboratorio listos para <strong data-astro-cid-vvfg7ie7>licitaciones en los 32 estados de México</strong>.
</p> ` })} <div class="productos__grid" data-astro-cid-vvfg7ie7> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...producto, "altSuffix": "Capucha de bombero certificada", "data-astro-cid-vvfg7ie7": true })}`)} </div> </div> </section>    <section class="section section--dark specs" data-astro-cid-vvfg7ie7> <div class="container" data-astro-cid-vvfg7ie7> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tecnolog\xEDa y Materiales", "title": "Materiales, Certificaciones y Aplicaciones", "description": "Las capuchas de bombero de alto rendimiento combinan tejidos de resistencia inherente a la llama con cortes ergon\xF3micos para compatibilidad total con el sistema EPP.", "data-astro-cid-vvfg7ie7": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-vvfg7ie7>
El <strong data-astro-cid-vvfg7ie7>Nomex® IIIA</strong> es el tejido estándar para capuchas estructurales: no arde, no se derrite y no se encoge ante la llama. El <strong data-astro-cid-vvfg7ie7>PBI Gold®</strong> añade una capa adicional de protección térmica para bomberos de alta exposición. Las capuchas <strong data-astro-cid-vvfg7ie7>particuladas</strong> incorporan una membrana interior que bloquea partículas PM2.5 y carcinógenos presentes en el humo, una innovación avalada por estudios de salud ocupacional.
</p> <p data-astro-cid-vvfg7ie7>
Cada <strong data-astro-cid-vvfg7ie7>capucha de bombero</strong> de nuestro catálogo incluye certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-vvfg7ie7>licitación pública</strong>. Proveemos documentación técnica a cuerpos de bomberos municipales, brigadas industriales y protección civil en los <strong data-astro-cid-vvfg7ie7>32 estados de México</strong>.
</p> ` })} <div class="specs__grid" data-astro-cid-vvfg7ie7> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Materiales y Tejidos", "icon": "hood", "description": "Nomex\xAE IIIA de resistencia inherente para capuchas est\xE1ndar. PBI Gold\xAE y mezclas Nomex\xAE/Kevlar\xAE para m\xE1ximo rendimiento t\xE9rmico. Tejidos ultraligeros para forestales. Membranas de bloqueo de part\xEDculas PM2.5 para capuchas particuladas. Costuras en hilo Nomex\xAE certificado.", "data-astro-cid-vvfg7ie7": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Certificaciones Aplicables", "icon": "certificate", "description": "NFPA 1971 para capuchas estructurales Nomex\xAE y PBI Gold\xAE. NFPA 1977 para capuchas forestales. Pruebas de resistencia a la llama (ASTM D6413), estabilidad t\xE9rmica y resistencia de costuras. Cada capucha incluye certificado de laboratorio y ficha t\xE9cnica lista para licitaci\xF3n p\xFAblica.", "data-astro-cid-vvfg7ie7": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Operaciones y Usuarios", "icon": "users", "description": "Cuerpos de bomberos municipales y estatales en combate estructural. Brigadas industriales y petroqu\xEDmicas. Bomberos forestales en incendios de interfaz. Equipos USAR de b\xFAsqueda y rescate. Unidades con protocolo de reducci\xF3n de exposici\xF3n a carcin\xF3genos del humo en los 32 estados.", "data-astro-cid-vvfg7ie7": true })} </div> </div> </section>    <section class="section comparativa" data-astro-cid-vvfg7ie7> <div class="container" data-astro-cid-vvfg7ie7> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tabla Comparativa", "title": "\xBFQu\xE9 Capucha de Bombero Necesitas?", "description": "Compara los 4 tipos de capuchas seg\xFAn su material, norma y aplicaci\xF3n para elegir la protecci\xF3n correcta.", "data-astro-cid-vvfg7ie7": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-vvfg7ie7>
La elección de la <strong data-astro-cid-vvfg7ie7>capucha o monja de bombero</strong> correcta depende del riesgo predominante y el protocolo de tu corporación: la <strong data-astro-cid-vvfg7ie7>Nomex® NFPA 1971</strong> es el estándar para combate estructural, la <strong data-astro-cid-vvfg7ie7>PBI Gold®</strong> es la opción premium para mayor exposición térmica, la <strong data-astro-cid-vvfg7ie7>particulada</strong> es la recomendada en protocolos de reducción de exposición a carcinógenos, y la <strong data-astro-cid-vvfg7ie7>forestal NFPA 1977</strong> para operaciones en campo abierto.
</p> <p data-astro-cid-vvfg7ie7>
En <strong data-astro-cid-vvfg7ie7>BOMBERO.MX</strong> asesoramos a tu corporación sin costo para seleccionar la capucha adecuada según el riesgo y el protocolo vigente. Elaboramos especificaciones técnicas para <strong data-astro-cid-vvfg7ie7>licitaciones gubernamentales</strong> en toda la República Mexicana.
</p> ` })} <div class="comparativa__wrapper" data-astro-cid-vvfg7ie7> <table class="comparativa__table" data-astro-cid-vvfg7ie7> <thead data-astro-cid-vvfg7ie7> <tr data-astro-cid-vvfg7ie7> <th data-astro-cid-vvfg7ie7>Capucha / Monja</th> <th data-astro-cid-vvfg7ie7>Norma</th> <th data-astro-cid-vvfg7ie7>Material</th> <th data-astro-cid-vvfg7ie7>Aplicación</th> <th data-astro-cid-vvfg7ie7>Característica Clave</th> </tr> </thead> <tbody data-astro-cid-vvfg7ie7> <tr data-astro-cid-vvfg7ie7> <td data-astro-cid-vvfg7ie7><strong data-astro-cid-vvfg7ie7>Nomex® Estructural</strong></td> <td data-astro-cid-vvfg7ie7><span class="cert-chip cert-chip--ember" data-astro-cid-vvfg7ie7>NFPA 1971</span></td> <td data-astro-cid-vvfg7ie7>Nomex® IIIA</td> <td data-astro-cid-vvfg7ie7>Incendio estructural, rescate urbano</td> <td data-astro-cid-vvfg7ie7>Estándar de mercado, resistencia inherente</td> </tr> <tr data-astro-cid-vvfg7ie7> <td data-astro-cid-vvfg7ie7><strong data-astro-cid-vvfg7ie7>PBI Gold® Premium</strong></td> <td data-astro-cid-vvfg7ie7><span class="cert-chip cert-chip--ember" data-astro-cid-vvfg7ie7>NFPA 1971</span></td> <td data-astro-cid-vvfg7ie7>PBI Gold® + Nomex®</td> <td data-astro-cid-vvfg7ie7>Combate interior agresivo, alta exposición</td> <td data-astro-cid-vvfg7ie7>No arde ni funde, máxima protección térmica</td> </tr> <tr data-astro-cid-vvfg7ie7> <td data-astro-cid-vvfg7ie7><strong data-astro-cid-vvfg7ie7>Particulada</strong></td> <td data-astro-cid-vvfg7ie7><span class="cert-chip cert-chip--fire" data-astro-cid-vvfg7ie7>NFPA 1971 + PM2.5</span></td> <td data-astro-cid-vvfg7ie7>Nomex® + membrana particulada</td> <td data-astro-cid-vvfg7ie7>Protocolo reducción exposición carcinógenos</td> <td data-astro-cid-vvfg7ie7>Bloqueo PM2.5 y toxinas dérmicas del humo</td> </tr> <tr data-astro-cid-vvfg7ie7> <td data-astro-cid-vvfg7ie7><strong data-astro-cid-vvfg7ie7>Forestal</strong></td> <td data-astro-cid-vvfg7ie7><span class="cert-chip cert-chip--fire" data-astro-cid-vvfg7ie7>NFPA 1977</span></td> <td data-astro-cid-vvfg7ie7>Nomex® ultraligero</td> <td data-astro-cid-vvfg7ie7>Incendio forestal, interface, quemas</td> <td data-astro-cid-vvfg7ie7>Ligera, transpirable, perfil bajo</td> </tr> </tbody> </table> </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-vvfg7ie7": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-vvfg7ie7": true })}    <section class="section relacionados" data-astro-cid-vvfg7ie7> <div class="container" data-astro-cid-vvfg7ie7> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "La capucha trabaja en sistema con el casco, el traje y el SCBA. Equipa a tu personal con protecci\xF3n integral certificada NFPA.", "data-astro-cid-vvfg7ie7": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-vvfg7ie7>
La <strong data-astro-cid-vvfg7ie7>capucha o monja de bombero</strong> es el eslabón que une el casco con el traje: su puño debe solapar con el cuello del traje y su abertura facial debe enmarcar correctamente la máscara del <strong data-astro-cid-vvfg7ie7>SCBA</strong>. Un EPP incompleto o con prendas incompatibles puede dejar zonas de piel expuestas al calor radiante en segundos.
</p> <p data-astro-cid-vvfg7ie7>
En <strong data-astro-cid-vvfg7ie7>BOMBERO.MX</strong> verificamos la compatibilidad de todo el EPP antes de la entrega. Proveemos trajes, cascos, guantes, botas y SCBA certificados NFPA con asesoría técnica sin costo y disponibilidad inmediata para los <strong data-astro-cid-vvfg7ie7>32 estados de México</strong>.
</p> ` })} <div class="rel__grid" data-astro-cid-vvfg7ie7> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Cascos para Bombero", "icon": "helmet", "image": "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", "href": "/productos/cascos-para-bomberos", "buttonText": "Cascos para Bombero", "items": [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" },
    { label: "Casco HAZMAT / Brigada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }
  ], "data-astro-cid-vvfg7ie7": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Trajes de Bombero", "icon": "shield", "image": "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif", "href": "/productos/trajes-para-bomberos", "buttonText": "Trajes para Bombero", "items": [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
    { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" },
    { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }
  ], "data-astro-cid-vvfg7ie7": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Guantes para Bombero", "icon": "glove", "image": "/images/directorio/guantes-bombero-resistentes-01.avif", "href": "/productos/guantes-para-bomberos", "buttonText": "Guantes para Bombero", "items": [
    { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Guantes de Rescate NFPA 1951", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Guantes HAZMAT NFPA 1991", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Forestales NFPA 1977", href: "/productos/guantes-para-bomberos/forestales" }
  ], "data-astro-cid-vvfg7ie7": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Botas y Gafas para Bombero", "icon": "shield", "image": "/images/directorio/equipo-proteccion-bomberos-01.avif", "href": "/productos/botas-para-bomberos", "buttonText": "Botas y Gafas", "items": [
    { label: "Botas Estructurales NFPA 1971", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Botas de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho" },
    { label: "Botas Forestales NFPA 1977", href: "/productos/botas-para-bomberos/forestal" },
    { label: "Gafas Goggle para Bombero", href: "/productos/gafas-para-bomberos/goggle" }
  ], "data-astro-cid-vvfg7ie7": true })} </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-vvfg7ie7": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/index.astro";
const $$url = "/productos/capuchas-para-bomberos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
