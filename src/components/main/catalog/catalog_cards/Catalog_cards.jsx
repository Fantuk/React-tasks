import React from 'react'

import Card from './card/Card'

import styles from './catalog_cards.module.css'

import img_1 from '../../../images/card_img1.jpg'
import img_2 from '../../../images/card_img2.jpg'
import img_3 from '../../../images/card_img3.jpg'
import img_4 from '../../../images/card_img4.jpg'
import img_5 from '../../../images/card_img5.jpg'
import img_6 from '../../../images/card_img6.jpg'

function Catalog_cards() {
  return (
    <div className={styles.catalog_cards}>
        <Card img={img_1} autor="Марсель Руссо" name="Охота Амура" material="Холст, масло (50х80)"
        price="14 500 руб" />
        <Card img={img_2} autor="Анри Селин" name="Дама с собачкой" material="Акрил, бумага (50х80)"
        price="16 500 руб" />
        <Card img={img_3} autor="Франсуа Дюпон" name="Процедура" material="Цветная литография (40х60)"
        price="20 000 руб" />
        <Card img={img_4} autor="Луи Детуш" name="Роза" material="Бумага, акрил (50х80) " 
        price="12 000 руб" />
        <Card img={img_5} autor="Франсуа Дюпон" name="Птичья трапеза" material="Цветная литография (40х60)" 
        price="22 500 руб" />
        <Card img={img_6} autor="Пьер Моранж" name="Пейзаж с рыбой" material="Цветная литография (40х60)" 
        price="20 000 руб" />
    </div>
  )
}

export default Catalog_cards