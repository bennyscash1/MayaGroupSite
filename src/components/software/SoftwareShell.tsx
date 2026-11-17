import { Header } from "../Header";
import { Footer } from "../Footer";
import type { LeadField } from "../ui/LeadForm";
import type { Closing } from "@/content/site";
import {
  footerBack,
  headerCta,
  headerNav,
  SOFTWARE_HOME,
  softwareLogo,
  subTabs,
  subTabsLabel,
} from "@/content/software/shared";
import { SubTabs } from "./SubTabs";
import { SwContact } from "./SwContact";
import styles from "./SoftwareShell.module.css";

type Props = {
  /** Path of the current page (marks the active sub-tab) */
  path: string;
  contact: {
    titleLines: readonly string[];
    subtitle?: string;
    fields: readonly LeadField[];
    consent?: string;
    submit: string;
  };
  contactSurface?: "dark" | "light";
  closing: Closing;
  children: React.ReactNode;
};

/**
 * Frame shared by the five Maya Technologies pages: header,
 * sticky glass sub-tab bar, page content, lead form (#contact) and footer.
 */
export function SoftwareShell({ path, contact, contactSurface = "dark", closing, children }: Props) {
  const onHub = path === SOFTWARE_HOME;
  return (
    <div className={`theme-software ${styles.root}`}>
      <a href="#main" className={styles.skip}>
        דילוג לתוכן הראשי
      </a>
      <div id="top" />
      <Header logo={softwareLogo} nav={headerNav(onHub)} cta={headerCta} logoHref={onHub ? "/" : SOFTWARE_HOME} variant="light" />
      <SubTabs tabs={subTabs} active={path} label={subTabsLabel} />
      <main id="main" tabIndex={-1} className={styles.main}>
        {children}
        <SwContact id="contact" {...contact} surface={contactSurface} />
      </main>
      <Footer id="closing" logo={softwareLogo} logoHref={onHub ? "/" : SOFTWARE_HOME} closing={closing} back={footerBack} />
    </div>
  );
}
