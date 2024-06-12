import React from 'react'

import styles from './navigation.module.css'

import shopingCart from '../../images/shopping-cart.svg'

function Navigation() {
  return (
    <div className={styles.navigation}>
        <a href="#">Репродукции</a>
        <a href="#">Новинки</a>
        <a href="#">О нас</a>
        <img src={shopingCart} alt="netu" />
    </div>
  )
}

export default Navigation