import React from 'react'

import Logo from './logo/Logo'
import Info from './info/Info'
import Messenger from './messenger/Messenger'

import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
      <div className={styles.block}>
        <Info />
        <Messenger />
      </div>
    </div>
  )
}

export default Footer