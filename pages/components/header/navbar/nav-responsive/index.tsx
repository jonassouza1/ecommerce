import React from "react";
import styles from "styles/nav/NavResponsive.module.css";

const NavResponsive = () => {
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
          <a href="##">Create your account</a>
          <a href="##">Enter</a>
          <a href="##">Purchase</a>
          <a href="##">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
