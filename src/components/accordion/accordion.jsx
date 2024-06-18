import React, { useState } from "react";

import styles from "./accordion.module.css";
import clsx from "clsx";

function Accordion({ accordionList }) {
  const [openId, setId] = useState(null);

  const clickHandler = (id) => {
    if (id === openId) setId(null);
    else setId(id);
  };
  return (
    <ul className={styles.accordion}>
      {accordionList.map((accordionEl, id) => {
        return (
          <li className={styles.item} key={id}>
            <button className={styles.header} onClick={() => clickHandler(id)}>
              {accordionEl.title}
            </button>
            <div
              // className={`${styles.inner} ${id === openId ? styles.open : ""}`}
              className={clsx(styles.inner, id === openId && styles.open)}
            >
              <div className={clsx(styles.body, id === openId && styles.open)}>{accordionEl.description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
