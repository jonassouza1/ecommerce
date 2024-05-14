import styles from "styles/nav/NavBar.module.css";
import NavResponsive from "./nav-responsive";

const NavBar = () => {
  return (
    <nav className={styles.divNav}>
      <a href="#" className={styles.divCep}>
        <i className="fa-solid fa-location-dot"></i>
        <div className={styles.cep}>
          <span>Enter your</span>
          <p>CEP</p>
        </div>
      </a>

      <ul className={styles.divList}>
        <li className={styles.father}>
          <a href="#" target="_blank" className={styles.children}>
            Categories <i className="fa-solid fa-chevron-down"></i>
          </a>
          <div className={styles.dropdown}>
            <i></i>
            <a href="#" target="_blank">
              Vehicles
            </a>
            <a href="#" target="_blank">
              Supermarket
            </a>
            <a href="#" target="_blank">
              Tecnology
            </a>
            <a href="#" target="_blank">
              Home appliances
            </a>
          </div>
        </li>
        <li>
          <a href="#" target="_blank">
            Offer of the day
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Historic
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Supermarket
          </a>
        </li>
        <li className={styles.free}>
          <a href="#" target="_blank">
            <p>Free</p>
            Play Market
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Fashion
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Sell
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Contat
          </a>
        </li>
      </ul>
      <NavResponsive />
    </nav>
  );
};

export default NavBar;
