import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout, g as getEstadosVecinos } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, e as estacionesAguascalientes } from '../../chunks/estaciones-aguascalientes_CwGT9pc-.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C37tG6Zv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Aguascalientes = createComponent(($$result, $$props, $$slots) => {
  const estadosVecinos = getEstadosVecinos("aguascalientes");
  const municipios = getMunicipios();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Aguascalientes", url: "/directorio/aguascalientes" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Aguascalientes, M\xE9xico",
    "description": "Directorio completo de las estaciones de bomberos en Aguascalientes. Tel\xE9fonos de emergencia, direcciones y servicios. 13 estaciones cubriendo los 11 municipios. Emergencias 911.",
    "numberOfItems": estacionesAguascalientes.length,
    "itemListElement": estacionesAguascalientes.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Aguascalientes",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/aguascalientes/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-norte-mexico-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bomberos-trabajo-equipo-01.avif",
    "/images/directorio/bombera-mujer-chaqueton-estacion-01.avif",
    "/images/directorio/bombero-casco-amarillo-emergencia-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Aguascalientes", "sigla": "AGS", "slug": "aguascalientes", "description": "Directorio completo de las estaciones de bomberos en Aguascalientes. Tel\xE9fonos de emergencia, direcciones y servicios. 13 estaciones cubriendo los 11 municipios. Emergencias 911.", "keywords": ["bomberos aguascalientes", "estaciones bomberos aguascalientes", "emergencias aguascalientes 911", "cuerpo bomberos aguascalientes", "bomberos industria automotriz", "rescate aguascalientes"], "canonical": "https://bombero.mx/directorio/aguascalientes", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estacionesAguascalientes.length, "totalMunicipios": municipios.length, "habitantes": "1.5M+", "heroDesc": "Directorio completo del <strong>H. Cuerpo de Bomberos de Aguascalientes</strong>. Encuentra tel\xE9fonos de emergencia, direcciones y servicios de todas las estaciones en el estado de la industria automotriz.", "heroImage": "/images/directorio/estacion-bomberos-central-edificio-01.avif", "heroImageAlt": "Estaci\xF3n Central de Bomberos Aguascalientes", "heroCaption": "H. Cuerpo de Bomberos \xB7 Aguascalientes", "heroThumbs": [
    { src: "/images/directorio/camion-bomberos-moderno-01.avif", alt: "Cami\xF3n de bomberos Aguascalientes", label: "Flota vehicular" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT bomberos Aguascalientes", label: "HAZMAT Industrial" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos Aguascalientes en acci\xF3n", label: "Respuesta 24/7" }
  ], "galleryImages": [
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento de bomberos en Aguascalientes", label: "Capacitaci\xF3n Continua" },
    { src: "/images/directorio/camion-escalera-bomberos-01.avif", alt: "Cami\xF3n escalera bomberos AGS", label: "Rescate en Altura" },
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Rescate urbano bomberos Aguascalientes", label: "Rescate Urbano" },
    { src: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif", alt: "Equipo SCBA bomberos Aguascalientes", label: "Equipo Certificado NFPA" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "449 910 2030", label: "Bomberos Central" },
    { number: "449 910 3300", label: "Protecci\xF3n Civil AGS" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana", desc: "Aguascalientes, Jes\xFAs Mar\xEDa, San Francisco" },
    { nombre: "Zona Norte", desc: "Rinc\xF3n de Romos, Cos\xEDo, Tepezal\xE1, Asientos" },
    { nombre: "Zona Sur", desc: "Calvillo, San Jos\xE9 de Gracia" },
    { nombre: "Zona Oriente", desc: "El Llano, Pabell\xF3n de Arteaga" }
  ], "estadosVecinos": estadosVecinos, "estaciones": estacionesAguascalientes, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: "Traje Forestal NFPA 1977 para bomberos Aguascalientes",
      badge: "NFPA 1977",
      title: "Traje Forestal NFPA 1977",
      text: "Dise\xF1ado para los bomberos de Aguascalientes que combaten incendios en la <strong>Sierra Fr\xEDa</strong> y zonas boscosas de Calvillo. Tejido ultraligero transpirable para jornadas prolongadas en campo abierto bajo el clima semi-\xE1rido del estado.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco Estructural NFPA 1971 para bomberos Aguascalientes",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: "Certificaci\xF3n NFPA 1971 requerida en los parques industriales automotrices de Aguascalientes. Compatible con el sistema 3 capas exigido en las plantas de <strong>Nissan, Jatco</strong> y proveedores Tier 1 del estado.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: "Guantes Estructurales NFPA 1971 para bomberos Aguascalientes",
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: "Resistencia t\xE9rmica certificada para emergencias en plantas metal\xFArgicas y automotrices de Aguascalientes. Prensi\xF3n segura en rescate vehicular sobre la <strong>autopista M\xE9xico-Aguascalientes</strong> y zonas industriales.",
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Estructurales NFPA 1971 para bomberos Aguascalientes",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Calzado certificado NFPA 1971 para el entorno industrial de Aguascalientes. Puntera de acero y suela antiderrapante para <strong>pisos de f\xE1brica, pavimentos industriales</strong> y operaciones en la Presa Calles.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Aguascalientes", "ctaDesc": "Cotiza equipo certificado NFPA directamente para tu estaci\xF3n. Stock inmediato para licitaciones gubernamentales en los 11 municipios del estado.", "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Aguascalientes" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El H. Cuerpo de Bomberos de Aguascalientes</h2> <p>
El <strong>H. Cuerpo de Bomberos de Aguascalientes</strong> es la institución encargada de
      proteger la vida, el medio ambiente y el patrimonio de los más de <strong>1.5 millones de aguascalentenses</strong>.
      Con presencia en los principales municipios del estado, los bomberos atienden emergencias
      las <strong>24 horas del día, los 365 días del año</strong>.
</p> <h3>¿Cómo contactar a los bomberos en Aguascalientes?</h3> <p>
En caso de <strong>emergencia en Aguascalientes</strong>, marca el <strong>911</strong> desde
      cualquier teléfono. Este número conecta con el <strong>C4 de Aguascalientes</strong> que coordina
      la respuesta de bomberos, policía y servicios médicos. También puedes comunicarte directamente a la
      estación más cercana usando los teléfonos de este directorio.
</p> <h3>Zonas de Mayor Riesgo en Aguascalientes</h3> <p>
Aguascalientes presenta diversos riesgos que los bomberos atienden constantemente:
<strong>emergencias industriales</strong> en los parques industriales y plantas automotrices,
<strong>incendios forestales</strong> en la Sierra Fría y zonas boscosas de Calvillo,
<strong>eventos masivos</strong> durante la Feria de San Marcos, y <strong>accidentes
      vehiculares</strong> en las principales carreteras del estado.
</p> <h3>Servicios de los Bomberos Aguascalentenses</h3> <p>
Los bomberos de Aguascalientes están capacitados para atender:
<strong>incendios estructurales, industriales y forestales</strong>;
<strong>rescate vehicular en accidentes de tránsito</strong>;
<strong>materiales peligrosos (HAZMAT)</strong>;
<strong>rescate de personas atrapadas</strong>;
<strong>control de fugas de gas</strong>;
<strong>rescate acuático en la Presa Calles</strong>;
<strong>rescate en montaña en la Sierra Fría</strong>; y muchos otros servicios
      vitales para la seguridad de la población.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/aguascalientes.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/aguascalientes.astro";
const $$url = "/directorio/aguascalientes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aguascalientes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
