import { Pagination, Navigation, type SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "swiper/css";

import { Container } from "../../../../components/layout";
import { TestimonialCard } from "../../../../components/common";
import { REVIEWS, ABOUT_ME } from "../../../../constants";

import avatar from "../../../../images/avatar.png?w=128&webp&imagetools";

import styles from "./Reviews.module.scss";
import "./swiper.scss";

export const Reviews = () => {
  const breakpoints = {
    650: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };

  const swiperParams: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints,
    pagination: {
      clickable: true,
      el: "#reviews-swiper-pagination",
      renderBullet: function (index, className) {
        return `<div class="${className}"></div>`;
      },
    },
    navigation: {
      prevEl: "#reviews-prev-btn",
      nextEl: "#reviews-next-btn",
    },
    loop: true,
  };

  return (
    <Container id="reviews" background="#060c10">
      <section className={styles.reviews}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src={avatar} alt="" />
          </div>

          <ul className={styles.details}>
            {ABOUT_ME.map(({ Icon, label }, index) => (
              <li key={index}>
                <Icon className={styles.icon} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <Swiper {...swiperParams}>
          {REVIEWS.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}

          <div className={styles.navigation}>
            <div className={styles.buttons}>
              <button id="reviews-prev-btn" className={styles.button}>
                <BsArrowLeftShort className={styles.prev} />
              </button>

              <button id="reviews-next-btn" className={styles.button}>
                <BsArrowRightShort className={styles.next} />
              </button>
            </div>

            <div id="reviews-swiper-pagination" className={`swiper-pagination ${styles.pagination}`} />
          </div>
        </Swiper>
      </section>
    </Container>
  );
};
