import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { b as getAlcaldias, e as estacionesCDMX } from '../../chunks/estaciones-cdmx_C9d9vCJz.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$CiudadDeMexico = createComponent(($$result, $$props, $$slots) => {
  const alcaldias = getAlcaldias();
  const totalEstaciones = estacionesCDMX.length;
  const totalAlcaldias = alcaldias.length;
  const totalBomberos = estacionesCDMX.reduce((sum, e) => sum + (e.personalActivo ?? e.personal ?? 0), 0);
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Ciudad de M\xE9xico", url: "/directorio/ciudad-de-mexico" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Ciudad de M\xE9xico",
    "description": `Directorio oficial de las ${totalEstaciones} estaciones del Heroico Cuerpo de Bomberos de la CDMX. Fundado en 1887. Tel\xE9fonos directos en las 16 alcald\xEDas. ARFF AICM, USAR s\xEDsmico, Xochimilco UNESCO, Bas\xEDlica de Guadalupe. Emergencias: llama al 911.`,
    "numberOfItems": estacionesCDMX.length,
    "itemListElement": estacionesCDMX.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Ciudad de M\xE9xico",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/ciudad-de-mexico/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-cdmx-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/camion-bomberos-torre-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/camion-bomberos-aeropuerto-01.avif",
    "/images/directorio/equipo-rescate-completo-01.avif",
    "/images/directorio/estacion-bomberos-centro-historico-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/equipo-rescate-tecnico-01.avif",
    "/images/directorio/lancha-rescate-bomberos-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif",
    "/images/directorio/coordinacion-emergencias-bomberos-01.avif",
    "/images/directorio/puesto-comando-incidente-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Ciudad de M\xE9xico", "sigla": "CDMX", "slug": "ciudad-de-mexico", "description": `Directorio oficial de las ${totalEstaciones} estaciones del Heroico Cuerpo de Bomberos de la Ciudad de M\xE9xico, fundado en 1887. Tel\xE9fonos en las ${totalAlcaldias} alcald\xEDas. ARFF AICM, rescate s\xEDsmico USAR, Xochimilco UNESCO y Bas\xEDlica de Guadalupe. Emergencias: 911.`, "keywords": [
    "bomberos ciudad de mexico",
    "bomberos cdmx",
    "heroico cuerpo de bomberos cdmx",
    "estaciones bomberos cdmx alcaldias",
    "bomberos centro historico cdmx",
    "bomberos xochimilco chinampas",
    "arff aeropuerto internacional cdmx aicm",
    "rescate sismico usar cdmx",
    "bomberos basilica guadalupe gam",
    "bomberos iztapalapa inundaciones",
    "bomberos ajusco incendios forestales",
    "bomberos azcapotzalco industrial",
    "emergencias 911 cdmx",
    "bomberos metro cdmx lineas",
    "directorio bomberos ciudad de mexico"
  ], "canonical": "https://bombero.mx/directorio/ciudad-de-mexico", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": totalEstaciones, "totalMunicipios": totalAlcaldias, "habitantes": "9.2M+", "heroDesc": `El <strong>Heroico Cuerpo de Bomberos de la Ciudad de M\xE9xico</strong>, fundado el <strong>22 de agosto de 1887</strong>, es la corporaci\xF3n de bomberos m\xE1s antigua y grande de M\xE9xico. Con <strong>${totalEstaciones} estaciones</strong> en <strong>${totalAlcaldias} alcald\xEDas</strong> y m\xE1s de <strong>${totalBomberos.toLocaleString()} bomberos profesionales</strong> \u2014 protegiendo los <strong>9.2 millones de habitantes</strong> de la capital federal, los 2 sitios UNESCO (Centro Hist\xF3rico y Xochimilco), la <strong>Bas\xEDlica de Guadalupe</strong> (la m\xE1s visitada del mundo cat\xF3lico), el <strong>AICM</strong> y el Sistema de Transporte Colectivo Metro con <strong>12 l\xEDneas y 195 estaciones</strong>.`, "heroImage": "/images/directorio/estacion-bomberos-cdmx-01.avif", "heroImageAlt": "Heroico Cuerpo de Bomberos de la Ciudad de M\xE9xico \u2014 fundado 1887 Centro Hist\xF3rico UNESCO CDMX", "heroCaption": "Heroico Cuerpo de Bomberos \xB7 Ciudad de M\xE9xico \xB7 Desde 1887", "heroThumbs": [
    { src: "/images/directorio/equipo-rescate-completo-01.avif", alt: "Rescate s\xEDsmico USAR CDMX estructuras colapsadas suelo lacustre sismo 2017 19 septiembre", label: "USAR Rescate S\xEDsmico" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico Xochimilco chinampas canales UNESCO trajineras CDMX bomberos", label: "Rescate Xochimilco UNESCO" },
    { src: "/images/directorio/camion-bomberos-aeropuerto-01.avif", alt: "ARFF aeropuerto internacional AICM CDMX Oshkosh Striker veh\xEDculos rescate aeron\xE1utico DGAC", label: "ARFF Aeropuerto AICM" }
  ], "galleryImages": [
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Rescate urbano USAR derrumbe edificio CDMX sismo suelo lacustre amplificaci\xF3n s\xEDsmica", label: "Rescate S\xEDsmico USAR" },
    { src: "/images/directorio/estacion-bomberos-centro-historico-01.avif", alt: "Protecci\xF3n Centro Hist\xF3rico CDMX UNESCO Z\xF3calo Templo Mayor Catedral Metropolitana 1887", label: "Centro Hist\xF3rico UNESCO" },
    { src: "/images/directorio/lancha-rescate-bomberos-01.avif", alt: "Rescate acu\xE1tico canales Xochimilco chinampas UNESCO Tl\xE1huac CDMX trajineras turismo", label: "Xochimilco y Tl\xE1huac" },
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Incendios forestales Ajusco 3959 msnm Cuajimalpa Desierto Leones CDMX", label: "Forestal Ajusco-Ajusco" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias CDMX" },
    { number: "55 5768 3700", label: "Bomberos Central (1887)" },
    { number: "55 5786 9012", label: "Bomberos AICM (ARFF)" },
    { number: "55 5686 4523", label: "Bomberos Iztapalapa" },
    { number: "55 5781 2345", label: "Bomberos GAM (Bas\xEDlica)" },
    { number: "55 5573 1396", label: "Bomberos Tlalpan (Ajusco)" }
  ], "municipios": alcaldias, "regiones": [
    { nombre: "Centro y Poniente", desc: "Cuauht\xE9moc (Central 1887) \xB7 Miguel Hidalgo \xB7 \xC1lvaro Obreg\xF3n \xB7 Benito Ju\xE1rez \xB7 Centro Hist\xF3rico UNESCO" },
    { nombre: "Zona Boscosa Surponiente", desc: "Cuajimalpa (Desierto Leones) \xB7 Tlalpan (Ajusco 3,959 msnm) \xB7 Magdalena Contreras (Los Dinamos)" },
    { nombre: "Zona Oriente y Aeropuerto", desc: "Venustiano Carranza \xB7 AICM ARFF \xB7 Iztacalco \xB7 Iztapalapa (m\xE1s poblada) \xB7 Terminal 1 y 2" },
    { nombre: "Zona Norte Industrial", desc: "Gustavo A. Madero (Bas\xEDlica 22M/a\xF1o) \xB7 Azcapotzalco (industrial) \xB7 Lindavista \xB7 Tepeyac" },
    { nombre: "Zona Lacustre Sur", desc: "Xochimilco (UNESCO) \xB7 Tl\xE1huac (chinampas) \xB7 Milpa Alta (rural, volc\xE1nica)" }
  ], "estadosVecinos": [
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Puebla", slug: "puebla" }
  ], "estaciones": estacionesCDMX, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt: "Traje Estructural NFPA 1971 bomberos CDMX rescate s\xEDsmico suelo lacustre derrumbes edificios 1985 2017",
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971 \u2014 Rescate S\xEDsmico",
      text: "El traje de referencia del cuerpo de bomberos m\xE1s antiguo de M\xE9xico, validado en los sismos m\xE1s devastadores de la historia del pa\xEDs. El <strong>suelo lacustre</strong> de la Ciudad de M\xE9xico \u2014 antiguo lago de Texcoco con hasta <strong>40 metros de sedimento blando</strong> \u2014 amplifica las ondas s\xEDsmicas hasta <strong>5 veces</strong>, generando los derrumbes m\xE1s letales del continente americano. Tras el <strong>sismo de septiembre de 1985</strong> (10,000+ v\xEDctimas) y el de <strong>2017</strong> (369 v\xEDctimas), el HCBCDMX consolid\xF3 el equipo USAR m\xE1s entrenado de Latinoam\xE9rica. Tejido resistente al corte de vidrio y acero de estructuras colapsadas, con termorregulaci\xF3n para operaciones de 12+ horas en rubble urbano.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif",
      imageAlt: "SCBA NFPA 1981 bomberos CDMX metro espacios confinados ceniza Popocat\xE9petl contingencia ambiental",
      badge: "NFPA 1981",
      title: "Aparato Respiratorio Aut\xF3nomo SCBA",
      text: 'Certificado NFPA 1981 para los escenarios m\xE1s complejos de aire contaminado en M\xE9xico: las <strong>195 estaciones del Sistema de Transporte Colectivo Metro</strong> \u2014 12 l\xEDneas, 431 km de t\xFAneles subterr\xE1neos \u2014 donde un incendio o descarrilamiento obliga a evacuar hasta <strong>5 millones de pasajeros diarios</strong>; los <strong>incidentes de ceniza volc\xE1nica</strong> del <strong>Popocat\xE9petl</strong> ("Don Goyo"), que cierran el espacio a\xE9reo y saturan los pulmones a 70 km de distancia; y la <strong>zona industrial de Azcapotzalco</strong>, con refiner\xEDas, petroqu\xEDmicas y almacenamientos de materiales peligrosos. Tambi\xE9n para incendios en el <strong>Centro Hist\xF3rico de la Ciudad de M\xE9xico</strong> (Patrimonio UNESCO, 2000+), donde edificios de adobe y cantera del siglo XVII liberan gases t\xF3xicos al arder.',
      href: "/productos/equipo-scba",
      linkLabel: "Ver Equipos SCBA"
    },
    {
      image: "/images/directorio/traje-inmersion-rescate-01.avif",
      imageAlt: "Traje Inmersi\xF3n NFPA 1952 bomberos Xochimilco chinampas canales UNESCO Tl\xE1huac rescate acu\xE1tico CDMX",
      badge: "NFPA 1952",
      title: "Traje de Inmersi\xF3n NFPA 1952 \u2014 Chinampas UNESCO",
      text: 'Certificado NFPA 1952 para el \xFAnico sistema de chinampas en operaci\xF3n activa del mundo: los <strong>canales de Xochimilco</strong> (Patrimonio UNESCO desde 1987), con 204 km de v\xEDas acu\xE1ticas, 29,000+ trajineras y m\xE1s de <strong>5 millones de visitantes anuales</strong>. La <strong>Estaci\xF3n Xochimilco</strong> opera 1 unidad acu\xE1tica especializada para rescate de turistas en los canales, control de embarcaciones incendiadas y emergencias en las chinampas patrimonio de la humanidad \u2014 las "jardines flotantes" m\xE1s importantes de Mesoam\xE9rica. La estaci\xF3n de <strong>Tl\xE1huac</strong> complementa la cobertura en el Lago de Tl\xE1huac y comunidades lacustres de San Pedro Tl\xE1huac.',
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Estructurales NFPA 1971 bomberos CDMX terreno mixto hundimiento adoqu\xEDn Centro Hist\xF3rico escombros s\xEDsmico barrancas",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Certificadas NFPA 1971 para el terreno urbano m\xE1s complejo de M\xE9xico: asfalto fisurado por <strong>hundimiento diferencial de hasta 9 metros</strong> en Iztapalapa y Gustavo A. Madero (la CDMX se hunde entre 20-30 cm por a\xF1o en las zonas de lago); adoqu\xEDn hist\xF3rico del <strong>Centro Hist\xF3rico</strong> con 700+ a\xF1os de ocupaci\xF3n continua desde los aztecas; escombros y roca \xEDgnea en operaciones USAR post-s\xEDsmicas; lodo y sedimento de los <strong>canales de Xochimilco y Tl\xE1huac</strong>; pendientes pronunciadas en las <strong>barrancas de \xC1lvaro Obreg\xF3n y Magdalena Contreras</strong> (m\xE1s de 30\xB0); y roca volc\xE1nica del <strong>Ajusco</strong> (Pedregal de San \xC1ngel) a 3,959 msnm.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos al Heroico Cuerpo de Bomberos de la Ciudad de M\xE9xico", "ctaDesc": `Cotiza equipo certificado NFPA para las ${totalEstaciones} estaciones del HCBCDMX en las ${totalAlcaldias} alcald\xEDas. Experiencia en licitaciones p\xFAblicas de la CDMX, abastecimiento a cuerpos USAR certificados y brigadas de aeropuerto ARFF. Atenci\xF3n en Ciudad de M\xE9xico.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 CDMX" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de la Ciudad de México</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de la Ciudad de México (HCBCDMX)</strong>,
      fundado el <strong>22 de agosto de 1887</strong>, es la corporación de bomberos
      más antigua y profesionalizada de México. Con <strong>${totalEstaciones} estaciones</strong>
en las <strong>${totalAlcaldias} alcaldías</strong> y más de <strong>${totalBomberos}
bomberos profesionales</strong>, protege a los <strong>9.2 millones de capitalinos</strong>
y a más de <strong>22 millones de habitantes</strong> del área metropolitana —
      la segunda ciudad más grande de América Latina. Opera las 24 horas del día, los
      365 días del año, en la entidad con mayor complejidad operacional del país: sismos,
      suelo lacustre, metro, aeropuerto internacional, patrimonio UNESCO, barrancas y
      zonas industriales, todo en un radio de 1,485 km².
</p> <h3>¿Cómo llamar a los Bomberos en la Ciudad de México?</h3> <p>
En cualquier <strong>emergencia en la CDMX</strong>, marca el <strong>911</strong>
— el número activo 24/7 conecta directamente con el Centro de Mando Unificado
      (C5, C4 y C2). Para contacto directo con estaciones:
<strong>Estación Central: 55 5768 3700</strong> ·
<strong>AICM (ARFF): 55 5786 9012</strong> ·
<strong>Iztapalapa: 55 5686 4523</strong> ·
<strong>GAM (Basílica): 55 5781 2345</strong> ·
<strong>Tlalpan (Ajusco): 55 5573 1396</strong> ·
<strong>Tacubaya: 55 5516 1092</strong> ·
<strong>Coyoacán: 55 5524 6312</strong> ·
<strong>Xochimilco: 55 5676 0912</strong>.
      También disponibles vía la app <strong>911 CDMX</strong> con geolocalización
      automática para envío de la unidad más cercana.
</p> <h3>La Corporación más Antigua de México — 137 Años de Historia</h3> <p>
El <strong>Heroico Cuerpo de Bomberos de la Ciudad de México</strong> fue fundado
      el 22 de agosto de <strong>1887</strong> bajo el gobierno del presidente Porfirio
      Díaz, convirtiéndose en el primer cuerpo de bomberos profesional de México. La
<strong>Estación Central en la Colonia Doctores</strong> (Av. Río de la Loza 156)
      ha sido testigo de los momentos más cruciales de la historia urbana del país:
      el incendio del Teatro Guerrero (1901), los devastadores terremotos de
<strong>1985 y 2017</strong>, el incendio del Hotel Regis, las inundaciones de
      Iztapalapa y más de <strong>137 años de operación ininterrumpida</strong>. El Día
      del Bombero se celebra el 22 de agosto en su honor.
</p> <h3>Rescate Sísmico USAR — La Especialidad más Crítica de la CDMX</h3> <p>
La Ciudad de México es una de las ciudades más vulnerables al riesgo sísmico del
      mundo. El <strong>suelo lacustre del antiguo Lago de Texcoco</strong> — con hasta
<strong>40 metros de sedimento blando</strong> — amplifica las ondas sísmicas hasta
<strong>5 veces</strong> respecto a la roca base, haciendo que terremotos de magnitud
      moderada en Guerrero o Oaxaca causen daños catastróficos en la capital.
      Tras los terremotos del <strong>19 de septiembre de 1985</strong> (estimado Mw 8.1,
      más de 10,000 víctimas) y del <strong>19 de septiembre de 2017</strong> (Mw 7.1,
      369 víctimas), el HCBCDMX desarrolló la brigada de <strong>Búsqueda y Rescate
      Urbano (USAR)</strong> más capacitada de Latinoamérica, con certificación
<strong>INSARAG Pesado</strong> — el más alto nivel internacional. El
<strong>Sistema de Alerta Sísmica de la CDMX (SASMEX)</strong> activa a las
      estaciones con hasta <strong>60 segundos de anticipación</strong> antes del arribo
      de las ondas destructivas.
</p> <h3>Xochimilco y Tláhuac — Patrimonio UNESCO en Riesgo</h3> <p>
Los <strong>canales de Xochimilco</strong>, Patrimonio de la Humanidad UNESCO desde
      1987, son el único sistema de chinampas en operación activa del mundo.
      Sus <strong>204 km de canales</strong> y <strong>29,000 trajineras</strong> atraen
      a más de 5 millones de visitantes al año, generando emergencias acuáticas únicas:
      embarcaciones incendiadas, turistas ahogados y fauna silvestre (axolotes, patos)
      en peligro. La <strong>Estación Xochimilco</strong> opera lanchas especializadas
      para navegar los canales en respuesta de emergencia. La estación de
<strong>Tláhuac</strong> cubre las comunidades lacustres de San Pedro Tláhuac y
      las últimas chinampas productivas de México, donde los incendios de chinampas
      pueden destruir patrimonio biocultural milenario irreemplazable.
</p> <h3>AICM — El Aeropuerto más Transitado de América Latina</h3> <p>
La <strong>Estación ARFF del Aeropuerto Internacional de la Ciudad de México
      (AICM)</strong> — Benito Juárez — protege el aeropuerto que procesa más de
<strong>40 millones de pasajeros al año</strong> y opera los <strong>4 vuelos
      por minuto</strong> en horas pico. Certificada por la <strong>DGAC (Dirección
      General de Aeronáutica Civil)</strong> bajo normas ICAO Categoría 9, la estación
      opera con <strong>vehículos ARFF Oshkosh Striker</strong> — los más avanzados de
      México — con capacidad para aplicar 3,000 GPM de espuma AFFF en 30 segundos.
      Tiempo máximo de respuesta certificado: <strong>3 minutos</strong> a cualquier
      punto de las 2 pistas (3,900 m y 3,985 m). Con la incorporación del
<strong>AIFA (Santa Lucía)</strong>, los protocolos se coordinan también con
      la Fuerza Aérea Mexicana.
</p> <h3>La Basílica de Guadalupe — La Más Visitada del Mundo Católico</h3> <p>
La <strong>Estación de Gustavo A. Madero</strong> — en la <strong>Calzada de
      Guadalupe 574</strong>, a menos de 500 metros del Cerro del Tepeyac — protege
      la <strong>Basílica de Nuestra Señora de Guadalupe</strong>: el santuario
      católico más visitado del mundo, con más de <strong>22 millones de peregrinos
      al año</strong>. El <strong>12 de diciembre</strong>, fecha de la festividad,
      más de <strong>2 millones de personas</strong> congregadas en el atrio representan
      el mayor desafío de control de multitudes para bomberos en México. La estación
      opera con protocolos especiales para evacuación masiva y aglomeración de personas,
      coordinados con la Guardia Nacional y la Policía de la CDMX.
</p> <h3>Incendios Forestales — Ajusco, Desierto de los Leones y Milpa Alta</h3> <p>
Sorprendentemente para una megalópolis, la CDMX posee zonas boscosas extensas en
      su periferia sur. El <strong>volcán Ajusco</strong> (3,959 msnm), el
<strong>Desierto de los Leones</strong> (primer parque nacional de México, 1917) y
      los bosques de pino-oyamel de <strong>Milpa Alta</strong> representan ecosistemas
      únicos dentro de una zona urbana. Las estaciones de <strong>Tlalpan, Cuajimalpa y
      Milpa Alta</strong> mantienen brigadas forestales certificadas en combate de
      incendios de interfaz urbano-forestal, con tiempos de respuesta de hasta 25 minutos
      en zonas de difícil acceso. En 2020, el incendio en el Suelo de Conservación
      (87,000 ha que protegen las reservas de agua de la CDMX) requirió la activación
      de todas las brigadas forestales del sur de la ciudad.
</p> <h3>Especialidades del Cuerpo de Bomberos de la CDMX</h3> <p>
El HCBCDMX posee las certificaciones más completas de México:
<strong>USAR INSARAG Pesado</strong> — nivel más alto de rescate sísmico internacional;
<strong>ARFF ICAO Categoría 9</strong> en el AICM para aeronaves de hasta 80 metros
      de largo (B-777, A-350);
<strong>HAZMAT Nivel Técnico</strong> con laboratorio móvil para las zonas industriales
      de Azcapotzalco;
<strong>rescate acuático</strong> en los canales UNESCO de Xochimilco;
<strong>rescate en barrancas</strong> con equipos de rappel técnico en Álvaro Obregón
      y Magdalena Contreras;
<strong>rescate en Metro</strong> — protocolos especiales para incidentes en los
      431 km de túneles del STC Metro con 5 millones de pasajeros diarios;
      y <strong>Academia de Bomberos del Distrito Federal</strong>, que capacita a
      corporaciones de toda la República.
</p> <h3>Alcaldías y Cobertura</h3> <p> <strong>Cuauhtémoc</strong> — Estación Central (1887): Centro Histórico UNESCO,
      Alameda, Tepito, Doctores.
<strong>Miguel Hidalgo</strong> — Tacubaya: Polanco, Bosque de Chapultepec (el más
      visitado del mundo, 15M/año), Santa Fe.
<strong>Venustiano Carranza</strong> — dos estaciones: VCa (oriente industrial) y
      AICM (ARFF aeroportuario).
<strong>Iztapalapa</strong> — la alcaldía más poblada de México (1.8M): Central
      de Abasto, Semana Santa (más concurrida de CDMX).
<strong>GAM</strong> — Basílica de Guadalupe, Lindavista.
<strong>Azcapotzalco</strong> — zona industrial HAZMAT, VALLEJO.
<strong>Xochimilco</strong> — chinampas UNESCO, canales, trajineras.
<strong>Tlalpan</strong> — Ajusco, bosques, pedregal.
<strong>Cuajimalpa</strong> — Desierto de los Leones, autopista México-Toluca.
<strong>Álvaro Obregón</strong> — San Ángel, barrancas, Santa Fe.
<strong>Magdalena Contreras</strong> — Los Dinamos, barrancas.
<strong>Tláhuac</strong> — chinampas, comunidades lacustres.
<strong>Milpa Alta</strong> — rural, volcánica, bosques de oyamel.
<strong>Iztacalco</strong> — Pantitlán, unidades habitacionales.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/ciudad-de-mexico.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/ciudad-de-mexico.astro";
const $$url = "/directorio/ciudad-de-mexico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CiudadDeMexico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
