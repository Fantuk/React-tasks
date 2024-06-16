import React, { useState } from 'react'

import Card from './card/Card'
import {France} from '../../../data/ConutriesCardsData.js'
import {Germany} from '../../../data/ConutriesCardsData.js'
import {England} from '../../../data/ConutriesCardsData.js'

import styles from './catalog.module.css'

function Catalog() {

  const [toggleState, setToggleState] = useState(1)

  const toggleTabs = (index) => {
    setToggleState(index);
  }

  const createCards = (array) => 
    array.map((el) => (
      <Card img={el.img} autor={el.autor} name={el.name} material={el.material} price={el.price}/>
    ))

  return (
    <div className={styles.catalog}>
      <div className={styles.reproduction}>
        <h1 className={styles.title}>Репродукции</h1>
        <div className={styles.tabs}>
            <a onClick={() => toggleTabs(1)} 
            className={toggleState === 1 ? `${styles.tab} ${styles.active}` : `${styles.tab}`} 
            href="##">Франция</a>

            <a onClick={() => toggleTabs(2)} 
            className={toggleState === 2 ? `${styles.tab} ${styles.active}` : `${styles.tab}`} 
            href="##">Германия</a>

            <a onClick={() => toggleTabs(3)} 
            className={toggleState === 3 ? `${styles.tab} ${styles.active}` : `${styles.tab}`} 
            href="##">Англия</a>
            
        </div>
      </div>
      <div className={styles.cards}>
        {toggleState === 1 ? createCards(France) : ''}
        {toggleState === 2 ? createCards(Germany) : ''}
        {toggleState === 3 ? createCards(England) : ''}
      </div>
    </div>
  )
}

export default Catalog