import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesChiapas } from '../../../chunks/estaciones-chiapas_riY5rmyw.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesChiapas.map((estacion) => ({
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
    nombre: "Chiapas",
    slug: "chiapas",
    siglas: "CHIS",
    poblacion: "5.5 millones",
    municipios: 124
  };
  const estadosVecinos = [
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Tabasco", slug: "tabasco" },
    { nombre: "Campeche", slug: "campeche" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen zonas arqueol\xF3gicas UNESCO como Palenque, pueblos m\xE1gicos y la invaluable Selva Lacandona. Protecci\xF3n t\xE9rmica certificada para emergencias en la regi\xF3n m\xE1s biodiversa de M\xE9xico.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en el <strong>Ca\xF1\xF3n del Sumidero</strong>, <strong>San Crist\xF3bal de las Casas</strong> y zonas de alta afluencia tur\xEDstica. Compatible con equipos de rescate t\xE9cnico en terreno monta\xF1oso.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en <strong>${ubicacion}</strong>. Prensi\xF3n segura en rescate vertical en cascadas de Agua Azul, operaciones forestales en la Selva Lacandona y rescate en zonas fronterizas con Guatemala.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno diverso de <strong>Chiapas</strong>. Suela antiderrapante para terreno selv\xE1tico, cascadas, zonas arqueol\xF3gicas y las empinadas calles empedradas de los pueblos m\xE1gicos.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${estacion.municipio}, Chiapas</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${estacion.municipio}</strong>,
      institución que protege a los habitantes y millones de turistas que visitan <strong>Chiapas</strong> cada año.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${estacion.municipio}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Chiapas están capacitados para atender
      incendios estructurales, rescate en cascadas y ríos, emergencias en zonas arqueológicas, incendios forestales
      en la Selva Lacandona y atención a turistas nacionales e internacionales.
</p> <h3>Chiapas: Biodiversidad, Cultura Maya y 5 Pueblos Mágicos</h3> <p> <strong>Chiapas</strong> es uno de los estados más diversos de México. Alberga la <strong>Selva Lacandona</strong>,
      segunda selva tropical más grande de América, el <strong>Cañón del Sumidero</strong>, y zonas arqueológicas
      UNESCO como <strong>Palenque</strong>. Con 5 pueblos mágicos (<strong>San Cristóbal de las Casas</strong>,
<strong>Chiapa de Corzo</strong>, <strong>Comitán</strong>, <strong>Palenque</strong> y <strong>San Juan Chamula</strong>),
      el estado recibe más de 4.5 millones de turistas anuales. Los 658 km de frontera con Guatemala añaden complejidad
      a las operaciones de emergencia.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Chiapas con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-forestal-nfpa-1977">equipo forestal NFPA</a>, <a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chiapas/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chiapas/[slug].astro";
const $$url = "/directorio/chiapas/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
