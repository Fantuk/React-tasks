import React from 'react'

import Reproduction from './reproduction/Reproduction'
import Catalog_cards from './catalog_cards/Catalog_cards'

import styles from './catalog.module.css'

function Catalog() {
  return (
    <div className={styles.catalog}>
      <Reproduction />
      <Catalog_cards />
    </div>
  )
}

export default Catalog