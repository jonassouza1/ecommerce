import styles from "styles/section/SectionPromote.module.css";

export const SectionPromote = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divBanner}>
          <div className={styles.divText}>
            <span>CREDIT CARD</span>
            <h2>$35 OFF NO</h2>
            <h2>FREE MARKET</h2>
            <a href="#">BUY NOW</a>
          </div>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/D_NQ_962224-MLA75382910279_032024-OO.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.divBanner}>
          <div className={styles.divText}>
            <span>BIG BROTHER BRAZIL</span>
            <h2>THE FREE MARKET</h2>
            <h2>IT HAS ARRIVED</h2>
            <a href="#">View more</a>
          </div>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/D_NQ_629163-MLA73736847928_012024-OO.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
