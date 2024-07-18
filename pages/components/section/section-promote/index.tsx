import styles from "styles/section/SectionPromote.module.css";

const SectionPromote = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divBanner}>
          <div className={styles.divText}>
            <span>CREDIT CARD</span>
            <h2>THE SLACK</h2>
            <h2>YOU NEED</h2>
            <a href="##">BUY NOW</a>
          </div>
          <div className={styles.divImg}>
            <img src="./faxina.png" alt="" />
          </div>
        </div>
        <div className={styles.divBanner}>
          <div className={styles.divText}>
            <span>QUALITY TOOLS</span>
            <h2>ALL You</h2>
            <h2>NEED</h2>
            <a href="##">View more</a>
          </div>
          <div className={styles.divImg}>
            <img src="./tools.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromote;
