import styles from "styles/section/SectionBenefits.module.css";

export const SectionBenefits = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Content benefits</h1>
        <div className={styles.divBanners}>
          <div className={styles.banner1}>
            <div className={styles.divLogo}>
              <div className={styles.divImg}>
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg"
                  alt=""
                />
              </div>
              <div className={styles.divSpan}>
                <span>No cost with Meli+</span>
                <span className={styles.span2}>Disney+ and Star+</span>
              </div>
            </div>
          </div>
          <div className={styles.banner2}>
            <div className={styles.divLogo}>
              <div className={styles.divImg}>
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/max/logo/max-square@2x.png"
                  alt=""
                />
              </div>
              <div className={styles.divSpan}>
                <span>UP TO 30% OFF</span>
                <span className={styles.span2}>Max</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
