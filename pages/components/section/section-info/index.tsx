import { useState, useEffect } from "react";
import styles from "styles/section/SectionInfo.module.css";

const SectionInfo = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fatchDate = async () => {
      const dates = await fetch("http://localhost:3000/api/v1/date/payments");
      const resultlist = await dates.json();
      const information = await resultlist.result;
      setState(information);
    };
    fatchDate();
  }, []);
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
export default SectionInfo;
