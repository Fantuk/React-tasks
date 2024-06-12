import React from 'react'

import styles from './promo_desc.module.css'

import Star_2 from '../../../images/Star_2.png'

function Promo_description() {
  return (
    <div className={styles.promo}>
        <div className={styles.promo_description}>
            <div className={styles.promo_title}>
                <img src={Star_2} alt="netu" />
                <h1>Новая коллекция французских авторов</h1>
            </div>
            <p>
              Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, 
              которые, в свою очередь, должны быть заблокированы в рамках своих собственных 
              рациональных ограничений. 
              <br />
              <br />
              Принимая во внимание показатели успешности, 
              граница обучения кадров предопределяет высокую востребованность 
              направлений прогрессивного развития.
            </p>
        </div>
        <button>Ознакомиться</button>
    </div>
  )
}

export default Promo_description