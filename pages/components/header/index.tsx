import styles from "styles/header/Header.module.css";
import NavBar from "./navbar/NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.divLogo}>
        <img src="./logo.jpg" alt="logo free market" />
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
          <img src="./publicity.jpg" alt="" />
        </div>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
