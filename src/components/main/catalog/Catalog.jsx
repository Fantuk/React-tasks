import React from 'react'

import Catalog_cards from './catalog_cards/Catalog_cards'

import styles from './catalog.module.css'

function Catalog() {
  return (
    <div className={styles.catalog}>
      <div className={styles.reproduction}>
        <h1 className={styles.title}>Репродукции</h1>
        <div className={styles.tabs}>
            <a className={styles.tab} href="##">Франция</a>
            <a className={styles.tab} href="##">Германия</a>
            <a className={styles.tab} href="##">Англия</a>
        </div>
    </div>
      <Catalog_cards />
    </div>
  )
}

export default Catalog