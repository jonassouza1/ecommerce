import { useState, useEffect } from "react";
import styles from "styles/carousel/CarouselHistoric.module.css";
import stylesP from "styles/carousel/CarouselProducts.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

const CarouselHistoric = () => {
  const [count, setCount] = useState<number>(6);
  const [slides, setSlides] = useState([]);

  const urlLocal = "http://localhost:3000/api/v1/date/historic";
  const urlProduction =
    "https://ecommerce-git-fix-migrations-jonassouza1s-projects.vercel.app/api/v1/date/historic";

  useEffect(() => {
    const fatchDate = async () => {
      const url =
        process.env.NODE_ENV === "production" ? urlProduction : urlLocal;
      const dates = await fetch(`${url}`);
      const resultlist = await dates.json();
      const historic = await resultlist.result;
      setSlides(historic);
    };
    fatchDate();
  }, []);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1200) {
        setCount(5);
        if (window.innerWidth < 1060) {
          setCount(4);
        }
        if (window.innerWidth < 860) {
          setCount(3);
        }
        if (window.innerWidth < 620) {
          setCount(2);
        }
        if (window.innerWidth < 520) {
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
    <div>
      <div className={styles.fill}></div>
      <section className={styles.sectionCarousel}>
        <div className={styles.container}>
          <div className={styles.divTitle}>
            <h1>Offer of the day</h1>
          </div>
          <div className={styles.carousel}>
            <Swiper
              slidesPerView={count}
              navigation
              pagination={{ clickable: true }}
              className={styles.slides}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={stylesP.offerDay}>
                    <a className={stylesP.divImg} href="#">
                      <img src={slide.image} alt="cream" />
                    </a>
                    <p>{slide.text}</p>
                    <label className={stylesP.span}>
                      <del>{slide.value1}</del>
                    </label>
                    <h2>
                      {JSON.parse(slide.value2)[0]}
                      <label className={stylesP.centav}>
                        {JSON.parse(slide.value2)[1]}
                      </label>
                      <label className={stylesP.off}>
                        {JSON.parse(slide.value2)[2]}
                      </label>
                    </h2>
                    <label className={stylesP.off1}>{slide.parcelation}</label>
                    <label className={stylesP.off1}>
                      {slide.button} {""}
                      {""}
                      <label className={stylesP.full}>
                        <i className="fa-solid fa-bolt-lightning"></i> FULL
                      </label>
                    </label>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselHistoric;
