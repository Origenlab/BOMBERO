import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { e as estacionesDurango, E as ESTADISTICAS_DURANGO } from '../../chunks/estaciones-durango_BgbnrBUs.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Durango = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesDurango.map((e) => e.ciudad))].sort();
  const totalEstaciones = ESTADISTICAS_DURANGO.total_estaciones;
  const totalMunicipios = ESTADISTICAS_DURANGO.municipios_cubiertos;
  const totalBomberos = ESTADISTICAS_DURANGO.total_bomberos;
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Durango", url: "/directorio/durango" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Durango",
    "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Durango. #1 nacional madera (25%), incendios forestales Sierra Madre Occidental, Comarca Lagunera amoniaco NH\u2083, Zona del Silencio Mapim\xED, carretera Espina del Diablo, 2 Pueblos M\xE1gicos. Emergencias: 911.`,
    "numberOfItems": estacionesDurango.length,
    "itemListElement": estacionesDurango.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Durango",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/durango/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/camion-bomberos-equipado-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/equipo-rescate-completo-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/brigada-bomberos-capacitacion-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/estacion-bomberos-industrial-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/equipo-rescate-tecnico-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/rescate-montana-bomberos-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-bomberos-completo-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/entrenamiento-bomberos-fuego-01.avif",
    "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif",
    "/images/directorio/coordinacion-emergencias-bomberos-01.avif",
    "/images/directorio/puesto-comando-incidente-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Durango", "sigla": "DGO", "slug": "durango", "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Durango, el 4\xB0 estado m\xE1s grande de M\xE9xico. #1 nacional en madera (25% producci\xF3n), incendios forestales Sierra Madre Occidental, Comarca Lagunera amoniaco NH\u2083, Zona del Silencio Mapim\xED, carretera Durango-Mazatl\xE1n "Espina del Diablo", 2 Pueblos M\xE1gicos. Emergencias: 911.`, "keywords": [
    "bomberos durango",
    "bomberos durango capital",
    "estaciones bomberos durango",
    "incendios forestales durango sierra madre",
    "brigadas forestales durango conafor",
    "bomberos gomez palacio comarca lagunera",
    "hazmat amoniaco la laguna grupo lala",
    "bomberos santiago papasquiaro forestal",
    "bomberos pueblo nuevo incendios bosque",
    "bomberos zona del silencio mapimi",
    "bomberos nombre de dios pueblo magico",
    "carretera durango mazatlan espina diablo",
    "emergencias 911 durango",
    "proteccion civil durango forestal",
    "directorio bomberos durango mexico"
  ], "canonical": "https://bombero.mx/directorio/durango", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": totalEstaciones, "totalMunicipios": totalMunicipios, "habitantes": "1.8M", "heroDesc": `<strong>Durango</strong>, el <strong>4\xB0 estado m\xE1s grande de M\xE9xico</strong> (123,451 km\xB2) y hogar de la <strong>Sierra Madre Occidental</strong> \u2014 la cadena monta\xF1osa m\xE1s extensa del pa\xEDs \u2014 es el <strong>#1 nacional en producci\xF3n de madera</strong> con el <strong>25% de la producci\xF3n nacional</strong> (4.9 millones de hect\xE1reas boscosas). Este liderazgo forestal genera el riesgo de incendios m\xE1s cr\xEDtico del pa\xEDs: <strong>45,000 hect\xE1reas quemadas al a\xF1o</strong> en temporada enero-junio, con brigadas forestales especializadas en Santiago Papasquiaro, Pueblo Nuevo y El Salto. Con <strong>${totalEstaciones} estaciones</strong> y <strong>${totalBomberos} bomberos profesionales</strong> \u2014 incluyendo brigadas HAZMAT para amoniaco NH\u2083 en la <strong>Comarca Lagunera</strong> (cuenca lechera de M\xE9xico), rescate en la <strong>Zona del Silencio de Mapim\xED</strong> (Pueblo M\xE1gico, anomal\xEDa electromagn\xE9tica) y emergencias en la <strong>carretera Durango-Mazatl\xE1n</strong> ('La Espina del Diablo', una de las m\xE1s peligrosas de M\xE9xico).`, "heroImage": "/images/directorio/camion-forestal-bomberos-01.avif", "heroImageAlt": "Bomberos Durango \u2014 Sierra Madre Occidental incendios forestales #1 madera nacional Comarca Lagunera", "heroCaption": "Bomberos Durango \xB7 DGO \xB7 12 Estaciones \xB7 #1 Madera Nacional \xB7 Sierra Madre Occidental", "heroThumbs": [
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Incendios forestales Durango Sierra Madre Occidental 45,000 ha a\xF1o CONAFOR brigadas pino encino", label: "Forestales Sierra Madre" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Amoniaco NH\u2083 Comarca Lagunera G\xF3mez Palacio Grupo Lala refrigeraci\xF3n industrial plantas lecheras", label: "HAZMAT Amoniaco La Laguna" },
    { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Carretera Durango Mazatl\xE1n Espina del Diablo rescate monta\xF1a curvas peligrosas accidentes", label: "Espina del Diablo Rescate" }
  ], "galleryImages": [
    { src: "/images/directorio/brigada-bomberos-capacitacion-01.avif", alt: "Brigadas forestales CONAFOR Durango Santiago Papasquiaro Pueblo Nuevo incendios bosques", label: "Brigadas Forestales CONAFOR" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n amoniaco NH\u2083 La Laguna G\xF3mez Palacio refrigeraci\xF3n industrial nivel A", label: "HAZMAT NH\u2083 Industrial" },
    { src: "/images/directorio/estacion-bomberos-central-edificio-01.avif", alt: "Zona del Silencio Mapim\xED Pueblo M\xE1gico anomal\xEDa electromagn\xE9tica rescate desierto reserva", label: "Zona Silencio Mapim\xED" },
    { src: "/images/directorio/camion-bomberos-equipado-01.avif", alt: "Emergencias nevadas Durango sierra heladas clima extremo rescate invernal hipotermia", label: "Emergencias Nevadas Sierra" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias Durango" },
    { number: "(618) 814-4555", label: "Bomberos Durango (Central)" },
    { number: "(871) 714-1210", label: "Bomberos G\xF3mez Palacio (La Laguna)" },
    { number: "(871) 725-3252", label: "Bomberos Lerdo" },
    { number: "(618) 137-8400", label: "Protecci\xF3n Civil Estatal" },
    { number: "(618) 825-2003", label: "CONAFOR Incendios Forestales" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana Durango (Capital)", desc: "Durango Central (1935, CONAFOR coordinaci\xF3n) \xB7 Durango Norte (industrial) \xB7 Durango Sur (madereras) \u2014 700K+ habitantes" },
    { nombre: "Comarca Lagunera (Industrial Lechera)", desc: "G\xF3mez Palacio Central (1952, NH\u2083 HAZMAT) \xB7 G\xF3mez Palacio Industrial (Grupo Lala) \xB7 Lerdo (Ciudad Jard\xEDn 2023) \u2014 370K+" },
    { nombre: "Zona Sierra Madre Occidental (Forestal)", desc: "Santiago Papasquiaro (1968, brigadas CONAFOR) \xB7 Pueblo Nuevo (incendios 2024) \xB7 El Salto (aserraderos) \u2014 pino-encino" },
    { nombre: "Zona Centro-Sur (Agr\xEDcola)", desc: "Canatl\xE1n (Capital Manzana) \xB7 Nombre de Dios (Pueblo M\xE1gico 2023, fundado 1555) \xB7 Vicente Guerrero (menonitas)" },
    { nombre: "\xC1reas Naturales y Patrimonio", desc: "Reserva Biosfera Mapim\xED (Zona Silencio) \xB7 Quebrada Mexiquillo \xB7 Espina Diablo (carretera Mazatl\xE1n)" }
  ], "estadosVecinos": [
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ], "estaciones": estacionesDurango, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/equipo-bomberos-completo-01.avif",
      imageAlt: "Traje Forestal NFPA 1977 bomberos Durango incendios Sierra Madre Occidental pino encino bosques calor radiante",
      badge: "NFPA 1977",
      title: "Traje Forestal NFPA 1977 \u2014 Sierra Madre Occidental",
      text: "Durango es el <strong>#1 nacional en producci\xF3n de madera</strong> con <strong>4.9 millones de hect\xE1reas de bosques</strong> de pino-encino en la <strong>Sierra Madre Occidental</strong> \u2014 la cadena monta\xF1osa m\xE1s extensa de M\xE9xico \u2014 que generan el <strong>25% de la madera del pa\xEDs</strong> con m\xE1s de 35,000 empleos directos en aserraderos y plantas procesadoras. Esta riqueza forestal convierte a Durango en el estado con los <strong>incendios forestales m\xE1s intensos de M\xE9xico</strong>: promedio de <strong>45,000 hect\xE1reas quemadas al a\xF1o</strong> durante la temporada cr\xEDtica (enero-junio) con incendios que pueden alcanzar <strong>frentes de fuego de 10+ km de longitud</strong> y velocidades de avance de <strong>5 km/h</strong> en terreno monta\xF1oso. Los <strong>Bomberos de Santiago Papasquiaro</strong>, <strong>Pueblo Nuevo</strong> y <strong>El Salto</strong> \u2014 coraz\xF3n forestal del estado \u2014 operan con trajes certificados NFPA 1977 dise\xF1ados espec\xEDficamente para <strong>calor radiante de incendios de copa</strong> (fuego que salta entre las copas de los pinos a 50+ metros de altura) con protecci\xF3n TPP de <strong>50+ cal/cm\xB2</strong>. Los incendios forestales de <strong>Pueblo Nuevo en 2024</strong> arrasaron m\xE1s de 12,000 hect\xE1reas y requirieron el despliegue de las <strong>13 brigadas forestales estatales</strong> coordinadas por <strong>CONAFOR</strong> (Comisi\xF3n Nacional Forestal).",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif",
      imageAlt: "SCBA NFPA 1981 bomberos Durango humo forestal CO mon\xF3xido carbono part\xEDculas ceniza incendios bosque",
      badge: "NFPA 1981",
      title: "Aparato Respiratorio Aut\xF3nomo SCBA \u2014 Humo Forestal",
      text: "Los incendios forestales de la <strong>Sierra Madre Occidental</strong> generan las atm\xF3sferas m\xE1s t\xF3xicas del pa\xEDs para los bomberos: <strong>humo forestal denso</strong> con concentraciones de <strong>mon\xF3xido de carbono (CO)</strong> de hasta <strong>10,000 ppm</strong> (partes por mill\xF3n) \u2014 200 veces el l\xEDmite de exposici\xF3n ocupacional \u2014 que causa intoxicaci\xF3n aguda en minutos; <strong>part\xEDculas de ceniza de madera</strong> de 0.5-2.5 micras (PM2.5) que penetran hasta los alveolos pulmonares; <strong>vapores de resina de pino</strong> (terpenos) altamente irritantes para v\xEDas respiratorias; y <strong>gases de combusti\xF3n incompleta</strong> (aldeh\xEDdos, benceno, formaldeh\xEDdo) carcinog\xE9nicos a largo plazo. Los bomberos forestales de Durango trabajan en <strong>frentes de fuego activos durante 8-12 horas continuas</strong> en pendientes de 30-40\xB0 a altitudes de <strong>2,500-3,000 msnm</strong> donde la presi\xF3n parcial de ox\xEDgeno es 25% menor que al nivel del mar. El SCBA certificado NFPA 1981 con <strong>cilindros de larga autonom\xEDa (60+ min)</strong> es el equipo cr\xEDtico, pero el peso adicional (15+ kg) en terreno monta\xF1oso extremo obliga a rotaciones de personal cada 45 minutos. Los <strong>39 torres de vigilancia forestal</strong> de Durango detectan columnas de humo de hasta 50 km de distancia para activar respuesta temprana.",
      href: "/productos/equipo-scba",
      linkLabel: "Ver Equipos SCBA"
    },
    {
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imageAlt: "Traje HAZMAT Nivel A NFPA 1991 bomberos G\xF3mez Palacio amoniaco NH3 Comarca Lagunera Grupo Lala refrigeraci\xF3n",
      badge: "NFPA 1991",
      title: "Traje HAZMAT Nivel A \u2014 Amoniaco NH\u2083 Comarca Lagunera",
      text: "La <strong>Comarca Lagunera</strong> \u2014 regi\xF3n compartida entre Durango (G\xF3mez Palacio, Lerdo) y Coahuila (Torre\xF3n, Matamoros) \u2014 es la <strong>principal cuenca lechera de M\xE9xico</strong> con m\xE1s de <strong>400,000 vacas lecheras</strong> y plantas procesadoras de <strong>Grupo Lala</strong> (l\xEDder nacional), <strong>Alpura</strong> y <strong>Chilchota</strong> que producen m\xE1s de <strong>3,000 millones de litros de leche al a\xF1o</strong>. Toda esta industria l\xE1ctea depende de <strong>sistemas de refrigeraci\xF3n industrial con amoniaco anhidro (NH\u2083)</strong> \u2014 el refrigerante m\xE1s eficiente para grandes vol\xFAmenes pero tambi\xE9n el <strong>gas m\xE1s peligroso en la industria alimentaria</strong>: t\xF3xico por inhalaci\xF3n (>300 ppm letal en 30 min), corrosivo para ojos y v\xEDas respiratorias, e inflamable en concentraciones de <strong>15-28% en aire</strong>. Los <strong>Bomberos de G\xF3mez Palacio</strong> mantienen la <strong>\xFAnica brigada HAZMAT especializada en amoniaco</strong> del norte de M\xE9xico, certificada en respuesta a fugas en sistemas de refrigeraci\xF3n de hasta <strong>20 toneladas de NH\u2083</strong> por planta. El traje NFPA 1991 de Nivel A con <strong>protecci\xF3n qu\xEDmica total</strong> es obligatorio para entrada a zonas con concentraciones >1,000 ppm, y los detectores multigas port\xE1tiles alertan desde 25 ppm (umbral de detecci\xF3n olfativa).",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Forestales NFPA 1977 bomberos Durango terreno monta\xF1oso Sierra Madre rocas nieve escoria pendientes",
      badge: "NFPA 1977",
      title: "Botas Forestales \u2014 Terreno Monta\xF1oso Sierra Madre",
      text: "Los bomberos de las estaciones de <strong>Santiago Papasquiaro</strong>, <strong>Pueblo Nuevo</strong> y <strong>El Salto</strong> enfrentan el terreno monta\xF1oso m\xE1s exigente de M\xE9xico durante combate de incendios forestales: <strong>pendientes de 30-40\xB0</strong> en la Sierra Madre Occidental con suelo inestable de <strong>hojarasca de pino</strong> (ac\xEDculas) de hasta 20 cm de profundidad que act\xFAa como lubricante en laderas; <strong>roca bas\xE1ltica y andesita</strong> de origen volc\xE1nico con aristas cortantes; <strong>escoria volc\xE1nica</strong> de antiguas erupciones que perfora suela convencional; <strong>ra\xEDces expuestas de pino y encino</strong> que crean obst\xE1culos en carreras de escape; <strong>terreno nevado</strong> en invierno (diciembre-febrero) con acumulaciones de hasta 50 cm en altitudes >2,800 msnm y temperaturas de <strong>-15\xB0C</strong>; y <strong>ceniza forestal caliente</strong> de incendios recientes con temperatura superficial de 200-300\xB0C durante 24-48 horas posteriores al control. La suela Vibram Fire&Ice con <strong>tracci\xF3n monta\xF1osa</strong> y puntera de acero reforzada son cr\xEDticas para operaciones en la <strong>carretera Durango-Mazatl\xE1n</strong> ('La Espina del Diablo') donde los bomberos tambi\xE9n atienden <strong>accidentes vehiculares en curvas de 180\xB0</strong> con precipicios de 1,000+ metros.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Durango \u2014 Forestal, Industrial y Monta\xF1a", "ctaDesc": `Cotiza equipo certificado NFPA para las ${totalEstaciones} estaciones de Durango: desde trajes forestales NFPA 1977 para incendios de la Sierra Madre Occidental, hasta trajes HAZMAT Nivel A para amoniaco NH\u2083 en La Laguna y equipos de rescate en monta\xF1a para la Espina del Diablo. Atenci\xF3n en Durango, G\xF3mez Palacio y Santiago Papasquiaro.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Durango" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos de Durango — Capital Forestal de México</h2> <p>
Los cuerpos de bomberos de <strong>Durango</strong> operan en el <strong>4° estado más
      grande de México</strong> (123,451 km²) y hogar de la <strong>Sierra Madre Occidental</strong>
— la cadena montañosa más extensa del país — con el <strong>#1 lugar nacional en producción
      de madera</strong> (25% del total nacional, 4.9 millones de hectáreas de bosques de pino-encino).
      Las <strong>${totalEstaciones} estaciones</strong> en <strong>${totalMunicipios} municipios</strong>,
      con <strong>${totalBomberos} bomberos profesionales</strong>, protegen a los 1.8 millones de
      duranguenses enfrentando los riesgos más diversos del norte: incendios forestales épicos
      (45,000 ha/año), emergencias HAZMAT con amoniaco en la Comarca Lagunera, rescate en montaña
      en la Espina del Diablo y nevadas extremas en la sierra.
</p> <h3>¿Cómo llamar a los Bomberos en Durango?</h3> <p>
En cualquier <strong>emergencia en Durango</strong>, marca el <strong>911</strong>
— activo 24/7, conecta con el Centro Estatal de Emergencias. Para contacto directo:
<strong>Bomberos Durango (Central): (618) 814-4555</strong> ·
<strong>Bomberos Gómez Palacio (La Laguna): (871) 714-1210</strong> ·
<strong>Bomberos Lerdo: (871) 725-3252</strong> ·
<strong>Bomberos Santiago Papasquiaro: (674) 862-0911</strong> ·
<strong>Protección Civil Estatal: (618) 137-8400</strong> ·
<strong>CONAFOR Incendios Forestales: (618) 825-2003</strong> ·
<strong>Cruz Roja Durango: (618) 817-0707</strong>.
      Para incendios forestales, las 39 torres de vigilancia activan brigadas desde 50 km de distancia.
</p> <h3>Historia — Forjados en el Fuego de la Sierra Madre</h3> <p>
El <strong>Heroico Cuerpo de Bomberos de Durango</strong>, fundado en <strong>1935</strong>,
      nació en la época dorada de la industria maderera duranguense. A diferencia de otros estados
      donde los bomberos se especializaron en emergencias urbanas, los bomberos de Durango desde
      su origen se prepararon para el riesgo forestal — acompañando el auge de los aserraderos
      de Santiago Papasquiaro, Pueblo Nuevo y El Salto que convirtieron a Durango en la
<strong>capital maderera de México</strong>. Los <strong>Bomberos de Gómez Palacio</strong>,
      fundados en <strong>1952</strong>, se especializaron en emergencias industriales de la
<strong>Comarca Lagunera</strong> — en particular el manejo de amoniaco en refrigeración
      láctea. Hoy, las brigadas forestales de Durango son reconocidas internacionalmente: personal
      capacitado por <strong>CONAFOR</strong> con experiencia en incendios de más de 10,000 hectáreas
      y coordinación con brigadas de EE.UU. durante emergencias transfronterizas.
</p> <h3>Sierra Madre Occidental — Los Incendios Forestales más Intensos de México</h3> <p>
La <strong>Sierra Madre Occidental</strong> que atraviesa Durango de norte a sur es la
<strong>cadena montañosa más extensa de México</strong> (1,250 km de longitud) y alberga
<strong>4.9 millones de hectáreas de bosques templados</strong> — el 25% de la superficie
      boscosa del país. Bosques de <strong>pino ponderosa, pino real, pino piñonero, encino y oyamel</strong>
a altitudes de 2,000-3,200 msnm que generan la <strong>industria maderera más importante de México</strong>
con más de 35,000 empleos directos en aserraderos y plantas procesadoras. Pero esta riqueza forestal
      convierte a Durango en el estado con los <strong>incendios forestales más intensos del país</strong>.
      La <strong>temporada crítica enero-junio</strong> — coincidente con la época de secas y vientos
      fuertes — genera incendios con frentes de fuego de <strong>10-15 km de longitud</strong>,
      velocidades de avance de <strong>5+ km/h</strong> en terreno montañoso con pendientes de 30-40°,
      y columnas de humo de hasta <strong>6,000 metros de altura</strong> visibles desde 100 km.
      Los <strong>Bomberos de Santiago Papasquiaro</strong> y <strong>Pueblo Nuevo</strong> coordinan
      con las <strong>13 brigadas forestales estatales</strong> y <strong>39 torres de vigilancia</strong>
que monitorean 24/7 durante temporada alta.
</p> <h3>Comarca Lagunera — Amoniaco NH₃ en la Cuenca Lechera de México</h3> <p>
La <strong>Comarca Lagunera</strong> — región compartida entre Durango (Gómez Palacio, Lerdo)
      y Coahuila (Torreón, Matamoros, San Pedro) — es la <strong>principal cuenca lechera de México</strong>
con más de <strong>400,000 vacas en producción</strong> y plantas procesadoras que generan
<strong>3,000+ millones de litros de leche al año</strong>. <strong>Grupo Lala</strong>,
      con sede en Gómez Palacio, es el líder nacional con 11 plantas procesadoras y 40% del mercado.
      Toda esta industria láctea depende de <strong>refrigeración industrial con amoniaco anhidro (NH₃)</strong>
— sistemas de hasta <strong>20 toneladas de NH₃</strong> por planta que mantienen cadena de frío
      desde recepción (4°C) hasta almacenamiento final (-18°C para congelados). El amoniaco es el refrigerante
      más eficiente termodinámicamente pero también <strong>el más peligroso</strong>: tóxico por inhalación
      (>300 ppm letal en 30 min), corrosivo (daño ocular irreversible en segundos) e inflamable (15-28%
      en aire). Los <strong>Bomberos de Gómez Palacio</strong> mantienen la <strong>única brigada HAZMAT
      especializada en amoniaco</strong> del norte de México, con trajes nivel A, detectores multigas
      calibrados, y protocolos de entrada a zona caliente con >1,000 ppm. Coordinación permanente con
      plantas de Grupo Lala, Alpura y procesadoras menores.
</p> <h3>Zona del Silencio de Mapimí — El Fenómeno Electromagnético de México</h3> <p>
Los bomberos de la <strong>Estación de Gómez Palacio</strong> cubren emergencias en la
<strong>Reserva de la Biosfera de Mapimí</strong> (342,388 ha) que incluye la famosa
<strong>Zona del Silencio</strong> — área desértica donde supuestamente las señales de radio
      no funcionan por anomalías electromagnéticas. Mapimí, declarado <strong>Pueblo Mágico en 2012</strong>,
      atrae turistas nacionales e internacionales que buscan el <strong>Puente de Ojuela</strong>
(puente colgante minero de 1898, 318 metros de largo sobre cañón de 110 metros) y las
<strong>minas históricas de plata</strong> del siglo XIX. La reserva alberga ecosistemas
      desérticos únicos con <strong>tortuga del desierto</strong> (especie en peligro), <strong>borrego
      cimarrón</strong> y vegetación xerófila adaptada a temperatura de hasta <strong>+48°C en verano</strong>.
      Los bomberos atienden emergencias turísticas (deshidratación, insolación) en zona remota con
      comunicación satelital, ya que la cobertura celular es nula en 80% del área protegida.
</p> <h3>Carretera Durango-Mazatlán — "La Espina del Diablo"</h3> <p>
La <strong>carretera federal 40D Durango-Mazatlán</strong>, conocida como <strong>"La Espina
      del Diablo"</strong>, es una de las <strong>carreteras más espectaculares y peligrosas de México</strong>.
      El tramo <strong>Pueblo Nuevo-Concordia</strong> (230 km) atraviesa la Sierra Madre Occidental
      con <strong>115 puentes</strong> (incluyendo el <strong>Puente Baluarte</strong>, el más alto
      de América con 403 metros sobre el río) y <strong>61 túneles</strong> que suman 20 km de longitud
      total. Curvas cerradas de 180° con precipicios de <strong>1,000+ metros</strong>, pendientes de
      6-8% sostenidas, altitudes de hasta 2,700 msnm, y <strong>nevadas en invierno</strong> que cierran
      tramos durante días. Los <strong>Bomberos de Pueblo Nuevo</strong> y <strong>El Salto</strong>
especializados en <strong>rescate en montaña</strong> atienden accidentes vehiculares con víctimas
      en barrancos de difícil acceso, requiriendo cuerdas de rappel, camillas de extricación y coordinación
      con helicópteros de la Secretaría de Marina. Los tramos más peligrosos: <strong>El Espinazo del
      Diablo</strong> (curvas gemelas a 2,500 msnm), <strong>Quebrada de Mexiquillo</strong> (barrancas
      de 800 metros), y el descenso a <strong>Concordia, Sinaloa</strong> (40 km de curvas continuas).
</p> <h3>Incendios Forestales de Pueblo Nuevo 2024 — 12,000 Hectáreas Arrasadas</h3> <p>
En <strong>abril-mayo de 2024</strong>, el municipio de <strong>Pueblo Nuevo</strong> sufrió
      los incendios forestales más devastadores de su historia: <strong>más de 12,000 hectáreas</strong>
de bosques de pino-encino arrasadas en incendios simultáneos que requirieron el despliegue de
      las <strong>13 brigadas forestales estatales</strong>, brigadas federales de CONAFOR, y apoyo
      de helicópteros Bambi Bucket de la Secretaría de Defensa. El incendio principal, iniciado cerca
      de <strong>La Ciudad</strong> (comunidad serrana), alcanzó frentes de fuego de <strong>15 km
      de longitud</strong> con vientos de 40+ km/h que generaron <strong>saltos de fuego de hasta 200
      metros</strong> entre copas de pinos. Los <strong>Bomberos de Pueblo Nuevo</strong> trabajaron
      durante <strong>23 días continuos</strong> en pendientes de 35-40° a altitudes de 2,800-3,000 msnm
      con temperaturas de 30°C de día y -5°C de noche. El humo denso afectó la calidad del aire en
      Durango capital (200 km de distancia) durante dos semanas, con índices de PM2.5 de hasta 250 μg/m³
      (5 veces el límite seguro de 50 μg/m³). El costo económico: pérdida estimada de <strong>150 millones
      de pesos</strong> en madera y daño ecológico a ecosistemas de regeneración de 60-80 años.
</p> <h3>Comunidades Menonitas de Vicente Guerrero — Tradición y Modernidad</h3> <p>
El municipio de <strong>Vicente Guerrero</strong> alberga importantes <strong>colonias menonitas</strong>
— comunidad religiosa de origen alemán que llegó a México en la década de 1920 buscando tierras
      para agricultura sin restricciones. Las comunidades menonitas de Durango (principalmente en Vicente
      Guerrero, Nuevo Ideal y Canatlán) son productoras líderes de <strong>quesos artesanales</strong>
(queso menonita, Chihuahua, gouda), <strong>lácteos</strong>, <strong>granos</strong> (avena,
      trigo, maíz) y <strong>manzanas</strong>. Los <strong>Bomberos de Vicente Guerrero</strong>
coordinan con estas comunidades para emergencias agrícolas, incendios en empacadoras y accidentes
      con maquinaria agrícola pesada (cosechadoras, tractores de gran tonelaje). La tradición menonita
      de autosuficiencia y trabajo comunitario genera colaboración efectiva en brigadas voluntarias
      durante emergencias rurales.
</p> <h3>Nombre de Dios — El Pueblo Más Antiguo de Durango</h3> <p> <strong>Nombre de Dios</strong>, fundado en <strong>1555</strong>, es la <strong>primera población
      española establecida en Durango</strong> — 8 años antes que la capital del estado. Declarado
<strong>Pueblo Mágico en 2023</strong>, conserva arquitectura <strong>virreinal del siglo XVI</strong>
con templos coloniales, casonas de cantera y calles empedradas originales. Los <strong>Bomberos de
      Nombre de Dios</strong> tienen responsabilidad especial en la <strong>protección del patrimonio
      histórico</strong> incluyendo el <strong>Templo de San Pedro y San Pablo</strong> (siglo XVI,
      retablos barrocos dorados), <strong>Templo de la Purísima</strong> (arquitectura franciscana) y
      el <strong>Ex Convento de San Francisco</strong>. Técnicas de combate de incendios patrimoniales
      con minimización de daño por agua y humo, y coordinación con INAH (Instituto Nacional de Antropología
      e Historia) para emergencias en bienes protegidos.
</p> <h3>Especialidades y Cobertura por Zonas</h3> <p> <strong>Durango (Capital)</strong> — Estación Central (1935): comandancia, CONAFOR coordinación,
      academia estatal, USAR.
<strong>Durango Norte</strong> — zona industrial (1998): madereras, fraccionamientos, carretera
      Chihuahua.
<strong>Durango Sur</strong> — industrial maderera (2005): aserraderos, Espina del Diablo, brigadas
      forestales.
<strong>Gómez Palacio</strong> — La Laguna central (1952): HAZMAT NH₃, Grupo Lala, industrial láctea.
<strong>Gómez Palacio Industrial</strong> — parques (2010): Parque Industrial Lagunero, refrigeración.
<strong>Lerdo</strong> — Ciudad Jardín (1975, nueva estación 2023): zona agrícola, viñedos, ejidos.
<strong>Santiago Papasquiaro</strong> — sierra forestal (1968, nueva 2024): CONAFOR, brigadas, aserraderos.
<strong>Pueblo Nuevo</strong> — incendios (1985): mayor superficie bosques, Espina Diablo, rescate montaña.
<strong>El Salto</strong> — maderera (1990): aserraderos, clima extremo, nevadas.
<strong>Canatlán</strong> — Capital Manzana (1995): agrícola, frutícola, carretera Parral.
<strong>Nombre de Dios</strong> — Pueblo Mágico (2000): patrimonio 1555, templos coloniales, turismo.
<strong>Vicente Guerrero</strong> — menonitas (2008): comunidades, lácteos, agricultura, ejidos.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/durango.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/durango.astro";
const $$url = "/directorio/durango";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Durango,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
