import React from 'react'

import styles from './dropDown.module.css'

function DropDown({open, setOpen, children}) {

  return (
    <div className={styles.menu}>
        <h3 className={styles.title}>Menu <button onClick={() => {open ? setOpen(false) : setOpen(true)}}>{open ? "Close" : "Open"}</button></h3> 
        <div className={open ? `${styles.inner} ${styles.open}` : `${styles.inner}`}>
            <ul className={styles.elements}>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
                {children}
            </ul>
        </div>
    </div>
  )
}

export default DropDown