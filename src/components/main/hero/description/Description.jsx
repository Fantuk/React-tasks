import React from 'react'

import styles from './description.module.css'

function Description() {
  return (
    <div className={styles.description}>
        <div className={styles.description_text}>
            <h1>Реплики картин<br /> от <span>Ink. House</span></h1>
            <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. 
              Редкие произведения, доступные цены.</p>
        </div>
        <button>Продукция</button>
    </div>
  )
}

export default Description