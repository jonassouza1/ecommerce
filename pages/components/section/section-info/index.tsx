import { useState, useEffect } from "react";
import styles from "styles/section/SectionInfo.module.css";

const SectionInfo = () => {
  const [state, setState] = useState([]);

  const urlLocal = "http://localhost:3000/api/v1/date/payments";
  const urlPreviw =
    "https://ecommerce-git-fix-migrations-jonassouza1s-projects.vercel.app/api/v1/date/payments";
  const urlProduction =
    "https://ecommerce-tau-ruby.vercel.app/api/v1/date/payments";

  useEffect(() => {
    const fatchDate = async () => {
      const url =
        process.env.NODE_ENV === "production" ? urlProduction : urlLocal;
      const dates = await fetch(`${url}`);
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
