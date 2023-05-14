import {
  EffectCreative,
  type SwiperOptions,
  Pagination,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

import "swiper/css";

import styles from "./FullScreenSwiper.module.scss";
import "./swiperFullScreen.scss";

type FullScreenSwiperProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  indexOfImage: number;
};

export const FullScreenSwiper = ({
  isOpen,
  onClose,
  images,
  indexOfImage,
}: FullScreenSwiperProps) => {
  if (!isOpen) return null;

  const swiperParams: SwiperOptions = {
    modules: [EffectCreative, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        scale: 0.8,
        translate: ["-100%", 0, 0],
      },
      next: {
        scale: 0.8,
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
      clickable: true,
      el: "#fullscreen-swiper-pagination",
      renderBullet: function (index, className) {
        return `<div class="${styles.bullet} ${className}"></div>`;
      },
    },
    navigation: {
      prevEl: "#prev",
      nextEl: "#next",
    },
    initialSlide: indexOfImage,
  };

  document.body.style.overflow = "hidden";

  return (
    <div className={styles.container}>
      <Swiper {...swiperParams} className={styles.swiper}>
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={image} alt={`Project image ${index}`} />
          </SwiperSlide>
        ))}

        <div className={styles.navigation}>
          <div className={styles.buttons}>
            <button id="prev" className={styles.button}>
              <BsArrowLeftShort className={styles.prev} />
            </button>

            <button id="next" className={styles.button}>
              <BsArrowRightShort className={styles.next} />
            </button>
          </div>

          <div
            id="fullscreen-swiper-pagination"
            className={`swiper-pagination ${styles.pagination}`}
          />

          <button
            className={styles.closeButton}
            onClick={() => {
              document.body.style.overflow = "auto";
              onClose();
            }}
          >
            <MdOutlineClose className={styles.closeIcon} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
