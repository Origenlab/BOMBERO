import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$EstacionLayout } from '../../../chunks/EstacionLayout_D0BGr3eE.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesGuanajuato } from '../../../chunks/estaciones-guanajuato_BlzDgO1R.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesGuanajuato.map((estacion) => ({
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
    nombre: "Guanajuato",
    slug: "guanajuato",
    siglas: "GTO",
    poblacion: "6.2 millones",
    municipios: 46
  };
  const estadosVecinos = [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Quer\xE9taro", slug: "queretaro" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Zacatecas", slug: "zacatecas" }
  ];
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const eppCards = [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: `Traje Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: `Dise\xF1ado para los bomberos de <strong>${ubicacion}</strong> que combaten incendios en el corredor industrial del Baj\xEDo. Protecci\xF3n t\xE9rmica certificada para emergencias en plantas automotrices, curtidur\xEDas y refiner\xEDas.`,
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: `Casco Estructural NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: `Certificaci\xF3n NFPA 1971 requerida en el corredor industrial de Guanajuato. Compatible con el sistema 3 capas exigido en las plantas de <strong>Toyota, GM, Mazda</strong> y la refiner\xEDa de Salamanca.`,
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: `Guantes Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: `Resistencia t\xE9rmica certificada para emergencias industriales en <strong>Guanajuato</strong>. Prensi\xF3n segura en rescate vehicular y protecci\xF3n contra solventes en la industria del calzado.`,
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: `Botas Estructurales NFPA 1971 para bomberos ${ubicacion}`,
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: `Calzado certificado NFPA 1971 para el entorno industrial del Baj\xEDo. Puntera de acero y suela antiderrapante para pisos de f\xE1brica, plantas automotrices y operaciones en zona petroqu\xEDmica.`,
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "EstacionLayout", $$EstacionLayout, { "estacion": estacion, "estado": estado, "estadosVecinos": estadosVecinos, "estacionesCercanas": estacionesCercanas, "eppCards": eppCards }, { "seo-content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo-content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Bomberos en ${ubicacion}, Guanajuato</h2> <p>
La <strong>${estacion.nombreCorto}</strong> es parte del <strong>H. Cuerpo de Bomberos de Guanajuato</strong>,
      institución que protege a los más de <strong>6.2 millones de guanajuatenses</strong>. Esta estación, ubicada en
<strong>${estacion.direccion}, ${estacion.colonia}, ${ubicacion}</strong>, brinda atención las 24 horas del día,
      los 365 días del año.
</p> <p>
En caso de <strong>emergencia en ${ubicacion}</strong>, marca el <strong>911</strong> o comunícate directamente
      a esta estación al <strong>${estacion.telefono}</strong>. Los bomberos de Guanajuato están capacitados para atender
      incendios, rescates vehiculares, fugas de gas, emergencias industriales y todo tipo de emergencias.
</p> <h3>Guanajuato: Industria y Patrimonio</h3> <p> <strong>Guanajuato</strong> es el corazón del Bajío mexicano, líder nacional en industria automotriz con plantas de
<strong>Toyota, GM, Mazda y Honda</strong>. León es la Capital Mundial del Calzado, mientras que ciudades como
<strong>San Miguel de Allende</strong> y la capital Guanajuato son Patrimonio de la Humanidad UNESCO.
      Los bomberos atienden desde emergencias industriales hasta protección de patrimonio cultural.
</p> <h3>¿Necesitas equipo certificado para bomberos?</h3> <p>
En <strong><a href="/">BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong>equipo para bomberos certificado NFPA</strong>.
      Equipamos estaciones en todo Guanajuato con <a href="/productos/trajes-para-bomberos">trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos">cascos</a>, <a href="/productos/guantes-para-bomberos">guantes</a>,
<a href="/productos/botas-para-bomberos">botas certificadas</a> y más.
<a href="/cotizar">Solicita una cotización</a> sin compromiso.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guanajuato/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guanajuato/[slug].astro";
const $$url = "/directorio/guanajuato/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
