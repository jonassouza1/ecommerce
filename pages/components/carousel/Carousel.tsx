import { Swiper, SwiperSlide } from "swiper/react";
import styles from "styles/carousel/Carousel.module.css";
const Carousel = () => {
  const images = [
    { id: "1", image: "/computer.jpg" },
    { id: "2", image: "/cosmetics.jpg" },
    { id: "3", image: "/pants.jpg" },
    { id: "4", image: "/perfume.jpg" },
    { id: "5", image: "/products.jpg" },
    { id: "6", image: "/supermarket.jpg" },
  ];
  return (
    <section className={styles.sectionCarousel}>
      <div className={styles.carousel}>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {images.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.image} alt="sss" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
};
export default Carousel;
