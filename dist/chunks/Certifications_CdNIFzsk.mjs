import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DiGDuMOy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

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

export { $$Certifications as $ };
