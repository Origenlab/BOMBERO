import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, e as estacionesTabasco, E as ESTADISTICAS_TABASCO } from '../../chunks/estaciones-tabasco_BHCrlTvf.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Tabasco = createComponent(($$result, $$props, $$slots) => {
  const estado = "Tabasco";
  const sigla = "TAB";
  const slug = "tabasco";
  const heroThumbs = [
    { src: "/images/directorio/estacion-bomberos-tabasco-01.avif", alt: "Bomberos de Tabasco en rescate acu\xE1tico por inundaci\xF3n" },
    { src: "/images/directorio/estacion-bomberos-tabasco-02.avif", alt: "Unidad HAZMAT en Refiner\xEDa Olmeca Dos Bocas" },
    { src: "/images/directorio/estacion-bomberos-tabasco-03.avif", alt: "Lancha de rescate en Pantanos de Centla" }
  ];
  const galleryImages = [
    { src: "/images/directorio/bomberos-tabasco-pemex.avif", alt: "Emergencia HAZMAT en instalaciones PEMEX" },
    { src: "/images/directorio/bomberos-tabasco-inundacion.avif", alt: "Evacuaci\xF3n durante inundaci\xF3n del Grijalva" },
    { src: "/images/directorio/bomberos-tabasco-refineria.avif", alt: "Brigada en Refiner\xEDa Olmeca Dos Bocas" },
    { src: "/images/directorio/bomberos-tabasco-centla.avif", alt: "Rescate acu\xE1tico en Pantanos de Centla" }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "993 315 3700", label: "Bomberos Villahermosa" },
    { number: "933 333 3900", label: "Bomberos Para\xEDso" },
    { number: "937 372 0600", label: "Bomberos C\xE1rdenas" }
  ];
  const regiones = [
    { nombre: "Zona Centro", desc: "Villahermosa (capital), aeropuerto, instalaciones PEMEX, Laguna de las Ilusiones" },
    { nombre: "Zona Petrolera - Dos Bocas", desc: "Para\xEDso (Refiner\xEDa Olmeca), Cunduac\xE1n, Macuspana \u2014 HAZMAT industrial m\xE1ximo nivel" },
    { nombre: "Regi\xF3n Chontalpa", desc: "C\xE1rdenas, Comalcalco (cacao #1), Jalpa de M\xE9ndez, Huimanguillo \u2014 agroindustria y ganader\xEDa" },
    { nombre: "Regi\xF3n R\xEDos - Usumacinta", desc: "Tenosique, Balanc\xE1n, Emiliano Zapata \u2014 frontera Guatemala, rescate fluvial" },
    { nombre: "Pantanos y Costa", desc: "Centla (Reserva Bi\xF3sfera), Nacajuca (comunidades Chontal) \u2014 humedales y delta" }
  ];
  const eppCards = [
    { title: "HAZMAT Petrolero", desc: "Nivel A para crudo, gas H\u2082S, productos refinados en Dos Bocas y PEMEX", icon: "hazmat" },
    { title: "Rescate Acu\xE1tico", desc: "Lanchas y equipo para inundaciones, r\xEDos Grijalva-Usumacinta y Pantanos de Centla", icon: "water" },
    { title: "ARFF Aeroportuario", desc: "Categor\xEDa 6 ICAO en Aeropuerto Carlos Rovirosa P\xE9rez", icon: "plane" },
    { title: "Espumas AFFF", desc: "Para incendios en tanques de hidrocarburos y terminales mar\xEDtimas", icon: "fire" }
  ];
  const municipios = getMunicipios();
  const keywords = [
    "bomberos tabasco",
    "estaciones bomberos villahermosa",
    "bomberos villahermosa",
    "emergencias tabasco 911",
    "bomberos paraiso tabasco",
    "refineria olmeca dos bocas bomberos",
    "cuerpo bomberos tabasco",
    "bomberos pemex tabasco",
    "proteccion civil tabasco",
    "bomberos inundaciones tabasco",
    "rescate acuatico grijalva",
    "hazmat petrolero sureste"
  ];
  const estadosVecinos = getEstadosVecinos("tabasco");
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/bombero-poniendose-chaqueton-vestidor-02.avif",
    "/images/directorio/casco-bombero-negro-letras-plateadas-01.avif"
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de las ${estacionesTabasco.length} estaciones de bomberos en Tabasco. Villahermosa, Para\xEDso-Dos Bocas, Macuspana, C\xE1rdenas, Comalcalco. Petr\xF3leo PEMEX, Refiner\xEDa Olmeca, inundaciones Grijalva-Usumacinta y Pantanos de Centla. Emergencias 911.`,
    numberOfItems: estacionesTabasco.length,
    itemListElement: estacionesTabasco.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.municipio,
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
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "title": `Bomberos en ${estado} | ${estacionesTabasco.length} Estaciones | Directorio Oficial BOMBERO.MX`, "description": `Directorio oficial de las ${estacionesTabasco.length} estaciones de bomberos en Tabasco. Villahermosa, Para\xEDso-Dos Bocas, Macuspana, C\xE1rdenas. PEMEX 25-30% petr\xF3leo nacional, Refiner\xEDa Olmeca, inundaciones Grijalva-Usumacinta, Pantanos de Centla. Emergencias 911.`, "keywords": keywords, "canonical": `https://bombero.mx/directorio/${slug}`, "estado": estado, "sigla": sigla, "slug": slug, "totalEstaciones": estacionesTabasco.length, "municipiosCount": ESTADISTICAS_TABASCO.municipios_cubiertos, "poblacion": "2.4M", "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "estaciones": estacionesTabasco, "stationImages": stationImages, "municipios": municipios, "estadosVecinos": estadosVecinos, "jsonLd": [itemListSchema, breadcrumbSchema], "data-astro-cid-xxcpe5nt": true }, { "hero-seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "hero-seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="hero-seo__title" data-astro-cid-xxcpe5nt>Refinería Olmeca: El Mayor Riesgo Industrial</h2> <p class="hero-seo__text" data-astro-cid-xxcpe5nt>
La <strong data-astro-cid-xxcpe5nt>Refinería Olmeca en Dos Bocas</strong> (Paraíso), inaugurada en 2023 con capacidad de
<strong data-astro-cid-xxcpe5nt>340,000 barriles diarios</strong>, es el mayor proyecto energético en la historia de México.
      Los bomberos de Paraíso operan con los estándares más altos de <strong data-astro-cid-xxcpe5nt>HAZMAT de refinación</strong>
del sureste: gasolina, diésel, turbosina, gas H₂S y emergencias en tanques de almacenamiento.
</p> <h2 class="hero-seo__title" data-astro-cid-xxcpe5nt>Estado Más Inundable de México</h2> <p class="hero-seo__text" data-astro-cid-xxcpe5nt>
Las crecidas del <strong data-astro-cid-xxcpe5nt>Grijalva y el Usumacinta</strong> —los dos ríos más caudalosos del país—
      han inundado hasta el <strong data-astro-cid-xxcpe5nt>80% del territorio tabasqueño</strong> (2007), afectando 1.5 millones
      de personas. Los bomberos tabasqueños dominan el <strong data-astro-cid-xxcpe5nt>rescate acuático fluvial</strong>
y operaciones de evacuación masiva con flotas de lanchas.
</p> <h2 class="hero-seo__title" data-astro-cid-xxcpe5nt>PEMEX: 25-30% del Petróleo Nacional</h2> <p class="hero-seo__text" data-astro-cid-xxcpe5nt>
Tabasco produce casi un tercio del petróleo y gas de México a través de <strong data-astro-cid-xxcpe5nt>PEMEX
      Exploración y Producción</strong>. Las estaciones de Villahermosa Norte, Macuspana y Cunduacán
      están especializadas en emergencias con hidrocarburos, derrames de crudo y gas sulfhídrico (H₂S).
</p> ` })}`, "intro": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "intro" }, { "default": ($$result3) => renderTemplate`
Directorio completo del <strong data-astro-cid-xxcpe5nt>H. Cuerpo de Bomberos de Tabasco</strong>.
    Encuentra teléfonos de emergencia, direcciones y servicios en el corazón petrolero de México:
    sede de la <strong data-astro-cid-xxcpe5nt>Refinería Olmeca Dos Bocas</strong>, ríos Grijalva y Usumacinta,
    y el <strong data-astro-cid-xxcpe5nt>estado con mayor riesgo de inundaciones</strong> del país.
` })}`, "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` <section class="seo-content" data-astro-cid-xxcpe5nt> <h2 data-astro-cid-xxcpe5nt>El H. Cuerpo de Bomberos de Tabasco</h2> <p data-astro-cid-xxcpe5nt>
El <strong data-astro-cid-xxcpe5nt>H. Cuerpo de Bomberos de Tabasco</strong> protege a más de <strong data-astro-cid-xxcpe5nt>2.4 millones de tabasqueños</strong>
en uno de los estados más estratégicos de México por su riqueza petrolera y su singular geografía hídrica.
        Con 24,661 km² de territorio surcado por ríos, lagunas y pantanos, Tabasco presenta condiciones de emergencia
        únicas en el país que han forjado a un cuerpo de bomberos especializado tanto en HAZMAT industrial como en
        rescate acuático de alta complejidad.
</p> <h3 data-astro-cid-xxcpe5nt>Refinería Olmeca Dos Bocas</h3> <p data-astro-cid-xxcpe5nt>
La <strong data-astro-cid-xxcpe5nt>Refinería Olmeca de Dos Bocas</strong>, en el municipio de Paraíso, es el mayor proyecto
        energético construido en México en décadas. Con una inversión superior a <strong data-astro-cid-xxcpe5nt>17,000 millones de dólares</strong>
y capacidad de <strong data-astro-cid-xxcpe5nt>340,000 barriles diarios</strong>, esta mega-refinería genera riesgos HAZMAT de
        máxima complejidad: incendios de tanques, derrames de hidrocarburos refinados, fugas de gas H₂S y
        emergencias costeras en el Golfo de México.
</p> <h3 data-astro-cid-xxcpe5nt>Inundaciones: El Principal Riesgo Crónico</h3> <p data-astro-cid-xxcpe5nt>
La llanura fluvial de Tabasco, dominada por los ríos <strong data-astro-cid-xxcpe5nt>Grijalva y Usumacinta</strong>, es la zona
        con mayor frecuencia de inundaciones de México. En 2007, la catástrofe hídrica más severa del país en el
        siglo XXI inundó el <strong data-astro-cid-xxcpe5nt>80% del territorio tabasqueño</strong>. Los bomberos han desarrollado protocolos
        únicos de <strong data-astro-cid-xxcpe5nt>evacuación masiva</strong>, rescate en corriente, y operación de flotas de lanchas
        para atender comunidades rurales inaccesibles por tierra.
</p> <h3 data-astro-cid-xxcpe5nt>Pantanos de Centla: Reserva de la Biósfera</h3> <p data-astro-cid-xxcpe5nt>
Los <strong data-astro-cid-xxcpe5nt>Pantanos de Centla</strong> son la Reserva de la Biósfera de humedales más grande del
        sureste mexicano, declarada sitio Ramsar de importancia internacional. Sus 302,706 hectáreas de pantanos,
        lagunas, manglares y canales fluviales exigen bomberos con <strong data-astro-cid-xxcpe5nt>certificación avanzada en rescate
        acuático</strong>: manejo de lanchas en zonas de alta vegetación y buceo en aguas turbias.
</p> <h3 data-astro-cid-xxcpe5nt>Cacao y Patrimonio Cultural</h3> <p data-astro-cid-xxcpe5nt>
Tabasco es el <strong data-astro-cid-xxcpe5nt>principal productor de cacao de México</strong>, con Comalcalco como capital
        mundial del chocolate artesanal. La región alberga la <strong data-astro-cid-xxcpe5nt>Zona Arqueológica La Venta</strong>
(civilización Olmeca, madre de Mesoamérica) y la <strong data-astro-cid-xxcpe5nt>Zona Arqueológica Comalcalco</strong>
(único sitio Maya construido en ladrillo cocido). Los bomberos tienen protocolos especiales de
        protección del patrimonio histórico.
</p> <h3 data-astro-cid-xxcpe5nt>Frontera Guatemala y Corredor Migratorio</h3> <p data-astro-cid-xxcpe5nt> <strong data-astro-cid-xxcpe5nt>Tenosique</strong>, a orillas del río Usumacinta, es punto crítico del corredor migratorio
        centroamericano. Los bomberos coordinan con el INM, Guardia Nacional y organizaciones humanitarias
        para atender emergencias que involucran a personas migrantes, además de realizar frecuentes
<strong data-astro-cid-xxcpe5nt>operaciones de rescate acuático</strong> en el río fronterizo.
</p> <h3 data-astro-cid-xxcpe5nt>Servicios de los Bomberos Tabasqueños</h3> <p data-astro-cid-xxcpe5nt>
Los bomberos de Tabasco están certificados para atender:
<strong data-astro-cid-xxcpe5nt>incendios industriales HAZMAT</strong> (crudo, gas natural, H₂S, productos refinados);
<strong data-astro-cid-xxcpe5nt>rescate acuático fluvial y lacustre</strong> (Grijalva, Usumacinta, Pantanos de Centla);
<strong data-astro-cid-xxcpe5nt>evacuaciones masivas por inundación</strong>;
<strong data-astro-cid-xxcpe5nt>rescate aeroportuario ARFF</strong> en el Aeropuerto Carlos Rovirosa;
<strong data-astro-cid-xxcpe5nt>incendios forestales y de manglar</strong>;
<strong data-astro-cid-xxcpe5nt>rescate espeleológico</strong> en las Grutas de Coconá y Villa Luz;
<strong data-astro-cid-xxcpe5nt>apoyo humanitario migratorio</strong> en frontera Guatemala; y
<strong data-astro-cid-xxcpe5nt>coordinación con PEMEX</strong> ante emergencias en pozos, ductos y plantas.
</p> <h3 data-astro-cid-xxcpe5nt>¿Cómo contactar a los Bomberos en Tabasco?</h3> <p data-astro-cid-xxcpe5nt>
En cualquier <strong data-astro-cid-xxcpe5nt>emergencia en Tabasco</strong>, marca el <strong data-astro-cid-xxcpe5nt>911</strong>.
        El Centro Estatal de Emergencias despacha la unidad más cercana. Para contacto directo:
<strong data-astro-cid-xxcpe5nt>Villahermosa 993 315 3700</strong>,
<strong data-astro-cid-xxcpe5nt>Paraíso 933 333 3900</strong>,
<strong data-astro-cid-xxcpe5nt>Macuspana 936 362 0500</strong>,
<strong data-astro-cid-xxcpe5nt>Cárdenas 937 372 0600</strong>,
<strong data-astro-cid-xxcpe5nt>Comalcalco 933 334 1280</strong>.
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tabasco.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tabasco.astro";
const $$url = "/directorio/tabasco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tabasco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
