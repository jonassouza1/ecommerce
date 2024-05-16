import { useState, useEffect } from "react";
import styles from "styles/section/SectionUndertake.module.css";
const SectionUndertake = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fatchDate = async () => {
      const dates = await fetch("http://localhost:3000/api/v1/date/images");
      const resultlist = await dates.json();
      const images = await resultlist.result;
      setState(images);
    };
    fatchDate();
  }, []);
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
                <img src={el.url} alt={el.altt} />
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

export default SectionUndertake;
