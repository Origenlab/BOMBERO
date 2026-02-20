import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesVeracruz, d as getMunicipios } from '../../chunks/estaciones-veracruz_jltBKbHh.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Veracruz = createComponent(($$result, $$props, $$slots) => {
  const estado = "Veracruz";
  const sigla = "VER";
  const slug = "veracruz";
  const heroThumbs = [
    { src: "/images/directorio/estacion-bomberos-veracruz-01.avif", alt: "Estaci\xF3n Central de Bomberos Puerto Veracruz" },
    { src: "/images/directorio/estacion-bomberos-veracruz-02.avif", alt: "Bomberos HAZMAT Coatzacoalcos petroqu\xEDmica" },
    { src: "/images/directorio/estacion-bomberos-veracruz-03.avif", alt: "Rescate mar\xEDtimo Puerto de Veracruz SEMAR" }
  ];
  const galleryImages = [
    { src: "/images/directorio/bomberos-veracruz-puerto.avif", alt: "Emergencias portuarias Puerto de Veracruz" },
    { src: "/images/directorio/bomberos-veracruz-pemex.avif", alt: "HAZMAT refiner\xEDa PEMEX Minatitl\xE1n" },
    { src: "/images/directorio/bomberos-veracruz-huracan.avif", alt: "Operativo huracanes costa veracruzana" },
    { src: "/images/directorio/bomberos-veracruz-carnaval.avif", alt: "Cobertura Carnaval de Veracruz" }
  ];
  const emergencyNumbers = [
    { name: "Emergencias", number: "911" },
    { name: "Bomberos Puerto Veracruz", number: "(229) 932-0202" },
    { name: "HAZMAT Coatzacoalcos", number: "(921) 211-7000" },
    { name: "Bomberos Xalapa", number: "(228) 842-1400" },
    { name: "Emergencias PEMEX", number: "(921) 211-7000" },
    { name: "SEMAR Rescate Mar\xEDtimo", number: "(229) 932-0090" },
    { name: "VHF Canal 16", number: "Mar\xEDtimo" }
  ];
  const regiones = [
    { nombre: "Zona Metropolitana Puerto Veracruz", desc: "Puerto comercial #1 de M\xE9xico (24M ton/a\xF1o), San Juan de Ul\xFAa, Boca del R\xEDo, Costa de Oro \u2014 rescate mar\xEDtimo coordinado SEMAR" },
    { nombre: "Corredor Petroqu\xEDmico Sur", desc: "Coatzacoalcos (mayor complejo petroqu\xEDmico de Latinoam\xE9rica), Minatitl\xE1n (refiner\xEDa 150,000 bbl/d\xEDa), Terminal Pajaritos \u2014 HAZMAT Nivel A" },
    { nombre: "Zona Capital Xalapa", desc: "Xalapa (capital, 500,000 hab.), Coatepec, Xico, Banderilla \u2014 neblina densa, carreteras sinuosas Veracruz-Xalapa" },
    { nombre: "Regi\xF3n Poza Rica \u2014 Huasteca", desc: "Poza Rica (pozos petroleros activos), Tuxpan (puerto), Papantla (El Taj\xEDn UNESCO), \xC1lamo \u2014 HAZMAT petrolero" },
    { nombre: "Corredor C\xF3rdoba-Orizaba", desc: "Cumbres de Maltrata (autopista m\xE1s peligrosa), Fort\xEDn, R\xEDo Blanco \u2014 industria azucarera, rescate vehicular en monta\xF1a" },
    { nombre: "Los Tuxtlas / Costa Sur", desc: "Catemaco, San Andr\xE9s Tuxtla, Reserva de la Bi\xF3sfera Los Tuxtlas \u2014 incendios forestales, ecoturismo" },
    { nombre: "Zona Inundable Papaloapan", desc: "Cosamaloapan, Tlacotalpan (UNESCO), Tierra Blanca \u2014 inundaciones severas, rescate acu\xE1tico" }
  ];
  const eppCards = [
    { icon: "oil", title: "HAZMAT Petrolero", desc: "Refiner\xEDa Minatitl\xE1n, Complejo Coatzacoalcos, Terminal Pajaritos \u2014 35% petroqu\xEDmica nacional" },
    { icon: "ship", title: "Rescate Mar\xEDtimo", desc: "Puerto comercial #1 M\xE9xico, coordinaci\xF3n SEMAR, VHF Canal 16, 24M ton/a\xF1o" },
    { icon: "hurricane", title: "Operativos Huracanes", desc: "745 km de costa, 2-3 ciclones/a\xF1o, Sistema de Alerta SMN, 95,000 evacuados" },
    { icon: "flame", title: "Eventos Masivos", desc: "Carnaval de Veracruz (1.5M asistentes), pirotecnia, carros aleg\xF3ricos" }
  ];
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-escalera-telescopica-01.avif",
    "/images/directorio/estacion-bomberos-mexico-01.avif",
    "/images/directorio/unidad-rescate-bomberos-01.avif",
    "/images/directorio/bomberos-entrenamiento-01.avif",
    "/images/directorio/bomberos-guardia-nocturna-scba-equipo-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("veracruz");
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de las ${estacionesVeracruz.length} estaciones de bomberos en Veracruz. Puerto comercial #1 de M\xE9xico (24M ton/a\xF1o), Complejo Petroqu\xEDmico Coatzacoalcos (mayor de Latinoam\xE9rica), Refiner\xEDa PEMEX Minatitl\xE1n (150,000 bbl/d\xEDa), 745 km de costa del Golfo, coordinaci\xF3n SEMAR rescate mar\xEDtimo, operativos huracanes, El Taj\xEDn UNESCO, Carnaval de Veracruz. Emergencias 911.`,
    numberOfItems: estacionesVeracruz.length,
    itemListElement: estacionesVeracruz.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.municipio || e.zona,
          addressRegion: estado,
          addressCountry: "MX"
        },
        telephone: e.telefono,
        url: `https://bombero.mx/directorio/${slug}/${e.slug}`
      }
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx/" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: estado, item: `https://bombero.mx/directorio/${slug}` }
    ]
  };
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesVeracruz, "municipios": getMunicipios(), "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en Veracruz | ${estacionesVeracruz.length} Estaciones | Puerto #1 M\xE9xico | PEMEX | HAZMAT | BOMBERO.MX`, "description": "Directorio oficial de las 36 estaciones de bomberos en Veracruz. Puerto comercial #1 de M\xE9xico (24M toneladas/a\xF1o), Complejo Petroqu\xEDmico Coatzacoalcos (mayor de Latinoam\xE9rica), Refiner\xEDa PEMEX Minatitl\xE1n (150,000 bbl/d\xEDa), 745 km de costa del Golfo de M\xE9xico, coordinaci\xF3n SEMAR para rescate mar\xEDtimo, operativos huracanes. Emergencias 911.", "data-astro-cid-usmr7wzw": true }, { "hero-seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "hero-seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="hero-seo__block" data-astro-cid-usmr7wzw> <h2 class="hero-seo__title" data-astro-cid-usmr7wzw>Puerto de Veracruz: La Puerta de México al Mundo</h2> <p class="hero-seo__text" data-astro-cid-usmr7wzw>
El <strong data-astro-cid-usmr7wzw>Puerto de Veracruz</strong> es el <strong data-astro-cid-usmr7wzw>principal puerto comercial de México</strong>,
        movilizando más de <strong data-astro-cid-usmr7wzw>24 millones de toneladas anuales</strong> de carga —el <strong data-astro-cid-usmr7wzw>60%
        del comercio exterior marítimo del país</strong>—. La Estación Central de Bomberos Puerto Veracruz
        mantiene coordinación permanente con <strong data-astro-cid-usmr7wzw>SEMAR</strong> (Secretaría de Marina) para emergencias
        marítimas, utilizando VHF Canal 16 las 24 horas. El rescate en buques, muelles, contenedores y la
        Fortaleza de <strong data-astro-cid-usmr7wzw>San Juan de Ulúa</strong> (patrimonio colonial) exige protocolos especializados
        y personal bilingüe para tripulaciones internacionales.
</p> </div> <div class="hero-seo__block" data-astro-cid-usmr7wzw> <h2 class="hero-seo__title" data-astro-cid-usmr7wzw>Coatzacoalcos: El Mayor Complejo Petroquímico de Latinoamérica</h2> <p class="hero-seo__text" data-astro-cid-usmr7wzw>
El <strong data-astro-cid-usmr7wzw>Corredor Petroquímico Coatzacoalcos-Minatitlán</strong> concentra la mayor infraestructura
        de hidrocarburos de América Latina: los complejos <strong data-astro-cid-usmr7wzw>Pajaritos, Cangrejera y Morelos</strong>,
        la <strong data-astro-cid-usmr7wzw>Refinería PEMEX Minatitlán</strong> (<strong data-astro-cid-usmr7wzw>150,000 barriles/día</strong>) y la
<strong data-astro-cid-usmr7wzw>Terminal Marítima de exportación</strong>. Los bomberos HAZMAT de esta zona operan con
<strong data-astro-cid-usmr7wzw>certificación Nivel A</strong>, protocolos API 2021, ISO 45001, y coordinación 24/7 con
        las brigadas internas de PEMEX. El <strong data-astro-cid-usmr7wzw>35% de la producción petroquímica nacional</strong>
se procesa aquí, haciendo de esta zona una de las más críticas industrialmente en todo México.
</p> </div> ` })}`, "intro": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "intro" }, { "default": ($$result3) => renderTemplate`
Directorio completo del <strong data-astro-cid-usmr7wzw>H. Cuerpo de Bomberos de Veracruz</strong>.
    El tercer estado más poblado de México (<strong data-astro-cid-usmr7wzw>8 millones de habitantes</strong>)
    y el de mayor importancia estratégica para el comercio exterior:
    el <strong data-astro-cid-usmr7wzw>Puerto de Veracruz</strong> mueve <strong data-astro-cid-usmr7wzw>24 millones de toneladas anuales</strong>
(60% del comercio marítimo mexicano), mientras el <strong data-astro-cid-usmr7wzw>Complejo Petroquímico de Coatzacoalcos</strong>
es el <strong data-astro-cid-usmr7wzw>mayor de Latinoamérica</strong>. Con <strong data-astro-cid-usmr7wzw>745 km de costa</strong> expuesta
    a huracanes y una industria petrolera que representa el <strong data-astro-cid-usmr7wzw>35% de la producción
    petroquímica nacional</strong>, Veracruz requiere bomberos con certificaciones
    HAZMAT de clase mundial y coordinación permanente con <strong data-astro-cid-usmr7wzw>SEMAR</strong> y <strong data-astro-cid-usmr7wzw>PEMEX</strong>.
` })}`, "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` <section class="seo-content" data-astro-cid-usmr7wzw> <h2 data-astro-cid-usmr7wzw>El H. Cuerpo de Bomberos de Veracruz</h2> <p data-astro-cid-usmr7wzw>
El <strong data-astro-cid-usmr7wzw>H. Cuerpo de Bomberos de Veracruz</strong> protege a más de <strong data-astro-cid-usmr7wzw>8 millones de
        veracruzanos</strong> distribuidos en <strong data-astro-cid-usmr7wzw>71,820 km²</strong> de territorio que abarca desde
        las cumbres nevadas del Pico de Orizaba (5,636 msnm, la montaña más alta de México) hasta los
<strong data-astro-cid-usmr7wzw>745 kilómetros de costa</strong> del Golfo de México. Veracruz es el tercer estado más
        poblado del país, el de mayor longitud costera, y el corazón de la industria petrolera y petroquímica
        mexicana. Su red de <strong data-astro-cid-usmr7wzw>36 estaciones de bomberos</strong> es la tercera más grande de México
        después de la Ciudad de México y el Estado de México.
</p> <h3 data-astro-cid-usmr7wzw>¿Cómo contactar a los bomberos en Veracruz?</h3> <p data-astro-cid-usmr7wzw>
En cualquier <strong data-astro-cid-usmr7wzw>emergencia en Veracruz</strong>, marca el <strong data-astro-cid-usmr7wzw>911</strong>. Para contacto
        directo: <strong data-astro-cid-usmr7wzw>Bomberos Puerto Veracruz (229) 932-0202</strong>, <strong data-astro-cid-usmr7wzw>Bomberos Xalapa
        (228) 842-1400</strong>, <strong data-astro-cid-usmr7wzw>HAZMAT Coatzacoalcos (921) 211-7000</strong>, <strong data-astro-cid-usmr7wzw>Bomberos
        Poza Rica (782) 823-3333</strong>. Para emergencias marítimas: <strong data-astro-cid-usmr7wzw>SEMAR (229) 932-0090</strong>
o <strong data-astro-cid-usmr7wzw>VHF Canal 16</strong>. Para emergencias PEMEX: <strong data-astro-cid-usmr7wzw>(921) 211-7000</strong>.
</p> <h3 data-astro-cid-usmr7wzw>Puerto de Veracruz: El Puerto Comercial #1 de México</h3> <p data-astro-cid-usmr7wzw>
El <strong data-astro-cid-usmr7wzw>Puerto de Veracruz</strong> es el principal punto de entrada y salida del comercio
        marítimo mexicano, movilizando más de <strong data-astro-cid-usmr7wzw>24 millones de toneladas de carga anualmente</strong>
—lo que representa el <strong data-astro-cid-usmr7wzw>60% del comercio exterior marítimo del país</strong>—. La actividad
        portuaria incluye contenedores, granel, vehículos, carga general y cruceros internacionales. Los
        riesgos de emergencia son extraordinariamente diversos: incendios en buques, derrames de sustancias
        peligrosas en muelles, colapso de contenedores, rescate de tripulantes y emergencias en la histórica
        Fortaleza de <strong data-astro-cid-usmr7wzw>San Juan de Ulúa</strong>. La coordinación permanente con <strong data-astro-cid-usmr7wzw>SEMAR</strong>
y la <strong data-astro-cid-usmr7wzw>API Puerto Veracruz</strong> es fundamental para tiempos de respuesta de <strong data-astro-cid-usmr7wzw>5-7
        minutos</strong> en la zona portuaria.
</p> <h3 data-astro-cid-usmr7wzw>Corredor Petroquímico Coatzacoalcos-Minatitlán</h3> <p data-astro-cid-usmr7wzw>
El <strong data-astro-cid-usmr7wzw>Corredor Petroquímico Coatzacoalcos-Minatitlán</strong> es el <strong data-astro-cid-usmr7wzw>mayor complejo
        de hidrocarburos de América Latina</strong>. Incluye tres complejos petroquímicos —<strong data-astro-cid-usmr7wzw>Pajaritos,
        Cangrejera y Morelos</strong>—, la <strong data-astro-cid-usmr7wzw>Refinería PEMEX Minatitlán</strong> con capacidad de
<strong data-astro-cid-usmr7wzw>150,000 barriles por día</strong>, y la <strong data-astro-cid-usmr7wzw>Terminal Marítima Pajaritos</strong> de
        exportación. El <strong data-astro-cid-usmr7wzw>35% de la producción petroquímica nacional</strong> se procesa en esta zona.
        Los bomberos HAZMAT de Coatzacoalcos y Minatitlán operan con <strong data-astro-cid-usmr7wzw>certificación Nivel A</strong>
(el más alto para materiales peligrosos), protocolos API 2021 e ISO 45001, y mantienen coordinación
        permanente con las brigadas contraincendios internas de PEMEX. Los riesgos incluyen: fugas de gas
        cloro, ácido fluorhídrico, amoniaco anhidro, benceno, etileno y cientos de productos petroquímicos
        con fichas de seguridad específicas.
</p> <h3 data-astro-cid-usmr7wzw>Temporada de Huracanes: 745 km de Costa Vulnerable</h3> <p data-astro-cid-usmr7wzw>
Veracruz tiene la <strong data-astro-cid-usmr7wzw>mayor longitud costera de México</strong> sobre el Golfo, con <strong data-astro-cid-usmr7wzw>745
        kilómetros</strong> expuestos a la temporada de huracanes (junio-noviembre). El estado recibe en
        promedio <strong data-astro-cid-usmr7wzw>2-3 ciclones tropicales por año</strong>, incluyendo algunos de categoría mayor
        como Karl (2010) y Grace (2021). El <strong data-astro-cid-usmr7wzw>Sistema Estatal de Alerta de Huracanes</strong> opera
        con cuatro niveles (Verde, Amarillo, Naranja, Rojo) y coordina con el <strong data-astro-cid-usmr7wzw>Servicio Meteorológico
        Nacional (SMN)</strong>, <strong data-astro-cid-usmr7wzw>SEMAR</strong>, <strong data-astro-cid-usmr7wzw>Ejército</strong> y <strong data-astro-cid-usmr7wzw>Protección Civil
        Federal</strong>. Durante contingencias, se activan hasta <strong data-astro-cid-usmr7wzw>400 elementos de bomberos</strong>,
<strong data-astro-cid-usmr7wzw>28 embarcaciones de rescate</strong>, <strong data-astro-cid-usmr7wzw>65 vehículos 4x4</strong> y <strong data-astro-cid-usmr7wzw>180 refugios
        temporales</strong> con capacidad para <strong data-astro-cid-usmr7wzw>95,000 personas</strong>.
</p> <h3 data-astro-cid-usmr7wzw>El Carnaval de Veracruz: 1.5 Millones de Asistentes</h3> <p data-astro-cid-usmr7wzw>
El <strong data-astro-cid-usmr7wzw>Carnaval de Veracruz</strong> es uno de los más grandes del mundo y el más importante
        de México, atrayendo más de <strong data-astro-cid-usmr7wzw>1.5 millones de visitantes</strong> durante 9 días de festividades
        (febrero-marzo). Los desfiles de <strong data-astro-cid-usmr7wzw>carros alegóricos</strong>, comparsas, pirotecnia y eventos
        nocturnos generan riesgos específicos que requieren un operativo especial. Durante el Carnaval, el
        personal de bomberos se refuerza al <strong data-astro-cid-usmr7wzw>150%</strong>, con puestos de socorro cada 200 metros
        en las rutas de desfile y coordinación con Cruz Roja, Protección Civil y servicios médicos privados.
        La Estación de Bomberos Carnaval Veracruz está especializada en emergencias de eventos masivos y
        pirotecnia.
</p> <h3 data-astro-cid-usmr7wzw>El Tajín y el Patrimonio UNESCO</h3> <p data-astro-cid-usmr7wzw> <strong data-astro-cid-usmr7wzw>El Tajín</strong>, la ciudad prehispánica totonaca declarada <strong data-astro-cid-usmr7wzw>Patrimonio de la
        Humanidad por la UNESCO en 1992</strong>, es uno de los sitios arqueológicos más importantes de
        Mesoamérica. La <strong data-astro-cid-usmr7wzw>Estación de Bomberos Papantla</strong> cubre este sitio con un protocolo
        especial de protección de patrimonio que limita el uso de agua en las estructuras arqueológicas
        para evitar daños. La coordinación directa con el <strong data-astro-cid-usmr7wzw>INAH</strong> garantiza respuestas
        apropiadas ante cualquier emergencia. Además, la ciudad colonial de <strong data-astro-cid-usmr7wzw>Tlacotalpan</strong>,
        también UNESCO, y la Reserva de la Biósfera <strong data-astro-cid-usmr7wzw>Los Tuxtlas</strong> requieren protocolos
        especializados de los bomberos veracruzanos.
</p> <h3 data-astro-cid-usmr7wzw>Rescate Marítimo y Coordinación con SEMAR</h3> <p data-astro-cid-usmr7wzw>
Los bomberos de Veracruz mantienen coordinación permanente con la <strong data-astro-cid-usmr7wzw>Secretaría de Marina
        (SEMAR)</strong> para emergencias marítimas. La Estación Puerto Veracruz opera con monitoreo
<strong data-astro-cid-usmr7wzw>VHF Canal 16</strong> las 24 horas —el canal internacional de emergencias marítimas— y
        cuenta con lanchas de rescate, equipo de buceo y acceso a remolcadores con capacidad bombero.
        El personal incluye elementos con <strong data-astro-cid-usmr7wzw>inglés operativo</strong> para coordinación con
        tripulaciones internacionales. El tiempo de respuesta en la zona portuaria es de <strong data-astro-cid-usmr7wzw>10
        minutos</strong>, con apoyo de SEMAR para operaciones en aguas profundas.
</p> <h3 data-astro-cid-usmr7wzw>Servicios de los Bomberos Veracruzanos</h3> <p data-astro-cid-usmr7wzw>
Los bomberos de Veracruz están certificados para atender:
<strong data-astro-cid-usmr7wzw>emergencias HAZMAT petroquímicas</strong> (Nivel A: cloro, ácido fluorhídrico, amoniaco, benceno);
<strong data-astro-cid-usmr7wzw>rescate marítimo portuario</strong> (coordinación SEMAR, VHF Canal 16, buceo);
<strong data-astro-cid-usmr7wzw>operativos de huracanes</strong> (evacuación masiva, rescate acuático, refugios);
<strong data-astro-cid-usmr7wzw>incendios en refinería</strong> (PEMEX Minatitlán 150,000 bbl/día);
<strong data-astro-cid-usmr7wzw>rescate vehicular en montaña</strong> (Cumbres de Maltrata, autopista más peligrosa);
<strong data-astro-cid-usmr7wzw>protección de patrimonio UNESCO</strong> (El Tajín, Tlacotalpan);
<strong data-astro-cid-usmr7wzw>emergencias de eventos masivos</strong> (Carnaval 1.5M asistentes);
<strong data-astro-cid-usmr7wzw>rescate acuático en inundaciones</strong> (Cuenca del Papaloapan);
<strong data-astro-cid-usmr7wzw>incendios forestales</strong> (Reserva Los Tuxtlas) y
<strong data-astro-cid-usmr7wzw>emergencias aeroportuarias</strong> (Aeropuerto Internacional VER).
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/veracruz.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/veracruz.astro";
const $$url = "/directorio/veracruz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Veracruz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
