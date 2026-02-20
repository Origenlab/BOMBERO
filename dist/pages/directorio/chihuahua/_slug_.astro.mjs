import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesChihuahua } from '../../../chunks/estaciones-chihuahua_NvV-0Zbp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesChihuahua.map((estacion) => ({
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
    nombre: "Chihuahua",
    slug: "chihuahua",
    siglas: "CHIH",
    poblacion: "3.8 millones",
    municipios: 67
  };
  const estadosVecinos = [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que enfrentan emergencias en maquiladoras de Ciudad Ju\xE1rez, incendios forestales en la Sierra Tarahumara y el clima extremo del desierto chihuahuense. Certificaci\xF3n requerida en zonas industriales.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en las <strong>Barrancas del Cobre</strong>, zonas maquiladoras fronterizas y el sitio UNESCO de <strong>Paquim\xE9</strong>. Compatible con equipos de rescate en altura para la Sierra Tarahumara.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en <strong>Ciudad Ju\xE1rez</strong> y la capital del estado m\xE1s grande de M\xE9xico. Prensi\xF3n segura para rescate minero, operaciones forestales y emergencias industriales en maquiladoras.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno extremo de <strong>Chihuahua</strong>. Suela resistente a temperaturas de -20\xB0C en la sierra y +45\xB0C en el desierto. Ideal para operaciones en todo tipo de terreno.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${estacion.municipio}, Chihuahua</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${estacion.municipio}</strong>,
      institución que protege a los habitantes del estado más grande de México por territorio.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${estacion.municipio}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Chihuahua están capacitados para atender
      incendios estructurales e industriales, rescate en minas, incendios forestales en la Sierra Tarahumara,
      emergencias en maquiladoras y rescate técnico en las Barrancas del Cobre.
</p> <h3>Chihuahua: El Estado Más Grande de México</h3> <p> <strong>Chihuahua</strong> es el estado más extenso de México con 247,455 km², frontera con Estados Unidos
      y hogar de la espectacular <strong>Sierra Tarahumara</strong> con las <strong>Barrancas del Cobre</strong>,
      más profundas que el Gran Cañón. <strong>Ciudad Juárez</strong> es la principal ciudad fronteriza con EE.UU.
      y centro maquilador mundial. <strong>Paquimé</strong> (Casas Grandes) es Patrimonio UNESCO. Los bomberos
      enfrentan condiciones extremas: -20°C en invierno en la sierra, +45°C en verano en el desierto, y emergencias
      industriales en más de 500 maquiladoras.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Chihuahua con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/trajes-para-bomberos/traje-forestal-nfpa-1977">equipo forestal NFPA</a>, <a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chihuahua/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chihuahua/[slug].astro";
const $$url = "/directorio/chihuahua/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
