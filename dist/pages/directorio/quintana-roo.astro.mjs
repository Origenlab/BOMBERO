import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesQuintanaRoo, c as getMunicipios } from '../../chunks/estaciones-quintana-roo_fDcUNnLG.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$QuintanaRoo = createComponent(($$result, $$props, $$slots) => {
  const estado = "Quintana Roo";
  const sigla = "QROO";
  const slug = "quintana-roo";
  const heroThumbs = [
    {
      src: "/images/directorio/qroo-cancun-zona-hotelera.avif",
      alt: "Zona Hotelera de Canc\xFAn - Quintana Roo",
      label: "Canc\xFAn ZH"
    },
    {
      src: "/images/directorio/qroo-riviera-maya.avif",
      alt: "Riviera Maya playas y resorts - Quintana Roo",
      label: "Riviera Maya"
    },
    {
      src: "/images/directorio/qroo-cozumel-cruceros.avif",
      alt: "Puerto de cruceros de Cozumel - Quintana Roo",
      label: "Cozumel"
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/qroo-bomberos-rescate-acuatico.avif",
      alt: "Bomberos de Quintana Roo en rescate acu\xE1tico playas Canc\xFAn",
      label: "Rescate Acu\xE1tico"
    },
    {
      src: "/images/directorio/qroo-aeropuerto-cancun.avif",
      alt: "Aeropuerto Internacional de Canc\xFAn SSEI categor\xEDa 9",
      label: "Aeropuerto CUN"
    },
    {
      src: "/images/directorio/qroo-tulum-ruinas.avif",
      alt: "Zona arqueol\xF3gica de Tulum frente al mar Caribe",
      label: "Tulum"
    },
    {
      src: "/images/directorio/qroo-cenote-rescate.avif",
      alt: "Rescate en cenotes de Quintana Roo buceo profesional",
      label: "Cenotes"
    },
    {
      src: "/images/directorio/qroo-sian-kaan.avif",
      alt: "Reserva de la Bi\xF3sfera Sian Ka'an UNESCO",
      label: "Sian Ka'an UNESCO"
    },
    {
      src: "/images/directorio/qroo-playa-carmen.avif",
      alt: "Quinta Avenida Playa del Carmen Riviera Maya",
      label: "Playa del Carmen"
    }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias / Emergency" },
    { number: "(998) 884-1300", label: "Bomberos Canc\xFAn Central" },
    { number: "(984) 873-0291", label: "Bomberos Playa del Carmen" },
    { number: "(987) 872-0800", label: "Bomberos Cozumel" }
  ];
  const regiones = [
    {
      nombre: "Zona Norte - Canc\xFAn",
      desc: "Zona Hotelera (30,000+ habitaciones), Centro, Aeropuerto Internacional SSEI Cat. 9, Puerto Ju\xE1rez"
    },
    {
      nombre: "Riviera Maya",
      desc: "Playa del Carmen, Puerto Morelos, Akumal, Tulum - 25+ millones de turistas anuales"
    },
    {
      nombre: "Isla Cozumel",
      desc: "Puerto de cruceros #3 mundial (4.5M pasajeros), arrecife de coral, buceo profesional"
    },
    {
      nombre: "Costa Maya - Sur",
      desc: "Bacalar (Laguna de los 7 Colores), Chetumal capital, Felipe Carrillo Puerto, Reserva Sian Ka'an"
    }
  ];
  const eppCards = [
    {
      image: "/images/productos/equipo-rescate-acuatico.avif",
      imageAlt: "Equipo de rescate acu\xE1tico para playas del Caribe",
      badge: "Acu\xE1tico",
      title: "Rescate Acu\xE1tico Certificado",
      text: "Equipamiento profesional para rescate oce\xE1nico, cenotes y arrecifes del Caribe Mexicano.",
      href: "/productos/rescate-acuatico",
      linkLabel: "Ver equipo acu\xE1tico"
    },
    {
      image: "/images/productos/traje-bombero-estructural.avif",
      imageAlt: "Traje estructural para emergencias hoteleras",
      badge: "Hotelero",
      title: "Emergencias en Resorts",
      text: "Protecci\xF3n certificada NFPA para emergencias en los 400+ hoteles de la Riviera Maya.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver trajes estructurales"
    },
    {
      image: "/images/productos/equipo-scba-bombero.avif",
      imageAlt: "Equipo SCBA para rescate en espacios confinados cenotes",
      badge: "Cenotes",
      title: "Rescate en Cenotes",
      text: "Equipos de respiraci\xF3n para buceo en los 6,000+ cenotes de la Pen\xEDnsula de Yucat\xE1n.",
      href: "/productos/scba",
      linkLabel: "Ver equipos SCBA"
    }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de ${estacionesQuintanaRoo.length} estaciones de bomberos en Quintana Roo. Destino tur\xEDstico #1 de Latinoam\xE9rica con servicio biling\xFCe 24/7. Cobertura Canc\xFAn, Riviera Maya, Playa del Carmen, Tulum, Cozumel. Rescate acu\xE1tico especializado.`,
    numberOfItems: estacionesQuintanaRoo.length,
    itemListElement: estacionesQuintanaRoo.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.zona,
          addressRegion: estado,
          addressCountry: "MX"
        },
        telephone: e.telefono,
        url: `https://bombero.mx/directorio/${slug}/${e.slug}`,
        availableLanguage: e.idiomas || ["Spanish"]
      }
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: estado, item: `https://bombero.mx/directorio/${slug}` }
    ]
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/equipo-rescate-completo-01.avif",
    "/images/directorio/bomberos-salida-emergencia-nocturna-02.avif"
  ];
  const estadosVecinos = getEstadosVecinos("quintana-roo");
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesQuintanaRoo, "stationImages": stationImages, "municipios": getMunicipios(), "estadosVecinos": estadosVecinos, "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en ${estado} | Directorio Oficial ${estacionesQuintanaRoo.length} Estaciones | BOMBERO.MX`, "description": `Directorio completo de ${estacionesQuintanaRoo.length} estaciones de bomberos en Quintana Roo 2024. Destino tur\xEDstico #1 de Latinoam\xE9rica con servicio biling\xFCe 24/7. Cobertura Canc\xFAn, Riviera Maya, Playa del Carmen, Tulum, Cozumel. Rescate acu\xE1tico certificado, emergencias hoteleras, respuesta a huracanes. Tel: (998) 884-1300. Emergencias 911.`, "data-astro-cid-lxfhnynn": true }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="seo-content" data-astro-cid-lxfhnynn> <h2 data-astro-cid-lxfhnynn>Bomberos de Quintana Roo: Protección del Caribe Mexicano</h2> <p data-astro-cid-lxfhnynn>
El <strong data-astro-cid-lxfhnynn>Heroico Cuerpo de Bomberos de Quintana Roo</strong> protege el <strong data-astro-cid-lxfhnynn>destino turístico más
        importante de Latinoamérica</strong>, recibiendo más de <strong data-astro-cid-lxfhnynn>25 millones de visitantes anuales</strong>.
        Con <strong data-astro-cid-lxfhnynn>17 estaciones especializadas</strong> distribuidas estratégicamente desde <strong data-astro-cid-lxfhnynn>Cancún hasta
        Chetumal</strong>, los bomberos quintanarroenses ofrecen <strong data-astro-cid-lxfhnynn>servicio bilingüe español/inglés 24/7</strong>
para atender las necesidades de la industria turística más dinámica del país, incluyendo emergencias en
<strong data-astro-cid-lxfhnynn>400+ hoteles y resorts de clase mundial</strong>.
</p> <h3 data-astro-cid-lxfhnynn>Cancún Zona Hotelera: Cobertura de Clase Mundial</h3> <p data-astro-cid-lxfhnynn>
La <strong data-astro-cid-lxfhnynn>Zona Hotelera de Cancún</strong> concentra más de <strong data-astro-cid-lxfhnynn>30,000 habitaciones</strong> en
<strong data-astro-cid-lxfhnynn>150+ resorts</strong> a lo largo de sus <strong data-astro-cid-lxfhnynn>23 kilómetros de playas</strong>. Las estaciones
        de bomberos de la zona cuentan con personal bilingüe certificado y protocolos especializados para
<strong data-astro-cid-lxfhnynn>evacuación de hoteles de gran altura</strong>, coordinación con cadenas internacionales como
<strong data-astro-cid-lxfhnynn>Marriott, Hilton, Hyatt, RIU, Iberostar y Palace Resorts</strong>. El <strong data-astro-cid-lxfhnynn>Aeropuerto
        Internacional de Cancún</strong> opera estación <strong data-astro-cid-lxfhnynn>SSEI Categoría 9</strong> (máxima clasificación
        OACI), siendo el <strong data-astro-cid-lxfhnynn>segundo aeropuerto más transitado de Latinoamérica</strong> con más de
<strong data-astro-cid-lxfhnynn>25 millones de pasajeros anuales</strong>.
</p> <h3 data-astro-cid-lxfhnynn>Riviera Maya: De Playa del Carmen a Tulum</h3> <p data-astro-cid-lxfhnynn>
La <strong data-astro-cid-lxfhnynn>Riviera Maya</strong> se extiende <strong data-astro-cid-lxfhnynn>130 kilómetros</strong> desde Puerto Morelos hasta
        la Reserva Sian Ka'an. <strong data-astro-cid-lxfhnynn>Playa del Carmen</strong> es la ciudad de más rápido crecimiento de México,
        mientras que <strong data-astro-cid-lxfhnynn>Tulum</strong> combina la única zona arqueológica maya frente al mar con playas
        premium que reciben <strong data-astro-cid-lxfhnynn>2 millones de visitantes anuales</strong>. Los bomberos de la Riviera Maya
        están capacitados en <strong data-astro-cid-lxfhnynn>rescate acuático oceánico</strong>, emergencias en parques temáticos como
<strong data-astro-cid-lxfhnynn>Xcaret, Xel-Há y Xplor</strong>, y coordinación con la Guardia Nacional para seguridad turística.
</p> <h3 data-astro-cid-lxfhnynn>Cozumel: Puerto de Cruceros #3 del Mundo</h3> <p data-astro-cid-lxfhnynn> <strong data-astro-cid-lxfhnynn>Isla Cozumel</strong> es el <strong data-astro-cid-lxfhnynn>tercer puerto de cruceros más importante del planeta</strong>,
        recibiendo más de <strong data-astro-cid-lxfhnynn>4.5 millones de cruceristas anuales</strong> en sus tres terminales marítimas.
        La estación de bomberos de Cozumel mantiene protocolos de <strong data-astro-cid-lxfhnynn>respuesta a emergencias en cruceros</strong>,
        coordinación con las navieras <strong data-astro-cid-lxfhnynn>Carnival, Royal Caribbean, Norwegian y MSC</strong>, y capacidad de
        rescate en el <strong data-astro-cid-lxfhnynn>Parque Nacional Arrecifes de Cozumel</strong>, considerado uno de los
<strong data-astro-cid-lxfhnynn>5 mejores destinos de buceo del mundo</strong>.
</p> <h3 data-astro-cid-lxfhnynn>Rescate Acuático: Playas, Cenotes y Gran Arrecife Maya</h3> <p data-astro-cid-lxfhnynn>
Quintana Roo posee más de <strong data-astro-cid-lxfhnynn>6,000 cenotes registrados</strong>, sistemas de ríos subterráneos que
        requieren <strong data-astro-cid-lxfhnynn>rescate especializado en aguas confinadas</strong>. El <strong data-astro-cid-lxfhnynn>Gran Arrecife Maya</strong>
(segundo más largo del mundo con <strong data-astro-cid-lxfhnynn>1,000 km</strong>) genera demanda constante de <strong data-astro-cid-lxfhnynn>rescate
        de buceadores</strong>. Las estaciones de rescate acuático cuentan con <strong data-astro-cid-lxfhnynn>lanchas de respuesta rápida,
        motos acuáticas, equipo de buceo profesional</strong> y personal certificado en <strong data-astro-cid-lxfhnynn>rescate oceánico,
        lacustre y aguas confinadas</strong>.
</p> <h3 data-astro-cid-lxfhnynn>Reserva Sian Ka'an: Patrimonio Mundial UNESCO</h3> <p data-astro-cid-lxfhnynn>
La <strong data-astro-cid-lxfhnynn>Reserva de la Biósfera Sian Ka'an</strong>, declarada <strong data-astro-cid-lxfhnynn>Patrimonio de la Humanidad
        por UNESCO en 1987</strong>, abarca <strong data-astro-cid-lxfhnynn>528,000 hectáreas</strong> de selva, humedales, manglares
        y arrecifes. Los bomberos de la zona sur coordinan con <strong data-astro-cid-lxfhnynn>CONANP</strong> la protección contra
<strong data-astro-cid-lxfhnynn>incendios forestales</strong> que amenazan este ecosistema único, además de <strong data-astro-cid-lxfhnynn>rescates
        de ecoturistas</strong> en las remotas comunidades de la reserva.
</p> <h3 data-astro-cid-lxfhnynn>Temporada de Huracanes: Junio a Noviembre</h3> <p data-astro-cid-lxfhnynn>
Quintana Roo es una de las zonas con <strong data-astro-cid-lxfhnynn>mayor exposición a huracanes del Caribe</strong>.
        Históricamente ha sido impactado por huracanes devastadores como <strong data-astro-cid-lxfhnynn>Wilma (2005)</strong> y
<strong data-astro-cid-lxfhnynn>Dean (2007)</strong>. Los bomberos mantienen <strong data-astro-cid-lxfhnynn>protocolos de evacuación masiva</strong>
para la industria hotelera, coordinación con <strong data-astro-cid-lxfhnynn>Protección Civil Federal</strong>, y capacidad
        de <strong data-astro-cid-lxfhnynn>respuesta post-huracán</strong> incluyendo búsqueda y rescate, remoción de escombros y
        atención de emergencias en infraestructura dañada.
</p> <h3 data-astro-cid-lxfhnynn>Chetumal: Capital del Estado y Zona Libre</h3> <p data-astro-cid-lxfhnynn> <strong data-astro-cid-lxfhnynn>Chetumal</strong>, capital de Quintana Roo, es frontera con <strong data-astro-cid-lxfhnynn>Belice</strong> y opera
        como <strong data-astro-cid-lxfhnynn>Zona Libre</strong> con intenso comercio transfronterizo. La <strong data-astro-cid-lxfhnynn>Estación Central
        de Bomberos de Chetumal</strong> coordina la respuesta de emergencias para toda la <strong data-astro-cid-lxfhnynn>zona sur
        del estado</strong>, incluyendo <strong data-astro-cid-lxfhnynn>Bacalar</strong> (Laguna de los 7 Colores) y las comunidades
        mayas de <strong data-astro-cid-lxfhnynn>Felipe Carrillo Puerto</strong>. Mantiene protocolos de <strong data-astro-cid-lxfhnynn>cooperación binacional
        con Belice</strong> para emergencias fronterizas.
</p> <h3 data-astro-cid-lxfhnynn>Servicios Bilingües para Turismo Internacional</h3> <p data-astro-cid-lxfhnynn>
El <strong data-astro-cid-lxfhnynn>70% de los visitantes de Quintana Roo provienen de Estados Unidos y Canadá</strong>. Por
        ello, las estaciones en zonas turísticas cuentan con <strong data-astro-cid-lxfhnynn>personal bilingüe español/inglés</strong>
y el servicio <strong data-astro-cid-lxfhnynn>911 tiene operadores en ambos idiomas 24/7</strong>. Los bomberos coordinan con
        los <strong data-astro-cid-lxfhnynn>departamentos de seguridad de cadenas hoteleras internacionales</strong>, consulados y
        servicios médicos privados para atención integral de emergencias turísticas.
</p> <h3 data-astro-cid-lxfhnynn>Servicios Especializados de los Bomberos de Quintana Roo</h3> <p data-astro-cid-lxfhnynn>
Los bomberos de Quintana Roo ofrecen: <strong data-astro-cid-lxfhnynn>combate de incendios estructurales y forestales</strong>;
<strong data-astro-cid-lxfhnynn>rescate acuático oceánico certificado</strong>; <strong data-astro-cid-lxfhnynn>rescate en cenotes y aguas confinadas</strong>;
<strong data-astro-cid-lxfhnynn>respuesta ARFF aeroportuaria SSEI Cat. 9</strong>; <strong data-astro-cid-lxfhnynn>emergencias en cruceros</strong>;
<strong data-astro-cid-lxfhnynn>evacuación de hoteles de gran altura</strong>; <strong data-astro-cid-lxfhnynn>atención de huracanes</strong>;
<strong data-astro-cid-lxfhnynn>búsqueda y rescate en selva y manglares</strong>; <strong data-astro-cid-lxfhnynn>rescate de buceadores</strong>;
        y <strong data-astro-cid-lxfhnynn>servicio bilingüe 24/7</strong>. El tiempo de respuesta promedio en zonas turísticas es de
<strong data-astro-cid-lxfhnynn>5-8 minutos</strong>.
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/quintana-roo.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/quintana-roo.astro";
const $$url = "/directorio/quintana-roo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuintanaRoo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
