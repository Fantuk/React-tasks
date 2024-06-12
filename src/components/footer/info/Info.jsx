import React from 'react'

import styles from './info.module.css'

function Info() {
  return (
    <div className={styles.info}>
        <div className={styles.info_column}>
            <h1>Репродукции</h1>
            <p>Франция</p>
            <p>Германия</p>
            <p>Англия</p>
        </div>

        <div className={styles.info_column}>
            <h1>Новинки</h1>
            <p>2021</p>
            <p>2020</p>
        </div>

        <div className={styles.info_column}>
            <h1>О нас</h1>
            <p>Художники</p>
            <p>Менеджеры</p>
        </div>
    </div>
  )
}

export default Info