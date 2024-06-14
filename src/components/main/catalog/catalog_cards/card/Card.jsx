import React from 'react'

import Button from '../../../Button'

import styles from './card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>
        <img className={styles.picture} src={props.img} alt="netu" />
        <div className={styles.card_info}>
            <p className={styles.autor}>{props.autor}</p>
            <h1 className={styles.name}>{props.name}</h1>
            <p>{props.material}</p>
        </div>
        <p className={styles.price}>{props.price}</p>
        <Button value="В корзину"/>
    </div>
  )
}

export default Card