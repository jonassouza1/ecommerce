import { useState, useEffect } from "react";
import styles from "styles/SectionCategory.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { category } from "./category";

export const SectionCategory = () => {
  const [count, setCount] = useState<number>(4);
  const [state, setState] = useState(category);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1200) {
        setCount(3);
        if (window.innerWidth < 930) {
          setCount(2);
        }
        if (window.innerWidth < 630) {
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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divTitle}>
          <h2>Categories</h2>
          <a href="#">Show all categories</a>
        </div>
        <div>
          <Swiper
            slidesPerView={count}
            pagination={{ clickable: true }}
            navigation
            className={styles.slides}
          >
            {state.map((el, i) => (
              <SwiperSlide key={i}>
                <div className={styles.divCategory}>
                  <div className={styles.category}>
                    <div className={styles.divImg}>
                      <img src={el.image} alt="imagem" />
                    </div>
                    <div className={styles.divName}>
                      <a href="#">{el.title}</a>
                    </div>
                  </div>
                  <div className={styles.category}>
                    <div className={styles.divImg}>
                      <img src={el.image1} alt="imagem" />
                    </div>
                    <div className={styles.divName}>
                      <a href="#">{el.title1}</a>
                    </div>
                  </div>
                  <div className={styles.category}>
                    <div className={styles.divImg}>
                      <img src={el.image2} alt="imagem" />
                    </div>
                    <div className={styles.divName}>
                      <a href="#">{el.title2}</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
