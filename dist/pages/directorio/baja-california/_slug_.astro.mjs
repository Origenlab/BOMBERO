import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesBajaCalifornia } from '../../../chunks/estaciones-baja-california_Rgsk1SpR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesBajaCalifornia.map((estacion) => ({
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
    nombre: "Baja California",
    slug: "baja-california",
    siglas: "BC",
    poblacion: "3.8 millones",
    municipios: 5
  };
  const estadosVecinos = [
    { nombre: "Baja California Sur", slug: "baja-california-sur" },
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" },
    { nombre: "Jalisco", slug: "jalisco" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que enfrentan incendios industriales en maquiladoras, emergencias en puertos y condiciones clim\xE1ticas extremas. Protecci\xF3n t\xE9rmica certificada para la industria fronteriza m\xE1s grande de M\xE9xico.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 requerida en los parques industriales de Tijuana, Mexicali y Ensenada. Compatible con el sistema 3 capas exigido en las plantas aeroespaciales, electr\xF3nicas y de dispositivos m\xE9dicos de <strong>Baja California</strong>.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias industriales y HAZMAT en <strong>${ubicacion}</strong>. Prensi\xF3n segura en rescate vehicular sobre las autopistas Tijuana-Mexicali y Tijuana-Ensenada.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el exigente entorno industrial de <strong>Baja California</strong>. Puntera de acero y suela antiderrapante para pisos de maquiladoras, terminales portuarias y operaciones en el desierto.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${estacion.municipio}, Baja California</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${estacion.municipio}</strong>,
      institución que protege a los más de <strong>3.8 millones de bajacalifornianos</strong>. Esta estación, ubicada en
<strong>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención las 24 horas del día,
      los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${estacion.municipio}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Baja California están capacitados para atender
      incendios estructurales e industriales, rescates vehiculares, emergencias HAZMAT, incendios forestales y todo tipo de emergencias.
</p> <h3>Baja California: Industria, Frontera y Turismo</h3> <p> <strong>Baja California</strong> es el estado fronterizo más dinámico de México, hogar de la industria maquiladora más grande
      del país con más de <strong>1,000 plantas en Tijuana, Mexicali y Tecate</strong>. También destaca por el <strong>Puerto de Ensenada</strong>,
      el <strong>Valle de Guadalupe</strong> (región vitivinícola) y destinos turísticos como <strong>Playas de Rosarito</strong>.
      Los bomberos atienden emergencias industriales de alta complejidad, incendios forestales y rescates en zonas fronterizas.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Baja California con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california/[slug].astro";
const $$url = "/directorio/baja-california/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
