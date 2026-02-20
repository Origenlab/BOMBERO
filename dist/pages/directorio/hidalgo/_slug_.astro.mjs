import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesHidalgo } from '../../../chunks/estaciones-hidalgo_CCRCbrTG.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesHidalgo.map((estacion) => ({
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
    nombre: "Hidalgo",
    slug: "hidalgo",
    siglas: "HGO",
    poblacion: "3 millones",
    municipios: 84
  };
  const estadosVecinos = [
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Quer\xE9taro", slug: "queretaro" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen la Refiner\xEDa de Tula, zonas mineras hist\xF3ricas y los Pueblos M\xE1gicos del estado. Certificaci\xF3n HAZMAT para emergencias petroqu\xEDmicas.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en <strong>Real del Monte</strong>, <strong>Huasca de Ocampo</strong> y la zona industrial de Tula. Compatible con rescate minero y protecci\xF3n patrimonial.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica y qu\xEDmica certificada para emergencias en <strong>Hidalgo</strong>. Prensi\xF3n segura para operaciones HAZMAT en refiner\xEDa, rescate minero y emergencias industriales.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno diverso de <strong>Hidalgo</strong>. Suela resistente a qu\xEDmicos para refiner\xEDa y antiderrapante para operaciones en minas hist\xF3ricas y balnearios.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Hidalgo</h2> <p>
La <strong>${estacion.nombreCorto ?? estacion.nombre}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${ubicacion}</strong>,
      institución que protege uno de los estados con mayor diversidad industrial y turística del centro de México.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${ubicacion}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Hidalgo están capacitados para atender
      emergencias HAZMAT en refinería, rescate minero, incendios forestales y protección de Pueblos Mágicos.
</p> <h3>Hidalgo: Refinería de Tula, Minería y Pueblos Mágicos</h3> <p> <strong>Hidalgo</strong> combina industria pesada con turismo cultural. La <strong>Refinería de Tula</strong>
es una de las más grandes de México, requiriendo capacidad HAZMAT especializada. El legado minero de
<strong>Real del Monte</strong> y <strong>Mineral del Chico</strong> (ambos Pueblos Mágicos) añade valor
      patrimonial. <strong>Huasca de Ocampo</strong>, primer Pueblo Mágico de México, y los Prismas Basálticos
      son joyas turísticas que los bomberos protegen.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Hidalgo con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-hazmat">trajes HAZMAT</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/hidalgo/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/hidalgo/[slug].astro";
const $$url = "/directorio/hidalgo/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
