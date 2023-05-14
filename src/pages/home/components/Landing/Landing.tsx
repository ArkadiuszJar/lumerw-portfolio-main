import { AnimatedScroll, WaveBackground } from "../../../../components/common";
import { SOCIALS } from "../../../../constants";
import styles from "./Landing.module.scss";

export const Landing = () => {
  return (
    <section className={`${styles.landing}`}>
      <WaveBackground waveSpeed={0.6} />

      <div className={styles.spacer} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          HEY ARE YOU LOOKING
          <br />
          FOR UX/UI DESIGNER? WELL…
          <br />I KNOW SOMEONE WHO’S
          <br />
          GOOD AT IT.
        </h1>
        <span className={styles.name}>‘’ Wojciech Lumer</span>
      </div>

      <div>
        <div className={styles.socials}>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
        </div>

        <AnimatedScroll />
      </div>
    </section>
  );
};
