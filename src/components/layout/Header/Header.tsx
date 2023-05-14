import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { BlobButton, AnimatedHeaderLink } from "../../ui";

import { PAGES } from "../../../constants";

import styles from "./Header.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const headerRef = useRef(null);
  const contactRef = useRef<HTMLElement>();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(headerRef.current, {
      height: "4rem",
      backgroundColor: "#000000A0",
      boxShadow: "0 0 3rem -1rem #000000",
      backdropFilter: "blur(20px)",
    });

    tl.to(contactRef.current!, {
      backgroundColor: "#FFFFFF00",
      fontSize: "1.5rem",
    });
  }, []);

  const handleContactRef = (el: HTMLElement) => {
    contactRef.current = el;
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          {PAGES.map(({ label, href }) => (
            <AnimatedHeaderLink key={label} to={href} className={styles.link}>
              {label}
            </AnimatedHeaderLink>
          ))}
        </div>

        <div className={styles.icons}>
          {PAGES.map(({ label, href, icon }) => {
            const Icon = icon as any;
            return (
              <a key={label} href={href} className={styles.icon}>
                <Icon />
              </a>
            );
          })}
        </div>

        <BlobButton
          href="#contact"
          className={styles.contact}
          ref={handleContactRef}
        >
          Contact
        </BlobButton>
      </nav>
    </header>
  );
};
