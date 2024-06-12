import React from 'react'

import Description from './description/Description'

import styles from './hero.module.css'

import Bird from '../../images/bird.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <img src={Bird} alt="netu" />
        <Description />
    </div>
  )
}

export default Hero