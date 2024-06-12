import React from 'react'

import Promo_description from './promo_description/Promo_description'

import styles from './promo.module.css'

function Promo() {
  return (
    <div className={styles.promo}>
      <Promo_description />
    </div>
  )
}

export default Promo