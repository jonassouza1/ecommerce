import { useState, useEffect } from "react";

import styles from "styles/section/Publicity.module.css";

const Publicity = () => {
  const [publict, setPublicit] = useState([]);

  const urlLocal = "http://localhost:3000/api/v1/date/publicitys";
  const urlPreviw =
    "https://ecommerce-git-fix-migrations-jonassouza1s-projects.vercel.app/api/v1/date/publicitys";
  const urlProduction =
    "https://ecommerce-70b6.onrender.com/api/v1/date/publicitys";

  useEffect(() => {
    const fatchDate = async () => {
      const url =
        process.env.NODE_ENV === "production" ? urlProduction : urlLocal;
      const dates = await fetch(`${url}`);
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
            <h1>Subscribe</h1>
            <img src="./logo1.png" alt="logo image" />
          </div>
        </div>
        <div className={styles.containerPublicit}>
          <div className={styles.title2}>
            <h2>Count on the best benefits on SLACK</h2>
          </div>
          <div className={styles.publicits}>
            {publict.map((el, i) => {
              return (
                <div className={styles.divPublicit} key={i}>
                  <div className={styles.divImg}>
                    <img src={el.image} alt="icons publicity" />
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
          <a href="##">Subscribe SLACK</a>
        </div>
      </div>
    </section>
  );
};
export default Publicity;
