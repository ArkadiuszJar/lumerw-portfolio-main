import { IconContext } from "react-icons";

import { FOOTER_ITEMS } from "../../../constants";
import avatar from "../../../images/avatar.png?w=128&webp&imagetools";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  const links = (key: keyof typeof FOOTER_ITEMS) => (
    <div className={styles.list}>
      {FOOTER_ITEMS[key].map(({ label, href, Icon, SVGIcon }) => (
        <a key={label} href={href}>
          {Icon && <Icon />}
          {SVGIcon && <img src={SVGIcon} alt={label} width={24} height={24} />}
          {label}
        </a>
      ))}
    </div>
  );
  return (
    <div className={styles.container} id="contact">
      <IconContext.Provider
        value={{
          className: styles.icon,
        }}
      >
        <footer className={styles.footer}>
          <div className={styles.details}>
            <div className={styles.contact}>
              <div className={styles.avatar}>
                <img src={avatar} alt="" />
              </div>

              <div className={styles.links}>
                <h3>Contact</h3>

                {links("contact")}
              </div>
            </div>

            <div className={styles.work}>
              <h3>Work with me</h3>

              {links("work")}
            </div>

            <div className={styles.navigation}>
              <h3>Navigation</h3>

              {links("navigation")}
            </div>
          </div>

          <div className={styles.bottom}>
            <span>51°46'35.2"N 19°28'07.5"E</span>
            <span>© {year} - All rights reserved</span>
            <span>THX FOR VISIT ME PAGE ✌️</span>
          </div>
        </footer>
      </IconContext.Provider>
    </div>
  );
};
