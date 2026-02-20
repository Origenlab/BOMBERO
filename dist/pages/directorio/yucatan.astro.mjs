import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesYucatan, b as getMunicipios } from '../../chunks/estaciones-yucatan_wGnjLXOj.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Yucatan = createComponent(($$result, $$props, $$slots) => {
  const estado = "Yucat\xE1n";
  const sigla = "YUC";
  const slug = "yucatan";
  const heroThumbs = [
    { src: "/images/directorio/estacion-bomberos-yucatan-01.avif", alt: "Cuartel Central de Bomberos de M\xE9rida Yucat\xE1n" },
    { src: "/images/directorio/estacion-bomberos-yucatan-02.avif", alt: "Rescate en cenotes Yucat\xE1n bomberos" },
    { src: "/images/directorio/estacion-bomberos-yucatan-03.avif", alt: "Bomberos Chich\xE9n Itz\xE1 protecci\xF3n patrimonio" }
  ];
  const galleryImages = [
    { src: "/images/directorio/bomberos-yucatan-cenotes.avif", alt: "Rescate acu\xE1tico en cenotes Yucat\xE1n" },
    { src: "/images/directorio/bomberos-yucatan-chichen.avif", alt: "Protecci\xF3n Chich\xE9n Itz\xE1 Maravilla del Mundo" },
    { src: "/images/directorio/bomberos-yucatan-merida.avif", alt: "Emergencias Centro Hist\xF3rico M\xE9rida" },
    { src: "/images/directorio/bomberos-yucatan-progreso.avif", alt: "Emergencias Puerto Progreso cruceros" }
  ];
  const emergencyNumbers = [
    { name: "Emergencias", number: "911" },
    { name: "Cuartel Central M\xE9rida", number: "999 924 9242" },
    { name: "Bomberos Norte M\xE9rida", number: "999 944 1155" },
    { name: "Bomberos Progreso", number: "969 935 0909" },
    { name: "Bomberos Valladolid", number: "985 856 2121" },
    { name: "Protecci\xF3n Civil Yucat\xE1n", number: "999 930 3200" }
  ];
  const regiones = [
    { nombre: "Zona Metropolitana de M\xE9rida", desc: "M\xE9rida capital (1.2M hab.), Um\xE1n, Kanas\xEDn, Progreso \u2014 ciudad m\xE1s segura de M\xE9xico, Centro Hist\xF3rico colonial" },
    { nombre: "Corredor Chich\xE9n Itz\xE1", desc: "Chich\xE9n Itz\xE1 (Maravilla del Mundo), Valladolid (Pueblo M\xE1gico), Pist\xE9 \u2014 2.5 millones de visitantes/a\xF1o" },
    { nombre: "Costa Norte / Puerto Progreso", desc: "Progreso (cruceros 500,000 pax/a\xF1o), Chicxulub, Telchac \u2014 rescate mar\xEDtimo, huracanes" },
    { nombre: "Ruta Puuc UNESCO", desc: "Uxmal, Kabah, Labn\xE1, Sayil \u2014 ciudades mayas del Cl\xE1sico Terminal, selva baja" },
    { nombre: "Reservas Bi\xF3sfera", desc: "Celest\xFAn (flamencos UNESCO/RAMSAR), R\xEDa Lagartos, Las Coloradas \u2014 incendios forestales, manglares" },
    { nombre: "Oriente / Zona Maya", desc: "Tizim\xEDn, Izamal (Pueblo M\xE1gico), Motul \u2014 agroindustria, cenotes ceremoniales" }
  ];
  const eppCards = [
    { icon: "water", title: "Rescate en Cenotes", desc: "6,000+ cenotes, buceo en cavernas, rescate t\xE9cnico acu\xE1tico especializado" },
    { icon: "monument", title: "Patrimonio UNESCO", desc: "Chich\xE9n Itz\xE1 (Maravilla del Mundo), Uxmal, protocolos INAH" },
    { icon: "ship", title: "Puerto Cruceros", desc: "Progreso: 500,000 cruceristas/a\xF1o, coordinaci\xF3n API, rescate mar\xEDtimo" },
    { icon: "flamingo", title: "Reservas Bi\xF3sfera", desc: "Celest\xFAn y R\xEDa Lagartos \u2014 flamencos rosados, manglares RAMSAR" }
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
    "/images/directorio/cuartel-bomberos-lockers-personal-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("yucatan");
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de las ${estacionesYucatan.length} estaciones de bomberos en Yucat\xE1n. M\xE9rida (ciudad m\xE1s segura de M\xE9xico), Chich\xE9n Itz\xE1 (Maravilla del Mundo), Uxmal UNESCO, 6,000+ cenotes, Puerto Progreso (cruceros), Reservas Bi\xF3sfera Celest\xFAn y R\xEDa Lagartos. Rescate acu\xE1tico especializado en cenotes y cavernas. Emergencias 911.`,
    numberOfItems: estacionesYucatan.length,
    itemListElement: estacionesYucatan.map((e, i) => ({
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
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesYucatan, "municipios": getMunicipios(), "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en Yucat\xE1n | ${estacionesYucatan.length} Estaciones | Chich\xE9n Itz\xE1 | Cenotes | M\xE9rida | BOMBERO.MX`, "description": "Directorio oficial de las 18 estaciones de bomberos en Yucat\xE1n. M\xE9rida (ciudad m\xE1s segura de M\xE9xico), Chich\xE9n Itz\xE1 (Maravilla del Mundo), Uxmal UNESCO, rescate en 6,000+ cenotes, Puerto Progreso (cruceros internacionales), Reservas de la Bi\xF3sfera Celest\xFAn y R\xEDa Lagartos. Emergencias 911.", "data-astro-cid-gciqoxzk": true }, { "hero-seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "hero-seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="hero-seo__block" data-astro-cid-gciqoxzk> <h2 class="hero-seo__title" data-astro-cid-gciqoxzk>Chichén Itzá: Una de las 7 Maravillas del Mundo</h2> <p class="hero-seo__text" data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>Chichén Itzá</strong>, declarada <strong data-astro-cid-gciqoxzk>Patrimonio de la Humanidad por la UNESCO en 1988</strong>
y elegida como una de las <strong data-astro-cid-gciqoxzk>7 Maravillas del Mundo Moderno en 2007</strong>, recibe más de
<strong data-astro-cid-gciqoxzk>2.5 millones de visitantes anuales</strong>. La <strong data-astro-cid-gciqoxzk>Estación de Bomberos Chichén Itzá</strong>
opera con protocolos especiales del <strong data-astro-cid-gciqoxzk>INAH</strong> para protección del patrimonio arqueológico,
        limitando el uso de agua y químicos cerca de las estructuras mayas. El <strong data-astro-cid-gciqoxzk>Equinoccio de Kukulcán</strong>
(marzo y septiembre) concentra más de <strong data-astro-cid-gciqoxzk>50,000 visitantes en un solo día</strong>, activando
        operativos de seguridad masivos.
</p> </div> <div class="hero-seo__block" data-astro-cid-gciqoxzk> <h2 class="hero-seo__title" data-astro-cid-gciqoxzk>6,000+ Cenotes: Rescate Acuático de Clase Mundial</h2> <p class="hero-seo__text" data-astro-cid-gciqoxzk>
Yucatán tiene más de <strong data-astro-cid-gciqoxzk>6,000 cenotes</strong> —pozos naturales formados en el anillo del
<strong data-astro-cid-gciqoxzk>cráter de Chicxulub</strong> (el impacto que extinguió a los dinosaurios hace 66 millones
        de años)—. Los bomberos yucatecos son especialistas en <strong data-astro-cid-gciqoxzk>rescate acuático en cavernas inundadas</strong>,
<strong data-astro-cid-gciqoxzk>buceo técnico en cuevas submarinas</strong> y <strong data-astro-cid-gciqoxzk>recuperación de víctimas en cenotes</strong>.
        Los cenotes más visitados (Ik Kil, Suytun, X'Kekén) reciben miles de turistas diarios, generando
        emergencias que requieren equipos de buceo avanzado y conocimiento de sistemas de cuevas subterráneas.
</p> </div> ` })}`, "intro": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "intro" }, { "default": ($$result3) => renderTemplate`
Directorio completo del <strong data-astro-cid-gciqoxzk>H. Cuerpo de Bomberos de Yucatán</strong>.
    El estado alberga <strong data-astro-cid-gciqoxzk>Chichén Itzá</strong>, una de las <strong data-astro-cid-gciqoxzk>7 Maravillas del Mundo Moderno</strong>,
<strong data-astro-cid-gciqoxzk>Uxmal</strong> (UNESCO), y más de <strong data-astro-cid-gciqoxzk>6,000 cenotes</strong> —incluyendo el anillo
    del cráter de <strong data-astro-cid-gciqoxzk>Chicxulub</strong>, el asteroide que extinguió a los dinosaurios—.
<strong data-astro-cid-gciqoxzk>Mérida</strong>, la capital, es consistentemente la <strong data-astro-cid-gciqoxzk>ciudad más segura de México</strong>.
    Con <strong data-astro-cid-gciqoxzk>3.5 millones de turistas anuales</strong>, <strong data-astro-cid-gciqoxzk>Puerto Progreso</strong> recibiendo
    cruceros internacionales, y las <strong data-astro-cid-gciqoxzk>Reservas de la Biósfera Celestún y Ría Lagartos</strong>
(hogar de la mayor colonia de flamencos rosados de México), los bomberos yucatecos dominan
    rescate acuático en cenotes, protección de patrimonio y emergencias turísticas de clase mundial.
` })}`, "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` <section class="seo-content" data-astro-cid-gciqoxzk> <h2 data-astro-cid-gciqoxzk>El H. Cuerpo de Bomberos de Yucatán</h2> <p data-astro-cid-gciqoxzk>
El <strong data-astro-cid-gciqoxzk>H. Cuerpo de Bomberos de Yucatán</strong> protege a más de <strong data-astro-cid-gciqoxzk>2.3 millones de
        yucatecos</strong> y a los <strong data-astro-cid-gciqoxzk>3.5 millones de turistas</strong> que visitan el estado cada año.
        Yucatán es único en México por concentrar <strong data-astro-cid-gciqoxzk>dos sitios UNESCO</strong> (Chichén Itzá y Uxmal),
<strong data-astro-cid-gciqoxzk>dos Reservas de la Biósfera RAMSAR</strong> (Celestún y Ría Lagartos), más de <strong data-astro-cid-gciqoxzk>6,000
        cenotes</strong>, y una de las ciudades coloniales más importantes de América. <strong data-astro-cid-gciqoxzk>Mérida</strong>,
        la capital, es consistentemente clasificada como la <strong data-astro-cid-gciqoxzk>ciudad más segura de México</strong>,
        lo que refleja la eficiencia de sus servicios de emergencia.
</p> <h3 data-astro-cid-gciqoxzk>¿Cómo contactar a los bomberos en Yucatán?</h3> <p data-astro-cid-gciqoxzk>
En cualquier <strong data-astro-cid-gciqoxzk>emergencia en Yucatán</strong>, marca el <strong data-astro-cid-gciqoxzk>911</strong>. Para contacto
        directo: <strong data-astro-cid-gciqoxzk>Cuartel Central de Mérida 999 924 9242</strong>, <strong data-astro-cid-gciqoxzk>Bomberos Norte Mérida
        999 944 1155</strong>, <strong data-astro-cid-gciqoxzk>Bomberos Progreso 969 935 0909</strong>, <strong data-astro-cid-gciqoxzk>Bomberos Valladolid
        985 856 2121</strong>. Para emergencias en zonas arqueológicas, contactar también a <strong data-astro-cid-gciqoxzk>INAH
        Yucatán</strong>.
</p> <h3 data-astro-cid-gciqoxzk>Chichén Itzá y el Patrimonio Maya</h3> <p data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>Chichén Itzá</strong> es el sitio arqueológico más visitado de México y una de las
<strong data-astro-cid-gciqoxzk>7 Maravillas del Mundo Moderno</strong>, atrayendo más de <strong data-astro-cid-gciqoxzk>2.5 millones de visitantes
        anuales</strong>. La <strong data-astro-cid-gciqoxzk>Pirámide de Kukulcán</strong> (El Castillo), el <strong data-astro-cid-gciqoxzk>Cenote Sagrado</strong>,
        el <strong data-astro-cid-gciqoxzk>Templo de los Guerreros</strong> y el <strong data-astro-cid-gciqoxzk>Juego de Pelota</strong> más grande de
        Mesoamérica requieren protocolos de emergencia especializados. Durante los equinoccios de primavera
        y otoño, cuando la sombra de la serpiente desciende por la pirámide, se concentran hasta <strong data-astro-cid-gciqoxzk>50,000
        personas en un solo día</strong>. Los bomberos de Pisté y Valladolid mantienen operativos permanentes
        con el <strong data-astro-cid-gciqoxzk>INAH</strong> y coordinación de Protección Civil estatal.
</p> <h3 data-astro-cid-gciqoxzk>Rescate en Cenotes: Especialización Única</h3> <p data-astro-cid-gciqoxzk>
Yucatán tiene más de <strong data-astro-cid-gciqoxzk>6,000 cenotes</strong> catalogados, desde pequeños pozos hasta vastos
        sistemas de cuevas submarinas. El <strong data-astro-cid-gciqoxzk>Anillo de Cenotes</strong> marca el borde del cráter de
<strong data-astro-cid-gciqoxzk>Chicxulub</strong>, el impacto de asteroide que causó la extinción de los dinosaurios hace
        66 millones de años. Los bomberos yucatecos son especialistas en <strong data-astro-cid-gciqoxzk>rescate acuático en cavernas</strong>,
<strong data-astro-cid-gciqoxzk>buceo técnico en cuevas</strong> y <strong data-astro-cid-gciqoxzk>recuperación de víctimas en cenotes</strong>. Los
        cenotes turísticos más visitados —<strong data-astro-cid-gciqoxzk>Ik Kil</strong>, <strong data-astro-cid-gciqoxzk>Suytun</strong>, <strong data-astro-cid-gciqoxzk>X'Kekén</strong>,
<strong data-astro-cid-gciqoxzk>Dzitnup</strong>— generan emergencias que requieren equipos de buceo avanzado, conocimiento
        de sistemas de cuevas subterráneas y coordinación con operadores turísticos.
</p> <h3 data-astro-cid-gciqoxzk>Puerto Progreso: Cruceros Internacionales</h3> <p data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>Puerto Progreso</strong> es el principal puerto de cruceros de Yucatán, recibiendo más de
<strong data-astro-cid-gciqoxzk>500,000 cruceristas anuales</strong> de líneas como Carnival, Royal Caribbean, Norwegian y
        MSC. El muelle de Progreso es el segundo más largo del mundo (<strong data-astro-cid-gciqoxzk>6.5 km</strong>), lo que implica
        tiempos de respuesta especiales para emergencias en el extremo del muelle. Los bomberos de Progreso
        coordinan con la <strong data-astro-cid-gciqoxzk>API Puerto Progreso</strong> y <strong data-astro-cid-gciqoxzk>SEMAR</strong> para emergencias
        marítimas, y mantienen protocolos para evacuación de cruceros con hasta <strong data-astro-cid-gciqoxzk>5,000 pasajeros</strong>.
</p> <h3 data-astro-cid-gciqoxzk>Reservas de la Biósfera: Celestún y Ría Lagartos</h3> <p data-astro-cid-gciqoxzk>
Las Reservas de la Biósfera <strong data-astro-cid-gciqoxzk>Celestún</strong> y <strong data-astro-cid-gciqoxzk>Ría Lagartos</strong> son sitios
<strong data-astro-cid-gciqoxzk>RAMSAR</strong> de importancia internacional que albergan la <strong data-astro-cid-gciqoxzk>mayor colonia de flamenco
        rosado de México</strong> (más de 40,000 ejemplares). <strong data-astro-cid-gciqoxzk>Las Coloradas</strong>, con sus lagos
        rosados de sal, se han convertido en uno de los destinos fotográficos más populares del país. Los
        bomberos de estas zonas operan con protocolos especiales de <strong data-astro-cid-gciqoxzk>CONANP</strong> para protección
        de fauna, prevención de incendios en manglares y rescate en humedales. El riesgo de huracanes en
        la costa norte de Yucatán (junio-noviembre) activa operativos de evacuación coordinados con
        Protección Civil.
</p> <h3 data-astro-cid-gciqoxzk>Mérida: La Ciudad Más Segura de México</h3> <p data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>Mérida</strong>, conocida como "La Ciudad Blanca" por sus edificios coloniales de piedra
        caliza, es consistentemente clasificada como la <strong data-astro-cid-gciqoxzk>ciudad más segura de México</strong> en
        encuestas nacionales. Con más de <strong data-astro-cid-gciqoxzk>1.2 millones de habitantes</strong> en su zona metropolitana,
        es el centro económico, cultural y turístico del sureste mexicano. El <strong data-astro-cid-gciqoxzk>Centro Histórico</strong>,
        el <strong data-astro-cid-gciqoxzk>Paseo de Montejo</strong>, y la zona hotelera de <strong data-astro-cid-gciqoxzk>Altabrisa</strong> requieren
        protocolos diferenciados. El Cuartel Central de Bomberos de Mérida es el <strong data-astro-cid-gciqoxzk>hub de coordinación
        regional del sureste de México</strong> y centro de capacitación para bomberos de Campeche y
        Quintana Roo.
</p> <h3 data-astro-cid-gciqoxzk>Servicios de los Bomberos Yucatecos</h3> <p data-astro-cid-gciqoxzk>
Los bomberos de Yucatán están certificados para atender:
<strong data-astro-cid-gciqoxzk>rescate acuático en cenotes y cavernas</strong> (buceo técnico, sistemas de cuevas);
<strong data-astro-cid-gciqoxzk>protección de patrimonio UNESCO</strong> (Chichén Itzá, Uxmal, coordinación INAH);
<strong data-astro-cid-gciqoxzk>emergencias en cruceros</strong> (Puerto Progreso, hasta 5,000 pasajeros);
<strong data-astro-cid-gciqoxzk>incendios forestales en reservas</strong> (Celestún, Ría Lagartos, manglares);
<strong data-astro-cid-gciqoxzk>eventos masivos</strong> (Equinoccio Kukulcán 50,000+ personas);
<strong data-astro-cid-gciqoxzk>emergencias turísticas</strong> (3.5 millones de visitantes/año);
<strong data-astro-cid-gciqoxzk>operativos de huracanes</strong> (costa norte, temporada junio-noviembre);
<strong data-astro-cid-gciqoxzk>rescate en la Ruta Puuc</strong> (Uxmal, Kabah, Labná); y
<strong data-astro-cid-gciqoxzk>emergencias industriales</strong> (polo maquilador del sureste).
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/yucatan.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/yucatan.astro";
const $$url = "/directorio/yucatan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Yucatan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
