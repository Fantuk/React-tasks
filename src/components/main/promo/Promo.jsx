import React from 'react'

import Button from '../Button'

import styles from './promo.module.css'

import Star_2 from '../../images/Star_2.png'

function Promo() {
  return (
    <div className={styles.promo}>
      <div className={styles.description}>
        <div className={styles.text}>
            <div className={styles.promo_title}>
                <img src={Star_2} alt="Star_2" />
                <h1 className={styles.title_text}>Новая коллекция французских авторов</h1>
            </div>
            <p>
            Сложно сказать, почему акционеры крупнейших компаний призывают нас к&nbsp;новым свершениям, 
            которые, в&nbsp;свою очередь, должны быть заблокированы в&nbsp;рамках своих собственных 
            рациональных ограничений. 
            <br />
            <br />
            Принимая во&nbsp;внимание показатели успешности, 
            граница обучения кадров предопределяет высокую востребованность 
            направлений прогрессивного развития.
            </p>
        </div>
        <Button value="Ознакомиться"/>
      </div>
    </div>
  )
}

export default Promo