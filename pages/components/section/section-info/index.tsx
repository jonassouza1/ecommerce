import { useState } from "react";
import styles from "styles/section/SectionInfo.module.css";
import { info } from "./info";

export const SectionInfo = () => {
  const [state, setState] = useState(info);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {state.map((el, i) => {
          return (
            <div key={i} className={styles.divInfo}>
              <div className={styles.divImg}>
                <img src={el.image} alt={el.alt} />
              </div>
              <h2>{el.title}</h2>
              <p>
                <span>{el.text}</span>
              </p>
              <a href="#">{el.button}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
