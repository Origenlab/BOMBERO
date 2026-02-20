import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesGuerrero } from '../../../chunks/estaciones-guerrero_BSNFxEP-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesGuerrero.map((estacion) => ({
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
    nombre: "Guerrero",
    slug: "guerrero",
    siglas: "GRO",
    poblacion: "3.6 millones",
    municipios: 81
  };
  const estadosVecinos = [
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Puebla", slug: "puebla" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que protegen destinos tur\xEDsticos de clase mundial como Acapulco e Ixtapa-Zihuatanejo. Certificaci\xF3n para emergencias en hoteles, playas y zonas de alta afluencia tur\xEDstica.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en la Bah\xEDa de Acapulco, zona hotelera de Ixtapa y rescate acu\xE1tico en las playas m\xE1s visitadas de M\xE9xico. Compatible con equipos de rescate mar\xEDtimo.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en <strong>Guerrero</strong>. Prensi\xF3n segura para rescate acu\xE1tico, operaciones en huracanes del Pac\xEDfico y emergencias en zonas tur\xEDsticas.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno costero de <strong>Guerrero</strong>. Suela antiderrapante para operaciones en playas, muelles tur\xEDsticos y rescate en zonas inundadas por huracanes.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Guerrero</h2> <p>
La <strong>${estacion.nombreCorto ?? estacion.nombre}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${ubicacion}</strong>,
      institución que protege uno de los destinos turísticos más importantes de México.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${ubicacion}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Guerrero están capacitados para atender
      incendios estructurales, rescate acuático, emergencias por huracanes, atención a turistas y todo tipo de emergencias.
</p> <h3>Guerrero: Acapulco, Ixtapa-Zihuatanejo y Taxco</h3> <p> <strong>Guerrero</strong> es hogar de los destinos turísticos más emblemáticos de México. <strong>Acapulco</strong>
fue el principal destino de playa internacional durante décadas. <strong>Ixtapa-Zihuatanejo</strong> ofrece
      turismo de lujo. <strong>Taxco</strong>, Pueblo Mágico, es la capital de la plata. Los bomberos enfrentan
      huracanes del Pacífico, rescate acuático en playas, emergencias en hoteles y protección del patrimonio colonial.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Guerrero con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guerrero/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guerrero/[slug].astro";
const $$url = "/directorio/guerrero/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
