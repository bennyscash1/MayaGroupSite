"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Landing-page style reveal: every text block in <main> and the footer fades in and
 * rises slightly the first time it scrolls into view — once, never again.
 *
 * Units: headings, paragraphs, list items, captions, forms and standalone buttons/links. If a unit sits
 * inside another unit (e.g. a <p> inside a card <li>), only the outer one animates,
 * so cards move as one piece. Units entering together are staggered.
 */
const SELECTOR = "h1, h2, h3, h4, p, li, dt, dd, figcaption, form, a, button, [data-reveal]";
const STAGGER_MS = 90;
const MAX_DELAY_MS = 450;

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const done = () => root.classList.remove("reveal-pending");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      done();
      return;
    }

    const scopes = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const candidates = scopes.flatMap((s) => Array.from(s.querySelectorAll<HTMLElement>(SELECTOR)));
    const set = new Set(candidates);
    // Keep outermost units only; skip things inside dialogs and already-revealed nodes
    const units = candidates.filter((el) => {
      if (el.closest("dialog") || el.dataset.revealed === "1") return false;
      for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
      return true;
    });

    units.forEach((el) => el.classList.add("reveal"));
    done();

    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        entering.forEach((el, i) => {
          io.unobserve(el);
          el.style.setProperty("--reveal-delay", `${Math.min(i * STAGGER_MS, MAX_DELAY_MS)}ms`);
          el.classList.add("is-visible");
          el.dataset.revealed = "1";
          // Hand transitions back to the component styles (hover effects etc.)
          const cleanup = () => {
            el.classList.remove("reveal", "is-visible");
            el.style.removeProperty("--reveal-delay");
            el.removeEventListener("transitionend", onEnd);
          };
          // Ignore transitionend bubbling up from children (button hovers etc.)
          const onEnd = (e: TransitionEvent) => e.target === el && e.propertyName === "transform" && cleanup();
          el.addEventListener("transitionend", onEnd);
          window.setTimeout(cleanup, 1800);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    units.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

/**
 * Inline, render-blocking snippet for the top of <body>: hides main/footer until the
 * observer has marked the units, so above-the-fold text doesn't flash. Falls back to
 * visible after 2.5s if scripts fail; skipped entirely for reduced motion.
 */
export const revealBootScript = `(function(){try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('reveal-pending');setTimeout(function(){d.classList.remove('reveal-pending')},2500)}catch(e){}})();`;
