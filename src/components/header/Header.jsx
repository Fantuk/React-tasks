import React from 'react'

import Navigation from './navigation/Navigation'
import Logo from './Logo'

import styles from './header.module.css'

import Menu from '../images/menu.svg'

function Header() {
  return (
    <header className={styles.header}>
        <Logo />
        <Navigation />
        <img className={styles.menu} src={Menu} alt="Menu" />
    </header>
  )
}

export default Header