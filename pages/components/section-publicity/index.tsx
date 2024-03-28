import { useState } from "react";
import styles from "styles/Publicity.module.css";
export const Publicity = () => {
  const [publict, setPublicit] = useState([
    {
      text: "Free shipping on millions of products starting at $29",
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png",
    },
    {
      text: "Disney+ and Star+ at no cost",
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/widget-home/combo-widgetl6@2x.jpg",
    },
    {
      text: "Deezer Premium 12 months free of charge",
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/deezer/rebranding/deezer-logo-circle-vdp-filled@3x.png",
    },
    {
      text: "60% OFF on Ultrapasse and other benefits",
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/ultrapasse-widget@2x.png",
    },
  ]);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleDiv}>
            <h1>Subscribe to</h1>
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/home/meliplus-outline-pill@3x.png"
              alt=""
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
