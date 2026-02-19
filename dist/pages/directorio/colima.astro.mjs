import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { e as estacionesColima, E as ESTADISTICAS_COLIMA } from '../../chunks/estaciones-colima_DQlghRJz.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Colima = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesColima.map((e) => e.ciudad))].sort();
  const totalEstaciones = ESTADISTICAS_COLIMA.total_estaciones;
  const totalMunicipios = ESTADISTICAS_COLIMA.municipios_cubiertos;
  const totalBomberos = ESTADISTICAS_COLIMA.total_bomberos;
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Colima", url: "/directorio/colima" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Colima",
    "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Colima. Volc\xE1n de Fuego (m\xE1s activo de Norteam\xE9rica), Puerto de Manzanillo (#1 Pac\xEDfico 3.4M TEU), capital mundial del lim\xF3n (35% nacional), tsunamis, huracanes. Emergencias: 911.`,
    "numberOfItems": estacionesColima.length,
    "itemListElement": estacionesColima.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Colima",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/colima/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/camion-bomberos-equipado-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/equipo-rescate-completo-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/lancha-rescate-bomberos-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/estacion-bomberos-maritimo-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/equipo-rescate-tecnico-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/brigada-bomberos-capacitacion-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif",
    "/images/directorio/coordinacion-emergencias-bomberos-01.avif",
    "/images/directorio/puesto-comando-incidente-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Colima", "sigla": "COL", "slug": "colima", "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Colima, el estado m\xE1s peque\xF1o de M\xE9xico continental. Volc\xE1n de Fuego (m\xE1s activo de Norteam\xE9rica), Puerto de Manzanillo (#1 Pac\xEDfico 3.4M TEU), capital mundial del lim\xF3n (35% nacional), 157 km costa Pac\xEDfico. Emergencias: 911.`, "keywords": [
    "bomberos colima",
    "bomberos colima capital",
    "estaciones bomberos colima",
    "bomberos volcan de fuego colima",
    "emergencias volcanicas colima cenapred",
    "bomberos puerto manzanillo pacifico",
    "hazmat maritimo manzanillo contenedores",
    "bomberos tecoman capital mundial limon",
    "bomberos comala pueblo magico",
    "rescate acuatico playas colima tsunami",
    "evacuacion volcanica colima lahares",
    "emergencias huracanes colima costa pacifico",
    "emergencias 911 colima",
    "proteccion civil colima volcan",
    "directorio bomberos colima mexico"
  ], "canonical": "https://bombero.mx/directorio/colima", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": totalEstaciones, "totalMunicipios": totalMunicipios, "habitantes": "785K", "heroDesc": `<strong>Colima</strong>, el <strong>estado m\xE1s peque\xF1o de M\xE9xico continental</strong> (5,627 km\xB2, 4\xB0 m\xE1s peque\xF1o nacional), concentra los riesgos naturales m\xE1s intensos del Pac\xEDfico: el <strong>Volc\xE1n de Fuego de Colima</strong> \u2014 uno de los <strong>volcanes m\xE1s activos de Norteam\xE9rica</strong> (3,960 msnm, \xFAltima erupci\xF3n mayor 2015, monitoreo permanente CENAPRED) \u2014 con <strong>8 km de zona de exclusi\xF3n</strong> y 350,000 personas en riesgo; el <strong>Puerto de Manzanillo</strong>, el <strong>m\xE1s grande del Pac\xEDfico mexicano</strong> (#1 nacional en contenedores, 3.4 millones TEU/a\xF1o); y <strong>157 km de costa</strong> vulnerable a <strong>tsunamis y huracanes categor\xEDa 5</strong>. Con <strong>${totalEstaciones} estaciones</strong> y <strong>${totalBomberos} bomberos profesionales</strong> \u2014 especializados en evacuaciones volc\xE1nicas, HAZMAT mar\xEDtimo y rescate acu\xE1tico en el Pac\xEDfico.`, "heroImage": "/images/directorio/estacion-bomberos-profesional-01.avif", "heroImageAlt": "Bomberos Colima \u2014 Volc\xE1n de Fuego emergencias volc\xE1nicas Puerto Manzanillo HAZMAT mar\xEDtimo costa Pac\xEDfico", "heroCaption": "Bomberos Colima \xB7 COL \xB7 5 Estaciones \xB7 Volc\xE1n de Fuego \xB7 Puerto #1 Pac\xEDfico \xB7 157 km Costa", "heroThumbs": [
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Volc\xE1n de Fuego Colima 3960 msnm evacuaciones volc\xE1nicas lahares ceniza CENAPRED monitoreo permanente", label: "Volc\xE1n de Fuego 3,960m" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Puerto Manzanillo #1 Pac\xEDfico 3.4M TEU HAZMAT mar\xEDtimo contenedores buques Capitan\xEDa", label: "Puerto #1 Pac\xEDfico" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico playas Manzanillo costa Pac\xEDfico tsunamis huracanes categor\xEDa 5 bah\xEDa turismo", label: "Rescate Costa Pac\xEDfico" }
  ], "galleryImages": [
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "HAZMAT mar\xEDtimo Manzanillo contenedores comercio internacional qu\xEDmicos nivel A buques", label: "HAZMAT Puerto Manzanillo" },
    { src: "/images/directorio/rescate-swift-water-rios-01.avif", alt: "Lahares volc\xE1nicos Volc\xE1n de Fuego flujos pirocl\xE1sticos evacuaci\xF3n Comala flujos lodo", label: "Lahares Volc\xE1n de Fuego" },
    { src: "/images/directorio/lancha-rescate-bomberos-01.avif", alt: "Rescate acu\xE1tico bah\xEDa Manzanillo playas Santiago El Para\xEDso tsunami alerta temprana", label: "Rescate Bah\xEDa Manzanillo" },
    { src: "/images/directorio/camion-bomberos-equipado-01.avif", alt: "Emergencias agr\xEDcolas Tecom\xE1n capital mundial lim\xF3n empacadoras c\xEDtricos agroqu\xEDmicos 35%", label: "Agr\xEDcola Tecom\xE1n Lim\xF3n" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias Colima" },
    { number: "(312) 312-3456", label: "Bomberos Colima (Central)" },
    { number: "(314) 332-0911", label: "Bomberos Manzanillo (Puerto)" },
    { number: "(313) 324-1234", label: "Bomberos Tecom\xE1n (Lim\xF3n)" },
    { number: "(312) 316-2000", label: "Protecci\xF3n Civil Estatal" },
    { number: "(312) 316-2020", label: "Monitoreo Volc\xE1nico (CENAPRED)" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana Colima-Villa de \xC1lvarez", desc: "Colima (Central 1942, CENAPRED volc\xE1nico) \xB7 Villa de \xC1lvarez (crecimiento urbano, Tec Colima, U de Colima)" },
    { nombre: "Zona Portuaria Manzanillo (Pac\xEDfico)", desc: "Manzanillo (Puerto #1 Pac\xEDfico, 3.4M TEU, HAZMAT mar\xEDtimo, playas, cruceros, bah\xEDa, 157 km costa)" },
    { nombre: "Zona Agr\xEDcola Tecom\xE1n (Capital Lim\xF3n)", desc: "Tecom\xE1n (capital mundial lim\xF3n, 35% nacional, empacadoras, agroqu\xEDmicos, Laguna Cuyutl\xE1n, sal)" },
    { nombre: "Zona Volc\xE1nica Comala (Pueblo M\xE1gico)", desc: "Comala (Pueblo M\xE1gico 2002, Pedro P\xE1ramo, Volc\xE1n de Fuego 8 km, evacuaciones, riesgo muy alto)" },
    { nombre: "\xC1reas Naturales y Costa", desc: "Reserva Biosfera Sierra Manantl\xE1n \xB7 Parque Nacional Nevado \xB7 Laguna Cuyutl\xE1n Ramsar \xB7 playas Santiago" }
  ], "estadosVecinos": [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ], "estaciones": estacionesColima, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif",
      imageAlt: "SCBA NFPA 1981 bomberos Colima ceniza volc\xE1nica Volc\xE1n de Fuego di\xF3xido azufre SO2 gases volc\xE1nicos CENAPRED",
      badge: "NFPA 1981",
      title: "Aparato Respiratorio Aut\xF3nomo SCBA \u2014 Ceniza Volc\xE1nica",
      text: "El <strong>Volc\xE1n de Fuego de Colima</strong> (3,960 msnm) es <strong>uno de los volcanes m\xE1s activos de Norteam\xE9rica</strong> \u2014 con erupciones documentadas cada 3-5 a\xF1os desde 1576. La \xFAltima erupci\xF3n mayor, en <strong>julio de 2015</strong>, arroj\xF3 columnas de ceniza de hasta <strong>10 km de altura</strong>, flujos pirocl\xE1sticos y material incandescente que viaj\xF3 m\xE1s de 3 km por las barrancas. La <strong>Estaci\xF3n Central de Colima</strong> y la <strong>Estaci\xF3n de Comala</strong> mantienen equipos SCBA certificados NFPA 1981 con filtros especializados para <strong>ceniza volc\xE1nica</strong> (part\xEDculas de 2-10 micras) y <strong>gases volc\xE1nicos</strong> (SO\u2082 di\xF3xido de azufre, H\u2082S \xE1cido sulfh\xEDdrico, CO mon\xF3xido de carbono). El <strong>CENAPRED</strong> (Centro Nacional de Prevenci\xF3n de Desastres) mantiene <strong>monitoreo s\xEDsmico 24/7</strong> del volc\xE1n con estaciones permanentes en Comala; cuando el <strong>Sem\xE1foro Volc\xE1nico</strong> pasa a Amarillo Fase 2 o Rojo, se activa la evacuaci\xF3n de hasta <strong>350,000 personas</strong> en un radio de 8-12 km.",
      href: "/productos/equipo-scba",
      linkLabel: "Ver Equipos SCBA"
    },
    {
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imageAlt: "Traje HAZMAT Nivel A NFPA 1991 bomberos Manzanillo contenedores mar\xEDtimos qu\xEDmicos puerto Pac\xEDfico comercio",
      badge: "NFPA 1991",
      title: "Traje HAZMAT Nivel A \u2014 Puerto de Manzanillo Pac\xEDfico",
      text: 'El <strong>Puerto de Manzanillo</strong> es el <strong>puerto m\xE1s importante del Pac\xEDfico mexicano</strong> y el <strong>#1 nacional en movimiento de contenedores</strong> \u2014 procesando m\xE1s de <strong>3.4 millones de TEU al a\xF1o</strong> (contenedores de 20 pies) con carga diversificada: productos qu\xEDmicos industriales, combustibles, granos, autom\xF3viles y cruceros internacionales. La <strong>Estaci\xF3n de Bomberos de Manzanillo</strong> opera con protocolos de <strong>HAZMAT mar\xEDtimo</strong> para emergencias en contenedores sin identificar ("contenedores perdidos"), derrames de qu\xEDmicos en terminales (CONTECON, SSA M\xE9xico), incendios en buques con carga peligrosa y fugas de combustible marino en bah\xEDa. El traje NFPA 1991 de Nivel A es el equipo cr\xEDtico para entrar a contenedores con atm\xF3sferas desconocidas o gases t\xF3xicos tras 15+ d\xEDas en el mar. La coordinaci\xF3n permanente con la <strong>Capitan\xEDa de Puerto</strong> y la <strong>Armada de M\xE9xico</strong> garantiza respuesta inmediata a incidentes en las 4 terminales especializadas del puerto.',
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/traje-inmersion-rescate-01.avif",
      imageAlt: "Traje Inmersi\xF3n NFPA 1952 bomberos Colima rescate acu\xE1tico playas Manzanillo tsunami huracanes bah\xEDa Pac\xEDfico",
      badge: "NFPA 1952",
      title: "Traje de Inmersi\xF3n NFPA 1952 \u2014 Costa Pac\xEDfico y Tsunamis",
      text: "Los <strong>157 km de costa de Colima</strong> en el Pac\xEDfico son de los m\xE1s vulnerables de M\xE9xico a <strong>tsunamis</strong> generados por sismos en la <strong>Placa de Cocos</strong> (subducci\xF3n bajo Norteam\xE9rica) \u2014 el mismo mecanismo que caus\xF3 el tsunami de <strong>1932 en Cuyutl\xE1n</strong>, con olas de hasta <strong>10 metros de altura</strong> que arrasaron la costa. El <strong>Sistema Nacional de Alerta de Tsunamis</strong> activa sirenas en Manzanillo, Santiago y Cuyutl\xE1n cuando detecta sismos >7.0 en el Pac\xEDfico. La <strong>Estaci\xF3n de Bomberos de Manzanillo</strong> opera 1 lancha de rescate especializada y equipos de traje de inmersi\xF3n NFPA 1952 para rescate acu\xE1tico en bah\xEDa y playas tur\xEDsticas (Playa Azul, Santiago, La Audiencia, El Para\xEDso) durante todo el a\xF1o. Tambi\xE9n para la <strong>temporada de huracanes</strong> (junio-noviembre), cuando ciclones categor\xEDa 4-5 del Pac\xEDfico oriental impactan Colima con marejadas cicl\xF3nicas de 3-5 metros y lluvias torrenciales que inundan la zona costera.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Estructurales NFPA 1971 bomberos Colima terreno volc\xE1nico escoria basalto ceniza lahares roca \xEDgnea",
      badge: "NFPA 1971",
      title: "Botas Estructurales \u2014 Terreno Volc\xE1nico y Lahares",
      text: "Los bomberos de las estaciones de <strong>Comala</strong> y <strong>Colima</strong> enfrentan el terreno volc\xE1nico m\xE1s exigente de M\xE9xico: <strong>escoria bas\xE1ltica</strong> del Volc\xE1n de Fuego con aristas cortantes que pueden perforar suela convencional en minutos; <strong>ceniza volc\xE1nica compactada</strong> en las barrancas de Comala (La Lumbre, Montegrande) con temperatura superficial de hasta 300\xB0C tras erupciones recientes; <strong>lahares</strong> \u2014 flujos de lodo volc\xE1nico, ceniza y agua de lluvia que descienden por las barrancas a <strong>60+ km/h</strong> con la consistencia de concreto h\xFAmedo; y <strong>roca \xEDgnea</strong> (andesita, dacita) de los domos de lava del volc\xE1n. Durante operaciones de evacuaci\xF3n en Pueblo Ju\xE1rez, La Yerbabuena y Zacualpan \u2014 las comunidades m\xE1s cercanas al cr\xE1ter \u2014 los bomberos deben ascender pendientes de <strong>30-40\xB0 en terreno volc\xE1nico inestable</strong>. La suela Vibram especializada con tracci\xF3n volc\xE1nica y puntera de acero reforzada son equipos cr\xEDticos para estas operaciones.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Colima \u2014 Volc\xE1nico, Mar\xEDtimo y Costero", "ctaDesc": `Cotiza equipo certificado NFPA para las ${totalEstaciones} estaciones de Colima: desde SCBA con filtros para ceniza volc\xE1nica y gases del Volc\xE1n de Fuego, hasta trajes HAZMAT Nivel A para el Puerto de Manzanillo y equipos de rescate acu\xE1tico para la costa del Pac\xEDfico. Atenci\xF3n en Colima y Manzanillo.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Colima" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos de Colima — Estado Pequeño, Riesgos Mayores</h2> <p>
Los cuerpos de bomberos de <strong>Colima</strong> operan en el <strong>estado más
      pequeño de México continental</strong> (5,627 km², 4° más pequeño nacional) pero con
      los riesgos naturales más intensos del Pacífico mexicano: el <strong>Volcán de Fuego
      de Colima</strong>, uno de los <strong>volcanes más activos de Norteamérica</strong>
(3,960 msnm); el <strong>Puerto de Manzanillo</strong>, el <strong>más grande del
      Pacífico mexicano</strong> (#1 nacional en contenedores); y <strong>157 km de costa</strong>
vulnerable a <strong>tsunamis y huracanes</strong>. Las <strong>${totalEstaciones}
estaciones</strong> en <strong>${totalMunicipios} municipios</strong>, con
<strong>${totalBomberos} bomberos profesionales</strong>, protegen a los 785,153
      colimenses en el estado de mayor densidad poblacional del Pacífico (139.5 hab/km²).
</p> <h3>¿Cómo llamar a los Bomberos en Colima?</h3> <p>
En cualquier <strong>emergencia en Colima</strong>, marca el <strong>911</strong>
— activo 24/7, conecta con el Centro Estatal de Emergencias. Para contacto directo:
<strong>Bomberos Colima (Central): (312) 312-3456</strong> ·
<strong>Bomberos Manzanillo (Puerto): (314) 332-0911</strong> ·
<strong>Bomberos Tecomán (Limón): (313) 324-1234</strong> ·
<strong>Bomberos Comala (Volcán): (312) 315-5555</strong> ·
<strong>Protección Civil Estatal: (312) 316-2000</strong> ·
<strong>Monitoreo Volcánico CENAPRED: (312) 316-2020</strong> ·
<strong>Capitanía de Puerto: (314) 332-0600</strong> ·
<strong>Cruz Roja Colima: (312) 312-0707</strong>.
      Para alertas de tsunami, el Sistema Nacional activa sirenas automáticas en toda la costa.
</p> <h3>Historia — Bomberos Forjados Entre el Volcán y el Mar</h3> <p>
El <strong>Heroico Cuerpo de Bomberos de Colima</strong>, fundado en <strong>1942</strong>,
      nació como respuesta a los incendios urbanos en la capital del estado. Pero la historia
      bomberil de Colima está marcada por dos fuerzas de la naturaleza: el <strong>Volcán de
      Fuego</strong>, cuyas erupciones han obligado evacuaciones masivas desde el siglo XVI, y
      el <strong>Océano Pacífico</strong>, cuyo tsunami de <strong>1932</strong> arrasó la
      costa de Cuyutlán con olas de 10 metros. Los <strong>Bomberos de Manzanillo</strong>,
      fundados en <strong>1958</strong>, se especializaron desde su origen en emergencias
      marítimas y portuarias. La <strong>Estación de Comala</strong> (1990) fue creada específicamente
      para coordinar evacuaciones volcánicas del Pueblo Mágico. Y la <strong>Estación de Tecomán</strong>
(1972) se especializó en emergencias agrícolas de la industria citrícola más grande de México.
      Hoy, los bomberos de Colima son referencia nacional en tres especialidades únicas: respuesta
      volcánica CENAPRED, HAZMAT marítimo portuario y rescate acuático en el Pacífico.
</p> <h3>Volcán de Fuego de Colima — El Riesgo Volcánico más Activo de México</h3> <p>
El <strong>Volcán de Fuego de Colima</strong> (también llamado <strong>Volcán de Colima</strong>,
      3,960 msnm) es <strong>el volcán más activo de México</strong> y <strong>uno de los más activos
      de Norteamérica</strong> — con erupciones documentadas cada 3-5 años desde el siglo XVI. La
      última erupción mayor, en <strong>julio de 2015</strong>, generó columnas eruptivas de hasta
<strong>10 km de altura</strong>, flujos piroclásticos (nubes ardientes de gas, ceniza y roca
      a 700°C que descienden a 100+ km/h) y caída de ceniza que afectó a Colima, Villa de Álvarez,
      Comala y comunidades de Jalisco. El <strong>CENAPRED</strong> (Centro Nacional de Prevención
      de Desastres) mantiene <strong>monitoreo sísmico, visual y geoquímico permanente</strong> del
      volcán con estaciones en Comala, lo que permite activar el <strong>Semáforo Volcánico</strong>
con hasta 48-72 horas de anticipación. La <strong>Estación de Bomberos de Comala</strong>
coordina la evacuación de las comunidades en la <strong>zona de exclusión de 8 km</strong>
(Pueblo Juárez, La Yerbabuena, Zacualpan, Juan Barragán) donde viven más de 2,500 personas,
      y la evacuación preventiva del radio de 12 km con <strong>350,000 habitantes en riesgo</strong>.
</p> <h3>Puerto de Manzanillo — El Gigante del Pacífico Mexicano</h3> <p>
El <strong>Puerto de Manzanillo</strong> es el <strong>puerto más importante del Pacífico
      mexicano</strong> y el <strong>#1 nacional en movimiento de contenedores</strong> — procesando
      más de <strong>3.4 millones de TEU al año</strong> (TEU = contenedor de 20 pies estándar).
      Con <strong>4 terminales especializadas</strong> (CONTECON, SSA México, OCUPA, Terminal de
      Cruceros) y carga diversificada — productos químicos industriales (ácidos, solventes), granos
      (soya, maíz, trigo), combustibles (diésel, gasolina, GLP), automóviles (importación asiática)
      y cruceros internacionales — el puerto genera las emergencias HAZMAT más complejas del Pacífico.
      Los <strong>Bomberos de Manzanillo</strong> mantienen certificación en <strong>HAZMAT marítimo</strong>
con protocolos para contenedores sin identificar ("contenedores perdidos" tras tifones en Asia),
      derrames de combustible en bahía, incendios en buques con carga peligrosa y emergencias en
      cruceros con 3,000+ pasajeros. La coordinación permanente con la <strong>Capitanía de Puerto</strong>
(SEMAR) y la <strong>Armada de México</strong> permite respuesta inmediata 24/7.
</p> <h3>Tecomán — Capital Mundial del Limón Mexicano</h3> <p> <strong>Tecomán</strong> es conocida como la <strong>"Capital Mundial del Limón"</strong>:
      el municipio produce el <strong>35% del limón mexicano de todo el país</strong> — más de
<strong>850,000 toneladas anuales</strong> — y exporta a EE.UU., Canadá y Europa. La región
      alberga decenas de <strong>empacadoras de cítricos</strong> (limón, coco, papaya, mango) y
      procesadoras de jugo concentrado que emplean a más de 15,000 personas. Los <strong>Bomberos
      de Tecomán</strong> se especializan en emergencias agroindustriales únicas: incendios en
      empacadoras con atmósferas ricas en aceites esenciales de cáscara de limón (limoneno, altamente
      inflamable); derrames de <strong>agroquímicos</strong> (fungicidas, insecticidas) en cultivos;
      y emergencias con abejas africanizadas (comunes en huertos de Colima). La estación también
      cubre emergencias en la <strong>Laguna de Cuyutlán</strong> — sitio Ramsar (humedal de
      importancia internacional) con producción de sal marina y manglares — y las playas de
      Boca de Pascuales y Tecuanillo.
</p> <h3>Comala — Pueblo Mágico en la Sombra del Volcán</h3> <p> <strong>Comala</strong>, declarado <strong>Pueblo Mágico en 2002</strong>, es conocido como
      el <strong>"Pueblo Blanco de México"</strong> por sus fachadas encaladas y arquitectura colonial.
      Escenario de la novela <strong>"Pedro Páramo"</strong> de Juan Rulfo, Comala atrae más de
      200,000 turistas al año que buscan su café tradicional, haciendas históricas y la vista al
      Volcán de Fuego. Pero Comala también es el municipio en <strong>riesgo volcánico muy alto</strong>:
      las comunidades de Pueblo Juárez, La Yerbabuena y Zacualpan están dentro de la <strong>zona
      de exclusión de 8 km</strong> del cráter del volcán. Los <strong>Bomberos de Comala</strong>
mantienen <strong>planes de evacuación permanente</strong> coordinados con CENAPRED, con
      rutas de escape hacia el sur (Colima capital) y vehículos de evacuación masiva listos 24/7.
      Cuando el Semáforo Volcánico se eleva a <strong>Amarillo Fase 2</strong>, se activa la
      evacuación preventiva de todo el municipio (más de 20,000 habitantes). La estación también
      combate incendios forestales en la <strong>Reserva de la Biosfera Sierra de Manantlán</strong>
y el <strong>Parque Nacional Nevado de Colima</strong>.
</p> <h3>Tsunamis y Huracanes — La Costa Vulnerable del Pacífico</h3> <p>
Los <strong>157 km de costa de Colima</strong> son de los más vulnerables de México a
<strong>tsunamis</strong> generados por sismos de subducción en la <strong>Placa de Cocos</strong>.
      El <strong>tsunami de 1932</strong>, generado por un sismo de Mw 8.2 en las costas de Jalisco-Colima,
      arrasó la costa de Cuyutlán con olas de hasta <strong>10 metros de altura</strong> — el tsunami
      más destructivo de la historia moderna de México. El <strong>Sistema Nacional de Alerta de
      Tsunamis</strong> (SNAT) activa sirenas automáticas en Manzanillo, Santiago, Cuyutlán y Tecomán
      cuando detecta sismos >7.0 en el Pacífico, con tiempo de evacuación de 10-30 minutos. Los
<strong>Bomberos de Manzanillo</strong> coordinan la evacuación de las zonas hoteleras (más
      de 5,000 cuartos) y playas turísticas hacia zonas altas. Durante la <strong>temporada de
      huracanes</strong> (junio-noviembre), ciclones categoría 4-5 del Pacífico oriental (generados
      frente a Acapulco y Michoacán) impactan Colima con vientos de 250+ km/h y marejadas ciclónicas
      de 3-5 metros que inundan hasta 2 km tierra adentro.
</p> <h3>Especialidades y Cobertura por Zonas</h3> <p> <strong>Colima (Capital)</strong> — Estación Central (1942): comandancia, CENAPRED volcánico,
      academia estatal, USAR.
<strong>Villa de Álvarez</strong> — zona metropolitana (1985): Tec Colima, U de Colima,
      comercial, centros de salud.
<strong>Manzanillo</strong> — Puerto Pacífico (1958): HAZMAT marítimo, contenedores 3.4M TEU,
      rescate acuático, playas, cruceros.
<strong>Tecomán</strong> — Capital del Limón (1972): empacadoras cítricos, agroquímicos,
      Laguna Cuyutlán Ramsar, sal marina.
<strong>Comala</strong> — Pueblo Mágico volcánico (1990): evacuación Volcán de Fuego,
      Pedro Páramo, rescate montaña, forestal Manantlán.
      Cobertura completa en 10 municipios con planes especiales para emergencias volcánicas,
      tsunamis, huracanes, HAZMAT portuario y rescate acuático en costa del Pacífico.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/colima.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/colima.astro";
const $$url = "/directorio/colima";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Colima,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
