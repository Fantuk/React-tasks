import React from 'react'

import styles from './button.module.css'

function Button(props) {
  return (
    <button className={styles.button}>{props.value}</button>
  )
}

export default Button