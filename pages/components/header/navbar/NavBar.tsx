import styles from "styles/nav/NavBar.module.css";
import { NavResponsive } from "./nav-responsive";

export const NavBar = () => {
  return (
    <nav className={styles.divNav}>
      <a href="#" className={styles.divCep}>
        <span>
          <i className="fa-solid fa-location-dot"></i> informe seu CEP
        </span>
      </a>

      <ul className={styles.divList}>
        <li className={styles.father}>
          <a href="#" target="_blank" className={styles.children}>
            categories <i className="fa-solid fa-chevron-down"></i>
          </a>
          <div className={styles.dropdown}>
            <a href="#" target="_blank">
              vehicles
            </a>
            <a href="#" target="_blank">
              supermarket
            </a>
            <a href="#" target="_blank">
              tecnology
            </a>
            <a href="#" target="_blank">
              home appliances
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
            historic
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            supermarket
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            fashion
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            sell
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            contat
          </a>
        </li>
      </ul>
      <NavResponsive />
    </nav>
  );
};
