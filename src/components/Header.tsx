"use client";

import { useEffect, useState } from "react";
import { contactCta, logo as groupLogo, nav as groupNav, type LinkItem, type Logo } from "@/content/site";
import { ArrowUpLeft, MenuIcon } from "./Icons";
import styles from "./Header.module.css";

type HeaderProps = {
  logo?: Logo;
  nav?: readonly LinkItem[];
  cta?: LinkItem;
  /** Where the logo links to ("#top" on the homepage, "/" elsewhere) */
  logoHref?: string;
  /** Division pages use a light header (desktop mockups 02–06); the homepage uses the blue one */
  variant?: "group" | "light" | "dark";
};

export function Header({ logo = groupLogo, nav = groupNav, cta = contactCta, logoHref = "#top", variant = "group" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${variant !== "group" ? styles[variant] : ""}`}>
      <div className={`container ${styles.bar}`}>
        <a href={logoHref} className={`${styles.logo} ${logo.stacked ? styles.stacked : ""}`} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        </a>

        <nav className={styles.nav} aria-label="ניווט ראשי">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={cta.href} className={styles.cta}>
          {cta.label}
          <ArrowUpLeft size={16} />
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div id="mobile-menu" className={styles.mobileMenu} data-open={open} hidden={!open}>
        <ul className="container">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={cta.href} onClick={close} className={styles.mobileCta}>
              {cta.label}
              <ArrowUpLeft size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
