import React from 'react'

import Logo from '../../header/Logo'

import styles from './number.module.css'
import style from '../../../app.module.css'

function Number() {
  return (
    <div className={styles.content}>
        <Logo />
        <div className={styles.number}>
            <h1 className={styles.text}>+7 (999) 543-54-54</h1>
            <p className={style.description_text}>Мастерская</p>
        </div>
    </div>
  )
}

export default Number