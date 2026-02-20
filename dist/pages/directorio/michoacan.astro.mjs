import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, e as estacionesMichoacan } from '../../chunks/estaciones-michoacan_Dpi2fkOQ.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C37tG6Zv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Michoacan = createComponent(($$result, $$props, $$slots) => {
  const estadosVecinos = getEstadosVecinos("michoacan");
  const municipios = getMunicipios();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Michoac\xE1n", url: "/directorio/michoacan" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Michoac\xE1n de Ocampo, M\xE9xico",
    "description": "Directorio completo de las 22 estaciones de bomberos en Michoac\xE1n. Protecci\xF3n para Morelia (Patrimonio UNESCO), L\xE1zaro C\xE1rdenas, Uruapan, P\xE1tzcuaro, Reserva Mariposa Monarca y 4.7 millones de habitantes. Emergencias 911.",
    "numberOfItems": estacionesMichoacan.length,
    "itemListElement": estacionesMichoacan.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Michoac\xE1n",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/michoacan/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-morelia-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bomberos-trabajo-equipo-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-cisterna-bomberos-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/entrenamiento-bomberos-fuego-01.avif",
    "/images/directorio/estacion-bomberos-mexico-01.avif",
    "/images/directorio/camion-bomberos-torre-01.avif",
    "/images/directorio/simulacro-bomberos-profesional-01.avif",
    "/images/directorio/autobomba-bomberos-equipada-01.avif",
    "/images/directorio/estacion-bomberos-industrial-01.avif",
    "/images/directorio/bombero-mexico-servicio-emergencias-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Michoac\xE1n", "sigla": "MICH", "slug": "michoacan", "description": "Directorio completo de las 22 estaciones de bomberos en Michoac\xE1n. Protecci\xF3n para Morelia (UNESCO), L\xE1zaro C\xE1rdenas, Uruapan, P\xE1tzcuaro, Reserva Mariposa Monarca y 4.7M+ habitantes. Emergencias 911.", "keywords": ["bomberos michoac\xE1n", "estaciones bomberos morelia", "bomberos l\xE1zaro c\xE1rdenas", "emergencias michoac\xE1n 911", "bomberos uruapan", "bomberos p\xE1tzcuaro", "cuerpo bomberos michoac\xE1n", "bomberos mariposa monarca", "rescate acu\xE1tico lago p\xE1tzcuaro", "bomberos puerto industrial"], "canonical": "https://bombero.mx/directorio/michoacan", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estacionesMichoacan.length, "totalMunicipios": municipios.length, "habitantes": "4.7M+", "heroDesc": "Directorio completo del <strong>H. Cuerpo de Bomberos de Michoac\xE1n</strong>. Encuentra tel\xE9fonos de emergencia, direcciones y servicios de las 22 estaciones que protegen 2 sitios Patrimonio UNESCO, el puerto industrial m\xE1s importante del Pac\xEDfico y la capital mundial del aguacate.", "heroImage": "/images/directorio/estacion-bomberos-morelia-01.avif", "heroImageAlt": "Estaci\xF3n Central de Bomberos Morelia, Michoac\xE1n - Centro Hist\xF3rico UNESCO", "heroCaption": "H. Cuerpo de Bomberos \xB7 Michoac\xE1n", "heroThumbs": [
    { src: "/images/directorio/camion-bomberos-moderno-01.avif", alt: "Cami\xF3n de bomberos Morelia MICH", label: "Flota Morelia" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico Lago de P\xE1tzcuaro", label: "Rescate Lacustre" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos Michoac\xE1n protegiendo patrimonio", label: "Protecci\xF3n UNESCO" }
  ], "galleryImages": [
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento bomberos Michoac\xE1n", label: "Academia Bomberil" },
    { src: "/images/directorio/camion-escalera-bomberos-01.avif", alt: "Cami\xF3n escalera bomberos Morelia", label: "Rescate en Altura" },
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Rescate urbano bomberos MICH", label: "Rescate Centro UNESCO" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT L\xE1zaro C\xE1rdenas", label: "HAZMAT Portuario" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "(443) 312-3232", label: "Bomberos Morelia" },
    { number: "(753) 532-0606", label: "Bomberos L\xE1zaro C." },
    { number: "(452) 524-5252", label: "Bomberos Uruapan" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana Morelia", desc: "Capital UNESCO, Tar\xEDmbaro, zona industrial sur" },
    { nombre: "Regi\xF3n Lacustre", desc: "P\xE1tzcuaro, Quiroga, Lago de Zirahu\xE9n, D\xEDa de Muertos" },
    { nombre: "Meseta Pur\xE9pecha", desc: "Uruapan, Paracho, Tanc\xEDtaro - Capital del aguacate" },
    { nombre: "Costa del Pac\xEDfico", desc: "L\xE1zaro C\xE1rdenas, Playa Azul, puerto industrial" },
    { nombre: "Ci\xE9nega de Chapala", desc: "Zamora, Jiquilpan, Sahuayo" },
    { nombre: "Oriente - Mariposa Monarca", desc: "Zit\xE1cuaro, Angangueo, Reserva Biosfera UNESCO" }
  ], "estadosVecinos": estadosVecinos, "estaciones": estacionesMichoacan, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: "Traje Estructural NFPA 1971 para bomberos Morelia - Centro Hist\xF3rico UNESCO",
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: "Equipo certificado para los bomberos de <strong>Morelia</strong> que protegen el Centro Hist\xF3rico Patrimonio de la Humanidad. Dise\xF1ado para incendios en edificios de cantera rosa, casonas coloniales y protecci\xF3n del patrimonio michoacano desde 1991.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco NFPA 1971 para bomberos L\xE1zaro C\xE1rdenas - Puerto Industrial",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: "Protecci\xF3n certificada para emergencias en el <strong>Puerto de L\xE1zaro C\xE1rdenas</strong>, el m\xE1s importante del Pac\xEDfico mexicano. Compatible con equipos de comunicaci\xF3n para coordinaci\xF3n en emergencias industriales, navales y HAZMAT portuario.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: "Guantes NFPA 1971 para bomberos Uruapan - Industria Aguacatera",
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: "Resistencia t\xE9rmica certificada para emergencias en <strong>Uruapan, Capital Mundial del Aguacate</strong>. Prensi\xF3n segura para operaciones en empacadoras, incendios forestales en bosques de pino-encino y rescate en el Parque Nacional Barranca del Cupatitzio.",
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas NFPA 1971 para bomberos P\xE1tzcuaro - Rescate Lacustre",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Calzado certificado NFPA 1971 para los bomberos de <strong>P\xE1tzcuaro y la Regi\xF3n Lacustre</strong>. Resistentes al agua para rescate acu\xE1tico en el Lago de P\xE1tzcuaro, protecci\xF3n de Janitzio y emergencias masivas durante las celebraciones del D\xEDa de Muertos.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Michoac\xE1n", "ctaDesc": "Cotiza equipo certificado NFPA para tu estaci\xF3n. Stock inmediato para licitaciones en Morelia, L\xE1zaro C\xE1rdenas, Uruapan, Zamora y los 113 municipios del estado. Protecci\xF3n para 2 sitios Patrimonio UNESCO.", "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Michoac\xE1n" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El H. Cuerpo de Bomberos de Michoacán de Ocampo</h2> <p>
El <strong>H. Cuerpo de Bomberos de Michoacán</strong> es la institución encargada de
      proteger la vida, el medio ambiente y el patrimonio de los más de <strong>4.7 millones de michoacanos</strong>.
      Con presencia estratégica en las 7 regiones del estado —desde la costa del Pacífico hasta la Sierra Madre—,
      los bomberos atienden emergencias las <strong>24 horas del día, los 365 días del año</strong>, protegiendo
      2 sitios declarados <strong>Patrimonio de la Humanidad por la UNESCO</strong>.
</p> <h3>¿Cómo contactar a los bomberos en Michoacán?</h3> <p>
En caso de <strong>emergencia en Michoacán</strong>, marca el <strong>911</strong> desde
      cualquier teléfono. Este número conecta con el <strong>C4 de Michoacán</strong> que coordina
      la respuesta de bomberos, policía y servicios médicos. En Morelia puedes llamar directamente
      al <strong>(443) 312-3232</strong>, en Lázaro Cárdenas al <strong>(753) 532-0606</strong> y en
      Uruapan al <strong>(452) 524-5252</strong>.
</p> <h3>Centro Histórico de Morelia - Patrimonio UNESCO desde 1991</h3> <p> <strong>Morelia</strong>, capital de Michoacán, posee uno de los centros históricos más bellos de América,
      declarado <strong>Patrimonio de la Humanidad por la UNESCO en 1991</strong>. Los bomberos de la Estación
      Central están especializados en <strong>protección de edificios coloniales de cantera rosa</strong>,
      con protocolos específicos para incendios en casonas históricas, templos barrocos y el famoso
<strong>Acueducto de Morelia</strong> con sus 253 arcos. La Catedral de Morelia, el Palacio de Gobierno
      y el Colegio de San Nicolás requieren atención especializada en protección patrimonial.
</p> <h3>Puerto de Lázaro Cárdenas - El más importante del Pacífico</h3> <p>
El <strong>Puerto de Lázaro Cárdenas</strong> es el puerto industrial más importante del Pacífico mexicano,
      manejando <strong>más de 30 millones de toneladas</strong> de carga anualmente. Los bomberos del puerto
      están especializados en <strong>emergencias HAZMAT de nivel industrial</strong>, incendios en terminales
      de contenedores, rescate naval y protección de las instalaciones de <strong>ArcelorMittal</strong>
(antes Sicartsa), la siderúrgica más grande de México. La terminal de gas natural licuado y las
      instalaciones petroquímicas requieren equipos de respuesta certificados.
</p> <h3>Reserva de la Biosfera Mariposa Monarca - UNESCO 2008</h3> <p>
La <strong>Reserva de la Biosfera Mariposa Monarca</strong>, declarada Patrimonio de la Humanidad
      en 2008, recibe anualmente <strong>millones de mariposas monarca</strong> que migran desde Canadá.
      Los bomberos de <strong>Zitácuaro y Angangueo</strong> están capacitados para combatir
<strong>incendios forestales</strong> en los bosques de oyamel que albergan los santuarios,
      protegiendo este fenómeno natural único en el mundo. Los santuarios de El Rosario y Sierra Chincua
      son vigilados durante la temporada de noviembre a marzo.
</p> <h3>Región Lacustre - Pátzcuaro y el Día de Muertos</h3> <p>
La <strong>Región Lacustre de Pátzcuaro</strong> es el corazón cultural de México y escenario principal
      de las celebraciones del <strong>Día de Muertos</strong>. Los bomberos están especializados en
<strong>rescate acuático en el Lago de Pátzcuaro</strong>, emergencias en la <strong>Isla de Janitzio</strong>
y atención masiva durante las noches del 1 y 2 de noviembre, cuando cientos de miles de visitantes
      llegan a presenciar las tradiciones purépechas. El Lago de Zirahuén y los pueblos mágicos de la región
      también requieren atención especializada.
</p> <h3>Uruapan - Capital Mundial del Aguacate</h3> <p> <strong>Uruapan</strong> es reconocida como la <strong>Capital Mundial del Aguacate</strong>, con más de
      100 empacadoras y miles de hectáreas de huertas. Los bomberos están capacitados para
<strong>emergencias agroindustriales</strong>, incendios en empacadoras y cámaras de frío, así como
      protección del <strong>Parque Nacional Barranca del Cupatitzio</strong> con su famosa cascada
      "La Tzaráracua". Los bosques de pino-encino de la Meseta Purépecha requieren vigilancia constante
      contra incendios forestales.
</p> <h3>Servicios de los Bomberos Michoacanos</h3> <p>
Los bomberos de Michoacán están capacitados para atender:
<strong>incendios estructurales en centros históricos</strong>;
<strong>emergencias industriales y portuarias</strong>;
<strong>materiales peligrosos HAZMAT</strong>;
<strong>rescate acuático en lagos y costas</strong>;
<strong>incendios forestales en reservas naturales</strong>;
<strong>rescate vehicular en carreteras serranas</strong>;
<strong>emergencias agroindustriales</strong>;
<strong>protección de patrimonio UNESCO</strong>; y atención especializada
      durante eventos masivos como el Día de Muertos en Pátzcuaro y las fiestas patronales
      de Morelia. El estado cuenta con equipos especializados para emergencias en zonas volcánicas
      (Jorullo, Paricutín) y rescate en comunidades purépechas de difícil acceso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/michoacan.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/michoacan.astro";
const $$url = "/directorio/michoacan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Michoacan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
