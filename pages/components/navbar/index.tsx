import styles from "styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.divNav}>
      <div className={styles.divCep}>
        <a href="#">
          <span>informe seu CEP</span>
        </a>
      </div>
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

      <ul className={styles.divList2}>
        <li>
          <a href="#" target="_blank">
            create your account
          </a>
          <a href="#" target="_blank">
            enter
          </a>
          <a href="#" target="_blank">
            purchase
          </a>
          <a href="#" target="_blank">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
