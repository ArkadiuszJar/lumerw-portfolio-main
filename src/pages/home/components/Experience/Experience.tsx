import Marquee from "react-fast-marquee";
import { EXPERIENCE } from "../../../../constants";
import styles from "./Experience.module.scss";

export const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>My Experience</h2>

      <Marquee autoFill className={styles.textCarousel}>
        {EXPERIENCE[0].map((program, i) => (
          <div className={styles.text} key={i}>
            <span>{program}</span>
          </div>
        ))}
      </Marquee>

      <Marquee autoFill direction="right" className={styles.textCarousel}>
        {EXPERIENCE[1].map((program, i) => (
          <div className={styles.text} key={i}>
            <span>{program}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
