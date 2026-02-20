import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesQueretaro } from '../../../chunks/estaciones-queretaro_CEqmmqmq.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesQueretaro.map((estacion) => ({
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
    nombre: "Quer\xE9taro",
    slug: "queretaro",
    siglas: "QRO",
    poblacion: "2.4 millones",
    municipios: 18
  };
  const estadosVecinos = [
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Michoac\xE1n", slug: "michoacan" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen el hub aeroespacial #1 de M\xE9xico. Certificaci\xF3n HAZMAT para emergencias en Bombardier, Safran y el cl\xFAster aeroespacial.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en Centro Hist\xF3rico UNESCO, <strong>Pe\xF1a de Bernal</strong> (monolito m\xE1s grande del mundo) y la autopista 57D M\xE9xico-Quer\xE9taro.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica y qu\xEDmica certificada para emergencias en <strong>Quer\xE9taro</strong>. Prensi\xF3n segura para rescate vertical en Pe\xF1a de Bernal, operaciones HAZMAT aeroespaciales y rescate carretero.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno industrial de <strong>Quer\xE9taro</strong>. Suela resistente a materiales aeroespaciales, qu\xEDmicos industriales y terreno monta\xF1oso de Sierra Gorda.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Querétaro</h2> <p>
La <strong>${estacion.nombreCorto ?? estacion.nombre}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${ubicacion}</strong>,
      institución que protege el hub aeroespacial más importante de México y doble Patrimonio UNESCO.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${ubicacion}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Querétaro están capacitados para atender
      emergencias HAZMAT aeroespaciales, rescate vertical, protección patrimonial UNESCO y rescate carretero.
</p> <h3>Querétaro: Aeroespacial, UNESCO y Peña de Bernal</h3> <p> <strong>Querétaro</strong> es el hub aeroespacial #1 de México con empresas como <strong>Bombardier</strong>,
<strong>Safran</strong> y <strong>ITP Aero</strong>. El Centro Histórico y las Misiones de Sierra Gorda son
      Patrimonio UNESCO. La <strong>Peña de Bernal</strong> es el tercer monolito más grande del mundo.
      Los 4 Pueblos Mágicos y la Ruta del Vino atraen millones de turistas. La autopista 57D es una de las más transitadas del país.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Querétaro con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-hazmat">trajes HAZMAT</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/queretaro/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/queretaro/[slug].astro";
const $$url = "/directorio/queretaro/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
