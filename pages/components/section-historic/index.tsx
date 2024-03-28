import { useState, useEffect } from "react";
import styles from "styles/CarouselHistoric.module.css";
import stylesP from "styles/CarouselProducts.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselHistoric = () => {
  const [count, setCount] = useState<number>(6);
  const [slides, setSlides] = useState([
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping  ",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
    {
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      value1: "$1009",
      value2: ["$7", "03", "16% OFF"],
      parcelation: "in 10x $77,90 interest-free",
      button: "free shipping",
    },
  ]);

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
                    <a href="#">
                      <img
                        src="https://http2.mlstatic.com/D_Q_NP_2X_736700-MLU74110477966_012024-V.webp"
                        alt="cream"
                      />
                    </a>
                    <p>{slide.text}</p>
                    <label className={stylesP.span}>
                      <del>{slide.value1}</del>
                    </label>
                    <h2>
                      {slide.value2[0]}
                      <label className={stylesP.centav}>
                        {slide.value2[1]}
                      </label>
                      <label className={stylesP.off}>{slide.value2[2]}</label>
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
