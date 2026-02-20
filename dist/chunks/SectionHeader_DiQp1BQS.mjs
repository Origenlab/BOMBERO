import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as renderSlot } from './astro/server_D9FxF255.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://bombero.mx");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    label,
    title,
    description
  } = Astro2.props;
  const hasRightContent = Astro2.slots.has("default");
  const headerClasses = [
    "section-header",
    !hasRightContent && "section-header--single"
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(headerClasses, "class")} data-astro-cid-wk2votdk> <div class="section-header__left" data-astro-cid-wk2votdk> ${label && renderTemplate`<span class="section-header__label" data-astro-cid-wk2votdk>${label}</span>`} <h2 class="section-header__title" data-astro-cid-wk2votdk>${title}</h2> ${description && renderTemplate`<p class="section-header__desc" data-astro-cid-wk2votdk>${description}</p>`} </div> ${hasRightContent && renderTemplate`<div class="section-header__right" data-astro-cid-wk2votdk> ${renderSlot($$result, $$slots["default"])} </div>`} </div> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/SectionHeader.astro", void 0);

export { $$SectionHeader as $ };
