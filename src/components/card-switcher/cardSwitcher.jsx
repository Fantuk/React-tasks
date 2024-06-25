import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "../card/card";

import styles from '../card/card.module.css'

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
      <Card
          id={data.id}
          image={data.image}
          title={data.title}
          category={data.category}
          description={data.description}
          price={data.price}
          rate={data.rating.rate}
          count={data.rating.count}
        />
      <p>{card}/20</p>
      <button onClick={() => previousPage()}>Previous</button>
      <button onClick={() => nextPage()}>Next</button>
    </>
  );
}

export default CardSwitcher;
