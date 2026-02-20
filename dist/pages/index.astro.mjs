import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_C37tG6Zv.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$SectionHeader } from '../chunks/SectionHeader_DiQp1BQS.mjs';
import { a as $$CategoryCard, $ as $$WhyChooseUs } from '../chunks/WhyChooseUs_Dj6VV4wI.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_Cd7__Cxx.mjs';
import { $ as $$CTABanner } from '../chunks/CTABanner_CozAoE6V.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
const $$Certifications = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Certifications;
  const {
    title = "Certificaciones y est\xE1ndares que nos respaldan",
    variant = "default",
    showTitle = true
  } = Astro2.props;
  const certifications = [
    { logo: "NFPA", name: "National Fire Protection" },
    { logo: "UL", name: "Underwriters Lab" },
    { logo: "EN", name: "European Standards" },
    { logo: "ISO", name: "9001:2015" },
    { logo: "NOM", name: "Norma Oficial MX" }
  ];
  const sectionClasses = [
    "certifications",
    `certifications--${variant}`
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionClasses, "class")} data-astro-cid-n357i2j7> <div class="container" data-astro-cid-n357i2j7> ${showTitle && renderTemplate`<p class="certifications__title" data-astro-cid-n357i2j7>${title}</p>`} <div class="certifications__list" data-astro-cid-n357i2j7> ${certifications.map((cert) => renderTemplate`<div class="certifications__item" data-astro-cid-n357i2j7> <span class="certifications__logo" data-astro-cid-n357i2j7>${cert.logo}</span> <span class="certifications__name" data-astro-cid-n357i2j7>${cert.name}</span> </div>`)} </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Certifications.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "BOMBERO.MX ha sido un aliado estrat\xE9gico para Gama de M\xE9xico en el equipamiento de brigadas contra incendio. Su conocimiento t\xE9cnico en normativas NFPA y la disponibilidad inmediata de equipos certificados nos permite ofrecer soluciones integrales a nuestros clientes industriales. Profesionalismo y confiabilidad en cada proyecto.",
      name: "Gama de M\xE9xico",
      role: "Soluciones Integrales en Seguridad Industrial",
      company: "Gama de M\xE9xico",
      location: "Ciudad de M\xE9xico",
      website: "https://gamademexico.com/"
    },
    {
      quote: "Como especialistas en sistemas contra incendio, elegimos a BOMBERO.MX por su compromiso con la calidad y certificaciones. Su cat\xE1logo de equipo EPP certificado NFPA complementa perfectamente nuestros servicios de ingenier\xEDa y nos permite entregar proyectos integrales a clientes industriales y comerciales.",
      name: "LGA Contra Incendios",
      role: "Ingenier\xEDa en Sistemas Contra Incendio",
      company: "LGA Contra Incendios",
      location: "M\xE9xico",
      website: "https://lgacontraincendios.com/"
    },
    {
      quote: "En MESECI confiamos en BOMBERO.MX como proveedor de equipo de protecci\xF3n personal para nuestros proyectos de mantenimiento industrial. La calidad de sus trajes estructurales, equipos SCBA y herramientas de rescate nos permite garantizar la seguridad de las brigadas que capacitamos y equipamos.",
      name: "MESECI",
      role: "Mantenimiento y Servicios Contra Incendio",
      company: "MESECI",
      location: "M\xE9xico",
      website: "https://meseci.com.mx/"
    },
    {
      quote: "Proyecto Red ha encontrado en BOMBERO.MX un socio confiable para el suministro de equipo contra incendio. Su experiencia en certificaciones NFPA y su amplio inventario nos permite responder con agilidad a las necesidades de protecci\xF3n de nuestros clientes corporativos e industriales.",
      name: "Proyecto Red",
      role: "Soluciones en Protecci\xF3n Contra Incendio",
      company: "Proyecto Red",
      location: "M\xE9xico",
      website: "https://proyectored.com.mx/"
    },
    {
      quote: "Nuestra especializaci\xF3n en mantenimiento de extintores se complementa con el equipo de protecci\xF3n personal de BOMBERO.MX. Ofrecemos a nuestros clientes soluciones completas: desde la recarga de extintores hasta el equipamiento de brigadas con trajes, cascos y guantes certificados NFPA.",
      name: "Mantenimiento de Extintores",
      role: "Recarga y Mantenimiento de Equipos",
      company: "Mantenimiento de Extintores",
      location: "M\xE9xico",
      website: "https://mantenimientodeextintores.mx/"
    },
    {
      quote: "Como distribuidores de equipo de seguridad industrial, trabajamos con BOMBERO.MX para ofrecer soluciones especializadas en protecci\xF3n contra incendios. Su l\xEDnea de trajes estructurales, equipos SCBA y herramientas de rescate certificadas complementa nuestra oferta de EPP industrial.",
      name: "Equipo de Seguridad Industrial",
      role: "Distribuci\xF3n de EPP y Seguridad",
      company: "Equipo de Seguridad Industrial",
      location: "M\xE9xico",
      website: "https://equipo-de-seguridad-industrial.com/"
    },
    {
      quote: "Especializados en monitores contra incendio, recomendamos BOMBERO.MX a nuestros clientes para el equipamiento de brigadas. Su gama de productos certificados NFPA y la asesor\xEDa t\xE9cnica profesional garantizan que cada proyecto de protecci\xF3n contra fuego est\xE9 completo.",
      name: "Monitores Contra Incendios",
      role: "Sistemas de Supresi\xF3n y Monitores",
      company: "Monitores Contra Incendios",
      location: "M\xE9xico",
      website: "https://monitorescontraincendios.com/"
    },
    {
      quote: "En el sector de seguridad privada, la protecci\xF3n contra incendios es fundamental. BOMBERO.MX nos provee equipo certificado para capacitar y equipar brigadas en corporativos, centros comerciales y desarrollos inmobiliarios. Respuesta r\xE1pida y productos de calidad internacional.",
      name: "Seguridad Privada",
      role: "Servicios de Seguridad Integral",
      company: "Seguridad Privada",
      location: "M\xE9xico",
      website: "https://seguridad-privada.com.mx/"
    },
    {
      quote: "Administramos la seguridad en condominios y fraccionamientos residenciales. BOMBERO.MX es nuestro proveedor de confianza para equipar brigadas internas con extintores, equipo de protecci\xF3n y se\xF1alizaci\xF3n. Cumplimiento normativo garantizado y excelente servicio.",
      name: "Seguridad Privada Condominios",
      role: "Seguridad Residencial y Corporativa",
      company: "Seguridad Privada Condominios",
      location: "M\xE9xico",
      website: "https://seguridadprivadacondominios.com/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="testimonials" id="testimonios" data-astro-cid-aadlzisc> <div class="container" data-astro-cid-aadlzisc> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "label": "Rese\xF1as de Clientes", "title": "M\xE1s de 500 Estaciones de Bomberos Conf\xEDan en Nosotros", "description": "Cuerpos de bomberos, protecci\xF3n civil y brigadas industriales en los 32 estados eligen BOMBERO.MX como su proveedor de equipo de protecci\xF3n personal.", "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-aadlzisc>
Cada reseña representa una <strong data-astro-cid-aadlzisc>estación equipada</strong>, una <strong data-astro-cid-aadlzisc>brigada protegida</strong>
y personal de primera respuesta que cuenta con el mejor equipo certificado NFPA disponible en México.
</p> <p data-astro-cid-aadlzisc>
Trabajamos con <strong data-astro-cid-aadlzisc>H. Cuerpos de Bomberos</strong>, unidades de <strong data-astro-cid-aadlzisc>Protección Civil</strong>,
<strong data-astro-cid-aadlzisc>brigadas industriales</strong> de PEMEX, CFE, refinerías y plantas manufactureras en toda la República.
</p> ` })} <div class="testimonials__grid" data-astro-cid-aadlzisc> ${testimonials.map((testimonial) => renderTemplate`<article class="review-card" data-astro-cid-aadlzisc> <div class="review-card__stars" aria-label="5 estrellas" data-astro-cid-aadlzisc> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-aadlzisc><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-aadlzisc></path></svg> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-aadlzisc><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-aadlzisc></path></svg> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-aadlzisc><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-aadlzisc></path></svg> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-aadlzisc><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-aadlzisc></path></svg> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-aadlzisc><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-aadlzisc></path></svg> </div> <blockquote class="review-card__quote" data-astro-cid-aadlzisc>"${testimonial.quote}"</blockquote> <footer class="review-card__author" data-astro-cid-aadlzisc> <div class="review-card__avatar" data-astro-cid-aadlzisc> <span data-astro-cid-aadlzisc>${testimonial.name.split(" ").map((n) => n.charAt(0)).slice(0, 2).join("")}</span> </div> <div class="review-card__info" data-astro-cid-aadlzisc> <cite class="review-card__name" data-astro-cid-aadlzisc>${testimonial.name}</cite> <span class="review-card__role" data-astro-cid-aadlzisc>${testimonial.role}</span> ${testimonial.website ? renderTemplate`<a${addAttribute(testimonial.website, "href")} target="_blank" rel="noopener" class="review-card__link" data-astro-cid-aadlzisc> ${testimonial.website.replace("https://", "").replace("/", "")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-aadlzisc><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" data-astro-cid-aadlzisc></path></svg> </a>` : renderTemplate`<span class="review-card__company" data-astro-cid-aadlzisc>${testimonial.company} · ${testimonial.location}</span>`} </div> </footer> </article>`)} </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Testimonials.astro", void 0);

const $$CompanyInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="company-info" id="nosotros" data-astro-cid-e24ha2of> <div class="container" data-astro-cid-e24ha2of> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "label": "Conoce BOMBERO.MX", "title": "Tu Distribuidor de Equipos para Bomberos en M\xE9xico", "description": "M\xE1s de 15 a\xF1os equipando a cuerpos de bomberos, protecci\xF3n civil y brigadas industriales en los 32 estados de la Rep\xFAblica Mexicana.", "data-astro-cid-e24ha2of": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-e24ha2of> <strong data-astro-cid-e24ha2of>BOMBERO.MX</strong> es el distribuidor líder de <strong data-astro-cid-e24ha2of>equipos para bomberos</strong> y
<strong data-astro-cid-e24ha2of>equipo de protección personal contra incendios</strong> en México. Nuestra misión es
        proteger la vida de quienes protegen la nuestra: los <strong data-astro-cid-e24ha2of>bomberos de México</strong>.
</p> <p data-astro-cid-e24ha2of>
Trabajamos con <strong data-astro-cid-e24ha2of>H. Cuerpos de Bomberos</strong>, unidades de <strong data-astro-cid-e24ha2of>Protección Civil</strong>,
<strong data-astro-cid-e24ha2of>brigadas industriales</strong> y empresas que requieren equipamiento certificado
        para sus equipos de primera respuesta.
</p> ` })} <!-- Content Grid --> <div class="company-info__grid" data-astro-cid-e24ha2of> <!-- Main Content --> <div class="company-info__main" data-astro-cid-e24ha2of> <article class="company-info__block" data-astro-cid-e24ha2of> <h3 data-astro-cid-e24ha2of>Venta de Equipos para Bomberos en Toda la República</h3> <p data-astro-cid-e24ha2of>
En <strong data-astro-cid-e24ha2of>BOMBERO.MX</strong> nos especializamos en la <strong data-astro-cid-e24ha2of>venta de equipos para bomberos</strong>
con cobertura en los <strong data-astro-cid-e24ha2of>32 estados de México</strong>. Desde Ciudad de México hasta Tijuana,
            de Cancún a Monterrey, llevamos el mejor <strong data-astro-cid-e24ha2of>equipo contra incendios</strong> a cada rincón del país.
</p> <p data-astro-cid-e24ha2of>
Nuestro catálogo incluye <strong data-astro-cid-e24ha2of>trajes estructurales NFPA 1971</strong>, <strong data-astro-cid-e24ha2of>cascos para bombero</strong>,
<strong data-astro-cid-e24ha2of>guantes contra incendio</strong>, <strong data-astro-cid-e24ha2of>botas de bombero</strong>, <strong data-astro-cid-e24ha2of>equipos SCBA</strong>,
<strong data-astro-cid-e24ha2of>herramientas de rescate</strong>, <strong data-astro-cid-e24ha2of>mangueras contra incendio</strong> y todo el
<strong data-astro-cid-e24ha2of>equipo de protección personal (EPP)</strong> que requiere una estación profesional.
</p> </article> <article class="company-info__block" data-astro-cid-e24ha2of> <h3 data-astro-cid-e24ha2of>Certificaciones que Garantizan Calidad</h3> <p data-astro-cid-e24ha2of>
Todos nuestros <strong data-astro-cid-e24ha2of>equipos para bomberos</strong> cuentan con certificaciones internacionales:
<strong data-astro-cid-e24ha2of>NFPA</strong> (National Fire Protection Association), <strong data-astro-cid-e24ha2of>UL</strong> (Underwriters Laboratories),
<strong data-astro-cid-e24ha2of>EN</strong> (European Standards) y <strong data-astro-cid-e24ha2of>NOM</strong> (Norma Oficial Mexicana).
</p> <p data-astro-cid-e24ha2of>
Somos distribuidores autorizados de las marcas más reconocidas del mundo:
<strong data-astro-cid-e24ha2of>MSA</strong>, <strong data-astro-cid-e24ha2of>Honeywell</strong>, <strong data-astro-cid-e24ha2of>Globe</strong>, <strong data-astro-cid-e24ha2of>Bullard</strong>,
<strong data-astro-cid-e24ha2of>Cairns</strong>, <strong data-astro-cid-e24ha2of>Lion</strong> y <strong data-astro-cid-e24ha2of>Holmatro</strong>. Cada producto viene con
            documentación completa, números de serie verificables y garantía de fábrica.
</p> </article> <article class="company-info__block" data-astro-cid-e24ha2of> <h3 data-astro-cid-e24ha2of>Servicio Integral para Estaciones de Bomberos</h3> <p data-astro-cid-e24ha2of>
No solo vendemos <strong data-astro-cid-e24ha2of>equipo para bomberos</strong>, ofrecemos un servicio integral que incluye:
</p> <ul class="company-info__list" data-astro-cid-e24ha2of> <li data-astro-cid-e24ha2of><strong data-astro-cid-e24ha2of>Asesoría técnica gratuita</strong> para seleccionar el equipo adecuado</li> <li data-astro-cid-e24ha2of><strong data-astro-cid-e24ha2of>Especificaciones técnicas</strong> para licitaciones públicas</li> <li data-astro-cid-e24ha2of><strong data-astro-cid-e24ha2of>Capacitación</strong> en uso y mantenimiento de equipos</li> <li data-astro-cid-e24ha2of><strong data-astro-cid-e24ha2of>Servicio post-venta</strong> y soporte técnico permanente</li> <li data-astro-cid-e24ha2of><strong data-astro-cid-e24ha2of>Envíos a los 32 estados</strong> con tiempos de entrega garantizados</li> <li data-astro-cid-e24ha2of><strong data-astro-cid-e24ha2of>Facturación</strong> para gobierno, empresas y particulares</li> </ul> </article> </div> <!-- Sidebar --> <aside class="company-info__sidebar" data-astro-cid-e24ha2of> <div class="company-info__card" data-astro-cid-e24ha2of> <h4 data-astro-cid-e24ha2of>Cobertura Nacional</h4> <p data-astro-cid-e24ha2of>Envíos a los 32 estados de la República Mexicana</p> <div class="company-info__states" data-astro-cid-e24ha2of> <a href="/directorio/ciudad-de-mexico" data-astro-cid-e24ha2of>CDMX</a> <a href="/directorio/nuevo-leon" data-astro-cid-e24ha2of>Monterrey</a> <a href="/directorio/jalisco" data-astro-cid-e24ha2of>Guadalajara</a> <a href="/directorio/puebla" data-astro-cid-e24ha2of>Puebla</a> <a href="/directorio/baja-california" data-astro-cid-e24ha2of>Tijuana</a> <a href="/directorio/guanajuato" data-astro-cid-e24ha2of>León</a> <a href="/directorio/quintana-roo" data-astro-cid-e24ha2of>Cancún</a> <a href="/directorio/yucatan" data-astro-cid-e24ha2of>Mérida</a> <a href="/directorio/queretaro" data-astro-cid-e24ha2of>Querétaro</a> <a href="/directorio" data-astro-cid-e24ha2of>+23 estados</a> </div> </div> <div class="company-info__card" data-astro-cid-e24ha2of> <h4 data-astro-cid-e24ha2of>Sectores que Atendemos</h4> <ul class="company-info__sectors" data-astro-cid-e24ha2of> <li data-astro-cid-e24ha2of> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-e24ha2of><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-e24ha2of></path></svg>
H. Cuerpos de Bomberos
</li> <li data-astro-cid-e24ha2of> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-e24ha2of><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-e24ha2of></path></svg>
Protección Civil
</li> <li data-astro-cid-e24ha2of> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-e24ha2of><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-e24ha2of></path></svg>
Brigadas Industriales
</li> <li data-astro-cid-e24ha2of> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-e24ha2of><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-e24ha2of></path></svg>
PEMEX y CFE
</li> <li data-astro-cid-e24ha2of> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-e24ha2of><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-e24ha2of></path></svg>
Aeropuertos (ARFF)
</li> <li data-astro-cid-e24ha2of> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-e24ha2of><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-e24ha2of></path></svg>
Hospitales y Hoteles
</li> </ul> </div> <div class="company-info__card" data-astro-cid-e24ha2of> <h4 data-astro-cid-e24ha2of>Ubicación</h4> <address class="company-info__address" data-astro-cid-e24ha2of> <strong data-astro-cid-e24ha2of>BOMBERO.MX</strong><br data-astro-cid-e24ha2of>
Av. Tamaulipas 150, Piso 13<br data-astro-cid-e24ha2of>
Col. Condesa, Cuauhtémoc<br data-astro-cid-e24ha2of>
06140 Ciudad de México, CDMX
</address> <p class="company-info__hours" data-astro-cid-e24ha2of>Lunes a Viernes: 9:00 - 18:00 hrs</p> </div> <div class="company-info__card company-info__card--cta" data-astro-cid-e24ha2of> <h4 data-astro-cid-e24ha2of>¿Necesitas Cotizar?</h4> <p data-astro-cid-e24ha2of>Solicita una cotización sin compromiso para tu estación o empresa</p> <a href="/cotizar" class="company-info__btn" data-astro-cid-e24ha2of>
Solicitar Cotización
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-e24ha2of> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-e24ha2of></path> </svg> </a> </div> </aside> </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/CompanyInfo.astro", void 0);

const $$QuoteForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="quote-form" id="cotizar" data-astro-cid-dmdhz2qs> <div class="container" data-astro-cid-dmdhz2qs> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "label": "Solicita tu Cotizaci\xF3n", "title": "Cotiza tu Equipo para Bomberos en Minutos", "description": "Completa el formulario y recibe una cotizaci\xF3n personalizada con precios, disponibilidad y tiempos de entrega. Sin compromiso.", "data-astro-cid-dmdhz2qs": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-dmdhz2qs>
En <strong data-astro-cid-dmdhz2qs>BOMBERO.MX</strong> respondemos todas las cotizaciones en menos de 24 horas.
        Nuestro equipo de asesores te ayudará a seleccionar el equipo correcto para tu estación o brigada.
</p> ` })} <div class="quote-form__grid" data-astro-cid-dmdhz2qs> <!-- Main Content: Form --> <div class="quote-form__main" data-astro-cid-dmdhz2qs> <form class="quote-form__form" action="/api/cotizar" method="POST" data-astro-cid-dmdhz2qs> <div class="quote-form__row" data-astro-cid-dmdhz2qs> <div class="quote-form__field" data-astro-cid-dmdhz2qs> <label for="nombre" data-astro-cid-dmdhz2qs>Nombre completo</label> <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required data-astro-cid-dmdhz2qs> </div> <div class="quote-form__field" data-astro-cid-dmdhz2qs> <label for="contacto" data-astro-cid-dmdhz2qs>Teléfono o Email</label> <input type="text" id="contacto" name="contacto" placeholder="55 2078 0102 o tu@email.com" required data-astro-cid-dmdhz2qs> </div> </div> <div class="quote-form__row" data-astro-cid-dmdhz2qs> <div class="quote-form__field" data-astro-cid-dmdhz2qs> <label for="institucion" data-astro-cid-dmdhz2qs>Institución / Empresa</label> <input type="text" id="institucion" name="institucion" placeholder="Ej: H. Cuerpo de Bomberos de..." data-astro-cid-dmdhz2qs> </div> <div class="quote-form__field" data-astro-cid-dmdhz2qs> <label for="equipo" data-astro-cid-dmdhz2qs>Tipo de equipo</label> <select id="equipo" name="equipo" required data-astro-cid-dmdhz2qs> <option value="" data-astro-cid-dmdhz2qs>Selecciona el equipo que necesitas</option> <option value="trajes" data-astro-cid-dmdhz2qs>Trajes de Bombero</option> <option value="cascos" data-astro-cid-dmdhz2qs>Cascos</option> <option value="botas" data-astro-cid-dmdhz2qs>Botas</option> <option value="guantes" data-astro-cid-dmdhz2qs>Guantes</option> <option value="scba" data-astro-cid-dmdhz2qs>Equipos SCBA</option> <option value="herramientas" data-astro-cid-dmdhz2qs>Herramientas de Rescate</option> <option value="varios" data-astro-cid-dmdhz2qs>Varios / Equipamiento Completo</option> </select> </div> </div> <div class="quote-form__field quote-form__field--full" data-astro-cid-dmdhz2qs> <label for="detalles" data-astro-cid-dmdhz2qs>Detalles del equipo (opcional)</label> <textarea id="detalles" name="detalles" rows="4" placeholder="Especifica cantidades, tallas, modelos o cualquier detalle adicional..." data-astro-cid-dmdhz2qs></textarea> </div> <div class="quote-form__actions" data-astro-cid-dmdhz2qs> <button type="submit" class="quote-form__submit" data-astro-cid-dmdhz2qs>Solicitar Cotización</button> <span class="quote-form__divider" data-astro-cid-dmdhz2qs>o</span> <a href="https://wa.me/525520780102" class="quote-form__whatsapp" target="_blank" rel="noopener" data-astro-cid-dmdhz2qs>
Enviar por WhatsApp
</a> </div> <p class="quote-form__note" data-astro-cid-dmdhz2qs>Sin compromiso · Atención personalizada · Te respondemos en menos de 24 hrs</p> </form> </div> <!-- Sidebar --> <aside class="quote-form__sidebar" data-astro-cid-dmdhz2qs> <div class="quote-form__card" data-astro-cid-dmdhz2qs> <h4 data-astro-cid-dmdhz2qs>¿Por qué cotizar con nosotros?</h4> <ul class="quote-form__benefits" data-astro-cid-dmdhz2qs> <li data-astro-cid-dmdhz2qs> <span class="quote-form__bullet" data-astro-cid-dmdhz2qs></span> <span data-astro-cid-dmdhz2qs>Respuesta en menos de 24 horas</span> </li> <li data-astro-cid-dmdhz2qs> <span class="quote-form__bullet" data-astro-cid-dmdhz2qs></span> <span data-astro-cid-dmdhz2qs>Asesoría técnica sin costo</span> </li> <li data-astro-cid-dmdhz2qs> <span class="quote-form__bullet" data-astro-cid-dmdhz2qs></span> <span data-astro-cid-dmdhz2qs>Precios competitivos</span> </li> <li data-astro-cid-dmdhz2qs> <span class="quote-form__bullet" data-astro-cid-dmdhz2qs></span> <span data-astro-cid-dmdhz2qs>Envío a los 32 estados</span> </li> <li data-astro-cid-dmdhz2qs> <span class="quote-form__bullet" data-astro-cid-dmdhz2qs></span> <span data-astro-cid-dmdhz2qs>Facturación para gobierno</span> </li> </ul> </div> <div class="quote-form__card" data-astro-cid-dmdhz2qs> <h4 data-astro-cid-dmdhz2qs>También puedes llamarnos</h4> <a href="tel:+525520780102" class="quote-form__phone" data-astro-cid-dmdhz2qs>55 2078 0102</a> <p class="quote-form__schedule" data-astro-cid-dmdhz2qs>Lunes a Viernes: 9:00 - 18:00</p> <address class="quote-form__address" data-astro-cid-dmdhz2qs>
Av. Tamaulipas 150, Piso 13<br data-astro-cid-dmdhz2qs>
Col. Condesa, Cuauhtémoc<br data-astro-cid-dmdhz2qs>
06140 Ciudad de México, CDMX
</address> </div> <div class="quote-form__card quote-form__card--cta" data-astro-cid-dmdhz2qs> <h4 data-astro-cid-dmdhz2qs>Certificaciones</h4> <p data-astro-cid-dmdhz2qs>Todo nuestro equipo cuenta con certificaciones internacionales</p> <div class="quote-form__certs" data-astro-cid-dmdhz2qs> <span data-astro-cid-dmdhz2qs>NFPA</span> <span data-astro-cid-dmdhz2qs>UL</span> <span data-astro-cid-dmdhz2qs>NOM</span> <span data-astro-cid-dmdhz2qs>EN</span> </div> </div> </aside> </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/QuoteForm.astro", void 0);

const $$StatesDirectory = createComponent(($$result, $$props, $$slots) => {
  const states = [
    { name: "Aguascalientes", slug: "aguascalientes", abbr: "AGS" },
    { name: "Baja California", slug: "baja-california", abbr: "BC" },
    { name: "Baja California Sur", slug: "baja-california-sur", abbr: "BCS" },
    { name: "Campeche", slug: "campeche", abbr: "CAM" },
    { name: "Chiapas", slug: "chiapas", abbr: "CHIS" },
    { name: "Chihuahua", slug: "chihuahua", abbr: "CHIH" },
    { name: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico", abbr: "CDMX" },
    { name: "Coahuila", slug: "coahuila", abbr: "COAH" },
    { name: "Colima", slug: "colima", abbr: "COL" },
    { name: "Durango", slug: "durango", abbr: "DGO" },
    { name: "Estado de M\xE9xico", slug: "estado-de-mexico", abbr: "EDOMEX" },
    { name: "Guanajuato", slug: "guanajuato", abbr: "GTO" },
    { name: "Guerrero", slug: "guerrero", abbr: "GRO" },
    { name: "Hidalgo", slug: "hidalgo", abbr: "HGO" },
    { name: "Jalisco", slug: "jalisco", abbr: "JAL" },
    { name: "Michoac\xE1n", slug: "michoacan", abbr: "MICH" },
    { name: "Morelos", slug: "morelos", abbr: "MOR" },
    { name: "Nayarit", slug: "nayarit", abbr: "NAY" },
    { name: "Nuevo Le\xF3n", slug: "nuevo-leon", abbr: "NL" },
    { name: "Oaxaca", slug: "oaxaca", abbr: "OAX" },
    { name: "Puebla", slug: "puebla", abbr: "PUE" },
    { name: "Quer\xE9taro", slug: "queretaro", abbr: "QRO" },
    { name: "Quintana Roo", slug: "quintana-roo", abbr: "QROO" },
    { name: "San Luis Potos\xED", slug: "san-luis-potosi", abbr: "SLP" },
    { name: "Sinaloa", slug: "sinaloa", abbr: "SIN" },
    { name: "Sonora", slug: "sonora", abbr: "SON" },
    { name: "Tabasco", slug: "tabasco", abbr: "TAB" },
    { name: "Tamaulipas", slug: "tamaulipas", abbr: "TAMPS" },
    { name: "Tlaxcala", slug: "tlaxcala", abbr: "TLAX" },
    { name: "Veracruz", slug: "veracruz", abbr: "VER" },
    { name: "Yucat\xE1n", slug: "yucatan", abbr: "YUC" },
    { name: "Zacatecas", slug: "zacatecas", abbr: "ZAC" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="states-dir" id="directorio" data-astro-cid-qngvln2d> <div class="container" data-astro-cid-qngvln2d> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "label": "Directorio Nacional", "title": "Estaciones de Bomberos en M\xE9xico", "description": "Encuentra la estaci\xF3n de bomberos m\xE1s cercana a ti. Directorio completo con informaci\xF3n de contacto, tel\xE9fonos de emergencia y ubicaci\xF3n de todas las estaciones en los 32 estados.", "data-astro-cid-qngvln2d": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-qngvln2d>
En <strong data-astro-cid-qngvln2d>BOMBERO.MX</strong> hemos desarrollado el <strong data-astro-cid-qngvln2d>directorio más completo de estaciones de bomberos en México</strong>.
        Nuestra base de datos incluye información actualizada de los <strong data-astro-cid-qngvln2d>H. Cuerpos de Bomberos</strong> en las 32 entidades federativas:
        números de emergencia, direcciones físicas, horarios de atención y datos de contacto directo. Ya sea que te encuentres en
<strong data-astro-cid-qngvln2d>Ciudad de México, Monterrey, Guadalajara, Tijuana, Puebla, León</strong> o cualquier municipio del país,
        aquí encontrarás la estación de bomberos más cercana a tu ubicación.
</p> <p data-astro-cid-qngvln2d>
Este directorio es un <strong data-astro-cid-qngvln2d>servicio gratuito para la comunidad</strong> que busca facilitar el acceso a los servicios de emergencia
        y reconocer la labor heroica de los bomberos mexicanos. Además de los <strong data-astro-cid-qngvln2d>teléfonos de emergencia locales</strong>,
        incluimos información sobre servicios especializados: rescate vehicular, atención a incendios estructurales,
        materiales peligrosos (HAZMAT), rescate en alturas y servicios pre-hospitalarios.
<strong data-astro-cid-qngvln2d>Conoce a tu cuerpo de bomberos local</strong> y mantén sus datos de contacto siempre a la mano.
</p> ` })} <div class="states-dir__grid" data-astro-cid-qngvln2d> ${states.map((state) => renderTemplate`<a${addAttribute(`/directorio/${state.slug}`, "href")} class="states-dir__card" data-astro-cid-qngvln2d> <span class="states-dir__abbr" data-astro-cid-qngvln2d>${state.abbr}</span> <span class="states-dir__name" data-astro-cid-qngvln2d>${state.name}</span> <span class="states-dir__arrow" data-astro-cid-qngvln2d></span> </a>`)} </div> <div class="states-dir__footer" data-astro-cid-qngvln2d> <div class="states-dir__stats" data-astro-cid-qngvln2d> <div class="states-dir__stat" data-astro-cid-qngvln2d> <span class="states-dir__stat-number" data-astro-cid-qngvln2d>32</span> <span class="states-dir__stat-label" data-astro-cid-qngvln2d>Estados</span> </div> <div class="states-dir__stat" data-astro-cid-qngvln2d> <span class="states-dir__stat-number" data-astro-cid-qngvln2d>602+</span> <span class="states-dir__stat-label" data-astro-cid-qngvln2d>Estaciones</span> </div> <div class="states-dir__stat" data-astro-cid-qngvln2d> <span class="states-dir__stat-number" data-astro-cid-qngvln2d>24/7</span> <span class="states-dir__stat-label" data-astro-cid-qngvln2d>Emergencias</span> </div> </div> <a href="/directorio" class="states-dir__btn" data-astro-cid-qngvln2d>
Ver Directorio Nacional Completo
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-qngvln2d> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-qngvln2d></path> </svg> </a> </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/StatesDirectory.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Equipo para Bomberos en M\xE9xico | Certificado NFPA | BOMBERO.MX", "description": "BOMBERO.MX - Distribuidor l\xEDder de equipo para bomberos en M\xE9xico. Trajes estructurales NFPA 1971, equipos SCBA, cascos, guantes, botas y herramientas de rescate certificadas. Env\xEDos a los 32 estados. Cotiza sin compromiso.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <!-- Animated Background --> <div class="hero__bg" data-astro-cid-j7pv25f6> <div class="hero__gradient" data-astro-cid-j7pv25f6></div> <div class="hero__grid" data-astro-cid-j7pv25f6></div> <div class="hero__glow hero__glow--1" data-astro-cid-j7pv25f6></div> <div class="hero__glow hero__glow--2" data-astro-cid-j7pv25f6></div> <div class="hero__particles" data-astro-cid-j7pv25f6></div> </div> <div class="container hero__container" data-astro-cid-j7pv25f6> <div class="hero__content" data-astro-cid-j7pv25f6> <!-- Badge --> <div class="hero__badge" data-astro-cid-j7pv25f6> <span class="hero__badge-dot" data-astro-cid-j7pv25f6></span>
Distribuidores Autorizados NFPA · México
</div> <!-- Title --> <h1 class="hero__title" data-astro-cid-j7pv25f6>
Venta de Equipo para
<span class="hero__title-highlight" data-astro-cid-j7pv25f6>Bomberos</span>
en México
</h1> <!-- Subtitle --> <p class="hero__subtitle" data-astro-cid-j7pv25f6>
Somos el distribuidor #1 de equipo de protección para bomberos en toda la República Mexicana.
          Trajes estructurales, SCBA, cascos y herramientas certificadas NFPA con envío a los 32 estados.
</p> <!-- CTA Buttons --> <div class="hero__actions" data-astro-cid-j7pv25f6> <a href="/productos" class="btn btn--primary btn--lg" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Explorar catálogo</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> <a href="/cotizar" class="btn btn--ghost btn--lg" data-astro-cid-j7pv25f6> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" data-astro-cid-j7pv25f6></path> </svg> <span data-astro-cid-j7pv25f6>Solicitar cotización</span> </a> </div> </div> <!-- Hero SEO Content --> <div class="hero__seo" data-astro-cid-j7pv25f6> <div class="hero__seo-block" data-astro-cid-j7pv25f6> <h2 class="hero__seo-title" data-astro-cid-j7pv25f6>Líder en Venta de Equipo para Bomberos en México</h2> <p class="hero__seo-text" data-astro-cid-j7pv25f6>
En <strong data-astro-cid-j7pv25f6>BOMBERO.MX</strong> somos el distribuidor autorizado #1 de <strong data-astro-cid-j7pv25f6>equipo de protección personal para bomberos</strong> en toda la República Mexicana. Nuestra amplia gama de <strong data-astro-cid-j7pv25f6>trajes estructurales NFPA 1971</strong>, <strong data-astro-cid-j7pv25f6>equipos de respiración autónoma (SCBA)</strong>, <strong data-astro-cid-j7pv25f6>cascos certificados</strong> y <strong data-astro-cid-j7pv25f6>herramientas de rescate</strong> garantiza que cada bombero cuente con la protección que merece. Trabajamos exclusivamente con marcas líderes mundiales como MSA, Honeywell, Globe y Bullard.
</p> </div> <div class="hero__seo-block" data-astro-cid-j7pv25f6> <h2 class="hero__seo-title" data-astro-cid-j7pv25f6>Certificaciones Internacionales que Salvan Vidas</h2> <p class="hero__seo-text" data-astro-cid-j7pv25f6>
Todo nuestro <strong data-astro-cid-j7pv25f6>equipamiento contra incendios</strong> cumple con las normativas más exigentes: <strong data-astro-cid-j7pv25f6>NFPA</strong> (National Fire Protection Association), <strong data-astro-cid-j7pv25f6>UL</strong> (Underwriters Laboratories), <strong data-astro-cid-j7pv25f6>EN</strong> (European Standards) y <strong data-astro-cid-j7pv25f6>NOM</strong>. Desde <strong data-astro-cid-j7pv25f6>extintores industriales</strong> hasta <strong data-astro-cid-j7pv25f6>sistemas completos de protección</strong>, cada producto pasa por rigurosos controles de calidad. Ofrecemos <strong data-astro-cid-j7pv25f6>envíos a los 32 estados</strong>, asesoría técnica especializada y servicio post-venta para estaciones de bomberos, protección civil e industrias.
</p> </div> </div> </div> </section>    <section class="cta-banner" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="cta-banner__content" data-astro-cid-j7pv25f6> <div class="cta-banner__text" data-astro-cid-j7pv25f6> <h2 class="cta-banner__title" data-astro-cid-j7pv25f6>Explora Nuestro Catálogo Completo</h2> <p class="cta-banner__desc" data-astro-cid-j7pv25f6>Más de <strong data-astro-cid-j7pv25f6>500 productos</strong> certificados NFPA listos para envío inmediato a toda la República</p> </div> <a href="#catalogo" class="cta-banner__btn" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Ver Catálogo</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-j7pv25f6> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section>    ${renderComponent($$result2, "Certifications", $$Certifications, { "data-astro-cid-j7pv25f6": true })}    <section class="epp section" id="catalogo" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <!-- Section Header Two Columns --> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Productos", "title": "Equipo de Protecci\xF3n Personal (EPP)", "description": "Todo el equipo certificado NFPA que tu estaci\xF3n necesita. Trajes, cascos, botas, guantes y m\xE1s.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-j7pv25f6>
En <strong data-astro-cid-j7pv25f6>BOMBERO.MX</strong> somos distribuidores autorizados de las mejores marcas de <strong data-astro-cid-j7pv25f6>equipo de protección personal para bomberos</strong> en México. Cada producto de nuestro catálogo cumple con las certificaciones <strong data-astro-cid-j7pv25f6>NFPA 1971, NFPA 1977</strong> y normativas internacionales, garantizando la máxima seguridad para el personal de primera respuesta.
</p> <p data-astro-cid-j7pv25f6>
Nuestro <strong data-astro-cid-j7pv25f6>equipo EPP para bomberos</strong> incluye trajes estructurales, forestales y HAZMAT, cascos de última generación, botas resistentes al calor, guantes de extricación y protección respiratoria. Trabajamos con estaciones de bomberos, protección civil y brigadas industriales en los <strong data-astro-cid-j7pv25f6>32 estados de la República Mexicana</strong>.
</p> ` })} <!-- EPP Categories Grid --> <div class="epp__grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Trajes de Bombero", "badge": "5 productos", "icon": "shield", "image": "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif", "href": "/productos/trajes-para-bomberos", "buttonText": "Trajes para Bomberos", "items": [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
    { label: "Traje ARFF (Aeroportuario)", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" },
    { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" },
    { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }
  ], "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Cascos", "badge": "6 productos", "icon": "helmet", "href": "/productos/cascos-para-bomberos", "buttonText": "Cascos para Bomberos", "items": [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }
  ], "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Botas", "badge": "3 productos", "icon": "boot", "href": "/productos/botas-para-bomberos", "buttonText": "Botas para Bomberos", "items": [
    { label: "Bota Estructural (Cuero)", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Bota de Caucho (HAZMAT)", href: "/productos/botas-para-bomberos/caucho" },
    { label: "Bota Forestal", href: "/productos/botas-para-bomberos/forestal" }
  ], "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Guantes", "badge": "4 productos", "icon": "glove", "href": "/productos/guantes-para-bomberos", "buttonText": "Guantes para Bomberos", "items": [
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Guantes de Rescate / Extricaci\xF3n", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" }
  ], "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Capuchas y Monjas", "badge": "3 productos", "icon": "hood", "href": "/productos/capuchas-para-bomberos", "buttonText": "Capuchas para Bomberos", "items": [
    { label: "Capucha Nomex", href: "/productos/capuchas-para-bomberos/nomex" },
    { label: "Capucha PBI", href: "/productos/capuchas-para-bomberos/pbi" },
    { label: "Capucha con Protecci\xF3n Particulada", href: "/productos/capuchas-para-bomberos/particulada" }
  ], "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Gafas y Protecci\xF3n Visual", "badge": "2 productos", "icon": "goggles", "href": "/productos/gafas-para-bomberos", "buttonText": "Gafas para Bomberos", "items": [
    { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos/goggle" },
    { label: "Gafas de Seguridad Antiimpacto", href: "/productos/gafas-para-bomberos/seguridad" }
  ], "data-astro-cid-j7pv25f6": true })} </div> </div> </section>    <section class="why-section section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Por qu\xE9 somos los #1 en M\xE9xico", "title": "Distribuidor Autorizado de Equipo para Bomberos", "description": "M\xE1s de 15 a\xF1os equipando a cuerpos de bomberos, protecci\xF3n civil y brigadas industriales en CDMX, Monterrey, Guadalajara y toda la Rep\xFAblica Mexicana.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-j7pv25f6>
En <strong data-astro-cid-j7pv25f6>BOMBERO.MX</strong> somos el distribuidor líder de <strong data-astro-cid-j7pv25f6>equipo de protección personal para bomberos</strong> en México. Trabajamos exclusivamente con marcas reconocidas mundialmente como <strong data-astro-cid-j7pv25f6>MSA, Honeywell, Globe y Bullard</strong>, garantizando la máxima calidad y certificaciones internacionales.
</p> <p data-astro-cid-j7pv25f6>
Cada producto cuenta con <strong data-astro-cid-j7pv25f6>certificación NFPA, UL y NOM</strong>. Ofrecemos asesoría técnica especializada, documentación completa para licitaciones y envíos a los <strong data-astro-cid-j7pv25f6>32 estados de la República</strong> con tiempos de entrega de 24-48 horas.
</p> ` })} <div class="why-section__grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Equipo Certificado NFPA", "icon": "certificate", "description": "Exclusivamente equipos con certificaci\xF3n NFPA 1971, NFPA 1977, NFPA 1981 y homologaci\xF3n UL. Cumplimos NOM-002-STPS para brigadas industriales. Fichas t\xE9cnicas y documentaci\xF3n lista para auditor\xEDas, licitaciones y procesos de compra gubernamental.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Env\xEDos a Todo M\xE9xico", "icon": "truck", "description": "Log\xEDstica especializada en equipo contra incendios con cobertura en los 32 estados. Entregas express 24-48 hrs en CDMX, Monterrey y Guadalajara. Embalaje reforzado y rastreo en tiempo real. Coordinamos recepciones directas en estaciones de bomberos.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Asesor\xEDa Especializada", "icon": "headphones", "description": "Consultores t\xE9cnicos con experiencia en equipamiento de cuerpos de bomberos y brigadas industriales. Evaluamos necesidades, elaboramos especificaciones t\xE9cnicas y acompa\xF1amos procesos de licitaci\xF3n. Sin costo y sin compromiso de compra.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Garant\xEDa Total", "icon": "shield", "description": "Respaldo directo de f\xE1brica en cada producto. Garant\xEDa extendida de hasta 10 a\xF1os en trajes estructurales. Servicio t\xE9cnico autorizado, refacciones originales y soporte post-venta permanente. Tu inversi\xF3n protegida.", "data-astro-cid-j7pv25f6": true })} </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-j7pv25f6": true })}    ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-j7pv25f6": true })}    ${renderComponent($$result2, "CompanyInfo", $$CompanyInfo, { "data-astro-cid-j7pv25f6": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-j7pv25f6": true })}    ${renderComponent($$result2, "QuoteForm", $$QuoteForm, { "data-astro-cid-j7pv25f6": true })}    ${renderComponent($$result2, "StatesDirectory", $$StatesDirectory, { "data-astro-cid-j7pv25f6": true })}    ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
