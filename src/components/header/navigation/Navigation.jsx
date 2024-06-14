import React from 'react'

import styles from './navigation.module.css'
import style from '../../../app.module.css'

import shopingCart from '../../images/shopping-cart.svg'

function Navigation() {
  return (
    <div className={styles.navigation}>
        <a className={`${styles.text} ${style.main_text}`} href="##">Репродукции</a>
        <a className={`${styles.text} ${style.main_text}`} href="##">Новинки</a>
        <a className={`${styles.text} ${style.main_text}`} href="##">О нас</a>
        <img className={styles.shopingCart} src={shopingCart} alt="Shoping-cart" />
    </div>
  )
}

export default Navigation