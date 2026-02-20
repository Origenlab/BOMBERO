import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesSinaloa, b as getMunicipios } from '../../chunks/estaciones-sinaloa_CRVbGtV3.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Sinaloa = createComponent(($$result, $$props, $$slots) => {
  const estado = "Sinaloa";
  const sigla = "SIN";
  const slug = "sinaloa";
  const heroThumbs = [
    {
      src: "/images/directorio/sin-mazatlan-malecon.avif",
      alt: "Malec\xF3n de Mazatl\xE1n y Zona Dorada - Sinaloa",
      label: "Mazatl\xE1n"
    },
    {
      src: "/images/directorio/sin-culiacan-capital.avif",
      alt: "Ciudad de Culiac\xE1n capital de Sinaloa",
      label: "Culiac\xE1n"
    },
    {
      src: "/images/directorio/sin-campos-agricolas.avif",
      alt: "Campos agr\xEDcolas de tomate y hortalizas Sinaloa",
      label: "Agroexportaci\xF3n"
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/sin-bomberos-puerto.avif",
      alt: "Bomberos de Sinaloa en operaciones portuarias Mazatl\xE1n",
      label: "Puerto Mazatl\xE1n"
    },
    {
      src: "/images/directorio/sin-tren-chepe.avif",
      alt: "Tren Chepe Express ruta El Fuerte a Barrancas del Cobre",
      label: "Tren Chepe"
    },
    {
      src: "/images/directorio/sin-zona-dorada.avif",
      alt: "Zona Dorada hotelera de Mazatl\xE1n playas",
      label: "Zona Dorada"
    },
    {
      src: "/images/directorio/sin-los-mochis.avif",
      alt: "Ciudad de Los Mochis zona agroindustrial norte",
      label: "Los Mochis"
    },
    {
      src: "/images/directorio/sin-cosala-pueblo-magico.avif",
      alt: "Cosal\xE1 Pueblo M\xE1gico zona minera colonial",
      label: "Cosal\xE1 PM"
    },
    {
      src: "/images/directorio/sin-sierra-madre.avif",
      alt: "Sierra Madre Occidental Sinaloa zona forestal",
      label: "Sierra Madre"
    }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "(667) 715-8311", label: "Bomberos Culiac\xE1n" },
    { number: "(669) 982-0800", label: "Bomberos Mazatl\xE1n" },
    { number: "(668) 815-7050", label: "Bomberos Los Mochis" }
  ];
  const regiones = [
    {
      nombre: "Zona Centro",
      desc: "Culiac\xE1n capital, Navolato (Ingenio El Dorado), zona ca\xF1era, aeropuerto internacional"
    },
    {
      nombre: "Zona Sur - Mazatl\xE1n",
      desc: "Puerto de Mazatl\xE1n, Zona Dorada, cruceros, Rosario y Concordia (Pueblos M\xE1gicos)"
    },
    {
      nombre: "Zona Norte",
      desc: "Los Mochis, Guasave, El Fuerte (Pueblo M\xE1gico), inicio Tren Chepe a Barrancas del Cobre"
    },
    {
      nombre: "Sierra Madre Occidental",
      desc: "Badiraguato, Choix, Cosal\xE1 (Pueblo M\xE1gico) - incendios forestales y rescate en monta\xF1a"
    }
  ];
  const eppCards = [
    {
      image: "/images/productos/equipo-rescate-acuatico.avif",
      imageAlt: "Equipo de rescate acu\xE1tico para playas y puerto de Mazatl\xE1n",
      badge: "Costero",
      title: "Rescate Acu\xE1tico Pac\xEDfico",
      text: "Lanchas y equipamiento para rescate en el Puerto de Mazatl\xE1n y 640 km de litoral sinaloense.",
      href: "/productos/rescate-acuatico",
      linkLabel: "Ver equipo acu\xE1tico"
    },
    {
      image: "/images/productos/equipo-hazmat-industrial.avif",
      imageAlt: "Equipo HAZMAT para agroindustria y puerto",
      badge: "HAZMAT",
      title: "HAZMAT Agroindustrial",
      text: "Equipamiento para emergencias con agroqu\xEDmicos, fertilizantes y combustibles portuarios.",
      href: "/productos/hazmat",
      linkLabel: "Ver equipos HAZMAT"
    },
    {
      image: "/images/productos/equipo-forestal.avif",
      imageAlt: "Equipo forestal para incendios en Sierra Madre Occidental",
      badge: "Forestal",
      title: "Incendios Sierra Madre",
      text: "Unidades 4x4 y herramienta manual para combate de incendios en la Sierra Madre Occidental.",
      href: "/productos/forestal",
      linkLabel: "Ver equipo forestal"
    }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de ${estacionesSinaloa.length} estaciones de bomberos en Sinaloa. L\xEDder nacional en agroexportaci\xF3n. Puerto de Mazatl\xE1n, Zona Dorada tur\xEDstica. Cobertura zona de huracanes del Pac\xEDfico.`,
    numberOfItems: estacionesSinaloa.length,
    itemListElement: estacionesSinaloa.map((e, i) => ({
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: estado, item: `https://bombero.mx/directorio/${slug}` }
    ]
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/bombero-proteccion-personal-estacion-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("sinaloa");
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesSinaloa, "stationImages": stationImages, "municipios": getMunicipios(), "estadosVecinos": estadosVecinos, "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en ${estado} | Directorio Oficial ${estacionesSinaloa.length} Estaciones | BOMBERO.MX`, "description": `Directorio completo de ${estacionesSinaloa.length} estaciones de bomberos en Sinaloa 2024. L\xEDder en agroexportaci\xF3n de M\xE9xico. Puerto de Mazatl\xE1n, Zona Dorada, Los Mochis, Tren Chepe. Protecci\xF3n civil ante huracanes del Pac\xEDfico. HAZMAT agroindustrial. Tel: (667) 715-8311. Emergencias 911.`, "data-astro-cid-sbhnlk3m": true }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="seo-content" data-astro-cid-sbhnlk3m> <h2 data-astro-cid-sbhnlk3m>Bomberos de Sinaloa: El Granero de México</h2> <p data-astro-cid-sbhnlk3m>
El <strong data-astro-cid-sbhnlk3m>Heroico Cuerpo de Bomberos de Sinaloa</strong> protege a más de <strong data-astro-cid-sbhnlk3m>3 millones de
        habitantes</strong> en el estado <strong data-astro-cid-sbhnlk3m>líder nacional en agroexportación</strong>. Con
<strong data-astro-cid-sbhnlk3m>20 estaciones distribuidas en 18 municipios</strong>, los bomberos sinaloenses atienden
        desde <strong data-astro-cid-sbhnlk3m>emergencias agroindustriales en campos de tomate y hortalizas</strong> hasta
<strong data-astro-cid-sbhnlk3m>operaciones de rescate marítimo en el Puerto de Mazatlán</strong>, el principal puerto
        comercial y turístico del Pacífico mexicano.
</p> <h3 data-astro-cid-sbhnlk3m>Puerto de Mazatlán: Rescate Marítimo y Turismo</h3> <p data-astro-cid-sbhnlk3m> <strong data-astro-cid-sbhnlk3m>Mazatlán</strong> es el <strong data-astro-cid-sbhnlk3m>principal puerto del Pacífico mexicano</strong> con
        operaciones de carga comercial, flota camaronera y <strong data-astro-cid-sbhnlk3m>terminal de cruceros</strong> que
        recibe más de <strong data-astro-cid-sbhnlk3m>300,000 cruceristas anuales</strong>. La <strong data-astro-cid-sbhnlk3m>Estación Central de
        Mazatlán</strong> cuenta con <strong data-astro-cid-sbhnlk3m>lanchas de rescate, capacidad HAZMAT portuaria</strong> y
        personal certificado en <strong data-astro-cid-sbhnlk3m>rescate acuático</strong>. La <strong data-astro-cid-sbhnlk3m>Zona Dorada</strong>,
        corredor hotelero con más de <strong data-astro-cid-sbhnlk3m>10,000 habitaciones</strong>, requiere atención especializada
        para emergencias en hoteles, restaurantes y el famoso <strong data-astro-cid-sbhnlk3m>Malecón</strong> (21 km, uno de
        los más largos del mundo).
</p> <h3 data-astro-cid-sbhnlk3m>Temporada de Huracanes: Protección Civil Costera</h3> <p data-astro-cid-sbhnlk3m>
Sinaloa tiene <strong data-astro-cid-sbhnlk3m>640 km de litoral</strong> expuesto a la <strong data-astro-cid-sbhnlk3m>temporada de huracanes
        del Pacífico</strong> (junio-noviembre). Históricamente ha sido impactado por ciclones como
<strong data-astro-cid-sbhnlk3m>Manuel (2013)</strong> que causó inundaciones devastadoras en Culiacán. Las estaciones
        costeras (Mazatlán, Escuinapa, Rosario) mantienen <strong data-astro-cid-sbhnlk3m>protocolos de evacuación masiva</strong>,
        coordinación con la <strong data-astro-cid-sbhnlk3m>Armada de México</strong> y capacidad de respuesta post-huracán
        incluyendo <strong data-astro-cid-sbhnlk3m>rescate en inundaciones, remoción de escombros y atención de damnificados</strong>.
</p> <h3 data-astro-cid-sbhnlk3m>Agroexportación: HAZMAT para el Campo Sinaloense</h3> <p data-astro-cid-sbhnlk3m>
Sinaloa es el <strong data-astro-cid-sbhnlk3m>estado #1 en producción de tomate, pepino, chile y berenjena</strong>,
        exportando más de <strong data-astro-cid-sbhnlk3m>$3,000 millones de dólares anuales</strong> a Estados Unidos y Canadá.
        Las estaciones de <strong data-astro-cid-sbhnlk3m>Culiacán, Guasave, Navolato y Los Mochis</strong> mantienen capacidad
<strong data-astro-cid-sbhnlk3m>HAZMAT agroindustrial</strong> para emergencias con <strong data-astro-cid-sbhnlk3m>agroquímicos, fertilizantes,
        fumigantes y combustibles agrícolas</strong>. Durante la <strong data-astro-cid-sbhnlk3m>temporada de cosecha</strong>
(octubre-mayo), el riesgo de incendios en <strong data-astro-cid-sbhnlk3m>bodegas de empaque y campos de rastrojo</strong>
aumenta significativamente.
</p> <h3 data-astro-cid-sbhnlk3m>Ingenio El Dorado: Zona Cañera de Navolato</h3> <p data-astro-cid-sbhnlk3m>
El <strong data-astro-cid-sbhnlk3m>Ingenio Azucarero El Dorado</strong> en Navolato es uno de los más importantes del
        Pacífico mexicano, procesando <strong data-astro-cid-sbhnlk3m>caña de azúcar de miles de hectáreas</strong>. La estación
        de bomberos de Navolato está especializada en <strong data-astro-cid-sbhnlk3m>incendios en cañaverales</strong> (quemas
        controladas y accidentales), emergencias industriales del ingenio y rescate en la
<strong data-astro-cid-sbhnlk3m>zona costera de Altata</strong> con sus comunidades pesqueras.
</p> <h3 data-astro-cid-sbhnlk3m>Tren Chepe y El Fuerte: Turismo de Aventura</h3> <p data-astro-cid-sbhnlk3m> <strong data-astro-cid-sbhnlk3m>El Fuerte</strong>, designado <strong data-astro-cid-sbhnlk3m>Pueblo Mágico</strong>, es el punto de partida
        del legendario <strong data-astro-cid-sbhnlk3m>Tren Chepe Express</strong> hacia las <strong data-astro-cid-sbhnlk3m>Barrancas del Cobre</strong>
en Chihuahua. La estación de bomberos de El Fuerte atiende <strong data-astro-cid-sbhnlk3m>emergencias turísticas</strong>,
        coordinación con operadores ferroviarios para incidentes en la ruta, y <strong data-astro-cid-sbhnlk3m>rescate en la
        sierra norte</strong> donde habitan comunidades indígenas mayo y tarahumara. También cubre
<strong data-astro-cid-sbhnlk3m>Mochicahui</strong> y las comunidades ribereñas del <strong data-astro-cid-sbhnlk3m>Río El Fuerte</strong>.
</p> <h3 data-astro-cid-sbhnlk3m>Pueblos Mágicos: Cosalá, Mocorito, Concordia y Rosario</h3> <p data-astro-cid-sbhnlk3m>
Sinaloa cuenta con <strong data-astro-cid-sbhnlk3m>5 Pueblos Mágicos</strong> con necesidades únicas: <strong data-astro-cid-sbhnlk3m>Cosalá</strong>
(zona minera colonial con minas abandonadas que requieren rescate especializado),
<strong data-astro-cid-sbhnlk3m>Mocorito</strong> (primer Pueblo Mágico del estado con patrimonio histórico),
<strong data-astro-cid-sbhnlk3m>Concordia</strong> (sierra sur con cascadas turísticas), <strong data-astro-cid-sbhnlk3m>Rosario</strong>
(costa sur con playas) y <strong data-astro-cid-sbhnlk3m>El Fuerte</strong> (turismo ferroviario). Cada estación mantiene
        protocolos para <strong data-astro-cid-sbhnlk3m>protección patrimonial y atención turística</strong>.
</p> <h3 data-astro-cid-sbhnlk3m>Sierra Madre Occidental: Combate de Incendios Forestales</h3> <p data-astro-cid-sbhnlk3m>
Los municipios serranos de <strong data-astro-cid-sbhnlk3m>Badiraguato, Choix y Cosalá</strong> se encuentran en la
<strong data-astro-cid-sbhnlk3m>Sierra Madre Occidental</strong>, con extensos bosques de pino y encino vulnerables a
<strong data-astro-cid-sbhnlk3m>incendios forestales</strong> durante la temporada seca (marzo-junio). Las estaciones
        serranas cuentan con <strong data-astro-cid-sbhnlk3m>unidades 4x4 todoterreno, brigadas forestales</strong> y coordinación
        con <strong data-astro-cid-sbhnlk3m>CONAFOR</strong>. También atienden <strong data-astro-cid-sbhnlk3m>rescates de personas perdidas en la sierra</strong>
y emergencias en comunidades de muy difícil acceso.
</p> <h3 data-astro-cid-sbhnlk3m>Culiacán: Capital Administrativa y Económica</h3> <p data-astro-cid-sbhnlk3m> <strong data-astro-cid-sbhnlk3m>Culiacán</strong> concentra <strong data-astro-cid-sbhnlk3m>1 millón de habitantes</strong> en su zona metropolitana,
        siendo el centro administrativo, comercial y universitario del estado. La <strong data-astro-cid-sbhnlk3m>Estación Central</strong>
coordina operaciones estatales con <strong data-astro-cid-sbhnlk3m>escalera aérea, unidad HAZMAT y capacidad de rescate
        urbano avanzado</strong>. El <strong data-astro-cid-sbhnlk3m>Aeropuerto Internacional de Bachigualato</strong> opera
        estación <strong data-astro-cid-sbhnlk3m>ARFF certificada</strong> para emergencias aeronáuticas. La zona sur de la
        ciudad concentra la <strong data-astro-cid-sbhnlk3m>industria agroindustrial</strong> con bodegas y empacadoras.
</p> <h3 data-astro-cid-sbhnlk3m>Los Mochis: Hub Agroindustrial del Norte</h3> <p data-astro-cid-sbhnlk3m> <strong data-astro-cid-sbhnlk3m>Los Mochis</strong> (municipio de Ahome) es el segundo centro urbano más importante
        con <strong data-astro-cid-sbhnlk3m>500,000 habitantes</strong> en su zona metropolitana. La estación central atiende
        la <strong data-astro-cid-sbhnlk3m>zona agroindustrial más tecnificada del estado</strong> con invernaderos de alta
        tecnología, el puerto pesquero de <strong data-astro-cid-sbhnlk3m>Topolobampo</strong> y el inicio de la ruta del
<strong data-astro-cid-sbhnlk3m>Tren Chepe</strong>. Guasave, conocido como el <strong data-astro-cid-sbhnlk3m>"Corazón Agrícola de México"</strong>,
        depende de esta coordinación regional.
</p> <h3 data-astro-cid-sbhnlk3m>Servicios Especializados de los Bomberos Sinaloenses</h3> <p data-astro-cid-sbhnlk3m>
Los bomberos de Sinaloa ofrecen: <strong data-astro-cid-sbhnlk3m>combate de incendios estructurales, industriales y
        forestales</strong>; <strong data-astro-cid-sbhnlk3m>HAZMAT agroindustrial y portuario</strong>; <strong data-astro-cid-sbhnlk3m>rescate acuático
        marítimo y lacustre</strong>; <strong data-astro-cid-sbhnlk3m>protección civil ante huracanes</strong>; <strong data-astro-cid-sbhnlk3m>ARFF
        aeroportuario</strong>; <strong data-astro-cid-sbhnlk3m>rescate en sierra y zonas de difícil acceso</strong>;
<strong data-astro-cid-sbhnlk3m>emergencias en campos agrícolas e ingenios</strong>; <strong data-astro-cid-sbhnlk3m>rescate turístico en
        Pueblos Mágicos</strong>; y <strong data-astro-cid-sbhnlk3m>coordinación con Marina para operaciones costeras</strong>.
        El tiempo de respuesta es de <strong data-astro-cid-sbhnlk3m>4-7 minutos</strong> en zonas urbanas y hasta
<strong data-astro-cid-sbhnlk3m>40 minutos</strong> en comunidades serranas remotas.
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/sinaloa.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/sinaloa.astro";
const $$url = "/directorio/sinaloa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sinaloa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
