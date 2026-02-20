import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesEdoMex } from '../../../chunks/estaciones-edomex_DsDVMa3B.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesEdoMex.map((estacion) => ({
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
    nombre: "Estado de M\xE9xico",
    slug: "estado-de-mexico",
    siglas: "EDOMEX",
    poblacion: "17 millones",
    municipios: 125
  };
  const estadosVecinos = [
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Tlaxcala", slug: "tlaxcala" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen al estado m\xE1s poblado de M\xE9xico. Certificaci\xF3n NFPA para emergencias en zonas industriales de Toluca, Ecatepec y Naucalpan, y \xE1reas residenciales densas de la zona metropolitana.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en la zona metropolitana m\xE1s poblada de Am\xE9rica, parques industriales de <strong>Toluca</strong> y sitios patrimonio como <strong>Teotihuac\xE1n</strong>. Compatible con rescate en altura y espacios confinados.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en el <strong>Estado de M\xE9xico</strong>. Prensi\xF3n segura para rescate vehicular en las autopistas m\xE1s transitadas del pa\xEDs y operaciones industriales.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno diverso del <strong>Estado de M\xE9xico</strong>. Suela antiderrapante para zonas industriales, \xE1reas residenciales y operaciones en el Nevado de Toluca.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Estado de México</h2> <p>
La <strong>${estacion.nombreCorto ?? estacion.nombre}</strong> es parte de los cuerpos de bomberos del <strong>Estado de México</strong>,
      el estado más poblado de la República con más de 17 millones de habitantes.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${estacion.colonia}, ${ubicacion}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos del Estado de México están capacitados para atender
      incendios estructurales, rescate vehicular, emergencias industriales, rescate en altura y todo tipo de emergencias.
</p> <h3>Estado de México: El Estado más Poblado de México</h3> <p>
El <strong>Estado de México</strong> es el más poblado del país con 17 millones de habitantes distribuidos en 125 municipios.
      Forma parte de la <strong>Zona Metropolitana del Valle de México</strong>, la más grande de América. <strong>Toluca</strong>,
      su capital, alberga importantes parques industriales. <strong>Teotihuacán</strong> es Patrimonio UNESCO. Los bomberos
      enfrentan retos de alta complejidad: zonas residenciales densas, corredores industriales, autopistas de alto tráfico
      y el volcán Nevado de Toluca.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo el Estado de México con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/estado-de-mexico/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/estado-de-mexico/[slug].astro";
const $$url = "/directorio/estado-de-mexico/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
