import React, { useState, useEffect } from "react";

import axios from "axios";

import styles from "../card-switcher/card.module.css";

function CardCatalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products`;
    axios.get(apiUrl).then((resp) => {
      const cardData = resp.data;
      setData(cardData);
    });

    return () => {
      setData([]);
    };
  }, []);

  if (!data) return <div className={styles.sceleton}>DATA LOADING</div>;

  return (
    <>
      {data.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.image} alt="product" className={styles.image} />
          <div className={styles.description}>
            <h3>{card.title}</h3>
            <p>Category: {card.category}</p>
            <p>{card.description}</p>
            <p>${card.price}</p>
            <div className={styles.rating}>
              <p>Rating: {card.rating.rate} stars</p>
              <p>{card.rating.count} feedbacks</p>
            </div>
            <button>Купить</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardCatalog;
