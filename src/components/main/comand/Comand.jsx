import React from 'react'

import Comand_description from './comand_description/Comand_description'

import styles from './comand.module.css'

import ComandImg from '../../images/add_img.svg'

function Comand() {
  return (
    <div className={styles.comand}>
        <img src={ComandImg} alt="netu" />
        <Comand_description />
    </div>
  )
}

export default Comand