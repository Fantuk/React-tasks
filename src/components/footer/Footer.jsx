import React from 'react'

import Number from './number/number'
import Info from './info/Info'
import Messenger from './messenger/Messenger'

import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Number />
      <div className={styles.adaptive_block}>
        <Info />
        <Messenger />
      </div>
    </footer>
  )
}

export default Footer