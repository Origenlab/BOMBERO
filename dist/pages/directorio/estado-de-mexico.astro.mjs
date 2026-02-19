import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { e as estacionesEdoMex } from '../../chunks/estaciones-edomex_DsDVMa3B.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$EstadoDeMexico = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesEdoMex.map((e) => e.ciudad))].sort();
  const totalEstaciones = estacionesEdoMex.length;
  const totalMunicipios = municipios.length;
  const totalBomberos = estacionesEdoMex.reduce((sum, e) => sum + (e.personal || 0), 0);
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Estado de M\xE9xico", url: "/directorio/estado-de-mexico" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Estado de M\xE9xico",
    "description": `Directorio oficial de las ${totalEstaciones} estaciones de bomberos en Estado de M\xE9xico. Estado m\xE1s poblado de M\xE9xico (17.4M), Ecatepec municipio m\xE1s poblado del pa\xEDs (1.6M), ZMVM \xE1rea urbana m\xE1s grande de Am\xE9rica, Nevado Toluca 4,680 msnm rescate alta monta\xF1a, Popocat\xE9petl activo, 90+ parques industriales. Emergencias: 911.`,
    "numberOfItems": estacionesEdoMex.length,
    "itemListElement": estacionesEdoMex.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Estado de M\xE9xico",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `/directorio/estado-de-mexico/${e.slug}`,
        "description": e.descripcion,
        "openingHours": "Mo-Su 00:00-23:59"
      }
    }))
  };
  const jsonLd = [breadcrumbSchema, itemListSchema];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Estado de M\xE9xico", "sigla": "EDOMEX", "slug": "estado-de-mexico", "description": `Directorio completo de las ${totalEstaciones} estaciones de bomberos del Estado de M\xE9xico \u2014 el estado m\xE1s poblado de M\xE9xico con 17.4 millones de habitantes. Emergencias 911 \xB7 Rescate urbano de alta densidad \xB7 Rescate alta monta\xF1a Nevado de Toluca 4,680 msnm \xB7 HAZMAT 90+ parques industriales \xB7 Inundaciones masivas \xB7 Zona Metropolitana del Valle de M\xE9xico (ZMVM)`, "keywords": [
    "bomberos Estado de M\xE9xico",
    "bomberos Ecatepec municipio m\xE1s poblado M\xE9xico",
    "bomberos Toluca rescate alta monta\xF1a",
    "bomberos Nezahualc\xF3yotl ZMVM",
    "bomberos Naucalpan zona industrial",
    "bomberos rescate Nevado de Toluca 4680 msnm",
    "bomberos Tlalnepantla HAZMAT",
    "bomberos inundaciones Valle de Chalco",
    "bomberos Metepec corredor industrial",
    "bomberos Huixquilucan Interlomas",
    "bomberos AICM Felipe \xC1ngeles Aeropuerto Toluca",
    "bomberos Popocat\xE9petl volc\xE1n activo",
    "bomberos Cuautitl\xE1n Izcalli parques industriales",
    "bomberos Atizap\xE1n incendios forestales",
    "bomberos emergencias ZMVM 17 millones habitantes"
  ], "canonical": "https://bombero.mx/directorio/estado-de-mexico", "jsonLd": jsonLd, "totalEstaciones": totalEstaciones, "totalMunicipios": totalMunicipios, "habitantes": "17.4M", "heroDesc": `<strong>Estado de M\xE9xico</strong>, el <strong>estado m\xE1s poblado de M\xE9xico</strong> con <strong>17.4 millones de habitantes</strong> (13.5% de la poblaci\xF3n nacional) y hogar de <strong>Ecatepec</strong> \u2014 el <strong>municipio m\xE1s poblado del pa\xEDs</strong> con <strong>1.6+ millones de habitantes</strong> \u2014 integra la <strong>Zona Metropolitana del Valle de M\xE9xico (ZMVM)</strong>, el <strong>\xE1rea urbana m\xE1s grande de Am\xE9rica</strong> con 22+ millones de habitantes. Con <strong>${totalEstaciones} estaciones</strong> y <strong>${totalBomberos} bomberos profesionales</strong> \u2014 especializados en rescate urbano de <strong>densidad cr\xEDtica</strong> (740 hab/km\xB2 en zonas conurbadas), rescate de <strong>alta monta\xF1a en el Nevado de Toluca</strong> a <strong>4,680 msnm</strong> (volc\xE1n con 2 lagunas en cr\xE1ter, operaciones a -15\xB0C), emergencias <strong>HAZMAT en 90+ parques industriales</strong> del <strong>corredor Lerma-Toluca</strong> (farmac\xE9utica, automotriz, alimentos), <strong>inundaciones masivas</strong> en Valle de Chalco y Chalco (lago desecado en temporada de lluvias con 200+ mm en 24h), y monitoreo del <strong>volc\xE1n Popocat\xE9petl activo</strong> (a 70 km, cenizas y sismos volc\xE1nicos).`, "heroImage": "/images/directorio/estacion-bomberos-moderna-01.avif", "heroImageAlt": "Bomberos Estado de M\xE9xico \u2014 Ecatepec 1.6M habitantes rescate urbano Nevado Toluca 4680 msnm ZMVM \xE1rea urbana m\xE1s grande Am\xE9rica", "heroCaption": "Bomberos Estado de M\xE9xico \xB7 EDOMEX \xB7 20 Estaciones \xB7 Estado M\xE1s Poblado M\xE9xico \xB7 17.4 Millones Habitantes", "heroThumbs": [
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Rescate urbano densidad Ecatepec 1.6M habitantes Nezahualc\xF3yotl 1.2M ZMVM conurbaci\xF3n M\xE9xico edificios multifamiliares emergencias masivas", label: "Rescate Urbano ZMVM" },
    { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Rescate alta monta\xF1a Nevado Toluca 4,680 msnm volc\xE1n lagunas cr\xE1ter Sierra Nevada Iztacc\xEDhuatl Popocat\xE9petl hipotermia altitud", label: "Nevado Toluca 4,680 msnm" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Inundaciones masivas Valle Chalco Chalco lago desecado temporada lluvias 200+ mm 24h rescate acu\xE1tico lanchas evacuaciones", label: "Inundaciones Valle Chalco" }
  ], "galleryImages": [
    { src: "/images/directorio/rescate-espeleologico-cuevas-01.avif", alt: "Popocat\xE9petl volc\xE1n activo cenizas ca\xEDda CENAPRED evacuaciones Alerta Amarilla Texcoco Chalco", label: "Popocat\xE9petl Volc\xE1n Activo" },
    { src: "/images/directorio/estacion-bomberos-moderna-01.avif", alt: "Ecatepec municipio m\xE1s poblado M\xE9xico 1.6M habitantes densidad urbana emergencias masivas ZMVM", label: "Ecatepec 1.6M Habitantes" },
    { src: "/images/directorio/puesto-comando-incidente-01.avif", alt: "C4 Estado M\xE9xico C5 geolocalizaci\xF3n emergencias coordinaci\xF3n Toluca Naucalpan Tlalnepantla", label: "C4 Control Emergencias" },
    { src: "/images/directorio/equipo-iluminacion-emergencias-01.avif", alt: "ZMVM \xE1rea urbana m\xE1s grande Am\xE9rica 22M habitantes Zona Metropolitana Valle M\xE9xico conurbaci\xF3n", label: "ZMVM Megal\xF3polis Am\xE9rica" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias Estado de M\xE9xico" },
    { number: "722 215 7790", label: "Bomberos Toluca (Central Estatal)" },
    { number: "55 5787 4512", label: "Bomberos Ecatepec" },
    { number: "55 5374 8900", label: "Bomberos Naucalpan" },
    { number: "55 5390 4100", label: "Bomberos Tlalnepantla" },
    { number: "800 019 0000", label: "Protecci\xF3n Civil Estado de M\xE9xico" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Valle de Toluca (Capital Estatal)", desc: "Toluca Central (1901, CENAPRED volcanes) \xB7 Metepec (plazas comerciales) \xB7 Lerma (90+ parques industriales HAZMAT) \xB7 Zinacantepec (rescate alta monta\xF1a Nevado 4,680 msnm) \u2014 2.3M habitantes" },
    { nombre: "ZMVM Norte (Conurbaci\xF3n CDMX)", desc: "Ecatepec (1.6M municipio m\xE1s poblado M\xE9xico) \xB7 Tlalnepantla (industrial) \xB7 Naucalpan (corporativos Sat\xE9lite) \xB7 Cuautitl\xE1n Izcalli \xB7 Tultitl\xE1n \xB7 Coacalco \xB7 Tec\xE1mac \u2014 4.5M habitantes" },
    { nombre: "ZMVM Oriente (Zona Chalco Inundaciones)", desc: "Nezahualc\xF3yotl (1.2M, 19,000 hab/km\xB2) \xB7 Chalco (inundaciones masivas) \xB7 Valle de Chalco (rescate acu\xE1tico) \xB7 Ixtapaluca \xB7 Chimalhuac\xE1n \xB7 Texcoco (cenizas Popocat\xE9petl) \u2014 3.8M" },
    { nombre: "ZMVM Poniente (Zona Residencial)", desc: "Huixquilucan (Interlomas, Bosque Real) \xB7 Atizap\xE1n (incendios forestales Sierra Cruces) \xB7 Nicol\xE1s Romero (rescate barrancas) \u2014 1.2M habitantes" }
  ], "estadosVecinos": [
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Quer\xE9taro", slug: "queretaro" }
  ], "estaciones": estacionesEdoMex.map((e) => ({
    nombreCorto: e.nombreCorto,
    slug: e.slug,
    direccion: e.direccion,
    colonia: e.colonia,
    ciudad: e.ciudad,
    telefono: e.telefono,
    servicios: e.servicios,
    horario: e.horario
  })), "stationImages": [
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/estacion-bomberos-profesional-01.avif"
  ], "ctaTitle": "\xBFEquipas una estaci\xF3n en Estado de M\xE9xico?", "ctaDesc": "Somos distribuidores oficiales de equipo certificado NFPA para cuerpos de bomberos en todo el pa\xEDs. Equipamiento completo para rescate urbano, alta monta\xF1a, HAZMAT y emergencias acu\xE1ticas.", "ctaBtnText": "Solicitar Cotizaci\xF3n", "eppCards": [
    {
      image: "/images/directorio/equipo-rescate-tecnico-01.avif",
      imageAlt: "Equipo Rescate T\xE9cnico Urbano NFPA 1006 bomberos Ecatepec 1.6M habitantes edificios colapsados sismos b\xFAsqueda extracci\xF3n",
      badge: "NFPA 1006",
      title: "Rescate T\xE9cnico Urbano \u2014 Ecatepec 1.6M Habitantes",
      text: "El <strong>Estado de M\xE9xico</strong> es el <strong>estado m\xE1s poblado de M\xE9xico</strong> con <strong>17.4 millones de habitantes</strong> (INEGI 2023), representando el <strong>13.5% de la poblaci\xF3n nacional</strong>. Integra la <strong>Zona Metropolitana del Valle de M\xE9xico (ZMVM)</strong> \u2014 el <strong>\xE1rea urbana m\xE1s grande de Am\xE9rica</strong> con 22+ millones de habitantes distribuidos en 76 municipios conurbados. <strong>Ecatepec de Morelos</strong> es el <strong>municipio m\xE1s poblado del pa\xEDs</strong> con <strong>1.6+ millones de habitantes</strong> en solo 160 km\xB2 (<strong>10,000 hab/km\xB2</strong> \u2014 densidad similar a Manhattan), seguido por <strong>Nezahualc\xF3yotl</strong> con 1.2 millones en 63 km\xB2 (19,000 hab/km\xB2). Esta densidad extrema genera emergencias masivas: <strong>edificios multifamiliares de 5-8 pisos sin elevador</strong> con 200-400 familias por inmueble; <strong>unidades habitacionales</strong> con 10,000-50,000 habitantes (Los H\xE9roes Tec\xE1mac, Geovillas Ixtapaluca); <strong>mercados informales</strong> con estructuras improvisadas y cableado el\xE9ctrico clandestino; <strong>asentamientos irregulares</strong> en laderas de barrancas con riesgo de colapso; y <strong>tr\xE1fico vehicular extremo</strong> que dificulta tiempos de respuesta (hasta 25 minutos en hora pico). Los bomberos de Ecatepec, Nezahualc\xF3yotl, Naucalpan, Tlalnepantla y Chimalhuac\xE1n est\xE1n certificados en <strong>NFPA 1006 rescate t\xE9cnico urbano</strong> para estructuras colapsadas, b\xFAsqueda y extracci\xF3n en espacios confinados, y evacuaciones masivas en edificios sin salidas de emergencia. El equipo incluye <strong>c\xE1maras t\xE9rmicas FLIR</strong> para localizaci\xF3n de v\xEDctimas, <strong>gatos hidr\xE1ulicos de 20 toneladas</strong> para levantamiento de vigas de concreto, y <strong>detectores de movimiento s\xEDsmico</strong> para operaciones posteriores a sismos (falla tect\xF3nica Acambay activa).",
      href: "/productos/equipos-de-rescate",
      linkLabel: "Ver Equipos de Rescate"
    },
    {
      image: "/images/directorio/equipo-rescate-vertical-01.avif",
      imageAlt: "Equipo Rescate Alta Monta\xF1a NFPA 1006 bomberos Zinacantepec Nevado Toluca 4,680 msnm volc\xE1n lagunas cr\xE1ter altitud hipotermia",
      badge: "NFPA 1006",
      title: "Rescate Alta Monta\xF1a \u2014 Nevado de Toluca 4,680 msnm",
      text: "El <strong>Nevado de Toluca</strong> (Xinant\xE9catl en n\xE1huatl) es un <strong>volc\xE1n extinto a 4,680 msnm</strong> ubicado a 23 km al suroeste de Toluca \u2014 la <strong>capital de mayor altitud de M\xE9xico</strong> a 2,600 msnm. \xDAnico volc\xE1n del pa\xEDs con <strong>2 lagunas en su cr\xE1ter</strong> (Laguna del Sol y Laguna de la Luna), recibe m\xE1s de <strong>500,000 visitantes al a\xF1o</strong> que ascienden hasta el borde del cr\xE1ter a 4,200 msnm por carretera no pavimentada de 12 km (prohibida en temporada de lluvias mayo-octubre por deslaves). Los riesgos de rescate incluyen: <strong>mal de altura agudo</strong> (AMS) en visitantes no aclimatados con s\xEDntomas desde 3,500 msnm (n\xE1useas, cefalea, edema pulmonar); <strong>hipotermia severa</strong> con temperaturas nocturnas de <strong>-15\xB0C</strong> en invierno y sensaci\xF3n t\xE9rmica de -25\xB0C con viento de 60 km/h; <strong>nevadas sorpresivas</strong> de noviembre a marzo con acumulaciones de 30-50 cm que atrapan veh\xEDculos; <strong>niebla densa</strong> que reduce visibilidad a <5 metros y desorienta excursionistas; <strong>pendientes de 35-45\xB0</strong> con ceniza volc\xE1nica suelta que act\xFAa como lubricante; y <strong>ca\xEDda de rayos</strong> en temporada de lluvias (el volc\xE1n es el punto m\xE1s alto a 100 km a la redonda). Los <strong>Bomberos de Zinacantepec</strong> mantienen la \xFAnica <strong>brigada de rescate de alta monta\xF1a</strong> del Estado de M\xE9xico, con <strong>certificaci\xF3n NFPA 1006 en terreno vertical</strong> y operaciones en altitud >4,000 msnm. El equipo incluye <strong>ox\xEDgeno suplementario port\xE1til</strong> para casos de AMS, <strong>camillas tipo canasta Stokes</strong> para evacuaci\xF3n en pendientes, <strong>GPS satelital Garmin inReach</strong> (sin cobertura celular en cr\xE1ter), <strong>ropa t\xE9rmica de 4 capas</strong> con aislamiento sint\xE9tico PrimaLoft, y <strong>veh\xEDculos 4x4 Toyota Land Cruiser</strong> preparados para nieve y ceniza.",
      href: "/productos/equipos-de-rescate",
      linkLabel: "Ver Equipos de Rescate en Monta\xF1a"
    },
    {
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imageAlt: "Traje HAZMAT Nivel B NFPA 1991 bomberos Lerma Naucalpan Tlalnepantla 90 parques industriales corredor Lerma-Toluca farmac\xE9utica",
      badge: "NFPA 1991",
      title: "Trajes HAZMAT \u2014 90+ Parques Industriales Corredor Lerma-Toluca",
      text: "El <strong>corredor industrial Lerma-Toluca</strong> concentra <strong>90+ parques industriales</strong> en un radio de 40 km, siendo la <strong>segunda zona industrial m\xE1s importante de M\xE9xico</strong> despu\xE9s del Baj\xEDo (Guanajuato-Quer\xE9taro). La industria farmac\xE9utica representa el <strong>60% de la producci\xF3n farmac\xE9utica nacional</strong> con plantas de <strong>Sanofi</strong>, <strong>Roche</strong>, <strong>Pfizer</strong>, <strong>AstraZeneca</strong>, <strong>Novartis</strong> y <strong>Bristol-Myers Squibb</strong> que manejan <strong>solventes org\xE1nicos</strong> (metanol, acetona, tolueno), <strong>\xE1cidos concentrados</strong> (sulf\xFArico, clorh\xEDdrico) y <strong>bases fuertes</strong> (hidr\xF3xido de sodio). La industria automotriz incluye plantas de <strong>Chrysler-Toluca</strong> (ensamble RAM), <strong>BMW-San Luis Potos\xED</strong> (proveedores en Toluca), <strong>Mercedes-Benz</strong> y <strong>Nissan</strong> con uso de <strong>pinturas industriales</strong> (xileno, MEK), <strong>\xE1cidos para galvanizado</strong> y <strong>gases comprimidos</strong> (arg\xF3n, nitr\xF3geno, acetileno). La industria alimentaria opera con <strong>amoniaco anhidro NH\u2083</strong> en refrigeraci\xF3n (Bimbo, Nestl\xE9, Coca-Cola FEMSA), <strong>cloro gaseoso</strong> para potabilizaci\xF3n y <strong>di\xF3xido de carbono CO\u2082</strong> para carbonataci\xF3n. Los <strong>Bomberos de Lerma, Naucalpan y Tlalnepantla</strong> mantienen <strong>brigadas HAZMAT certificadas en Nivel T\xE9cnico</strong> con capacidad de contenci\xF3n de derrames de hasta <strong>5,000 litros</strong> y fugas de gases t\xF3xicos. El equipo incluye <strong>trajes NFPA 1991 Nivel B</strong> con protecci\xF3n qu\xEDmica (Nivel A reservado para cloro y amoniaco), <strong>detectores multigas port\xE1tiles BW Technologies GasAlertMax XT II</strong> (O\u2082, LEL, H\u2082S, CO), <strong>medidores de pH y corrosividad</strong>, <strong>diques de contenci\xF3n flexibles</strong> de 2,000 litros, <strong>absorbentes qu\xEDmicos espec\xEDficos</strong> (para \xE1cidos, bases, solventes), y <strong>protocolos de coordinaci\xF3n</strong> con empresas qu\xEDmicas bajo el programa APELL de UNEP.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes HAZMAT"
    },
    {
      image: "/images/directorio/lancha-rescate-bomberos-01.avif",
      imageAlt: "Lanchas Rescate Acu\xE1tico bomberos Valle de Chalco Chalco inundaciones masivas lago desecado 200+ mm lluvia 24h evacuaciones",
      badge: "ISO 20380",
      title: "Rescate Acu\xE1tico \u2014 Inundaciones Masivas Valle de Chalco",
      text: "El <strong>Valle de Chalco Solidaridad</strong> y <strong>Chalco</strong> ocupan el lecho del antiguo <strong>Lago de Chalco</strong> \u2014 desecado en 1895-1904 para agricultura y urbanizado masivamente desde 1979. Con <strong>400,000+ habitantes</strong> viviendo en <strong>terreno arcilloso impermeable</strong> a 2,240 msnm (el punto m\xE1s bajo de la Cuenca de M\xE9xico), la zona experimenta <strong>inundaciones masivas recurrentes</strong> en temporada de lluvias (junio-septiembre) cuando precipitaciones de <strong>200+ mm en 24 horas</strong> (tormenta septiembre 2021) saturan el suelo impermeable y colapsan el drenaje pluvial obsoleto. El agua acumulada alcanza <strong>1-2 metros de profundidad</strong> en colonias como Xico, Providencia, San Isidro y Av\xE1ndaro, inundando <strong>10,000-30,000 viviendas</strong> de un solo piso construidas a nivel de calle sin cimientos elevados. Los riesgos adicionales incluyen: <strong>contaminaci\xF3n fecal</strong> por mezcla de aguas pluviales con drenaje sanitario colapsado; <strong>corrientes subterr\xE1neas</strong> que arrastran personas y veh\xEDculos hacia pozos de absorci\xF3n; <strong>descargas el\xE9ctricas</strong> por cables de CFE sumergidos; <strong>colapso de viviendas</strong> de tabique sin refuerzo estructural saturadas de agua; y <strong>enfermedades gastrointestinales</strong> (c\xF3lera, hepatitis A, leptospirosis) posteriores a evacuaci\xF3n. Los <strong>Bomberos de Valle de Chalco y Chalco</strong> mantienen <strong>4 unidades de rescate acu\xE1tico</strong> con <strong>lanchas inflables tipo Zodiac</strong> de 4.2 metros con motor fuera de borda de 25 HP (ISO 20380), <strong>bombas de achique de alta capacidad</strong> de 500 litros/minuto, <strong>trajes de inmersi\xF3n en agua contaminada</strong> con protecci\xF3n biol\xF3gica, <strong>kits de purificaci\xF3n de agua</strong> para albergues temporales, y <strong>coordinaci\xF3n con Protecci\xF3n Civil Estatal</strong> para evacuaciones masivas (Plan DN-III-E).",
      href: "/productos/equipos-de-rescate",
      linkLabel: "Ver Equipos de Rescate Acu\xE1tico"
    }
  ] }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3>Bomberos Estado de México — Emergencias en el Estado Más Poblado de México (17.4 Millones)</h3> <p>El <strong>Estado de México</strong> es el <strong>estado más poblado de México</strong> con <strong>17.4 millones de habitantes</strong> (INEGI 2023), representando el <strong>13.5% de la población nacional</strong>. Con <strong>${totalEstaciones} estaciones de bomberos</strong> y más de <strong>${totalBomberos} bomberos profesionales</strong>, el H. Cuerpo de Bomberos del Estado de México atiende emergencias en <strong>125 municipios</strong> que incluyen <strong>Ecatepec de Morelos</strong> — el <strong>municipio más poblado del país</strong> con 1.6+ millones de habitantes — y <strong>Nezahualcóyotl</strong> con 1.2 millones. La mayoría de los municipios mexiquenses integran la <strong>Zona Metropolitana del Valle de México (ZMVM)</strong>, el <strong>área urbana más grande de América</strong> con 22+ millones de habitantes distribuidos en 76 municipios conurbados a la Ciudad de México.</p> <h3>Rescate Urbano de Alta Densidad — ZMVM y Municipios Conurbados</h3> <p>La <strong>densidad poblacional extrema</strong> de municipios como <strong>Ecatepec</strong> (10,000 hab/km²), <strong>Nezahualcóyotl</strong> (19,000 hab/km²), <strong>Naucalpan</strong>, <strong>Tlalnepantla</strong>, <strong>Chimalhuacán</strong> y <strong>Atizapán</strong> presenta desafíos únicos de rescate urbano. Los bomberos operan en <strong>edificios multifamiliares de 5-8 pisos sin elevador</strong> construidos en décadas de 1970-1990 con 200-400 familias por inmueble, <strong>unidades habitacionales masivas</strong> como Los Héroes Tecámac (50,000 habitantes en 1 km²) y Geovillas de Terranova Ixtapaluca (40,000 habitantes), <strong>mercados informales</strong> con estructuras improvisadas y cableado eléctrico clandestino que generan incendios eléctricos, y <strong>asentamientos irregulares</strong> en laderas de barrancas con riesgo de colapso en temporada de lluvias. El <strong>tráfico vehicular extremo</strong> de la ZMVM (3+ millones de vehículos diarios en vialidades metropolitanas) dificulta tiempos de respuesta, alcanzando <strong>25-40 minutos en hora pico</strong> para emergencias en zonas periféricas.</p> <h3>Rescate Alta Montaña — Nevado de Toluca 4,680 msnm y Sierra Nevada</h3> <p>El <strong>Nevado de Toluca</strong> (Xinantécatl) es un <strong>volcán extinto a 4,680 msnm</strong> ubicado a 23 km de Toluca — la <strong>capital de mayor altitud de México</strong> a 2,600 msnm. Es el único volcán del país con <strong>2 lagunas en su cráter</strong> (Laguna del Sol y Laguna de la Luna) y recibe más de <strong>500,000 visitantes al año</strong>. Los <strong>Bomberos de Zinacantepec</strong> mantienen la única <strong>brigada de rescate de alta montaña</strong> del Estado de México, certificada en <strong>NFPA 1006 terreno vertical</strong> y operaciones en altitud >4,000 msnm. Los riesgos incluyen <strong>mal de altura agudo (AMS)</strong> desde 3,500 msnm, <strong>hipotermia severa</strong> con temperaturas de -15°C en invierno, <strong>nevadas de 30-50 cm</strong> que atrapan vehículos, <strong>niebla densa</strong> que reduce visibilidad a &lt;5 metros, y <strong>caída de rayos</strong> en temporada de lluvias. La zona también cubre la <strong>Sierra Nevada</strong> con los volcanes <strong>Iztaccíhuatl</strong> (5,230 msnm) y <strong>Popocatépetl</strong> (5,452 msnm, activo) en el límite con Puebla y Morelos.</p> <h3>HAZMAT — 90+ Parques Industriales Corredor Lerma-Toluca</h3> <p>El <strong>corredor industrial Lerma-Toluca</strong> concentra <strong>90+ parques industriales</strong> en un radio de 40 km, siendo la <strong>segunda zona industrial más importante de México</strong>. La industria farmacéutica representa el <strong>60% de la producción nacional</strong> con plantas de Sanofi, Roche, Pfizer, AstraZeneca, Novartis y Bristol-Myers Squibb que manejan <strong>solventes orgánicos</strong>, <strong>ácidos concentrados</strong> y <strong>bases fuertes</strong>. La industria automotriz incluye plantas de Chrysler-Toluca, BMW, Mercedes-Benz y Nissan con uso de <strong>pinturas industriales</strong> y <strong>gases comprimidos</strong>. La industria alimentaria opera con <strong>amoniaco anhidro NH₃</strong> en refrigeración (Bimbo, Nestlé, Coca-Cola FEMSA). Los <strong>Bomberos de Lerma, Naucalpan y Tlalnepantla</strong> mantienen <strong>brigadas HAZMAT certificadas en Nivel Técnico</strong> con trajes NFPA 1991 Nivel B y capacidad de contención de derrames de hasta 5,000 litros.</p> <h3>Inundaciones Masivas — Valle de Chalco y Lago de Chalco Desecado</h3> <p>El <strong>Valle de Chalco Solidaridad</strong> y <strong>Chalco</strong> ocupan el lecho del antiguo <strong>Lago de Chalco</strong> desecado en 1895-1904. Con <strong>400,000+ habitantes</strong> viviendo en <strong>terreno arcilloso impermeable</strong> a 2,240 msnm, la zona experimenta <strong>inundaciones masivas recurrentes</strong> en temporada de lluvias cuando precipitaciones de <strong>200+ mm en 24 horas</strong> saturan el suelo y colapsan el drenaje pluvial. El agua alcanza <strong>1-2 metros de profundidad</strong>, inundando <strong>10,000-30,000 viviendas</strong> en colonias como Xico, Providencia y San Isidro. Los <strong>Bomberos de Valle de Chalco y Chalco</strong> mantienen <strong>4 unidades de rescate acuático</strong> con lanchas inflables Zodiac de 4.2 metros, bombas de achique de 500 L/min, y trajes de inmersión en agua contaminada con protección biológica.</p> <h3>Volcán Popocatépetl Activo — Cenizas y Sismos Volcánicos</h3> <p>El <strong>volcán Popocatépetl</strong> (5,452 msnm) se encuentra a <strong>70 km al sureste</strong> del Valle de Toluca y está en <strong>actividad continua</strong> desde 1994 con exhalaciones diarias de cenizas, gases volcánicos (SO₂, H₂S) y sismos volcánicos. Municipios del oriente del Estado de México como <strong>Texcoco, Chalco, Ixtapaluca y Amecameca</strong> reciben <strong>caída de cenizas volcánicas</strong> en episodios de alta actividad (Alerta Amarilla Fase 2), afectando visibilidad, contaminando agua potable y generando problemas respiratorios. El <strong>CENAPRED</strong> (Centro Nacional de Prevención de Desastres) mantiene monitoreo 24/7 del volcán con semáforo de alerta volcánica. Los bomberos del oriente del estado están capacitados en <strong>evacuaciones masivas</strong> bajo escenarios de Alerta Naranja y Alerta Roja (erupción inminente) que afectarían a más de <strong>2 millones de habitantes</strong> en un radio de 12 km.</p> <h3>Aeropuertos — Toluca Internacional y AICM Felipe Ángeles</h3> <p>El <strong>Aeropuerto Internacional de Toluca</strong> (TLC) en Lerma opera vuelos comerciales nacionales e internacionales con tráfico de <strong>2+ millones de pasajeros al año</strong> (Volaris, Viva Aerobus, Interjet). Los <strong>Bomberos de Lerma</strong> brindan apoyo en emergencias aeroportuarias bajo protocolos OACI (Organización de Aviación Civil Internacional). Adicionalmente, el <strong>Aeropuerto Internacional Felipe Ángeles (AIFA)</strong> inaugurado en 2022 en Zumpango (municipio del norte del Estado de México) opera vuelos comerciales complementarios al AICM Ciudad de México, con capacidad para <strong>20 millones de pasajeros al año</strong>. Los bomberos de <strong>Tecámac, Tultitlán y Zumpango</strong> coordinan protocolos de respuesta ante emergencias aeroportuarias.</p> <h3>Estaciones Principales — Toluca, Ecatepec, Nezahualcóyotl, Naucalpan</h3> <p>Las <strong>${totalEstaciones} estaciones de bomberos</strong> del Estado de México se distribuyen estratégicamente en las <strong>4 regiones metropolitanas</strong>: <strong>Valle de Toluca</strong> (Toluca, Metepec, Lerma, Zinacantepec), <strong>ZMVM Norte</strong> (Ecatepec, Tlalnepantla, Naucalpan, Cuautitlán Izcalli, Tultitlán, Coacalco, Tecámac, Atizapán, Nicolás Romero), <strong>ZMVM Oriente</strong> (Nezahualcóyotl, Texcoco, Chalco, Valle de Chalco, Ixtapaluca, Chimalhuacán), y <strong>ZMVM Poniente</strong> (Huixquilucan). La <strong>Estación Central de Toluca</strong> es el corazón operativo del H. Cuerpo de Bomberos del Estado de México, con <strong>95 bomberos profesionales</strong> y centro de mando estatal. La <strong>Estación de Ecatepec</strong> atiende el municipio más poblado del país con <strong>75 bomberos</strong> especializados en emergencias industriales y rescates en zonas densamente pobladas.</p> <h3>Contacto y Atención de Emergencias — Número Único 911</h3> <p>Para reportar emergencias de incendios, rescates, accidentes o materiales peligrosos en cualquier municipio del <strong>Estado de México</strong>, marcar <strong>911</strong> (número único de emergencias nacional). El C4 (Centro de Control, Comando, Comunicaciones y Cómputo) del Estado de México coordina el despacho de unidades de bomberos con sistemas de geolocalización y tiempos de respuesta monitoreados en tiempo real. Para consultas no urgentes sobre trámites, capacitaciones o servicios preventivos, contactar directamente a la <strong>Estación Central de Toluca</strong> al teléfono <strong>722 215 7790</strong> o visitar las ${totalEstaciones} estaciones distribuidas en ${totalMunicipios} municipios del estado.</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/estado-de-mexico.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/estado-de-mexico.astro";
const $$url = "/directorio/estado-de-mexico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EstadoDeMexico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
