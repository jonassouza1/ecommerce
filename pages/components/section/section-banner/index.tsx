import styles from "styles/section/SectionBanner.module.css";
const SectionBanner = () => {
  return (
    <section className={styles.section}>
      <div id="SectionBanner" className={styles.container}>
        <div className={styles.divBanner}>
          <img src="./leptop.jpg" alt="leptop image" />
        </div>
        <div className={styles.divText}>
          <div className={styles.divImg}>
            <img src="./logomarca.jpg" alt="system logo image" />
          </div>
          <div className={styles.divTitle}>
            <div className={styles.divP}>
              <p>GAMER COMPUTER</p>
              <p>INTEGRATED SYSTEM</p>
            </div>

            <div className={styles.divArrow}>
              <p>CHECK</p> <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionBanner;
