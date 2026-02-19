import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { e as estacionesChihuahua, E as ESTADISTICAS_CHIHUAHUA } from '../../chunks/estaciones-chihuahua_oQYVy_Ag.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Chihuahua = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesChihuahua.map((e) => e.ciudad))].sort();
  const totalEstaciones = ESTADISTICAS_CHIHUAHUA.total_estaciones;
  const totalMunicipios = ESTADISTICAS_CHIHUAHUA.municipios_cubiertos;
  const totalBomberos = ESTADISTICAS_CHIHUAHUA.total_bomberos;
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Chihuahua", url: "/directorio/chihuahua" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Chihuahua, M\xE9xico",
    "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Chihuahua. Tel\xE9fonos directos en Chihuahua capital, Ciudad Ju\xE1rez, Creel, Hidalgo del Parral y m\xE1s. Estado m\xE1s grande de M\xE9xico, frontera 560 km con EE.UU. Emergencias: llama al 911.`,
    "numberOfItems": estacionesChihuahua.length,
    "itemListElement": estacionesChihuahua.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Chihuahua",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/chihuahua/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-industrial-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/rescate-montana-bomberos-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/pick-up-bomberos-forestal-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/camion-bomberos-aeropuerto-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-petrolera-01.avif",
    "/images/directorio/motobomba-incendios-forestal-01.avif",
    "/images/directorio/estacion-bomberos-norte-mexico-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/equipo-rescate-tecnico-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/coordinacion-emergencias-bomberos-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Chihuahua", "sigla": "CHIH", "slug": "chihuahua", "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Chihuahua. Tel\xE9fonos en Chihuahua capital, Ciudad Ju\xE1rez (frontera EE.UU.), Creel, Barrancas del Cobre y Hidalgo del Parral. Estado m\xE1s grande de M\xE9xico: 247,455 km\xB2. Emergencias: 911.`, "keywords": [
    "bomberos chihuahua",
    "bomberos ciudad juarez",
    "estaciones bomberos chihuahua",
    "emergencias chihuahua 911",
    "bomberos sierra tarahumara",
    "bomberos barrancas del cobre creel",
    "hazmat maquiladoras ciudad juarez",
    "bomberos frontera mexico estados unidos",
    "rescate monta\xF1a chihuahua",
    "bomberos hidalgo del parral",
    "rescate minero chihuahua parral",
    "bomberos paquime casas grandes unesco",
    "incendios forestales sierra madre chihuahua",
    "arff aeropuerto juarez abraham gonzalez",
    "cuerpo bomberos chihuahua estado"
  ], "canonical": "https://bombero.mx/directorio/chihuahua", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": totalEstaciones, "totalMunicipios": totalMunicipios, "habitantes": "3.8M+", "heroDesc": `El <strong>Heroico Cuerpo de Bomberos de Chihuahua</strong> despliega <strong>${totalEstaciones} estaciones</strong> en <strong>${totalMunicipios} ciudades</strong> del estado m\xE1s grande de M\xE9xico con m\xE1s de <strong>${totalBomberos.toLocaleString()} bomberos profesionales</strong> \u2014 cubriendo los <strong>247,455 km\xB2</strong> del Desierto Chihuahuense, la Sierra Tarahumara, las Barrancas del Cobre (4 veces el Grand Canyon), la mayor metr\xF3poli fronteriza y <strong>560 km de frontera con Estados Unidos</strong>.`, "heroImage": "/images/directorio/estacion-bomberos-norte-mexico-01.avif", "heroImageAlt": "Estaci\xF3n de Bomberos Chihuahua \u2014 Sierra Tarahumara Barrancas del Cobre Ciudad Ju\xE1rez frontera EE.UU.", "heroCaption": "H. Cuerpo de Bomberos \xB7 Chihuahua", "heroThumbs": [
    { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Rescate monta\xF1a Barrancas del Cobre Sierra Tarahumara Creel Guachochi Chihuahua", label: "Rescate Barrancas del Cobre" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "HAZMAT maquiladoras Ciudad Ju\xE1rez zona industrial frontera M\xE9xico Estados Unidos Chihuahua", label: "HAZMAT Maquiladoras Ju\xE1rez" },
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Incendios forestales Sierra Madre Occidental Madera Guachochi bosques pino chihuahua", label: "Forestal Sierra Madre" }
  ], "galleryImages": [
    { src: "/images/directorio/equipo-rescate-tecnico-01.avif", alt: "Rescate t\xE9cnico Barrancas del Cobre Sierra Tarahumara rappel turistas Creel Bocoyna", label: "Barrancas del Cobre" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "HAZMAT descontaminaci\xF3n zona industrial maquiladoras Ciudad Ju\xE1rez 400 plantas", label: "HAZMAT Zona Maquiladora" },
    { src: "/images/directorio/camion-bomberos-aeropuerto-01.avif", alt: "ARFF aeropuerto internacional Abraham Gonz\xE1lez Ciudad Ju\xE1rez rescate aeron\xE1utico DGAC", label: "ARFF Aeropuerto Ju\xE1rez" },
    { src: "/images/directorio/estacion-bomberos-industrial-01.avif", alt: "Rescate minero Hidalgo del Parral Santa B\xE1rbara minas hist\xF3ricas sur Chihuahua", label: "Rescate Minero Parral" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "614 429-3300", label: "Bomberos Chihuahua (capital)" },
    { number: "656 616-1000", label: "Bomberos Ciudad Ju\xE1rez" },
    { number: "635 456-0066", label: "Bomberos Creel" },
    { number: "627 522-0077", label: "Bomberos Hidalgo del Parral" },
    { number: "625 581-0088", label: "Bomberos Cuauht\xE9moc" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana Chihuahua", desc: "Chihuahua (5 est.) \xB7 Capital del estado \xB7 Parques Industriales \xB7 Grutas de Nombre de Dios" },
    { nombre: "Zona Fronteriza Ciudad Ju\xE1rez", desc: "Ju\xE1rez (7 est.) \xB7 Frontera El Paso Texas \xB7 400+ maquiladoras \xB7 ARFF Aeropuerto Abraham Gonz\xE1lez" },
    { nombre: "Sierra Tarahumara", desc: "Creel \xB7 Guachochi \xB7 Bocoyna \xB7 Madera \xB7 Barrancas del Cobre \xB7 Cultura Rar\xE1muri" },
    { nombre: "Zona Agr\xEDcola Centro-Sur", desc: "Delicias \xB7 Cuauht\xE9moc \xB7 Camargo \xB7 Jim\xE9nez \xB7 Meoqui \xB7 Saucillo \xB7 Comunidades Menonitas" },
    { nombre: "Noroeste y Sur Hist\xF3rico", desc: "Paquim\xE9 UNESCO \xB7 Casas Grandes \xB7 Janos \xB7 Hidalgo del Parral \xB7 Santa B\xE1rbara (1567)" }
  ], "estadosVecinos": [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Sinaloa", slug: "sinaloa" }
  ], "estaciones": estacionesChihuahua, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt: "Traje Forestal NFPA 1977 bomberos Sierra Tarahumara Barrancas del Cobre Madera incendios forestales Chihuahua",
      badge: "NFPA 1977",
      title: "Traje Forestal NFPA 1977 \u2014 Temperaturas Extremas",
      text: "Certificado para las condiciones m\xE1s extremas de M\xE9xico: los bosques de pino y encino de la <strong>Sierra Madre Occidental</strong>, donde los incendios forestales en Madera, Guachochi y Bocoyna consumen miles de hect\xE1reas cada temporada de secas. Resistencia t\xE9rmica validada para temperaturas de <strong>\u201320\xB0C en invierno</strong> (hipotermia operacional en la Sierra Tarahumara) y <strong>+45\xB0C en verano</strong> (colpe de calor en el Desierto Chihuahuense). Las brigadas de Creel operan con <strong>veh\xEDculos 4\xD74, cuerdas de rappel y GPS satelital</strong> para atender los 300,000 turistas anuales que visitan las Barrancas del Cobre.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imageAlt: "Traje HAZMAT Nivel A NFPA 1991 bomberos Ciudad Ju\xE1rez maquiladoras zona industrial frontera M\xE9xico EE.UU.",
      badge: "NFPA 1991",
      title: "Traje HAZMAT Nivel A \u2014 Zona Maquiladora",
      text: "Certificado NFPA 1991 para las emergencias m\xE1s complejas del norte de M\xE9xico: la <strong>zona maquiladora de Ciudad Ju\xE1rez</strong>, con m\xE1s de <strong>400 plantas de manufactura</strong> de industrias automotriz, aeroespacial, electr\xF3nica y qu\xEDmica (Foxconn, Lexmark, Delphi, Bosch). Las estaciones de Ju\xE1rez Zona Industrial y Zona Industrial Chihuahua \u2014 la m\xE1s avanzada del norte de M\xE9xico \u2014 poseen <strong>laboratorios m\xF3viles de identificaci\xF3n qu\xEDmica</strong> y sistemas de descontaminaci\xF3n masiva. Protocolos de respuesta certificados por la <strong>EPA y la Agencia Federal para Manejo de Emergencias de EE.UU. (FEMA)</strong> para incidentes transfronterizos.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco NFPA 1971 bomberos Chihuahua Paquim\xE9 UNESCO Hidalgo del Parral minas hist\xF3ricas rescate minero",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971 con Iluminaci\xF3n LED",
      text: "Indispensable en el patrimonio minero e hist\xF3rico \xFAnico de Chihuahua: los <strong>t\xFAneles de las minas de Hidalgo del Parral</strong>, ciudad con <strong>400 a\xF1os de historia minera</strong> (donde fue asesinado Pancho Villa en 1923) \u2014 bomberos certificados en rescate de espacios confinados con detectores de gases y SCBA; la <strong>Zona Arqueol\xF3gica de Paquim\xE9</strong> (Patrimonio UNESCO, 1998), con 2,000 cuartos de adobe construidos por la cultura Paquim\xE9 entre los siglos X y XIV; y los <strong>edificios coloniales del siglo XIX de Ciudad Chihuahua</strong>, incluyendo el Palacio de Gobierno donde Hidalgo estuvo encarcelado antes de su fusilamiento en 1811.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Estructurales NFPA 1971 bomberos Chihuahua terreno desierto sierra minas arena frontera",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Certificadas NFPA 1971 para el estado con mayor diversidad de terrenos \xE1ridos de M\xE9xico: arena fina de las <strong>Dunas de Samalayuca</strong> \u2014 el mayor campo de dunas activas del norte de M\xE9xico, a solo 50 km de Ciudad Ju\xE1rez; roca volc\xE1nica y barranca de las <strong>Barrancas del Cobre</strong> (1,800 metros de profundidad, 4 veces el Grand Canyon); grava y roca \xEDgnea del <strong>Desierto Chihuahuense</strong>, el m\xE1s grande de Norteam\xE9rica (362,000 km\xB2); rieles de ferrocarril y suelo ferroso en la <strong>estaci\xF3n de El Chepe</strong> (Chihuahua al Pac\xEDfico); y piso de mina h\xFAmedo en los <strong>yacimientos hist\xF3ricos de plata de Santa B\xE1rbara</strong>, fundada en 1567 como la primera ciudad minera de Chihuahua.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Chihuahua", "ctaDesc": `Cotiza equipo certificado NFPA para las ${totalEstaciones} estaciones desde Ciudad Ju\xE1rez hasta la Sierra Tarahumara. Env\xEDo a los ${totalMunicipios} municipios con cobertura activa. Atenci\xF3n a licitaciones p\xFAblicas municipales y estatales \u2014 experiencia con corporaciones del norte de M\xE9xico.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Chihuahua" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de Chihuahua</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de Chihuahua</strong> protege a los
<strong>3.8 millones de chihuahuenses</strong> en el <strong>estado más grande de
      México</strong> — 247,455 km², más extenso que el Reino Unido y Alemania juntos.
      Con <strong>${totalEstaciones} estaciones activas</strong> en <strong>${totalMunicipios}
ciudades</strong> y más de <strong>${totalBomberos} bomberos profesionales</strong>,
      opera las <strong>24 horas del día, 365 días del año</strong> en los cinco ecosistemas
      más extremos del país: la mayor metrópoli fronteriza, el desierto más grande de
      Norteamérica, la Sierra Tarahumara, los bosques madereros de la Sierra Madre Occidental
      y la región minera con cuatro siglos de historia.
</p> <h3>¿Cómo llamar a los Bomberos en Chihuahua?</h3> <p>
En cualquier <strong>emergencia en Chihuahua</strong>, marca el <strong>911</strong>
desde cualquier teléfono — fijo o celular, con o sin saldo, en español o inglés.
      Para contacto directo:
<strong>Chihuahua (capital): 614 429-3300</strong> ·
<strong>Ciudad Juárez (central): 656 616-1000</strong> ·
<strong>Creel (Sierra Tarahumara): 635 456-0066</strong> ·
<strong>Hidalgo del Parral: 627 522-0077</strong> ·
<strong>Cuauhtémoc: 625 581-0088</strong> ·
<strong>Delicias: 639 472-0066</strong> ·
<strong>Nuevo Casas Grandes (Paquimé): 636 694-0088</strong>.
      Las estaciones de <strong>Ciudad Juárez</strong> cuentan con personal bilingüe
      (español-inglés) y protocolos coordinados con el
<strong>El Paso Fire Department, Texas</strong>.
</p> <h3>Ciudad Juárez — La Mayor Metrópoli Fronteriza de México</h3> <p>
Con <strong>1.5 millones de habitantes</strong> y más de <strong>400 plantas
      maquiladoras</strong> de las industrias automotriz, aeroespacial, electrónica y
      médica, Ciudad Juárez alberga el <strong>mayor centro de manufactura de exportación
      de México</strong>. Las <strong>7 estaciones de bomberos de Juárez</strong> — incluyendo
      la especializada en ARFF del <strong>Aeropuerto Internacional Abraham González</strong>
(certificada por la DGAC) — son referente nacional en respuesta industrial. La estación
      de Zona Industrial posee el sistema de descontaminación masiva más avanzado del norte
      del país. Los acuerdos de cooperación binacional con el <strong>El Paso Fire
      Department</strong> permiten despliegue cruzado de unidades en la frontera.
      La <strong>estación PRONAF</strong> atiende la zona consular con personal bilingüe
      para emergencias de turistas y visitantes estadounidenses.
</p> <h3>Barrancas del Cobre y Sierra Tarahumara</h3> <p>
Las <strong>Barrancas del Cobre</strong> — con 6 cañones principales y profundidades
      de hasta <strong>1,800 metros</strong>, <strong>4 veces más grande que el Grand
      Canyon</strong> de Arizona — reciben más de <strong>300,000 turistas al año</strong>.
      La <strong>Estación de Creel</strong> (Pueblo Mágico, 2,338 msnm) es la más
      especializada en rescate de montaña del norte de México: personal certificado en
      rappel, tirolesa, búsqueda en barranca y atención de hipotermia (inviernos de –20°C).
      La <strong>Estación de Bocoyna</strong> cubre Divisadero y las estaciones del tren
<strong>El Chepe</strong> (Chihuahua al Pacífico, 650 km de vías panorámicas).
      Las brigadas forestales de <strong>Guachochi y Madera</strong> combaten incendios en
      la <strong>Sierra Madre Occidental</strong>, cuyos bosques de pino-encino cubren
      más de 3 millones de hectáreas del estado.
</p> <h3>Paquimé — Patrimonio UNESCO del Desierto</h3> <p>
La <strong>Zona Arqueológica de Paquimé</strong> (Patrimonio Mundial UNESCO, 1998)
      — en el municipio de Casas Grandes — es el sitio arqueológico más importante del
      norte de México y toda la región árida de Norteamérica: <strong>2,000 cuartos
      residenciales</strong> construidos con adobe entre los siglos X y XIV, canales
      de distribución de agua, hornos para criar guacamayas rojas y una red comercial
      que abarcaba hasta Mesoamérica. Las estaciones de <strong>Nuevo Casas Grandes y
      Casas Grandes</strong> mantienen protocolos especializados de protección patrimonial
      coordinados con el <strong>INAH</strong>. La vecina <strong>Reserva de la Biósfera
      de Janos</strong> — la mayor colonia de perrito de la pradera cola negra de México —
      es protegida por la estación de Janos contra incendios de pastizales.
</p> <h3>Rescate Minero — Cuatro Siglos de Historia</h3> <p>
El sur de Chihuahua alberga el patrimonio minero más rico de México.
<strong>Santa Bárbara</strong>, fundada en <strong>1567</strong>, fue la primera
      ciudad minera del estado y sigue siendo sede de minas activas de plata y zinc.
<strong>Hidalgo del Parral</strong> — donde fue asesinado <strong>Francisco Villa</strong>
el 20 de julio de 1923 — concentra más de 400 años de extracción continua. Las
      estaciones de <strong>Parral y Santa Bárbara</strong> son las únicas del estado
      certificadas en <strong>rescate minero</strong> en espacios confinados, con equipos
      SCBA de larga duración, detectores de gases (monóxido de carbono, metano, CO₂) y
      coordinación con la <strong>Secretaría del Trabajo</strong> para inspecciones de minas.
</p> <h3>Desierto Chihuahuense — El Mayor Desierto de Norteamérica</h3> <p>
El <strong>Desierto Chihuahuense</strong> — con 362,000 km² — es el desierto
      más grande de Norteamérica, más extenso que los desiertos de Sonora, Mojave y
      Great Basin combinados. Las estaciones del centro del estado operan en condiciones
      de <strong>+45°C en verano</strong>, ventiscas invernales con visibilidad cero y
      una densidad poblacional de solo <strong>15 hab/km²</strong>, con carreteras
      federales (México 45, México 2) que registran los accidentes más graves del norte
      por las condiciones del terreno. Las <strong>Dunas de Samalayuca</strong>, a 50 km
      de Ciudad Juárez, generan rescates especializados de vehículos y excursionistas
      en arena suelta, atendidos por las unidades todo terreno de la estación de
      Juárez Poniente.
</p> <h3>Especialidades del Cuerpo de Bomberos de Chihuahua</h3> <p>
Los bomberos chihuahuenses poseen competencias únicas en México:
<strong>ARFF certificado DGAC</strong> en el Aeropuerto Abraham González (Juárez)
      para emergencias aeronáuticas con aviones de hasta 80 toneladas;
<strong>HAZMAT nivel 3</strong> en zonas industriales y maquiladoras con laboratorio
      móvil de identificación química;
<strong>cooperación binacional formal</strong> con el El Paso Fire Department,
      Texas, para incidentes en la frontera o que superen la capacidad local;
<strong>rescate minero</strong> en espacios confinados con gases tóxicos;
<strong>rescate en montaña y barranca</strong> con técnicas de rappel y rapel
      en pendientes de más de 1,500 metros de desnivel;
      e <strong>hipotermia operacional</strong> para atención en temperaturas de –20°C
      en la Sierra Tarahumara.
</p> <h3>Municipios y Cobertura por Zona</h3> <p> <strong>Chihuahua (capital)</strong> — 5 estaciones: Central (comandancia, drones
      térmicos, escaleras 32 m), Norte (Autopista Juárez), Sur (hospitales, centros
      comerciales), Oriente y Zona Industrial (HAZMAT nivel 3).
<strong>Ciudad Juárez</strong> — 7 estaciones: Central (USAR, cooperación FEMA),
      Zona Industrial, PRONAF (bilingüe), Centro Histórico, Oriente, Poniente y Aeropuerto
      (ARFF-DGAC).
<strong>Sierra Tarahumara</strong> — Creel (Pueblo Mágico, rescate montaña),
      Guachochi (Rarámuri), Bocoyna (Divisadero, El Chepe) y Madera (forestal industrial).
<strong>Agrícola</strong> — Delicias (lechero), Cuauhtémoc (manzana, menonitas),
      Camargo (Presa La Boquilla), Jiménez, Meoqui, Saucillo.
<strong>Noroeste</strong> — Nuevo Casas Grandes y Casas Grandes (Paquimé UNESCO),
      Janos (Biósfera).
<strong>Sur minero</strong> — Hidalgo del Parral, Santa Bárbara (1567),
      Valle de Allende.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chihuahua.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chihuahua.astro";
const $$url = "/directorio/chihuahua";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chihuahua,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
