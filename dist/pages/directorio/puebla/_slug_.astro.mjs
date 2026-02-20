import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesPuebla } from '../../../chunks/estaciones-puebla_DeE7YBg_.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesPuebla.map((estacion) => ({
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
    nombre: "Puebla",
    slug: "puebla",
    siglas: "PUE",
    poblacion: "6.6 millones",
    municipios: 217
  };
  const estadosVecinos = [
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Oaxaca", slug: "oaxaca" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen el corredor industrial automotriz m\xE1s importante de M\xE9xico. Certificaci\xF3n HAZMAT para emergencias en Volkswagen, Audi y zona volc\xE1nica.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en zona del <strong>Volc\xE1n Popocat\xE9petl</strong>, Centro Hist\xF3rico UNESCO de Puebla y los 8 Pueblos M\xE1gicos del estado.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica y qu\xEDmica certificada para emergencias en <strong>Puebla</strong>. Prensi\xF3n segura para rescate carretero en autopista M\xE9xico-Puebla, operaciones volc\xE1nicas y emergencias industriales.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno industrial de <strong>Puebla</strong>. Suela resistente a ceniza volc\xE1nica, qu\xEDmicos industriales y antiderrapante para rescate carretero.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Puebla</h2> <p>
La <strong>${estacion.nombreCorto ?? estacion.nombre}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${ubicacion}</strong>,
      institución que protege uno de los estados más industrializados y turísticos del centro de México.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${ubicacion}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Puebla están capacitados para atender
      emergencias volcánicas, rescate carretero, emergencias HAZMAT industriales y protección de Pueblos Mágicos.
</p> <h3>Puebla: Volcán Popocatépetl, Volkswagen y Patrimonio UNESCO</h3> <p> <strong>Puebla</strong> combina industria automotriz de clase mundial con patrimonio histórico.
<strong>Volkswagen de México</strong> y <strong>Audi</strong> operan las plantas automotrices más grandes de Latinoamérica.
      El <strong>Volcán Popocatépetl</strong> mantiene actividad constante. El Centro Histórico es Patrimonio UNESCO.
      La <strong>autopista México-Puebla</strong> transporta más de 80,000 vehículos diarios. Los 8 Pueblos Mágicos atraen millones de turistas.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Puebla con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-hazmat">trajes HAZMAT</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/puebla/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/puebla/[slug].astro";
const $$url = "/directorio/puebla/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
