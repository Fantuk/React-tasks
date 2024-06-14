import React from 'react'

import styles from './info.module.css'
import style from '../../../app.module.css'

function Info() {
  return (
    <div className={styles.info}>
        <div className={styles.info_column}>
            <h1 className={styles.title}>Репродукции</h1>
            <p className={style.description_text}>Франция</p>
            <p className={style.description_text}>Германия</p>
            <p className={style.description_text}>Англия</p>
        </div>

        <div className={styles.info_column}>
            <h1 className={styles.title}>Новинки</h1>
            <p className={style.description_text}>2021</p>
            <p className={style.description_text}>2020</p>
        </div>

        <div className={styles.info_column}>
            <h1 className={styles.title}>О нас</h1>
            <p className={style.description_text}>Художники</p>
            <p className={style.description_text}>Менеджеры</p>
        </div>
    </div>
  )
}

export default Info