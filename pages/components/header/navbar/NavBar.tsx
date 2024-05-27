import styles from "styles/nav/NavBar.module.css";
import NavResponsive from "./nav-responsive";

const NavBar = () => {
  return (
    <nav className={styles.divNav}>
      <a href="##" className={styles.divCep}>
        <i className="fa-solid fa-location-dot"></i>
        <div className={styles.cep}>
          <span>Enter your</span>
          <p>CEP</p>
        </div>
      </a>

      <ul className={styles.divList}>
        <li className={styles.father}>
          <a href="##" className={styles.children}>
            Sections <i className="fa-solid fa-chevron-down"></i>
          </a>
          <div className={styles.dropdown}>
            <i></i>
            <a href="#SectionUndertake">Vehicles</a>
            <a href="#SectionCategory">Categories</a>
            <a href="#SectionBanner">Tecnology</a>
            <a href="#SectionBenefits">Movie theater</a>
          </div>
        </li>
        <li>
          <a href="#CarouselHistoric">Historic</a>
        </li>
        <li className={styles.free}>
          <a href="#SectionUndertake">
            <p>Free</p>
            games
          </a>
        </li>
        <li>
          <a href="##">Fashion</a>
        </li>
        <li>
          <a href="##">Sell</a>
        </li>
        <li>
          <a href="#Footer">Contat</a>
        </li>
      </ul>
      <NavResponsive />
    </nav>
  );
};

export default NavBar;
