import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$SectionHeader } from './SectionHeader_DiQp1BQS.mjs';
/* empty css                         */

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "\xBFC\xF3mo puedo solicitar una cotizaci\xF3n de equipo para bomberos?",
      answer: "Puedes solicitar tu cotizaci\xF3n de tres formas: 1) Completando el formulario en nuestra p\xE1gina web con los productos que necesitas, 2) Envi\xE1ndonos un WhatsApp al 55 2078 0102 con tu lista de equipo, o 3) Escribiendo a ventas@bombero.mx. Respondemos todas las cotizaciones en menos de 24 horas con precios, disponibilidad y tiempos de entrega."
    },
    {
      question: "\xBFQu\xE9 tipos de equipo para bomberos venden en BOMBERO.MX?",
      answer: "Ofrecemos el cat\xE1logo m\xE1s completo de equipo de protecci\xF3n personal para bomberos en M\xE9xico: Trajes estructurales NFPA 1971, trajes forestales NFPA 1977, trajes ARFF y HAZMAT, cascos certificados, botas de bombero, guantes estructurales y de rescate, capuchas Nomex/PBI, equipos SCBA, herramientas de rescate y extricaci\xF3n, c\xE1maras t\xE9rmicas, detectores de gases, linternas, cuerdas y equipos de altura."
    },
    {
      question: "\xBFRealizan env\xEDos de equipo para bomberos a todo M\xE9xico?",
      answer: "S\xED, realizamos env\xEDos a los 32 estados de la Rep\xFAblica Mexicana. Trabajamos con las principales paqueter\xEDas para garantizar entregas seguras. Para CDMX y \xE1rea metropolitana ofrecemos entrega express en 24-48 horas. Para el resto del pa\xEDs, los tiempos var\xEDan de 3 a 5 d\xEDas h\xE1biles."
    },
    {
      question: "\xBFOfrecen asesor\xEDa t\xE9cnica para elegir equipo de bomberos?",
      answer: "Por supuesto. Contamos con asesores especializados que te ayudar\xE1n a seleccionar el equipo correcto seg\xFAn el tipo de riesgo, las normativas que deben cumplir (NFPA, NOM), tu presupuesto y las caracter\xEDsticas de tu estaci\xF3n o brigada. La asesor\xEDa es gratuita y sin compromiso."
    },
    {
      question: "\xBFLos equipos que venden tienen certificaciones?",
      answer: "Todos nuestros productos cuentan con certificaciones: trajes estructurales NFPA 1971, forestales NFPA 1977, cascos NFPA 1971/1977, equipos SCBA NFPA 1981, herramientas de rescate NFPA 1936. Trabajamos con MSA, Honeywell, Globe, Bullard, Cairns y Holmatro."
    },
    {
      question: "\xBFTienen equipo disponible para entrega inmediata?",
      answer: "S\xED, mantenemos inventario de los productos m\xE1s solicitados: trajes estructurales en tallas est\xE1ndar, cascos, guantes, botas, capuchas y linternas. Para equipos especializados como SCBA o herramientas de extricaci\xF3n, los tiempos pueden variar de 2 a 4 semanas."
    },
    {
      question: "\xBFQu\xE9 sectores atiende BOMBERO.MX?",
      answer: "Atendemos a: H. Cuerpos de Bomberos, Protecci\xF3n Civil, brigadas industriales, aeropuertos (ARFF), hospitales, hoteles, centros comerciales, constructoras y dependencias gubernamentales."
    },
    {
      question: "\xBFManejan precios especiales para estaciones de bomberos?",
      answer: "S\xED, ofrecemos precios preferenciales para cuerpos de bomberos, protecci\xF3n civil y dependencias gubernamentales. Tambi\xE9n manejamos precios por volumen y preparamos cotizaciones formales con fichas t\xE9cnicas para licitaciones."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="faq-section" id="preguntas-frecuentes" data-astro-cid-al2ca2vr> <div class="container" data-astro-cid-al2ca2vr> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "label": "Preguntas Frecuentes", "title": "Resolvemos tus Dudas sobre Equipo para Bomberos", "description": "Entendemos que la adquisici\xF3n de equipo de protecci\xF3n implica decisiones t\xE9cnicas importantes. Aqu\xED encontrar\xE1s las consultas m\xE1s frecuentes de nuestros clientes.", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-al2ca2vr>
En <strong data-astro-cid-al2ca2vr>BOMBERO.MX</strong> sabemos que adquirir equipo de protección para bomberos implica
        decisiones técnicas importantes. Por eso respondemos las preguntas más comunes de nuestros clientes.
</p> ` })} <div class="faq-section__grid" data-astro-cid-al2ca2vr> <!-- Main Content: FAQ Accordion --> <div class="faq-section__main" data-astro-cid-al2ca2vr> ${faqs.map((faq) => renderTemplate`<details class="faq-section__item" name="faq-accordion" data-astro-cid-al2ca2vr> <summary class="faq-section__question" data-astro-cid-al2ca2vr> <span class="faq-section__question-text" data-astro-cid-al2ca2vr>${faq.question}</span> <span class="faq-section__toggle" data-astro-cid-al2ca2vr></span> </summary> <div class="faq-section__answer" data-astro-cid-al2ca2vr> <p data-astro-cid-al2ca2vr>${faq.answer}</p> </div> </details>`)} </div> <!-- Sidebar --> <aside class="faq-section__sidebar" data-astro-cid-al2ca2vr> <div class="faq-section__card" data-astro-cid-al2ca2vr> <h4 data-astro-cid-al2ca2vr>¿No encuentras tu pregunta?</h4> <p data-astro-cid-al2ca2vr>Nuestro equipo de asesores está listo para ayudarte</p> <ul class="faq-section__contact-list" data-astro-cid-al2ca2vr> <li data-astro-cid-al2ca2vr> <span class="faq-section__bullet" data-astro-cid-al2ca2vr></span> <a href="https://wa.me/525520780102" data-astro-cid-al2ca2vr>WhatsApp</a> </li> <li data-astro-cid-al2ca2vr> <span class="faq-section__bullet" data-astro-cid-al2ca2vr></span> <a href="tel:+525520780102" data-astro-cid-al2ca2vr>55 2078 0102</a> </li> <li data-astro-cid-al2ca2vr> <span class="faq-section__bullet" data-astro-cid-al2ca2vr></span> <a href="mailto:ventas@bombero.mx" data-astro-cid-al2ca2vr>ventas@bombero.mx</a> </li> </ul> </div> <div class="faq-section__card" data-astro-cid-al2ca2vr> <h4 data-astro-cid-al2ca2vr>Horario de Atención</h4> <div class="faq-section__schedule" data-astro-cid-al2ca2vr> <div class="faq-section__schedule-row" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>Lunes - Viernes</span> <strong data-astro-cid-al2ca2vr>9:00 - 18:00</strong> </div> <div class="faq-section__schedule-row" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>Sábado</span> <strong data-astro-cid-al2ca2vr>9:00 - 14:00</strong> </div> <div class="faq-section__schedule-row" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>Domingo</span> <strong data-astro-cid-al2ca2vr>Cerrado</strong> </div> </div> <address class="faq-section__address" data-astro-cid-al2ca2vr>
Av. Tamaulipas 150, Piso 13<br data-astro-cid-al2ca2vr>
Col. Condesa, Cuauhtémoc<br data-astro-cid-al2ca2vr>
06140 Ciudad de México, CDMX
</address> </div> <div class="faq-section__card faq-section__card--cta" data-astro-cid-al2ca2vr> <h4 data-astro-cid-al2ca2vr>¿Necesitas Cotizar?</h4> <p data-astro-cid-al2ca2vr>Solicita una cotización sin compromiso para tu estación o empresa</p> <a href="/cotizar" class="faq-section__cta-btn" data-astro-cid-al2ca2vr>Solicitar Cotización</a> </div> </aside> </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/FAQ.astro", void 0);

export { $$FAQ as $ };
