import { useState, useRef } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import classNames from "classnames";
import gsap from "gsap";

import { Container } from "../../../../components/layout";
import { BlobButton } from "../../../../components/ui";

import styles from "./Contact.module.scss";

export const Contact = () => {
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
    <Container background="#ffeb5d">
      <div className={styles.header} onClick={toggleAccordion}>
        <IoIosArrowDropdownCircle className={iconClasses} />

        <h3 className={styles.title}>Get in touch</h3>
      </div>

      <div className={styles.content} ref={ref}>
        <form className={styles.form} name="contact" method="POST">
          Hey, my name is{" "}
          <input type="text" name="name" placeholder="type here" />. I'm looking
          for <input type="text" name="service" placeholder="type of service" />
          . Get in touch with me at{" "}
          <input type="email" name="email" placeholder="your email" />.
          <br />
          <textarea name="message" placeholder="Your message" />
          <BlobButton type="submit" colorTheme="black">
            Send
          </BlobButton>
        </form>
      </div>
    </Container>
  );
};
