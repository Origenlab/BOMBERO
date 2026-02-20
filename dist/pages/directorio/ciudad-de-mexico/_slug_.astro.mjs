import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesCDMX } from '../../../chunks/estaciones-cdmx_C9d9vCJz.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesCDMX.map((estacion) => ({
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
    nombre: "Ciudad de M\xE9xico",
    slug: "ciudad-de-mexico",
    siglas: "CDMX",
    poblacion: "9.2 millones",
    municipios: 16
  };
  const estadosVecinos = [
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Puebla", slug: "puebla" }
  ];
  const ubicacion = estacion.alcaldia ?? estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen la capital de M\xE9xico. Certificaci\xF3n NFPA para incendios en edificios de gran altura, el Centro Hist\xF3rico Patrimonio UNESCO y eventos masivos en el Z\xF3calo.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en la Ciudad de M\xE9xico, con m\xE1s de 9 millones de habitantes. Compatible con equipos de rescate en altura para rascacielos de Santa Fe, Reforma y Polanco.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en <strong>CDMX</strong>. Prensi\xF3n segura para rescate en el Metro, control de fugas de gas y operaciones en la zona de mayor actividad s\xEDsmica del pa\xEDs.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el Heroico Cuerpo de Bomberos de la <strong>Ciudad de M\xE9xico</strong>. Suela antiderrapante para operaciones en metro, hospitales, centros comerciales y rescate en altura.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Ciudad de México</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>Heroico Cuerpo de Bomberos de la Ciudad de México</strong>,
      institución fundada en 1887 que protege a más de 9 millones de habitantes en la capital del país.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${estacion.colonia}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de CDMX están capacitados para atender
      incendios estructurales, rescate en altura, emergencias en el Metro, fugas de gas, rescate en sismos,
      atención de materiales peligrosos y todo tipo de emergencias urbanas.
</p> <h3>Ciudad de México: La Capital más Grande de América</h3> <p>
La <strong>Ciudad de México</strong> es la urbe más poblada de América, con más de 21 millones en su zona metropolitana.
      El <strong>Centro Histórico</strong> es Patrimonio UNESCO con construcciones coloniales y prehispánicas.
      Los bomberos de CDMX enfrentan retos únicos: edificios de gran altura en Santa Fe y Reforma, 12 líneas de Metro
      con 195 estaciones, zona sísmica de alta actividad, y eventos masivos que congregan millones de personas.
      El Heroico Cuerpo de Bomberos es una de las instituciones más antiguas y reconocidas del país.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en toda la CDMX con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/ciudad-de-mexico/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/ciudad-de-mexico/[slug].astro";
const $$url = "/directorio/ciudad-de-mexico/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
