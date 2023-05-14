import { useState, useRef } from "react";
import { gsap } from "gsap";
import classNames from "classnames";

import styles from "./Accordion.module.scss";

type AccordionProps = {
  title: string;
  children: React.ReactNode | string;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    gsap.to(ref.current, {
      duration: 0.3,
      height: isOpen ? 0 : "auto",
      ease: "power2.inOut",
    });
  };

  const iconClasses = classNames(styles.icon, {
    [styles.open]: isOpen,
  });

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <div className={iconClasses}>
          <div className={styles.dot} />
        </div>

        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.content} ref={ref}>
        <p>{children}</p>
      </div>
    </div>
  );
};
