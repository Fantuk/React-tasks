import React, { useState, useEffect } from "react";

import axios from "axios";

import styles from "./card.module.css";

function CardSwitcher() {
  const [data, setCardData] = useState(undefined);
  const [card, setCard] = useState(1);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${card}`;
    axios.get(apiUrl).then((resp) => {
      const cardData = resp.data;
      setCardData(cardData);
    });
    document.title = `Card №${card}`;
    return () => {
      setCardData(null);
    };
  }, [card]);

  const nextPage = () => {
    return card < 20 ? setCard(card + 1) : "";
  };

  const previousPage = () => {
    return card > 1 ? setCard(card - 1) : "";
  };

  if (!data) return <div className={styles.sceleton}>DATA LOADING</div>;

  return (
    <>
      <div key={data.id} className={styles.card}>
        <img src={data.image} alt="product" className={styles.image} />
        <div className={styles.description}>
          <h3>{data.title}</h3>
          <p>Category: {data.category}</p>
          <p>{data.description}</p>
          <p>${data.price}</p>
          <div className={styles.rating}>
            <p>Rating: {data.rating.rate} stars</p>
            <p>{data.rating.count} feedbacks</p>
          </div>
          <button>Купить</button>
        </div>
      </div>
      <p>{card}/20</p>
      <button onClick={() => previousPage()}>Previous</button>
      <button onClick={() => nextPage()}>Next</button>
    </>
  );
}

export default CardSwitcher;
