import { useState, useEffect } from "react";
import styles from "styles/carousel/CarouselProducts.module.css";
import { productsDate } from "./productsDate";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselProducts = () => {
  const [count, setCount] = useState<number>(6);
  const [slides, setSlides] = useState(productsDate);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1200) {
        setCount(3);
        if (window.innerWidth < 1060) {
          setCount(2);
        }
        if (window.innerWidth < 860) {
          setCount(1);
        }
      } else {
        setCount(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.divContainer}>
      <div className={styles.divTitle}>
        <h1>Offer of the day</h1> <a href="#">Show all offers</a>
      </div>
      <section className={styles.section}>
        <Swiper
          slidesPerView={count}
          navigation
          pagination={{ clickable: true }}
          className={styles.slides}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.containerSlides}>
                <div className={styles.offerDay}>
                  <a href="#">
                    <img
                      src="https://http2.mlstatic.com/D_Q_NP_2X_736700-MLU74110477966_012024-V.webp"
                      alt="cream"
                    />
                  </a>
                  <p>{slide.text}</p>
                  <label className={styles.span}>
                    <del>{slide.value1}</del>
                  </label>
                  <h2>
                    {slide.value2[0]}
                    <label className={styles.centav}>{slide.value2[1]}</label>
                    <label className={styles.off}>{slide.value2[2]}</label>
                  </h2>
                  <label className={styles.off1}>{slide.parcelation}</label>
                  <label className={styles.off1}>
                    {slide.button} {""}
                    {""}
                    <label className={styles.full}>
                      <i className="fa-solid fa-bolt-lightning"></i> FULL
                    </label>
                  </label>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
