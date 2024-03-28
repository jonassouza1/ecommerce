import styles from "styles/SectionProducts.module.css";
import { CarouselProducts } from "./CarouselProducts";

export const SectionProducts = () => {
  return (
    <div>
      <div className={styles.fill}></div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.offerDay}>
            <h3>Offer of the day</h3>

            <a href="#">
              <img
                src="https://http2.mlstatic.com/D_Q_NP_2X_736700-MLU74110477966_012024-V.webp"
                alt="cream"
              />
            </a>

            <p>Bepantol Baby Diaper Rash Preventive Cream 120g</p>
            <span>
              <del>$9,62</del>
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
