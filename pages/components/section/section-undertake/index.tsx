import { useState } from "react";
import styles from "styles/section/SectionUndertake.module.css";
import { images } from "./image";

export const SectionUndertake = () => {
  const [state, setState] = useState(images);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {state.map((el, i) => {
          return (
            <div key={i} className={styles.divContainer}>
              <div className={styles.divTitle}>
                <p>{el.title}</p>
              </div>
              <div className={styles.divImg}>
                <img src={el.image} alt={el.altT} />
              </div>
              <ul className={styles.list}>
                <li>
                  <a href="#">
                    <img src={el.img} alt={el.alt} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={el.img1} alt={el.alt1} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={el.img2} alt={el.alt2} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={el.img3} alt={el.alt3} />
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
