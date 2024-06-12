import React from 'react'

import styles from './reproduction.module.css'

function Reproduction() {
  return (
    <div className={styles.reproduction}>
        <h1>Репродукции</h1>
        <div className={styles.tabs}>
            <a className={styles.current_tab} href="">Франция</a>
            <a href="">Германия</a>
            <a href="">Англия</a>
        </div>
    </div>
  )
}

export default Reproduction