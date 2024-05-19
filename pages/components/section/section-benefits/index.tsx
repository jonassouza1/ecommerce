import styles from "styles/section/SectionBenefits.module.css";

const SectionBenefits = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Content benefits</h1>
        <div className={styles.divBanners}>
          <div className={styles.banner1}>
            <div className={styles.divLogo}>
              <div className={styles.divImg}>
                <img src="./man.jpg" alt="banner Disney" />
              </div>
            </div>
          </div>
          <div className={styles.banner2}>
            <div className={styles.divLogo}>
              <div className={styles.divImg}>
                <img src="./man1.png" alt="banner Max" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
