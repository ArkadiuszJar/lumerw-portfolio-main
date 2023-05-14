import { BsMouse, BsArrowDownShort } from "react-icons/bs";

import styles from "./AnimatedScroll.module.scss";

export const AnimatedScroll = () => {
  return (
    <div className={styles.scroll}>
      <BsMouse className={styles.mouse} />
      <BsArrowDownShort className={styles.arrow} />
    </div>
  );
};
