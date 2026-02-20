import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_D9FxF255.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://bombero.mx");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl } = Astro2.props;
  function getPageNumbers(current, total) {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages = [];
    if (current <= 3) {
      pages.push(1, 2, 3, 4, 5, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 4, total - 3, total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
    return pages;
  }
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  function getPageUrl(page) {
    if (page === 1) {
      return baseUrl;
    }
    return `${baseUrl}/pagina/${page}`;
  }
  return renderTemplate`${maybeRenderHead()}<nav class="pagination" aria-label="Paginación del blog" data-astro-cid-d776pwuy> <div class="pagination__inner" data-astro-cid-d776pwuy> <!-- Botón Anterior --> ${currentPage > 1 ? renderTemplate`<a${addAttribute(getPageUrl(currentPage - 1), "href")} class="pagination__btn pagination__btn--prev" aria-label="Página anterior" data-astro-cid-d776pwuy> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-d776pwuy> <path d="M15 18l-6-6 6-6" data-astro-cid-d776pwuy></path> </svg> <span class="pagination__btn-text" data-astro-cid-d776pwuy>Anterior</span> </a>` : renderTemplate`<span class="pagination__btn pagination__btn--prev pagination__btn--disabled" aria-disabled="true" data-astro-cid-d776pwuy> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-d776pwuy> <path d="M15 18l-6-6 6-6" data-astro-cid-d776pwuy></path> </svg> <span class="pagination__btn-text" data-astro-cid-d776pwuy>Anterior</span> </span>`} <!-- Números de página --> <div class="pagination__numbers" data-astro-cid-d776pwuy> ${pageNumbers.map((page) => page === "..." ? renderTemplate`<span class="pagination__ellipsis" data-astro-cid-d776pwuy>...</span>` : page === currentPage ? renderTemplate`<span class="pagination__num pagination__num--active" aria-current="page" data-astro-cid-d776pwuy>${page}</span>` : renderTemplate`<a${addAttribute(getPageUrl(page), "href")} class="pagination__num" data-astro-cid-d776pwuy>${page}</a>`)} </div> <!-- Botón Siguiente --> ${currentPage < totalPages ? renderTemplate`<a${addAttribute(getPageUrl(currentPage + 1), "href")} class="pagination__btn pagination__btn--next" aria-label="Página siguiente" data-astro-cid-d776pwuy> <span class="pagination__btn-text" data-astro-cid-d776pwuy>Siguiente</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-d776pwuy> <path d="M9 18l6-6-6-6" data-astro-cid-d776pwuy></path> </svg> </a>` : renderTemplate`<span class="pagination__btn pagination__btn--next pagination__btn--disabled" aria-disabled="true" data-astro-cid-d776pwuy> <span class="pagination__btn-text" data-astro-cid-d776pwuy>Siguiente</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-d776pwuy> <path d="M9 18l6-6-6-6" data-astro-cid-d776pwuy></path> </svg> </span>`} </div> <!-- Info de paginación --> <p class="pagination__info" data-astro-cid-d776pwuy>
Página <strong data-astro-cid-d776pwuy>${currentPage}</strong> de <strong data-astro-cid-d776pwuy>${totalPages}</strong> </p> </nav> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
