import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesColima } from '../../../chunks/estaciones-colima_DwJfgul0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesColima.map((estacion) => ({
    params: { slug: estacion.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const estacion = getEstacionBySlug(slug);
  if (!estacion) {
    return Astro2.redirect("/404");
  }
  const estacionesCercanas = getEstacionesCercanas(slug, 3);
  const estado = {
    nombre: "Colima",
    slug: "colima",
    siglas: "COL",
    poblacion: "731 mil",
    municipios: 10
  };
  const estadosVecinos = [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que enfrentan emergencias volc\xE1nicas del Volc\xE1n de Fuego, incendios portuarios en Manzanillo y la zona agr\xEDcola limonera. Protecci\xF3n t\xE9rmica certificada para el estado m\xE1s peque\xF1o de M\xE9xico.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en el <strong>Puerto de Manzanillo</strong> (mayor puerto de M\xE9xico en el Pac\xEDfico), emergencias volc\xE1nicas y protecci\xF3n contra ca\xEDda de ceniza y proyectiles del <strong>Volc\xE1n de Fuego</strong>.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en <strong>Colima</strong>. Prensi\xF3n segura para rescate mar\xEDtimo, operaciones portuarias HAZMAT y emergencias en la zona limonera m\xE1s productiva de M\xE9xico.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno diverso de <strong>Colima</strong>. Suela resistente a terreno volc\xE1nico, zonas portuarias y operaciones en playas con riesgo de tsunami.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Colima</h2> <p>
La <strong>${estacion.nombreCorto ?? estacion.nombre}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${ubicacion}</strong>,
      institución que protege a los habitantes del estado más pequeño pero más diverso de México.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${ubicacion}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Colima están capacitados para atender
      emergencias volcánicas, incendios portuarios, rescate marítimo, huracanes del Pacífico y todo tipo de emergencias.
</p> <h3>Colima: Volcán de Fuego, Puerto de Manzanillo y Capital del Limón</h3> <p> <strong>Colima</strong> es el estado más pequeño de México pero concentra riesgos únicos. El <strong>Volcán de Fuego</strong>
es uno de los más activos de Norteamérica, requiriendo vigilancia constante y planes de evacuación. <strong>Manzanillo</strong>
es el puerto más importante de México en el Pacífico, manejando el 50% del comercio marítimo del país. La región
      produce el 40% del limón mexicano. Los bomberos enfrentan emergencias volcánicas, portuarias HAZMAT, huracanes
      y sismos frecuentes.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Colima con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-hazmat">trajes HAZMAT</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/colima/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/colima/[slug].astro";
const $$url = "/directorio/colima/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
