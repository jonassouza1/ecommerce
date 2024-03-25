import React from "react";
import styles from "styles/NavResponsive.module.css";

export const NavResponsive = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputHamburger}
        type="checkbox"
        id="menu-hamburger"
      />

      <label className={styles.labelHamburger} htmlFor="menu-hamburger">
        <div className={styles.menu}>
          <span className={styles.hamburger}></span>
        </div>
      </label>

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
    </div>
  );
};
