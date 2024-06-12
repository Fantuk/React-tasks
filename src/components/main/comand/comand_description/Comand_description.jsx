import React from 'react'

import styles from './comand_desc.module.css'

import Avtar1 from '../../../images/avatar1.svg'
import Avtar2 from '../../../images/avatar2.svg'
import Avtar3 from '../../../images/avatar3.svg'

function Comand_description() {
  return (
    <div className={styles.comand_description}>
        <h1>Наша команда</h1>
        <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет 
          оценить значение экспериментов, поражающих по своей масштабности и грандиозности. 
          Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
        <div className={styles.comand_avatars}>
            <img src={Avtar1} alt="netu" />
            <img src={Avtar2} alt="netu" />
            <img src={Avtar3} alt="netu" />
        </div>
    </div>
  )
}

export default Comand_description