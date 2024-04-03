import styles from "styles/footer/ButtonFooter.module.css";
import { information } from "./infoFooter";
import { useState } from "react";

export const DivFooter = () => {
  const [info, setInfo] = useState(information);
  return (
    <div className={styles.section}>
      <div className={styles.divContainer}>
        {info.map((el, i) => {
          return (
            <div key={i} className={styles.footer}>
              <h3>{el.title}</h3>
              <ul>
                <li>
                  <a href="#">{el.text}</a>
                </li>
                <li>
                  <a href="#">{el.text1}</a>
                </li>
                <li>
                  <a href="#">{el.text2}</a>
                </li>
                <li>
                  <a href="#">{el.text3}</a>
                </li>
                <li>
                  <a href="#">{el.text4}</a>
                </li>
                <li>
                  <a href="#">{el.text5}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
