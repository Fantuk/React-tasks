import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "../card/card";
import CardSwitcher from "../card-switcher/cardSwitcher"
import useResize from "../hooks/useResize"

import styles from "../card/card.module.css";

function CardCatalog() {
  const [data, setData] = useState([]);
  const { width } = useResize();

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products`;
    axios.get(apiUrl).then((resp) => {
      const cardData = resp.data;
      setData(cardData);
      document.title = "Catalog"
    });


  }, []);

  if (!data) return <div className={styles.sceleton}>DATA LOADING</div>;

  if (width < 768) return <CardSwitcher />;

  return (
    <>
      {data.map((card) => (
        <Card
        id={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        description={card.description}
        price={card.price}
        rate={card.rating.rate}
        count={card.rating.count}
      />
      ))}
    </>
  );
}

export default CardCatalog;
