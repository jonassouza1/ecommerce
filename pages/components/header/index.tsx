import styles from "styles/Header.module.css";
import { NavBar } from "../navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.divLogo}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/pt_logo_large_plus.webp"
          alt="logo free market"
        />
        <div className={styles.divInput}>
          <input
            type="text"
            placeholder="search for branded products and more..."
          />
          <button className={styles.btn} onClick={() => onsubmit}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className={styles.publicity}>
          <img
            src="https://http2.mlstatic.com/D_NQ_802965-MLA75056376619_032024-OO.webp"
            alt=""
          />
        </div>
      </div>

      <NavBar />
    </header>
  );
};
