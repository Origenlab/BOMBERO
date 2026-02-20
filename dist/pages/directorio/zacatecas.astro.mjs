import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesZacatecas, b as getMunicipios } from '../../chunks/estaciones-zacatecas_CBAGRav2.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Zacatecas = createComponent(($$result, $$props, $$slots) => {
  const estado = "Zacatecas";
  const sigla = "ZAC";
  const slug = "zacatecas";
  const heroThumbs = [
    { src: "/images/directorio/estacion-bomberos-zacatecas-01.avif", alt: "Cuartel Central de Bomberos de Zacatecas Centro Hist\xF3rico UNESCO" },
    { src: "/images/directorio/estacion-bomberos-zacatecas-02.avif", alt: "Bomberos HAZMAT Minera Pe\xF1asquito Fresnillo Zacatecas" },
    { src: "/images/directorio/estacion-bomberos-zacatecas-03.avif", alt: "Rescate minero espacios confinados Zacatecas" }
  ];
  const galleryImages = [
    { src: "/images/directorio/bomberos-zacatecas-mina.avif", alt: "Emergencias HAZMAT Minera Pe\xF1asquito mayor mina plata mundo" },
    { src: "/images/directorio/bomberos-zacatecas-unesco.avif", alt: "Protecci\xF3n Centro Hist\xF3rico UNESCO Zacatecas" },
    { src: "/images/directorio/bomberos-zacatecas-organos.avif", alt: "Incendios forestales Sierra de \xD3rganos Parque Nacional" },
    { src: "/images/directorio/bomberos-zacatecas-rescate.avif", alt: "Rescate en espacios confinados minas subterr\xE1neas" }
  ];
  const emergencyNumbers = [
    { name: "Emergencias", number: "911" },
    { name: "Cuartel Central Zacatecas", number: "492 922 0020" },
    { name: "Bomberos Fresnillo (Hub Minero)", number: "493 932 0101" },
    { name: "Bomberos Guadalupe", number: "492 899 1234" },
    { name: "Bomberos Jerez", number: "494 945 0123" },
    { name: "Protecci\xF3n Civil Zacatecas", number: "492 922 5059" }
  ];
  const regiones = [
    { nombre: "Zona Metropolitana Zacatecas-Guadalupe", desc: "Zacatecas capital (Centro Hist\xF3rico UNESCO 1993), Guadalupe (170,000 hab.) \u2014 Catedral Barroca, Mina El Ed\xE9n, protecci\xF3n patrimonio" },
    { nombre: "Corredor Minero Fresnillo", desc: "Fresnillo (Minera Pe\xF1asquito \u2014 MAYOR MINA DE PLATA DEL MUNDO), Fresnillo plc \u2014 HAZMAT explosivos, cianuro, xantatos" },
    { nombre: "Corredor Minero Noreste", desc: "Concepci\xF3n del Oro, Mazapil \u2014 minas de plata y zinc activas, HAZMAT \xE1cidos mineros, Real de Providencia" },
    { nombre: "Pueblos M\xE1gicos", desc: "Jerez de Garc\xEDa Salinas (La Ciudad Perfecta), Sombrerete (450 a\xF1os miner\xEDa) \u2014 patrimonio colonial, Sierra de \xD3rganos" },
    { nombre: "Sierra Madre Occidental", desc: "Tlaltenango, Valpara\xEDso, Sierra del Tigre \u2014 incendios forestales, rescate en monta\xF1a, coordinaci\xF3n CONAFOR" },
    { nombre: "Ca\xF1\xF3n de Juchipila / Sur", desc: "Juchipila, Nochistl\xE1n, corredor Guadalajara-Zacatecas \u2014 rescate en ca\xF1ones y barrancas, autopista 54D" },
    { nombre: "Corredor Norte", desc: "R\xEDo Grande, Juan Aldama, carretera federal 45 hacia Chihuahua \u2014 ganader\xEDa, accidentes carreteros" }
  ];
  const eppCards = [
    { icon: "pickaxe", title: "HAZMAT Minero Nivel 3", desc: "Pe\xF1asquito (mayor mina plata del mundo): explosivos, cianuro de sodio, xantatos, \xE1cidos" },
    { icon: "monument", title: "Patrimonio UNESCO", desc: "Centro Hist\xF3rico 1993: Catedral Barroca, Acueducto, Mina El Ed\xE9n \u2014 protocolos INAH" },
    { icon: "mountain", title: "Sierra de \xD3rganos", desc: "Parque Nacional: formaciones volc\xE1nicas \xFAnicas, incendios forestales, rescate t\xE9cnico" },
    { icon: "tunnel", title: "Rescate Minero", desc: "Espacios confinados subterr\xE1neos, atm\xF3sferas peligrosas, 600+ a\xF1os de minas activas" }
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
    "/images/directorio/bombero-equipamiento-personal-estacion-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("zacatecas");
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de las ${estacionesZacatecas.length} estaciones de bomberos en Zacatecas. Centro Hist\xF3rico UNESCO (1993), Minera Pe\xF1asquito (mayor mina de plata del mundo, 25M oz/a\xF1o), HAZMAT especializado en explosivos y cianuro minero, Sierra de \xD3rganos Parque Nacional, Pueblos M\xE1gicos Jerez y Sombrerete. 600+ a\xF1os de tradici\xF3n minera. Emergencias 911.`,
    numberOfItems: estacionesZacatecas.length,
    itemListElement: estacionesZacatecas.map((e, i) => ({
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
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesZacatecas, "municipios": getMunicipios(), "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en Zacatecas | ${estacionesZacatecas.length} Estaciones | Mayor Mina Plata del Mundo | UNESCO | HAZMAT Minero | BOMBERO.MX`, "description": "Directorio oficial de las 15 estaciones de bomberos en Zacatecas. Centro Hist\xF3rico UNESCO (1993), Minera Pe\xF1asquito (mayor mina de plata del mundo, 25 millones oz/a\xF1o), HAZMAT especializado en explosivos y cianuro minero, Sierra de \xD3rganos Parque Nacional, Pueblos M\xE1gicos Jerez y Sombrerete. 600+ a\xF1os de tradici\xF3n minera continua. Emergencias 911.", "data-astro-cid-dqrlzvou": true }, { "hero-seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "hero-seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="hero-seo__block" data-astro-cid-dqrlzvou> <h2 class="hero-seo__title" data-astro-cid-dqrlzvou>Minera Peñasquito: La Mayor Mina de Plata del Mundo</h2> <p class="hero-seo__text" data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Minera Peñasquito</strong>, operada por <strong data-astro-cid-dqrlzvou>Newmont Corporation</strong> (antes Goldcorp),
        es la <strong data-astro-cid-dqrlzvou>mayor mina de plata del planeta</strong>, produciendo más de <strong data-astro-cid-dqrlzvou>25 millones
        de onzas de plata al año</strong> —junto con 400,000 onzas de oro, zinc y plomo—. Ubicada en
        el municipio de <strong data-astro-cid-dqrlzvou>Mazapil</strong>, la mina emplea a más de <strong data-astro-cid-dqrlzvou>7,000 personas</strong>
directas e indirectas. Los bomberos de <strong data-astro-cid-dqrlzvou>Fresnillo</strong> son el hub de respuesta HAZMAT
        para esta operación crítica, con <strong data-astro-cid-dqrlzvou>certificación Nivel 3</strong> para: explosivos ANFO
        y emulsiones, <strong data-astro-cid-dqrlzvou>cianuro de sodio</strong> (letal a 50 ppm), <strong data-astro-cid-dqrlzvou>xantatos</strong> de
        flotación, ácido sulfúrico y cal viva. La coordinación con las brigadas internas de Newmont
        sigue protocolos <strong data-astro-cid-dqrlzvou>ICS (Incident Command System)</strong> internacionales.
</p> </div> <div class="hero-seo__block" data-astro-cid-dqrlzvou> <h2 class="hero-seo__title" data-astro-cid-dqrlzvou>Centro Histórico UNESCO: 600 Años de Plata y Arquitectura</h2> <p class="hero-seo__text" data-astro-cid-dqrlzvou>
El <strong data-astro-cid-dqrlzvou>Centro Histórico de Zacatecas</strong>, declarado <strong data-astro-cid-dqrlzvou>Patrimonio de la Humanidad
        por la UNESCO en 1993</strong>, es un museo viviente de la arquitectura barroca novohispana.
        La <strong data-astro-cid-dqrlzvou>Catedral Basílica de Zacatecas</strong> es considerada la obra maestra del
<strong data-astro-cid-dqrlzvou>churrigueresco mexicano</strong>, con una fachada de cantera rosa tallada durante 25 años.
        La <strong data-astro-cid-dqrlzvou>Mina El Edén</strong>, a 320 metros de profundidad, es hoy un museo y discoteca
        subterránea. Los bomberos del Cuartel Central operan con protocolos especiales del <strong data-astro-cid-dqrlzvou>INAH</strong>
para protección del patrimonio, limitando el uso de agua y químicos en estructuras históricas.
        El <strong data-astro-cid-dqrlzvou>Festival Cultural Zacatecas</strong> y la <strong data-astro-cid-dqrlzvou>Morisma de Bracho</strong> (batalla
        simulada con 10,000 participantes) activan operativos de seguridad masivos.
</p> </div> ` })}`, "intro": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "intro" }, { "default": ($$result3) => renderTemplate`
Directorio completo del <strong data-astro-cid-dqrlzvou>H. Cuerpo de Bomberos de Zacatecas</strong>.
    El estado que forjó la historia de México con su plata: <strong data-astro-cid-dqrlzvou>Minera Peñasquito</strong>
(Newmont) es la <strong data-astro-cid-dqrlzvou>mayor mina de plata del mundo</strong>, produciendo más de
<strong data-astro-cid-dqrlzvou>25 millones de onzas anuales</strong>. El <strong data-astro-cid-dqrlzvou>Centro Histórico de Zacatecas</strong>
es <strong data-astro-cid-dqrlzvou>Patrimonio de la Humanidad UNESCO desde 1993</strong>, con su Catedral Barroca
    considerada la obra maestra del churrigueresco mexicano. Con <strong data-astro-cid-dqrlzvou>600+ años de minería
    continua</strong>, los bomberos zacatecanos dominan <strong data-astro-cid-dqrlzvou>HAZMAT de clase mundial</strong>:
    explosivos industriales, cianuro de sodio, xantatos y ácidos mineros. La <strong data-astro-cid-dqrlzvou>Sierra
    de Órganos</strong> (Parque Nacional) y los <strong data-astro-cid-dqrlzvou>Pueblos Mágicos</strong> de <strong data-astro-cid-dqrlzvou>Jerez</strong>
y <strong data-astro-cid-dqrlzvou>Sombrerete</strong> completan un estado donde la tradición minera exige bomberos
    con certificaciones únicas en México.
` })}`, "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` <section class="seo-content" data-astro-cid-dqrlzvou> <h2 data-astro-cid-dqrlzvou>El H. Cuerpo de Bomberos de Zacatecas</h2> <p data-astro-cid-dqrlzvou>
El <strong data-astro-cid-dqrlzvou>H. Cuerpo de Bomberos de Zacatecas</strong> protege a más de <strong data-astro-cid-dqrlzvou>1.6 millones
        de zacatecanos</strong> en un estado que es sinónimo de plata y minería. Zacatecas produce
        el <strong data-astro-cid-dqrlzvou>35% de la plata de México</strong> —y México es el mayor productor de plata del
        mundo—, lo que significa que este estado es responsable de una proporción significativa de
        la producción global de este metal precioso. Con <strong data-astro-cid-dqrlzvou>600+ años de minería continua</strong>
desde la fundación de la ciudad en 1546, los bomberos zacatecanos han desarrollado
        especializaciones <strong data-astro-cid-dqrlzvou>HAZMAT únicas en México</strong>: manejo de explosivos industriales,
        cianuro de sodio, xantatos de flotación, ácidos mineros y rescate en espacios confinados
        subterráneos a profundidades de hasta 500 metros.
</p> <h3 data-astro-cid-dqrlzvou>¿Cómo contactar a los bomberos en Zacatecas?</h3> <p data-astro-cid-dqrlzvou>
En cualquier <strong data-astro-cid-dqrlzvou>emergencia en Zacatecas</strong>, marca el <strong data-astro-cid-dqrlzvou>911</strong>. Para
        contacto directo: <strong data-astro-cid-dqrlzvou>Cuartel Central de Zacatecas 492 922 0020</strong>, <strong data-astro-cid-dqrlzvou>Bomberos
        Fresnillo (Hub Minero) 493 932 0101</strong>, <strong data-astro-cid-dqrlzvou>Bomberos Guadalupe 492 899 1234</strong>,
<strong data-astro-cid-dqrlzvou>Bomberos Jerez 494 945 0123</strong>. Para emergencias en minas, se activa
        automáticamente el protocolo de coordinación con las brigadas internas de las empresas mineras.
</p> <h3 data-astro-cid-dqrlzvou>Minera Peñasquito: La Mayor Mina de Plata del Planeta</h3> <p data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Minera Peñasquito</strong>, ubicada en el municipio de <strong data-astro-cid-dqrlzvou>Mazapil</strong> y operada
        por <strong data-astro-cid-dqrlzvou>Newmont Corporation</strong>, es la <strong data-astro-cid-dqrlzvou>mina de plata más grande del mundo</strong>.
        Produce anualmente más de <strong data-astro-cid-dqrlzvou>25 millones de onzas de plata</strong>, junto con <strong data-astro-cid-dqrlzvou>400,000
        onzas de oro</strong>, zinc y plomo. La operación incluye una mina a cielo abierto de 2.5 km de
        diámetro, una planta de procesamiento que utiliza <strong data-astro-cid-dqrlzvou>cianuro de sodio</strong> para la
        cianuración del oro, y una planta de flotación con <strong data-astro-cid-dqrlzvou>xantatos</strong> para el zinc.
        Los riesgos HAZMAT son de clase mundial: el cianuro de sodio es letal a concentraciones de
<strong data-astro-cid-dqrlzvou>50 ppm</strong>; los explosivos <strong data-astro-cid-dqrlzvou>ANFO</strong> y <strong data-astro-cid-dqrlzvou>emulsiones</strong>
utilizados en voladura requieren protocolos especiales; el ácido sulfúrico concentrado
        utilizado en lixiviación puede causar quemaduras graves.
</p> <h3 data-astro-cid-dqrlzvou>Fresnillo plc: La Mayor Productora de Plata por Empresa</h3> <p data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Fresnillo plc</strong>, con sede operativa en la ciudad de <strong data-astro-cid-dqrlzvou>Fresnillo</strong>,
        es la <strong data-astro-cid-dqrlzvou>mayor empresa productora de plata del mundo</strong>. Sus operaciones en Zacatecas
        —incluyendo las minas <strong data-astro-cid-dqrlzvou>Fresnillo</strong>, <strong data-astro-cid-dqrlzvou>Saucito</strong> y <strong data-astro-cid-dqrlzvou>San Julián</strong>—
        producen más de <strong data-astro-cid-dqrlzvou>50 millones de onzas de plata equivalente al año</strong>. La
<strong data-astro-cid-dqrlzvou>Estación de Bomberos Fresnillo</strong> es el hub de respuesta HAZMAT para todo el
        corredor minero, con personal certificado para: explosivos industriales, cianuro de sodio,
        xantatos isopropílico y etílico, ácido sulfúrico, cal viva y rescate en espacios confinados
        con atmósferas de bajo oxígeno o gases tóxicos.
</p> <h3 data-astro-cid-dqrlzvou>Centro Histórico UNESCO: Patrimonio de la Humanidad</h3> <p data-astro-cid-dqrlzvou>
El <strong data-astro-cid-dqrlzvou>Centro Histórico de Zacatecas</strong> fue declarado <strong data-astro-cid-dqrlzvou>Patrimonio de la
        Humanidad por la UNESCO en 1993</strong>, reconociendo su excepcional valor como ejemplo
        de ciudad minera colonial. La <strong data-astro-cid-dqrlzvou>Catedral Basílica</strong>, construida entre 1729 y
        1752, es considerada la máxima expresión del <strong data-astro-cid-dqrlzvou>barroco churrigueresco mexicano</strong>,
        con una fachada de <strong data-astro-cid-dqrlzvou>cantera rosa</strong> tallada con más de 2,000 figuras. El
<strong data-astro-cid-dqrlzvou>Mercado González Ortega</strong>, el <strong data-astro-cid-dqrlzvou>Teatro Calderón</strong>, el
<strong data-astro-cid-dqrlzvou>Palacio de Gobierno</strong> y el <strong data-astro-cid-dqrlzvou>Acueducto El Cubo</strong> completan un
        conjunto arquitectónico que los bomberos del Cuartel Central protegen con protocolos
        especiales del <strong data-astro-cid-dqrlzvou>INAH</strong>: uso limitado de agua en estructuras de cantera,
        prohibición de químicos espumantes en fachadas históricas, y coordinación para evacuaciones
        que respeten las rutas de patrimonio.
</p> <h3 data-astro-cid-dqrlzvou>Sierra de Órganos: Parque Nacional con Formaciones Únicas</h3> <p data-astro-cid-dqrlzvou>
La <strong data-astro-cid-dqrlzvou>Sierra de Órganos</strong>, declarada <strong data-astro-cid-dqrlzvou>Parque Nacional</strong>, presenta
        formaciones rocosas volcánicas únicas en el mundo, resultado de la erosión de tobas riolíticas
        de hace 40 millones de años. Las columnas de roca, que alcanzan hasta <strong data-astro-cid-dqrlzvou>60 metros de altura</strong>,
        han servido de escenario para películas de Hollywood y atraen a miles de turistas de aventura.
        Los bomberos de <strong data-astro-cid-dqrlzvou>Valparaíso</strong> y <strong data-astro-cid-dqrlzvou>Sombrerete</strong> mantienen coordinación
        con <strong data-astro-cid-dqrlzvou>CONANP</strong> y <strong data-astro-cid-dqrlzvou>CONAFOR</strong> para incendios forestales en la zona
        de amortiguamiento y rescate técnico en las formaciones rocosas.
</p> <h3 data-astro-cid-dqrlzvou>Pueblos Mágicos: Jerez y Sombrerete</h3> <p data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Jerez de García Salinas</strong>, conocido como "La Ciudad Perfecta", es <strong data-astro-cid-dqrlzvou>Pueblo
        Mágico</strong> desde 2007. Su arquitectura colonial, el <strong data-astro-cid-dqrlzvou>Jardín Rafael Páez</strong>,
        el <strong data-astro-cid-dqrlzvou>Teatro Hinojosa</strong> y las tradiciones charreras lo convierten en uno de los
        destinos más visitados del norte de México. <strong data-astro-cid-dqrlzvou>Sombrerete</strong>, con <strong data-astro-cid-dqrlzvou>450 años
        de tradición minera de plata</strong>, conserva conventos franciscanos del siglo XVI y es
        puerta de entrada a la Sierra de Órganos. Los bomberos de ambos municipios operan con
        protocolos de protección de patrimonio colonial y cobertura de eventos masivos como la
<strong data-astro-cid-dqrlzvou>Feria de la Primavera de Jerez</strong> (200,000+ visitantes).
</p> <h3 data-astro-cid-dqrlzvou>Rescate en Espacios Confinados Mineros</h3> <p data-astro-cid-dqrlzvou>
Zacatecas tiene <strong data-astro-cid-dqrlzvou>más de 5,000 minas activas e inactivas</strong>, muchas de ellas
        con profundidades de 200 a 500 metros. El rescate en espacios confinados mineros es una
        especialidad de los bomberos zacatecanos: <strong data-astro-cid-dqrlzvou>atmósferas con bajo oxígeno</strong>
(por debajo del 19.5%), <strong data-astro-cid-dqrlzvou>gases tóxicos</strong> (monóxido de carbono, ácido sulfhídrico,
        dióxido de azufre), <strong data-astro-cid-dqrlzvou>temperaturas extremas</strong> (hasta 40°C en niveles profundos),
        y <strong data-astro-cid-dqrlzvou>riesgo de colapso de pilares</strong>. La <strong data-astro-cid-dqrlzvou>Mina El Edén</strong>, hoy museo
        turístico a 320 metros de profundidad, ejemplifica los desafíos únicos de emergencias
        subterráneas en el estado.
</p> <h3 data-astro-cid-dqrlzvou>Servicios de los Bomberos Zacatecanos</h3> <p data-astro-cid-dqrlzvou>
Los bomberos de Zacatecas están certificados para atender:
<strong data-astro-cid-dqrlzvou>HAZMAT minero Nivel 3</strong> (cianuro, explosivos, xantatos, ácidos);
<strong data-astro-cid-dqrlzvou>rescate en espacios confinados subterráneos</strong> (minas activas e inactivas);
<strong data-astro-cid-dqrlzvou>protección de patrimonio UNESCO</strong> (Centro Histórico, coordinación INAH);
<strong data-astro-cid-dqrlzvou>incendios forestales de alta montaña</strong> (Sierra de Órganos, Sierra Madre Occidental);
<strong data-astro-cid-dqrlzvou>rescate en cañones y barrancas</strong> (Juchipila, topografía abrupta);
<strong data-astro-cid-dqrlzvou>emergencias en eventos masivos</strong> (Morisma de Bracho 10,000 participantes);
<strong data-astro-cid-dqrlzvou>rescate vehicular en carreteras federales</strong> (45, 54, 54D);
<strong data-astro-cid-dqrlzvou>emergencias agropecuarias</strong> (corredor ganadero norte); y
<strong data-astro-cid-dqrlzvou>apoyo mutuo interestatal</strong> (Aguascalientes, SLP, Jalisco, Durango).
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/zacatecas.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/zacatecas.astro";
const $$url = "/directorio/zacatecas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Zacatecas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
