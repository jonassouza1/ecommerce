import styles from "styles/footer/ButtonFooter.module.css";
import { DivFooter } from "./DivFooter";
import { useState, useRef } from "react";

export const ButtonFooter = () => {
  const [state, setState] = useState(false);

  const divRef = useRef(null);

  const handleClick = () => {
    setState(!state);
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        {state ? "Hide information" : "More information"}{" "}
        <i className={`fa-solid fa-angle-${state ? "up" : "down"}`}></i>
      </button>

      {state && (
        <div ref={divRef} className={styles.divRef}>
          <DivFooter />
        </div>
      )}
    </div>
  );
};
