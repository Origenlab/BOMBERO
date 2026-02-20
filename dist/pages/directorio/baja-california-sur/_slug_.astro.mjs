import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesBajaCaliforniaSur } from '../../../chunks/estaciones-baja-california-sur_ZmihOM5u.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesBajaCaliforniaSur.map((estacion) => ({
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
    nombre: "Baja California Sur",
    slug: "baja-california-sur",
    siglas: "BCS",
    poblacion: "800 mil",
    municipios: 5
  };
  const estadosVecinos = [
    { nombre: "Baja California", slug: "baja-california" },
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que enfrentan emergencias en hoteles de lujo, marinas de yates y zonas tur\xEDsticas. Protecci\xF3n t\xE9rmica certificada para el destino tur\xEDstico m\xE1s exclusivo de M\xE9xico.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 para operaciones en resorts, campos de golf y zonas hoteleras de <strong>Los Cabos</strong> y <strong>La Paz</strong>. Compatible con equipos de rescate acu\xE1tico en el Mar de Cort\xE9s.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias en <strong>${ubicacion}</strong>. Prensi\xF3n segura en rescate acu\xE1tico, operaciones en embarcaciones y evacuaciones por huracanes del Pac\xEDfico.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno \xFAnico de <strong>Baja California Sur</strong>. Suela antiderrapante para operaciones en playas, marinas, embarcaciones y terreno des\xE9rtico.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${estacion.municipio}, Baja California Sur</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de ${estacion.municipio}</strong>,
      institución que protege a los habitantes y millones de turistas que visitan <strong>Baja California Sur</strong> cada año.
      Esta estación, ubicada en <strong>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención
      las 24 horas del día, los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${estacion.municipio}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de BCS están capacitados para atender
      incendios estructurales, rescate acuático en el Mar de Cortés, emergencias en hoteles y resorts, evacuaciones por huracanes
      y todo tipo de emergencias turísticas.
</p> <h3>Baja California Sur: Turismo, Mar de Cortés y Naturaleza</h3> <p> <strong>Baja California Sur</strong> es uno de los destinos turísticos más exclusivos del mundo. <strong>Los Cabos</strong>
recibe más de 3 millones de visitantes anuales en sus resorts de clase mundial. El <strong>Mar de Cortés</strong>,
      llamado "el acuario del mundo" por Jacques Cousteau, es Patrimonio Natural de la Humanidad UNESCO.
      Los bomberos enfrentan retos únicos: rescates en playas de alto riesgo, emergencias en marinas de yates,
      evacuaciones por huracanes del Pacífico y atención a turistas internacionales.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Baja California Sur con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california-sur/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california-sur/[slug].astro";
const $$url = "/directorio/baja-california-sur/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
