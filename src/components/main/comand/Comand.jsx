import React from 'react'

import styles from './comand.module.css'

import ComandImg from '../../images/add_img.svg'
import Avtar1 from '../../images/avatar1.svg'
import Avtar2 from '../../images/avatar2.svg'
import Avtar3 from '../../images/avatar3.svg'

function Comand() {
  return (
    <div className={styles.comand}>
        <img className={styles.frame} src={ComandImg} alt="Frame" />
        <div className={styles.description}>
        <h1 className={styles.title}>Наша команда</h1>
        <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет 
            оценить значение экспериментов, поражающих по&nbsp;своей масштабности и&nbsp;грандиозности. 
            Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что консультация с&nbsp;широким активом.</p>
        <div className={styles.avatars}>
            <img className={styles.avatar} src={Avtar1} alt="Avatar1" />
            <img className={styles.avatar} src={Avtar2} alt="Avatar2" />
            <img className={styles.avatar} src={Avtar3} alt="Avatar3" />
        </div>
    </div>
    </div>
  )
}

export default Comand