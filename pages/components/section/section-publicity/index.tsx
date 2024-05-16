import { useState, useEffect } from "react";

import styles from "styles/section/Publicity.module.css";

const Publicity = () => {
  const [publict, setPublicit] = useState([]);

  useEffect(() => {
    const fatchDate = async () => {
      const dates = await fetch("http://localhost:3000/api/v1/date/publicitys");
      const resultlist = await dates.json();
      const publicity = await resultlist.result;
      setPublicit(publicity);
    };
    fatchDate();
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleDiv}>
            <h1>Subscribe to</h1>
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/home/meliplus-outline-pill@3x.png"
              alt="logo image"
            />
          </div>
          <h2>
            $17<span className={styles.centav}>99</span>
            <span className={styles.month}>/mes</span>
          </h2>
        </div>
        <div className={styles.containerPublicit}>
          <div className={styles.title2}>
            <h2>
              Count on the best benefits on Mercado Livre and Mercado Pago
            </h2>
          </div>
          <div className={styles.publicits}>
            {publict.map((el, i) => {
              return (
                <div className={styles.divPublicit} key={i}>
                  <div className={styles.divImg}>
                    <img src={el.image} alt="" />
                  </div>
                  <div className={styles.text}>
                    <span>{el.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.footer}>
          {" "}
          <a href="#">Subscribe Merlin+</a>
        </div>
      </div>
    </section>
  );
};
export default Publicity;
