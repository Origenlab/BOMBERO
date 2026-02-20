import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesCampeche } from '../../../chunks/estaciones-campeche_BYM6RbR7.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesCampeche.map((estacion) => ({
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
    nombre: "Campeche",
    slug: "campeche",
    siglas: "CAM",
    poblacion: "928 mil",
    municipios: 13
  };
  const estadosVecinos = [
    { nombre: "Yucat\xE1n", slug: "yucatan" },
    { nombre: "Quintana Roo", slug: "quintana-roo" },
    { nombre: "Tabasco", slug: "tabasco" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que enfrentan emergencias en plataformas petroleras, incendios industriales y protecci\xF3n del patrimonio UNESCO. Certificaci\xF3n requerida por PEMEX y contratistas internacionales.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en la <strong>Sonda de Campeche</strong>, centro hist\xF3rico UNESCO y zonas arqueol\xF3gicas mayas. Compatible con equipos HAZMAT para emergencias petroleras.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica y qu\xEDmica certificada para emergencias petroleras en <strong>Ciudad del Carmen</strong>. Prensi\xF3n segura para rescate offshore, control de derrames y operaciones forestales en <strong>Calakmul</strong>.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno \xFAnico de <strong>Campeche</strong>. Suela resistente a hidrocarburos para plataformas petroleras y antiderrapante para operaciones en selva tropical y zonas costeras.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${estacion.municipio}, Campeche</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${estacion.municipio}</strong>,
      institución que protege a los habitantes de <strong>Campeche</strong>, estado con triple Patrimonio UNESCO.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${estacion.municipio}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Campeche están capacitados para atender
      incendios estructurales, emergencias petroleras HAZMAT, rescate acuático costero, incendios forestales en la Reserva
      de Calakmul y protección del patrimonio colonial UNESCO.
</p> <h3>Campeche: Capital Petrolera y Triple Patrimonio UNESCO</h3> <p> <strong>Campeche</strong> es único en México por su triple reconocimiento UNESCO: la <strong>Ciudad Histórica Fortificada</strong>
(1999), la <strong>Antigua Ciudad Maya de Calakmul</strong> (2002) y la <strong>Reserva de la Biósfera de Calakmul</strong> (2014).
      Además, la <strong>Sonda de Campeche</strong> produce más del 60% del petróleo de México, convirtiendo a Ciudad del Carmen
      en la capital petrolera del país. Los bomberos enfrentan retos únicos: emergencias HAZMAT en plataformas offshore,
      incendios forestales en 723,185 hectáreas de selva tropical, protección de edificios coloniales del siglo XVII
      y huracanes del Golfo de México.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Campeche con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-hazmat">trajes HAZMAT</a>, <a href="/productos/trajes-para-bomberos/traje-forestal-nfpa-1977">equipo forestal NFPA</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/campeche/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/campeche/[slug].astro";
const $$url = "/directorio/campeche/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
