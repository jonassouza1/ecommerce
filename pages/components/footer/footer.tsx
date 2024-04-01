import styles from "styles/footer/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divFooter}>
          <div className={styles.containerNav}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <a href="#">Work with us</a>
                </li>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">How we take care of your privacy</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Insurance information</a>
                </li>
              </ul>
            </nav>
            <small>Copyright © 1999-2024 Ebazar.com.br LTDA.</small>
          </div>
          <p>
            CNPJ no. 03.007.331/0001-41 / Av. das Nações Unidas, no. 3.003,
            Bonfim, Osasco/SP - CEP 06233-903 - company of the Mercado Livre
            group.
          </p>
        </div>
      </div>
    </footer>
  );
};
