import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "styles/section/SectionAccess.module.css";

const SectionAccess = () => {
  const [count, setCount] = useState<number>(6);
  const [slides, setSlides] = useState([]);

  const urlLocal = "http://localhost:3000/api/v1/date/datesacess";
  const urlPreviw =
    "https://ecommerce-git-fix-migrations-jonassouza1s-projects.vercel.app/api/v1/date/datesacess";
  const urlProduction =
    "https://ecommerce-mu-steel.vercel.app/api/v1/date/datesacess";

  useEffect(() => {
    const fatchDate = async () => {
      const url =
        process.env.NODE_ENV === "production" ? urlProduction : urlLocal;
      const dates = await fetch(`${url}`);
      const datesResult = await dates.json();
      setSlides(datesResult.result);
    };
    fatchDate();
  }, []);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1400) {
        setCount(4);
        if (window.innerWidth < 900) {
          setCount(3);
        }
        if (window.innerWidth < 700) {
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
export default SectionAccess;
