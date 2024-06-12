import React from 'react'

import Navigation from './navigation/Navigation'

import styles from './header.module.css'

import Star_1 from '../images/Star_1.png'
import Menu from '../images/menu.svg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Star_1} alt="netu" />
        <h1>Ink. House</h1>
      </div>
        <Navigation />
        <img className={styles.menu} src={Menu} alt="netu" />
    </div>
  )
}

export default Header