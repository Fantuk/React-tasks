import React from "react";

import styles from './card.module.css'

function Card({
  id,
  image,
  title,
  category,
  description,
  price,
  rate,
  count
}) {
    
  return (
    <div key={id} className={styles.card}>
      <img src={image} alt="product" className={styles.image} />
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p>{description}</p>
        <p>${price}</p>
        <div className={styles.rating}>
          <p>Rating: {rate} stars</p>
          <p>{count} feedbacks</p>
        </div>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default Card;
