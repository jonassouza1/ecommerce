import styles from "styles/section/SectionProducts.module.css";
import CarouselProducts from "./CarouselProducts";

const SectionProducts = () => {
  return (
    <div>
      <div className={styles.fill}></div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.offerDay}>
            <h3>Offer of the day</h3>

            <a href="#">
              <img src="./audiofone.jpg" alt="cream" />
            </a>

            <p>High quality sound gaming microphone</p>
            <span>
              <del>$10,70</del>
            </span>
            <h2>
              $8<span className={styles.centav}>03</span>
              <span className={styles.off}>16% OFF</span>
            </h2>
            <span>in 12x $0,66</span>
          </div>

          <CarouselProducts />
        </div>
      </section>
    </div>
  );
};

export default SectionProducts;
