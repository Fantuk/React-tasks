import React from 'react'

import Button from '../../main/Button'

import styles from './hero.module.css'
import style from '../../../app.module.css'

import Bird from '../../images/bird.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <img className={styles.bird} src={Bird} alt="Bird" />
        <div className={styles.description}>
          <div className={styles.text}>
              <h1 className={styles.title}>Реплики картин<br /> от&nbsp;<span className={styles.colored_text}>Ink. House</span></h1>
              <p className={style.description_text}>Высокое качество отрисовки на&nbsp;плотной бумаге или льняном холсте. 
              Редкие произведения, доступные цены.</p>
          </div>
          <Button value="Продукция"/>
        </div>
    </div>
  )
}

export default Hero