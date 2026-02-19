import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { a as getMunicipios, e as estacionesMorelos } from '../../chunks/estaciones-morelos_CX6uKVfB.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Morelos = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Morelos", url: "/directorio/morelos" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Morelos, M\xE9xico",
    "description": "Directorio completo de las 16 estaciones de bomberos en Morelos. Protecci\xF3n para Cuernavaca, Cuautla, Tepoztl\xE1n, zona industrial CIVAC, Xochicalco UNESCO y 2 millones de habitantes a 85 km de CDMX. Emergencias 911.",
    "numberOfItems": estacionesMorelos.length,
    "itemListElement": estacionesMorelos.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Morelos",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/morelos/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-cuernavaca-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/rescate-vehicular-bomberos-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bomberos-trabajo-equipo-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-cisterna-bomberos-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Morelos", "sigla": "MOR", "slug": "morelos", "description": "Directorio completo de las 16 estaciones de bomberos en Morelos. Protecci\xF3n para Cuernavaca, Cuautla, Tepoztl\xE1n, CIVAC, Xochicalco UNESCO y 2M+ habitantes a 85 km de CDMX. Emergencias 911.", "keywords": ["bomberos morelos", "estaciones bomberos cuernavaca", "bomberos cuautla", "emergencias morelos 911", "bomberos tepoztl\xE1n", "bomberos jiutepec CIVAC", "cuerpo bomberos morelos", "rescate autopista del sol", "bomberos xochicalco", "bomberos zona industrial"], "canonical": "https://bombero.mx/directorio/morelos", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estacionesMorelos.length, "totalMunicipios": municipios.length, "habitantes": "2M+", "heroDesc": "Directorio completo del <strong>Heroico Cuerpo de Bomberos de Morelos</strong>. Encuentra tel\xE9fonos de emergencia, direcciones y servicios de las 16 estaciones que protegen la Ciudad de la Eterna Primavera, la zona industrial CIVAC, 2 Pueblos M\xE1gicos y Xochicalco UNESCO \u2014 a solo 85 km de la capital del pa\xEDs.", "heroImage": "/images/directorio/estacion-bomberos-cuernavaca-01.avif", "heroImageAlt": "Estaci\xF3n Central de Bomberos Cuernavaca, Morelos - Ciudad de la Eterna Primavera", "heroCaption": "H. Cuerpo de Bomberos \xB7 Morelos", "heroThumbs": [
    { src: "/images/directorio/camion-bomberos-moderno-01.avif", alt: "Cami\xF3n de bomberos Cuernavaca MOR", label: "Flota Cuernavaca" },
    { src: "/images/directorio/rescate-vehicular-bomberos-01.avif", alt: "Rescate vehicular Autopista del Sol", label: "Rescate Carretero" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos Morelos protegiendo patrimonio", label: "Respuesta 24/7" }
  ], "galleryImages": [
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento bomberos Morelos", label: "Academia Bomberil" },
    { src: "/images/directorio/camion-escalera-bomberos-01.avif", alt: "Cami\xF3n escalera bomberos Cuernavaca", label: "Rescate en Altura" },
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Rescate urbano bomberos MOR", label: "Rescate Barrancas" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT zona industrial CIVAC", label: "HAZMAT Industrial" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "(777) 312-3636", label: "Bomberos Cuernavaca" },
    { number: "(735) 352-5050", label: "Bomberos Cuautla" },
    { number: "(777) 320-1010", label: "Bomberos CIVAC" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana Cuernavaca", desc: "Capital, Temixco, clima primaveral, turismo, Palacio de Cort\xE9s" },
    { nombre: "Zona Industrial CIVAC", desc: "Jiutepec, manufactura automotriz, HAZMAT especializado" },
    { nombre: "Altos de Morelos", desc: "Tepoztl\xE1n, Tlayacapan - Pueblos M\xE1gicos, ecoturismo, misticismo" },
    { nombre: "Valle de Cuautla", desc: "Cuautla, balnearios, historia zapatista, agricultura" },
    { nombre: "Haciendas del Sur", desc: "Jojutla, Zacatepec, ca\xF1averales, patrimonio hacendario" },
    { nombre: "Corredor Norte CDMX", desc: "Huitzilac, Autopista del Sol, rescate carretero intensivo" }
  ], "estadosVecinos": [
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Guerrero", slug: "guerrero" }
  ], "estaciones": estacionesMorelos, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt: "Traje Estructural NFPA 1971 para bomberos Cuernavaca - Centro Hist\xF3rico",
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: "Equipo certificado para los bomberos de <strong>Cuernavaca</strong>, la Ciudad de la Eterna Primavera. Dise\xF1ado para incendios en el Centro Hist\xF3rico, Palacio de Cort\xE9s (1535), Jard\xEDn Borda y rescate en las m\xFAltiples barrancas urbanas que atraviesan la capital morelense.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco NFPA 1971 para bomberos CIVAC - Zona Industrial",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: "Protecci\xF3n certificada para emergencias en la <strong>Zona Industrial CIVAC</strong>, el parque industrial m\xE1s importante de Morelos. Compatible con equipos de comunicaci\xF3n para coordinaci\xF3n en plantas automotrices, manufactura y emergencias HAZMAT industriales.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: "Guantes NFPA 1971 para bomberos Tepoztl\xE1n - Pueblo M\xE1gico",
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: "Resistencia t\xE9rmica certificada para emergencias en <strong>Tepoztl\xE1n y los Altos de Morelos</strong>. Prensi\xF3n segura para rescate en monta\xF1a, incendios forestales en el Tepozteco y atenci\xF3n en zonas de dif\xEDcil acceso de los Pueblos M\xE1gicos morelenses.",
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas NFPA 1971 para bomberos Cuautla - Rescate Balnearios",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Calzado certificado NFPA 1971 para los bomberos de <strong>Cuautla y el Valle de Morelos</strong>. Resistentes para emergencias en balnearios de aguas termales, ex-haciendas ca\xF1eras y rescate en zonas agr\xEDcolas con m\xE1s de 4 millones de visitantes anuales.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Morelos", "ctaDesc": "Cotiza equipo certificado NFPA para tu estaci\xF3n. Stock inmediato para licitaciones en Cuernavaca, Cuautla, Jiutepec y los 36 municipios del estado. Entrega r\xE1pida a solo 85 km de CDMX.", "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Morelos" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de Morelos</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de Morelos</strong> es la institución encargada de
      proteger la vida, el medio ambiente y el patrimonio de los más de <strong>2 millones de morelenses</strong>
y los <strong>4.2 millones de visitantes anuales</strong> que recibe el estado.
      Ubicado a solo <strong>85 kilómetros de la Ciudad de México</strong>, Morelos es el destino de fin de semana
      favorito de los capitalinos, lo que genera un flujo constante de emergencias viales en la Autopista del Sol.
      Los bomberos atienden emergencias las <strong>24 horas del día, los 365 días del año</strong>.
</p> <h3>¿Cómo contactar a los bomberos en Morelos?</h3> <p>
En caso de <strong>emergencia en Morelos</strong>, marca el <strong>911</strong> desde
      cualquier teléfono. Este número conecta con el <strong>C5 de Morelos</strong> que coordina
      la respuesta de bomberos, policía y servicios médicos. En Cuernavaca puedes llamar directamente
      al <strong>(777) 312-3636</strong>, en Cuautla al <strong>(735) 352-5050</strong> y en la
      zona industrial CIVAC al <strong>(777) 320-1010</strong>.
</p> <h3>Cuernavaca - La Ciudad de la Eterna Primavera</h3> <p> <strong>Cuernavaca</strong>, capital de Morelos, es conocida como la "Ciudad de la Eterna Primavera"
      por su clima privilegiado de 18-27°C durante todo el año. La Estación Central de Bomberos,
      fundada en <strong>1943</strong>, protege el Centro Histórico incluyendo el
<strong>Palacio de Cortés</strong> (1535), el edificio civil más antiguo de América continental,
      el <strong>Jardín Borda</strong> y la Catedral de la Asunción. Los bomberos están especializados
      en <strong>rescate en barrancas urbanas</strong>, ya que la ciudad está atravesada por más de 50 barrancas
      que presentan riesgos únicos de rescate y deslizamientos.
</p> <h3>Zona Industrial CIVAC - Motor Económico del Estado</h3> <p>
La <strong>Ciudad Industrial del Valle de Cuernavaca (CIVAC)</strong> en Jiutepec es el parque
      industrial más importante de Morelos, albergando plantas de <strong>manufactura automotriz,
      farmacéutica, alimentaria y química</strong>. Los bomberos de CIVAC están especializados en
<strong>emergencias HAZMAT de nivel industrial</strong>, incendios en plantas de producción
      y rescate en instalaciones de alta complejidad. Empresas como Nissan, Firestone y farmacéuticas
      internacionales operan en esta zona.
</p> <h3>Tepoztlán y Tlayacapan - Pueblos Mágicos</h3> <p>
Morelos cuenta con <strong>2 Pueblos Mágicos</strong>: <strong>Tepoztlán</strong>, famoso por
      el cerro del Tepozteco con su pirámide prehispánica y ambiente místico, y <strong>Tlayacapan</strong>,
      conocido por su ex-convento agustino del siglo XVI. Los bomberos de los Altos de Morelos atienden
<strong>incendios forestales</strong> en las zonas boscosas, <strong>rescate en montaña</strong>
para excursionistas del Tepozteco, y emergencias durante las numerosas fiestas tradicionales
      que atraen miles de visitantes cada fin de semana.
</p> <h3>Xochicalco - Patrimonio de la Humanidad UNESCO</h3> <p>
La <strong>Zona Arqueológica de Xochicalco</strong> fue declarada Patrimonio de la Humanidad
      por la UNESCO en <strong>1999</strong>. Este centro ceremonial prehispánico, contemporáneo
      de Teotihuacán, requiere <strong>protección especializada contra incendios forestales</strong>
que amenazan sus estructuras y el observatorio astronómico subterráneo. Los bomberos coordinan
      con el INAH para la protección de este patrimonio invaluable.
</p> <h3>Autopista del Sol - Corredor de Alta Siniestralidad</h3> <p>
La <strong>Autopista del Sol</strong> (México-Cuernavaca-Acapulco) es una de las vías más
      transitadas de México, especialmente los fines de semana y puentes vacacionales. Los bomberos
      de Morelos, particularmente la estación de <strong>Huitzilac</strong> en el kilómetro más alto
      de la autopista (3,000 msnm), atienden <strong>accidentes vehiculares múltiples</strong>,
      volcaduras por neblina y rescate en las curvas más peligrosas del descenso hacia Cuernavaca.
</p> <h3>Cuautla y los Balnearios de Morelos</h3> <p>
El <strong>Valle de Cuautla</strong> es famoso por sus balnearios de aguas termales y su
      historia zapatista. Los bomberos de Cuautla atienden <strong>emergencias en parques acuáticos</strong>
durante la temporada alta (Semana Santa y verano), cuando millones de visitantes llegan
      a disfrutar de las aguas sulfurosas. También protegen las <strong>ex-haciendas azucareras</strong>
del sur del estado, patrimonio arquitectónico de la era porfiriana.
</p> <h3>Servicios de los Bomberos Morelenses</h3> <p>
Los bomberos de Morelos están capacitados para atender:
<strong>incendios estructurales en centros históricos</strong>;
<strong>emergencias industriales HAZMAT en CIVAC</strong>;
<strong>rescate vehicular en la Autopista del Sol</strong>;
<strong>rescate en barrancas urbanas de Cuernavaca</strong>;
<strong>incendios forestales en los Altos de Morelos</strong>;
<strong>emergencias en balnearios y parques acuáticos</strong>;
<strong>rescate en montaña (Tepozteco, Ajusco morelense)</strong>;
<strong>protección de patrimonio UNESCO y Pueblos Mágicos</strong>; y atención
      durante eventos masivos como el Carnaval de Cuernavaca, la Feria de la Primavera
      y las celebraciones del equinoccio en Tepoztlán que congregan a miles de visitantes.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/morelos.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/morelos.astro";
const $$url = "/directorio/morelos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Morelos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
