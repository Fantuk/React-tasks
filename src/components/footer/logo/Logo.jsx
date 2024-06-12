import React from 'react'

import styles from './logo.module.css'

import Star_1 from '../../images/Star_1.png'

function Logo() {
  return (
    <div className={styles.logo_content}>
        <div className={styles.logo}>
            <img src={Star_1} alt="netu" />
            <h1>Ink. House</h1>
        </div>
        <div className={styles.number}>
            <h1>+7 (999) 543-54-54</h1>
            <p>Мастерская</p>
        </div>
    </div>
  )
}

export default Logo