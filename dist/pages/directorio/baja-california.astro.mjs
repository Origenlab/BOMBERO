import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, c as getEstadisticas, e as estacionesBajaCalifornia } from '../../chunks/estaciones-baja-california_Rgsk1SpR.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C37tG6Zv.mjs';
export { renderers } from '../../renderers.mjs';

const $$BajaCalifornia = createComponent(($$result, $$props, $$slots) => {
  const estadosVecinos = getEstadosVecinos("baja-california");
  const municipios = getMunicipios();
  const estadisticas = getEstadisticas();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Baja California", url: "/directorio/baja-california" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Baja California, M\xE9xico",
    "description": "Directorio oficial de las estaciones de bomberos en Baja California. Tel\xE9fonos directos de emergencia en Tijuana, Mexicali, Ensenada, Tecate y Playas de Rosarito. Cobertura 24/7. Emergencias: llama al 911.",
    "numberOfItems": estacionesBajaCalifornia.length,
    "itemListElement": estacionesBajaCalifornia.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio || e.ciudad,
          "addressRegion": "Baja California",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/baja-california/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-industrial-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-norte-mexico-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/camion-bomberos-torre-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/estacion-bomberos-maritimo-01.avif",
    "/images/directorio/camion-cisterna-bomberos-01.avif",
    "/images/directorio/pick-up-bomberos-forestal-01.avif",
    "/images/directorio/motobomba-incendios-forestal-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bombero-mexicano-retrato-incendio-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Baja California", "sigla": "BC", "slug": "baja-california", "description": `Directorio oficial de las ${estadisticas.totalEstaciones} estaciones de bomberos en Baja California. Tel\xE9fonos de emergencia en Tijuana, Mexicali, Ensenada, Tecate y Rosarito. Cobertura HAZMAT, rescate acu\xE1tico y forestal. Emergencias: 911.`, "keywords": [
    "bomberos baja california",
    "estaciones bomberos tijuana",
    "bomberos mexicali tel\xE9fono",
    "emergencias baja california 911",
    "bomberos ensenada",
    "cuerpo bomberos baja california",
    "bomberos tecate",
    "bomberos playas rosarito",
    "bomberos la rumorosa",
    "hazmat maquiladoras tijuana",
    "rescate acu\xE1tico ensenada",
    "bomberos valle guadalupe",
    "bomberos zona industrial mexicali",
    "emergencias 911 tijuana",
    "directorio bomberos bc"
  ], "canonical": "https://bombero.mx/directorio/baja-california", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estadisticas.totalEstaciones, "totalMunicipios": estadisticas.totalMunicipios, "habitantes": "3.8M+", "heroDesc": `El <strong>Heroico Cuerpo de Bomberos de Baja California</strong> protege los <strong>${estadisticas.totalMunicipios} municipios</strong> del estado fronterizo m\xE1s din\xE1mico de M\xE9xico con <strong>${estadisticas.totalEstaciones} estaciones activas</strong> y m\xE1s de <strong>940 bomberos profesionales</strong> \u2014 desde el desierto de Mexicali (50\xB0C en verano) hasta el puerto de Ensenada, las maquiladoras de Tijuana y los bosques de La Rumorosa.`, "heroImage": "/images/directorio/estacion-bomberos-norte-mexico-01.avif", "heroImageAlt": "Estaci\xF3n de Bomberos Baja California \u2014 estado fronterizo noreste de M\xE9xico", "heroCaption": "H. Cuerpo de Bomberos \xB7 Baja California", "heroThumbs": [
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Unidad HAZMAT bomberos maquiladoras Tijuana Mexicali", label: "HAZMAT Maquiladora" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico bomberos Ensenada Rosarito Pac\xEDfico", label: "Rescate Costero" },
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Cami\xF3n forestal bomberos Sierra de Ju\xE1rez La Rumorosa", label: "Forestal Sierra" }
  ], "galleryImages": [
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n HAZMAT plantas maquiladoras Baja California", label: "HAZMAT Industrial" },
    { src: "/images/directorio/camion-escalera-bomberos-01.avif", alt: "Rescate en altura edificios Tijuana Mexicali", label: "Rescate en Altura" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Capacitaci\xF3n NFPA bomberos Baja California zona fronteriza", label: "Capacitaci\xF3n NFPA" },
    { src: "/images/directorio/rescate-swift-water-rios-01.avif", alt: "Rescate acu\xE1tico bomberos costa Pac\xEDfico Ensenada Rosarito", label: "Rescate Pac\xEDfico" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "664 684 0580", label: "Bomberos Tijuana" },
    { number: "686 558 1616", label: "Bomberos Mexicali" },
    { number: "646 178 2388", label: "Bomberos Ensenada" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Frontera Norte", desc: "Tijuana \xB7 Playas de Rosarito \xB7 Tecate" },
    { nombre: "Zona Desierto-Capital", desc: "Mexicali \xB7 Valle de Mexicali \xB7 San Luis RC" },
    { nombre: "Zona Vitivin\xEDcola", desc: "Ensenada \xB7 Valle de Guadalupe \xB7 Maneadero" },
    { nombre: "Zona Agr\xEDcola Sur", desc: "San Quint\xEDn \xB7 Vicente Guerrero \xB7 Camal\xFA" }
  ], "estadosVecinos": estadosVecinos, "estaciones": estacionesBajaCalifornia, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: "Traje Forestal NFPA 1977 para bomberos Baja California Sierra Ju\xE1rez La Rumorosa",
      badge: "NFPA 1977",
      title: "Traje Forestal NFPA 1977",
      text: "Certificado para los incendios forestales en la <strong>Sierra de Ju\xE1rez</strong>, el <strong>Parque Nacional Constituci\xF3n de 1857</strong> y la peligrosa zona boscosa de <strong>La Rumorosa</strong> a 1,275 metros de altitud. Tejido ultraligero y transpirable para jornadas prolongadas bajo el clima mediterr\xE1neo-seco de BC.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco Estructural NFPA 1971 para bomberos Tijuana Mexicali maquiladoras",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: "Exigido en los m\xE1s de <strong>700 parques maquiladores</strong> de Otay, El Florido y los corredores industriales de Mexicali (sector aeroespacial, electr\xF3nica y dispositivos m\xE9dicos). Compatible con sistemas de comunicaci\xF3n binacional para operaciones coordinadas con <strong>San Diego Fire-Rescue Department</strong>.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: "Guantes Estructurales NFPA 1971 bomberos La Rumorosa rescate vehicular",
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: "Resistencia t\xE9rmica certificada para emergencias en plantas aeroespaciales de Mexicali y electr\xF3nicas de Tijuana. Prensi\xF3n segura en rescate vehicular sobre los <strong>80+ curvas de La Rumorosa</strong> y la <strong>Autopista Tijuana\u2013Mexicali</strong>, donde la estaci\xF3n de La Rumorosa atiende m\xFAltiples accidentes al mes.",
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Estructurales NFPA 1971 bomberos Baja California terreno mixto",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Certificadas NFPA 1971 para el terreno m\xE1s diverso de M\xE9xico: pisos de f\xE1brica en <strong>Otay y El Vig\xEDa</strong>, arenas y escolleras de <strong>Playas de Tijuana y Puerto de Ensenada</strong>, y terreno volc\xE1nico de la <strong>Bah\xEDa de San Quint\xEDn</strong> en operaciones de rescate rural y costero.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Baja California", "ctaDesc": `Cotiza equipo certificado NFPA para tus ${estadisticas.totalEstaciones} estaciones en Tijuana, Mexicali, Ensenada, Tecate y Rosarito. Env\xEDo inmediato a los 5 municipios. Atenci\xF3n a licitaciones p\xFAblicas y compra directa.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Baja California" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de Baja California</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de Baja California</strong> es la institución de
      protección civil que salvaguarda a más de <strong>3.8 millones de bajacalifornianos</strong>
en los <strong>${estadisticas.totalMunicipios} municipios</strong> del estado más occidental
      de México. Con <strong>${estadisticas.totalEstaciones} estaciones operativas</strong> y más de
<strong>940 bomberos profesionales activos</strong>, opera las <strong>24 horas del día,
      los 365 días del año</strong>, atendiendo desde emergencias HAZMAT en plantas maquiladoras
      hasta rescates acuáticos en el océano Pacífico.
</p> <h3>¿Cómo llamar a los Bomberos en Baja California?</h3> <p>
En cualquier <strong>emergencia en Baja California</strong>, marca el <strong>911</strong>
desde cualquier teléfono — fijo o celular, con o sin saldo. Este número conecta con el
<strong>Centro de Control y Comando (C4)</strong> de cada municipio, que despacha bomberos,
      policía y servicios médicos simultáneamente. Para contacto directo con estaciones centrales:
<strong>Tijuana: 664 684 0580</strong> · <strong>Mexicali: 686 558 1616</strong> ·
<strong>Ensenada: 646 178 2388</strong> · <strong>Tecate: 665 654 1313</strong> ·
<strong>Rosarito: 661 612 0808</strong>.
</p> <h3>Zonas de Mayor Riesgo en Baja California</h3> <p>
Baja California presenta los riesgos más diversos de cualquier estado de México:
<strong>incendios HAZMAT en 700+ plantas maquiladoras</strong> de Tijuana (Otay, El Florido)
      y Mexicali (El Vigía, Cachanilla);
<strong>calor extremo en Mexicali</strong>, ciudad que registra hasta <strong>52°C</strong>
en verano — el mayor calor habitado de México;
<strong>accidentes vehiculares en La Rumorosa</strong>, con 80+ curvas cerradas y neblina
      frecuente a 1,275 metros de altitud;
<strong>incendios forestales</strong> en la Sierra de Juárez y el Parque Nacional
      Constitución de 1857;
<strong>emergencias portuarias</strong> en el Puerto de Ensenada (500,000+ cruceristas/año);
<strong>rescate acuático</strong> en el océano Pacífico desde Playas de Tijuana hasta
      San Quintín; e <strong>incendios en viñedos</strong> del Valle de Guadalupe.
</p> <h3>Cooperación Binacional con California Fire</h3> <p>
Baja California es el único estado de México con <strong>protocolos formales de cooperación
      binacional</strong> con agencias de bomberos de Estados Unidos. La <strong>Estación Central
      de Tijuana</strong> coordina operaciones con <strong>San Diego Fire-Rescue Department</strong>,
      mientras que la <strong>Estación Central de Mexicali</strong> mantiene acuerdos con agencias
      del <strong>Imperial County, California</strong>, y la Estación de San Luis Río Colorado opera
      en coordinación con el <strong>Fire Department de Yuma, Arizona</strong>. Estos acuerdos
      permiten respuesta conjunta en emergencias que afecten ambos lados de la frontera.
</p> <h3>Especialidades del Cuerpo de Bomberos de BC</h3> <p>
Los bomberos bajacalifornianos poseen capacidades únicas en México:
<strong>HAZMAT nivel técnico</strong> para plantas aeroespaciales, electrónicas y de
      dispositivos médicos;
<strong>USAR (Urban Search and Rescue)</strong> para estructuras colapsadas en zonas sísmicas;
<strong>rescate en montaña</strong> y alta montaña (Sierra de Juárez, La Rumorosa);
<strong>rescate acuático oceánico</strong> en el Pacífico Norte;
<strong>operaciones en calor extremo</strong> con protocolos para temperaturas sobre 50°C;
      e <strong>intervención en eventos masivos</strong> como Spring Break en Rosarito
      (50,000+ asistentes) y la Feria del Vino en el Valle de Guadalupe.
</p> <h3>Municipios y Cobertura por Zona</h3> <p> <strong>Tijuana</strong> — 8 estaciones cubren los 2+ millones de habitantes de la ciudad
      más poblada de BC: Centro, Otay (industrial), Playas, La Mesa, Zona Norte, La Presa y el
      corredor costero. <strong>Mexicali</strong> — 6 estaciones en la capital: Centro Cívico,
      Zona Este (agrícola), Industrial (maquiladoras), Zona Río (comercial), Sur (residencial)
      y San Luis Río Colorado. <strong>Ensenada</strong> — 4 estaciones: Puerto Central,
      Valle de Guadalupe (vitivinícola), Maneadero (agrícola) y San Quintín (sur agrícola).
<strong>Tecate</strong> — 2 estaciones: Centro y La Rumorosa (carretera peligrosa).
<strong>Playas de Rosarito</strong> — 2 estaciones: Centro y Primo Tapia (corredor costero).
</p> <h3>Servicios de los Bomberos de Baja California</h3> <p>
El cuerpo de bomberos de BC atiende: <strong>incendios estructurales e industriales</strong>;
<strong>materiales peligrosos (HAZMAT)</strong> en industria maquiladora;
<strong>rescate vehicular</strong> con equipo hidráulico Holmatro;
<strong>rescate acuático</strong> en océano Pacífico con motos acuáticas y equipos de buceo;
<strong>incendios forestales</strong> con brigadas certificadas y motoconformistas;
<strong>emergencias por temperaturas extremas</strong> (Mexicali);
<strong>rescate en montaña y barrancas</strong> (La Rumorosa, Sierra de Juárez);
<strong>emergencias portuarias</strong> en colaboración con la Armada de México;
      y <strong>atención prehospitalaria</strong> con ambulancias de soporte vital avanzado.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california.astro";
const $$url = "/directorio/baja-california";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BajaCalifornia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
