import { ImQuotesLeft } from "react-icons/im";
import { useSwiperSlide } from "swiper/react";

import styles from "./TestimonialCard.module.scss";

type TestimonialCardProps = {
  quote: string;
  author: string;
  avatar: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TestimonialCard = ({
  quote,
  author,
  avatar,
  ...rest
}: TestimonialCardProps) => {
  const swiperSlide = useSwiperSlide();

  const classes = `${styles.testimonialCard} ${
    swiperSlide.isActive ? styles.active : ""
  }`;

  return (
    <div className={classes} {...rest}>
      <div className={styles.top}>
        <div className={styles.border} />
        <ImQuotesLeft className={styles.quoteIcon} />
      </div>

      <div className={styles.content}>
        <p className={styles.quote}>{quote}</p>

        <div className={styles.author}>
          <div className={styles.name}>{author}</div>

          <div className={styles.avatar}>
            <img src={avatar} alt={author} />
          </div>
        </div>
      </div>
    </div>
  );
};
