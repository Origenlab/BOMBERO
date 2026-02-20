import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesAguascalientes } from '../../../chunks/estaciones-aguascalientes_CwGT9pc-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesAguascalientes.map((estacion) => ({
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
    nombre: "Aguascalientes",
    slug: "aguascalientes",
    siglas: "AGS",
    poblacion: "1.5 millones",
    municipios: 11
  };
  const estadosVecinos = [
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que combaten incendios en la Sierra Fr\xEDa y zonas industriales. Protecci\xF3n t\xE9rmica certificada para emergencias estructurales bajo el clima semi-\xE1rido del estado.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 requerida en los parques industriales automotrices de Aguascalientes. Compatible con el sistema 3 capas exigido en las plantas de <strong>Nissan, Jatco</strong> y proveedores Tier 1 del estado.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en plantas metal\xFArgicas y automotrices de <strong>Aguascalientes</strong>. Prensi\xF3n segura en rescate vehicular sobre la autopista M\xE9xico-Aguascalientes y zonas industriales.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno industrial de <strong>Aguascalientes</strong>. Puntera de acero y suela antiderrapante para pisos de f\xE1brica, pavimentos industriales y operaciones en la Presa Calles.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${estacion.municipio}, Aguascalientes</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de Aguascalientes</strong>,
      institución que protege a los más de <strong>1.5 millones de aguascalentenses</strong>. Esta estación, ubicada en
<strong>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención las 24 horas del día,
      los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${estacion.municipio}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Aguascalientes están capacitados para atender
      incendios, rescates vehiculares, fugas de gas, emergencias industriales y todo tipo de emergencias.
</p> <h3>Aguascalientes: Industria y Tradición</h3> <p> <strong>Aguascalientes</strong> es uno de los estados más dinámicos de México, sede de la industria automotriz
      con plantas de <strong>Nissan, Jatco y cientos de proveedores</strong>. También es famoso por la
<strong>Feria Nacional de San Marcos</strong>, el evento más importante de su tipo en el país.
      Los bomberos atienden emergencias tanto industriales como en eventos masivos.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Aguascalientes con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/aguascalientes/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/aguascalientes/[slug].astro";
const $$url = "/directorio/aguascalientes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
