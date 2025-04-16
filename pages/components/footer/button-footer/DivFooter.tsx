import styles from "styles/footer/ButtonFooter.module.css";
import { useEffect } from "react";

import { useState } from "react";

const DivFooter = () => {
  const [info, setInfo] = useState([]);

  const urlLocal = "http://localhost:3000/api/v1/date/informations";
  const urlPreviw =
    "https://ecommerce-git-fix-migrations-jonassouza1s-projects.vercel.app/api/v1/date/informations";
  const urlProduction =
    "https://ecommerce-70b6.onrender.com/api/v1/date/informations";

  useEffect(() => {
    const fatchDate = async () => {
      const url =
        process.env.NODE_ENV === "production" ? urlProduction : urlLocal;
      const dates = await fetch(`${url}`);
      const resultlist = await dates.json();
      const information = await resultlist.result;
      setInfo(information);
    };
    fatchDate();
  }, []);
  return (
    <div className={styles.section}>
      <div className={styles.divContainer}>
        {info.map((el, i) => {
          return (
            <div key={i} className={styles.footer}>
              <h3>{el.title}</h3>
              <ul>
                <li>
                  <a href="##">{el.text}</a>
                </li>
                <li>
                  <a href="##">{el.text1}</a>
                </li>
                <li>
                  <a href="##">{el.text2}</a>
                </li>
                <li>
                  <a href="##">{el.text3}</a>
                </li>
                <li>
                  <a href="##">{el.text4}</a>
                </li>
                <li>
                  <a href="##">{el.text5}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DivFooter;
