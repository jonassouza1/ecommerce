import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "styles/section/SectionAccess.module.css";

export const SectionAccess = () => {
  const [count, setCount] = useState<number>(6);

  const [slides, setSlides] = useState([
    {
      title: "Login to your account",
      image: "/account.png",
      text: "Take advantage of offers to buy everything you want",
      button: "Login to your account",
    },
    {
      title: "Enter your location",
      image: "/Location.png",
      text: "Check costs and delivery times",
      button: "Enter location",
    },
    {
      title: "Payment options",
      image: "/Payment.png",
      text: "Pay for your purchases quickly and securely",
      button: "Show means",
    },
    {
      title: "Less than R$100",
      image: "/Lowprice.png",
      text: "Check out products at low prices",
      button: "Show products",
    },
    {
      title: "Best sellers",
      image: "/Trend.png",
      text: "Explore trending products",
      button: "Go to Best Sellers",
    },
    {
      title: "Guaranteed purchase",
      image: "/Devolution.png",
      text: "You can return your purchase for free",
      button: "How it works",
    },
    {
      title: "Official stores",
      image: "/Favorite.png",
      text: "Your favorite brands",
      button: "Show stores",
    },
    {
      title: "Our categories",
      image: "/Category.png",
      text: "Find cell phones, clothes, real estate and more",
      button: "Go to Categories",
    },
  ]);

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
