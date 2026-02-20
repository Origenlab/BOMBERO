import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesQueretaro, b as getMunicipios } from '../../chunks/estaciones-queretaro_CEqmmqmq.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Queretaro = createComponent(($$result, $$props, $$slots) => {
  const estado = "Quer\xE9taro";
  const sigla = "QRO";
  const slug = "queretaro";
  const heroThumbs = [
    {
      src: "/images/directorio/qro-aeroespacial-bombardier.avif",
      alt: "Industria aeroespacial Bombardier Safran Quer\xE9taro",
      label: "Hub Aeroespacial #1"
    },
    {
      src: "/images/directorio/qro-centro-historico-acueducto.avif",
      alt: "Centro Hist\xF3rico de Quer\xE9taro Acueducto UNESCO 1996",
      label: "UNESCO 1996"
    },
    {
      src: "/images/directorio/qro-pena-bernal.avif",
      alt: "Pe\xF1a de Bernal tercer monolito m\xE1s grande del mundo",
      label: "Pe\xF1a de Bernal"
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/qro-ruta-vino.avif",
      alt: "Ruta del Vino y Queso vi\xF1edos Tequisquiapan Quer\xE9taro",
      label: "Ruta del Vino"
    },
    {
      src: "/images/directorio/qro-sierra-gorda-misiones.avif",
      alt: "Misiones Franciscanas Sierra Gorda UNESCO 2003",
      label: "Misiones UNESCO"
    },
    {
      src: "/images/directorio/qro-juriquilla-unam.avif",
      alt: "Campus UNAM Juriquilla parques tecnol\xF3gicos",
      label: "Silicon Valley MX"
    },
    {
      src: "/images/directorio/qro-festival-globo.avif",
      alt: "Festival Internacional del Globo Tequisquiapan",
      label: "Festival del Globo"
    },
    {
      src: "/images/directorio/qro-autopista-57d.avif",
      alt: "Autopista M\xE9xico-Quer\xE9taro 57D rescate carretero",
      label: "Autopista 57D"
    },
    {
      src: "/images/directorio/qro-parque-aeroespacial.avif",
      alt: "Parque Aeroespacial Quer\xE9taro ITP Aero Airbus",
      label: "Parque Aeroespacial"
    }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "(442) 212-3939", label: "Central Quer\xE9taro" },
    { number: "(442) 221-7800", label: "HAZMAT Industrial" },
    { number: "(427) 272-0066", label: "San Juan del R\xEDo" }
  ];
  const regiones = [
    {
      nombre: "Centro Hist\xF3rico UNESCO",
      desc: "Santiago de Quer\xE9taro, Acueducto 74 arcos, templos barrocos (UNESCO 1996)"
    },
    {
      nombre: "Zona Aeroespacial Norte",
      desc: "Bombardier, Safran, ITP Aero, Airbus - 200+ empresas, 40,000 empleos HAZMAT"
    },
    {
      nombre: "Ruta del Vino y Queso",
      desc: "Tequisquiapan, Bernal (Pe\xF1a 350m), Ezequiel Montes - 35 vi\xF1edos"
    },
    {
      nombre: "Sierra Gorda",
      desc: "Jalpan Pueblo M\xE1gico, Misiones UNESCO 2003, Reserva Bi\xF3sfera 383,567 ha"
    }
  ];
  const eppCards = [
    {
      image: "/images/productos/traje-hazmat-aeroespacial.avif",
      imageAlt: "Traje HAZMAT Nivel A para industria aeroespacial",
      badge: "Aeroespacial",
      title: "HAZMAT Nivel A Aeroespacial",
      text: "Trajes encapsulados y detectores para Bombardier, Safran. Materiales compuestos y combustibles aviaci\xF3n.",
      href: "/productos/hazmat",
      linkLabel: "Ver equipos HAZMAT"
    },
    {
      image: "/images/productos/equipo-rescate-vertical.avif",
      imageAlt: "Equipo de rescate vertical para Pe\xF1a de Bernal",
      badge: "Rescate Vertical",
      title: "Rescate Pe\xF1a de Bernal",
      text: "Cuerdas, arneses y equipo certificado para rescate en el tercer monolito m\xE1s grande del mundo (350m).",
      href: "/productos/rescate-altura",
      linkLabel: "Ver equipo altura"
    },
    {
      image: "/images/productos/equipo-rescate-carretero.avif",
      imageAlt: "Herramientas rescate carretero autopista M\xE9xico-Quer\xE9taro",
      badge: "Carretero",
      title: "Rescate Autopista 57D",
      text: "Herramientas hidr\xE1ulicas para la autopista m\xE1s transitada de M\xE9xico (100,000+ veh\xEDculos/d\xEDa).",
      href: "/productos/herramientas-rescate",
      linkLabel: "Ver herramientas rescate"
    }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de ${estacionesQueretaro.length} estaciones de bomberos en Quer\xE9taro. Hub aeroespacial #1 de M\xE9xico con HAZMAT especializado. 2 sitios UNESCO (Centro Hist\xF3rico 1996, Misiones 2003). 4 Pueblos M\xE1gicos.`,
    numberOfItems: estacionesQueretaro.length,
    itemListElement: estacionesQueretaro.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.municipiosCubiertos?.[0] || estado,
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: estado, item: `https://bombero.mx/directorio/${slug}` }
    ]
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/equipo-rescate-completo-01.avif",
    "/images/directorio/bombero-casco-bullard-incendio-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("queretaro");
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesQueretaro, "stationImages": stationImages, "municipios": getMunicipios(), "estadosVecinos": estadosVecinos, "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en ${estado} | Directorio Oficial ${estacionesQueretaro.length} Estaciones | BOMBERO.MX`, "description": `Directorio completo de ${estacionesQueretaro.length} estaciones de bomberos en Quer\xE9taro 2024. Hub aeroespacial #1 M\xE9xico: Bombardier, Safran HAZMAT. 2 sitios UNESCO. 4 Pueblos M\xE1gicos: Bernal, Tequisquiapan. Ruta del Vino. Tel: (442) 212-3939. Emergencias 911.`, "data-astro-cid-fr6qplzu": true }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="seo-content" data-astro-cid-fr6qplzu> <h2 data-astro-cid-fr6qplzu>Bomberos de Querétaro: Protección del Hub Aeroespacial de México</h2> <p data-astro-cid-fr6qplzu>
El <strong data-astro-cid-fr6qplzu>H. Cuerpo de Bomberos de Querétaro</strong> protege uno de los estados con mayor dinamismo
        industrial de México, conocido como el <strong data-astro-cid-fr6qplzu>"Silicon Valley de México"</strong>. Con <strong data-astro-cid-fr6qplzu>15 estaciones
        especializadas</strong> y <strong data-astro-cid-fr6qplzu>450+ bomberos</strong>, Querétaro cuenta con la <strong data-astro-cid-fr6qplzu>mayor capacidad
        HAZMAT aeroespacial del país</strong> para atender emergencias en las <strong data-astro-cid-fr6qplzu>200+ empresas del clúster
        aeroespacial</strong> incluyendo Bombardier, Safran, ITP Aero y Airbus Helicopters, además de proteger
<strong data-astro-cid-fr6qplzu>2 sitios Patrimonio UNESCO</strong> y <strong data-astro-cid-fr6qplzu>4 Pueblos Mágicos</strong>.
</p> <h3 data-astro-cid-fr6qplzu>Clúster Aeroespacial #1 de México: HAZMAT de Clase Mundial</h3> <p data-astro-cid-fr6qplzu>
La <strong data-astro-cid-fr6qplzu>Estación HAZMAT de El Marqués</strong> y la <strong data-astro-cid-fr6qplzu>Estación del Parque Aeroespacial</strong>
protegen el <strong data-astro-cid-fr6qplzu>hub aeroespacial más importante de México</strong> con más de <strong data-astro-cid-fr6qplzu>200 empresas</strong>,
<strong data-astro-cid-fr6qplzu>40,000 empleos directos</strong> y <strong data-astro-cid-fr6qplzu>$3,000 millones USD en exportaciones anuales</strong>.
        Ambas estaciones cuentan con capacidad <strong data-astro-cid-fr6qplzu>HAZMAT Nivel A</strong> para emergencias con
<strong data-astro-cid-fr6qplzu>materiales compuestos</strong> (fibra de carbono, Kevlar), <strong data-astro-cid-fr6qplzu>resinas epóxicas</strong>,
<strong data-astro-cid-fr6qplzu>combustibles de aviación</strong> y químicos especializados. Cobertura de <strong data-astro-cid-fr6qplzu>Bombardier</strong>
(2,000 empleados), <strong data-astro-cid-fr6qplzu>Safran Aircraft Engines</strong> (1,800 empleados), <strong data-astro-cid-fr6qplzu>ITP Aero</strong>
(1,200 empleados) y <strong data-astro-cid-fr6qplzu>Airbus Helicopters</strong>.
</p> <h3 data-astro-cid-fr6qplzu>Centro Histórico UNESCO 1996: Protección de Patrimonio Colonial</h3> <p data-astro-cid-fr6qplzu>
La <strong data-astro-cid-fr6qplzu>Estación Central de Querétaro</strong> protege el <strong data-astro-cid-fr6qplzu>Centro Histórico declarado Patrimonio
        de la Humanidad UNESCO en 1996</strong>, incluyendo el icónico <strong data-astro-cid-fr6qplzu>Acueducto de 74 arcos</strong>
(símbolo de la ciudad), la <strong data-astro-cid-fr6qplzu>Casa de la Corregidora</strong>, templos barrocos y más de
<strong data-astro-cid-fr6qplzu>1,400 monumentos históricos</strong>. Personal capacitado en <strong data-astro-cid-fr6qplzu>protección de estructuras
        patrimoniales</strong> con protocolos especiales para minimizar daños en edificios coloniales de los
        siglos XVII y XVIII que atraen más de <strong data-astro-cid-fr6qplzu>3 millones de visitantes anuales</strong>.
</p> <h3 data-astro-cid-fr6qplzu>Misiones de la Sierra Gorda: UNESCO 2003</h3> <p data-astro-cid-fr6qplzu>
La estación de <strong data-astro-cid-fr6qplzu>Jalpan de Serra</strong> (Pueblo Mágico desde 2010) protege las <strong data-astro-cid-fr6qplzu>5 Misiones
        Franciscanas de la Sierra Gorda</strong> declaradas <strong data-astro-cid-fr6qplzu>Patrimonio UNESCO en 2003</strong>, construidas
        en el siglo XVIII bajo la dirección de Fray Junípero Serra. También cubre la <strong data-astro-cid-fr6qplzu>Reserva de la Biósfera
        Sierra Gorda</strong> con <strong data-astro-cid-fr6qplzu>383,567 hectáreas protegidas</strong>, siendo la estación más especializada
        en <strong data-astro-cid-fr6qplzu>incendios forestales y rescate de montaña</strong> del estado.
</p> <h3 data-astro-cid-fr6qplzu>Peña de Bernal: Rescate Vertical Especializado</h3> <p data-astro-cid-fr6qplzu>
La estación de <strong data-astro-cid-fr6qplzu>Bernal</strong> cuenta con el equipo más especializado en <strong data-astro-cid-fr6qplzu>rescate vertical</strong>
de Querétaro para atender emergencias en la <strong data-astro-cid-fr6qplzu>Peña de Bernal</strong>, el <strong data-astro-cid-fr6qplzu>tercer monolito más
        grande del mundo</strong> con <strong data-astro-cid-fr6qplzu>350 metros de altura</strong>. Pueblo Mágico desde 2005, Bernal recibe
<strong data-astro-cid-fr6qplzu>800,000+ visitantes anuales</strong>, especialmente durante el <strong data-astro-cid-fr6qplzu>equinoccio de primavera</strong>
(marzo) cuando más de 500,000 personas acuden en un solo fin de semana. Rescate de escaladores, excursionistas
        y atención de emergencias turísticas.
</p> <h3 data-astro-cid-fr6qplzu>Ruta del Vino y Queso: Cobertura Turística Premium</h3> <p data-astro-cid-fr6qplzu>
La estación de <strong data-astro-cid-fr6qplzu>Tequisquiapan</strong> (Pueblo Mágico desde 2012) cubre la famosa <strong data-astro-cid-fr6qplzu>Ruta del
        Vino y Queso de Querétaro</strong> con <strong data-astro-cid-fr6qplzu>35 viñedos</strong> y <strong data-astro-cid-fr6qplzu>20 queserías artesanales</strong>
que atraen más de <strong data-astro-cid-fr6qplzu>500,000 visitantes anuales</strong>. Atención especializada durante eventos masivos:
<strong data-astro-cid-fr6qplzu>Festival Internacional del Globo</strong> (noviembre, 200,000+ asistentes), <strong data-astro-cid-fr6qplzu>Feria del Queso
        y Vino</strong> (mayo-junio) y <strong data-astro-cid-fr6qplzu>temporada de vendimia</strong> (agosto-septiembre). Capacidad para
        emergencias con globos aerostáticos, eventos enológicos y turismo rural.
</p> <h3 data-astro-cid-fr6qplzu>Autopista México-Querétaro: La Más Transitada de México</h3> <p data-astro-cid-fr6qplzu>
La <strong data-astro-cid-fr6qplzu>Estación Carretera 57D</strong> atiende la <strong data-astro-cid-fr6qplzu>autopista más transitada del país</strong>
con más de <strong data-astro-cid-fr6qplzu>100,000 vehículos diarios</strong> entre la Ciudad de México y el Bajío. Equipada con
<strong data-astro-cid-fr6qplzu>rescate carretero pesado</strong> para accidentes múltiples, volcaduras de tractocamiones y
<strong data-astro-cid-fr6qplzu>emergencias HAZMAT en tránsito</strong>. También cubre los enlaces con la <strong data-astro-cid-fr6qplzu>autopista 45D
        Querétaro-Irapuato</strong> y la <strong data-astro-cid-fr6qplzu>carretera a San Luis Potosí</strong>, nodos estratégicos del
        comercio nacional.
</p> <h3 data-astro-cid-fr6qplzu>Juriquilla: El Silicon Valley de México</h3> <p data-astro-cid-fr6qplzu>
La estación de <strong data-astro-cid-fr6qplzu>Juriquilla</strong> protege la zona tecnológica más importante del estado, sede del
<strong data-astro-cid-fr6qplzu>Campus UNAM Juriquilla</strong>, centros de investigación <strong data-astro-cid-fr6qplzu>CIATEQ, CIDESI</strong> y parques
        tecnológicos donde operan <strong data-astro-cid-fr6qplzu>Samsung, Continental, HP y Siemens</strong>. Atención especializada de
        emergencias en <strong data-astro-cid-fr6qplzu>laboratorios de investigación</strong>, <strong data-astro-cid-fr6qplzu>data centers</strong> y empresas
        de alta tecnología, además de fraccionamientos residenciales AAA.
</p> <h3 data-astro-cid-fr6qplzu>Aeropuerto Internacional de Querétaro: SSEI Categoría 8</h3> <p data-astro-cid-fr6qplzu>
La <strong data-astro-cid-fr6qplzu>Estación de Bomberos del Aeropuerto de Querétaro</strong> opera el <strong data-astro-cid-fr6qplzu>Servicio de Salvamento
        y Extinción de Incendios (SSEI)</strong> con <strong data-astro-cid-fr6qplzu>categoría 8 OACI</strong> para aeronaves de fuselaje
        ancho. Cobertura adicional de <strong data-astro-cid-fr6qplzu>hangares MRO</strong> (Mantenimiento, Reparación y Overhaul) de
<strong data-astro-cid-fr6qplzu>Airbus Helicopters</strong> y empresas de mantenimiento aeronáutico. Tiempo de respuesta de
<strong data-astro-cid-fr6qplzu>3 minutos a cualquier punto de pista</strong> según estándares internacionales.
</p> <h3 data-astro-cid-fr6qplzu>Servicios Especializados de los Bomberos Queretanos</h3> <p data-astro-cid-fr6qplzu>
Los bomberos de Querétaro ofrecen: <strong data-astro-cid-fr6qplzu>respuesta HAZMAT Nivel A para industria aeroespacial</strong>;
<strong data-astro-cid-fr6qplzu>rescate vertical en Peña de Bernal</strong>; <strong data-astro-cid-fr6qplzu>protección de 2 sitios UNESCO</strong>;
<strong data-astro-cid-fr6qplzu>combate de incendios forestales en Sierra Gorda</strong>; <strong data-astro-cid-fr6qplzu>rescate carretero en autopista
        más transitada de México</strong>; <strong data-astro-cid-fr6qplzu>atención de eventos masivos (Festival del Globo, Vendimia)</strong>;
<strong data-astro-cid-fr6qplzu>SSEI aeroportuario categoría 8</strong>; <strong data-astro-cid-fr6qplzu>emergencias en parques tecnológicos</strong>;
        y <strong data-astro-cid-fr6qplzu>cobertura de 4 Pueblos Mágicos</strong>. El tiempo de respuesta promedio en zona metropolitana
        es de <strong data-astro-cid-fr6qplzu>4-6 minutos</strong>.
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/queretaro.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/queretaro.astro";
const $$url = "/directorio/queretaro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Queretaro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
