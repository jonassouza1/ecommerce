import React, { useEffect, useState } from "react";
import { acessDate } from "./acessDate";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "styles/section/SectionAccess.module.css";

export const SectionAccess = () => {
  const [count, setCount] = useState<number>(6);

  const [slides, setSlides] = useState(acessDate);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1200) {
        setCount(4);
        if (window.innerWidth < 800) {
          setCount(3);
        }
        if (window.innerWidth < 630) {
          setCount(2);
        }
        if (window.innerWidth < 530) {
          setCount(1);
        }
      } else {
        setCount(6);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.carousel}>
        <Swiper slidesPerView={count} navigation className={styles.slides}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.divAccess}>
                <h3>{slide.title}</h3>
                <div className={styles.divImg}>
                  <img src={slide.image} alt="Imagem" />
                </div>
                <span>{slide.text}</span>
                <a href="#">{slide.button}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
