import styles from "styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divFooter}>
          <div className={styles.containerNav}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <a href="#">Work with Br</a>
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
            <small>Copyright © 2023-2024 Slack.com.br LTDA.</small>
          </div>
          <p>
            CNPJ at the. 00.000.000/0000-00 / Av. of municipalities, at the.
            0.000 , Campo Bom/RS - CEP 937-000-00 - company of the Slack group.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
