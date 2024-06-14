import React from 'react'

import styles from './header.module.css'

import Star_1 from '../images/Star_1.png'

function Logo() {
  return (
    <div className={styles.logo}>
        <img src={Star_1} alt="Star_1" />
        <h1 className={styles.title}>Ink. House</h1>
    </div>
  )
}

export default Logo