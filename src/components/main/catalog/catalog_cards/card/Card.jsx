import React from 'react'

import styles from './card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>
        <img src={props.img} alt="netu" />
        <div className={styles.card_info}>
            <p className={styles.autor}>{props.autor}</p>
            <h1 className={styles.name}>{props.name}</h1>
            <p>{props.material}</p>
        </div>
        <p className={styles.price}>{props.price}</p>
        <button>В корзину</button>
    </div>
  )
}

export default Card