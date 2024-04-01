import styles from "styles/section/SectionInfo.module.css";

export const SectionInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divInfo}>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
              alt=""
            />
          </div>
          <h2>Choose how to pay</h2>
          <p>
            <span>
              With Mercado Pago, you pay by card, bank slip or Pix. You can also
              pay in up to 12 installments by bank slip with Mercado Crédito.
            </span>
          </p>
          <a href="#">How to pay with Mercado Pago</a>
        </div>
        <div className={styles.divInfo}>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
              alt=""
            />
          </div>
          <h2>Free Shipping From $79</h2>
          <p>
            <span>
              When you register with Mercado Livre, you have free shipping on
              thousands of products.
            </span>
          </p>
        </div>
        <div className={styles.divInfo1}>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
              alt=""
            />
          </div>
          <h2>Security, from start to finish</h2>
          <p>
            <span>
              You didn't like what you bought? Give it back! At Mercado Livre
              there is nothing you can't do, because you are always protected.
            </span>
          </p>
          <a href="#">How we protect you</a>
        </div>
      </div>
    </section>
  );
};
