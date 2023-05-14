import { useState } from "react";
import {
  EffectCreative,
  type SwiperOptions,
  Pagination,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import type { IconType } from "react-icons";

import "swiper/css";

import { useMediaQuery } from "../../../hooks";
import { BlobButton, RotatingLink } from "../../ui";

import exampleImage1 from "../../../images/landing/43.png?w=720&webp&imagetools";
import exampleImage2 from "../../../images/landing/5.jpg?w=720&webp&imagetools";
import exampleImage3 from "../../../images/landing/29.jpg?w=720&webp&imagetools";

import { FullScreenSwiper } from "./FullScreenSwiper";

import styles from "./ProjectCard.module.scss";
import "./swiper.scss";

const images = [
  exampleImage1,
  exampleImage2,
  exampleImage3,
  exampleImage1,
  exampleImage2,
  exampleImage3,
];

type Link = {
  url: string;
  title?: string;
  icon?: IconType;
};

type ProjectCardProps = {
  order: string;
  title: string;
  date: string;
  link: Link;
  technologies: string[];
};

export const ProjectCard = ({
  order,
  title,
  date,
  link,
  technologies,
}: ProjectCardProps) => {
  const [isFullScreenSwiperOpen, setIsFullScreenSwiperOpen] = useState(false);

  const isTablet = useMediaQuery("(max-width: 768px)");

  const technologyList = (
    <ul className={styles.technologies}>
      {technologies.map((technology, index) => (
        <li key={index} className={styles.technology}>
          {technology}
        </li>
      ))}
    </ul>
  );

  const swiperParams: SwiperOptions = {
    modules: [EffectCreative, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
      clickable: true,
      el: "#project-swiper-pagination",
      renderBullet: function (index, className) {
        return `<div class="${styles.bullet} ${className}"></div>`;
      },
    },
    navigation: {
      prevEl: "#prev",
      nextEl: "#next",
    },
  };

  return (
    <>
      <div className={styles.projectCard}>
        <div className={styles.header}>
          <div className={styles.counter}>{order}</div>

          <div className={styles.date}>{date}</div>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.links}>
              <BlobButton href={link.url} colorTheme="black" outsideLink>
                {link.icon && <link.icon className={styles.icon} />}
                {link.title}
              </BlobButton>

              <RotatingLink />
            </div>

            {!isTablet && technologyList}
          </div>

          <Swiper className={styles.swiper} {...swiperParams}>
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={styles.slide}
                onClick={() => setIsFullScreenSwiperOpen(true)}
              >
                <img src={image} alt="Example" />
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
                id="project-swiper-pagination"
                className={`swiper-pagination ${styles.pagination}`}
              />
            </div>

            {isTablet && technologyList}
          </Swiper>
        </div>
      </div>

      <FullScreenSwiper
        images={images}
        indexOfImage={0}
        isOpen={isFullScreenSwiperOpen}
        onClose={() => setIsFullScreenSwiperOpen(false)}
      />
    </>
  );
};
