import styles from "styles/section/SectionBanner.module.css";
export const SectionBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divBanner}>
          <img
            src="https://http2.mlstatic.com/D_NQ_684629-MLA74306154898_022024-OO.jpg"
            alt="beer image"
          />
        </div>
        <div className={styles.divText}>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/D_NQ_986957-MLA74306125284_022024-OO.jpg"
              alt="beer logo image"
            />
          </div>
          <div className={styles.divTitle}>
            <div className={styles.divP}>
              <p>HEINEKEN FLAVOR</p>
              <p>ONLY HEINEKEN</p>
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
