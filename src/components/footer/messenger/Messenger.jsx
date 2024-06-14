import React from 'react'

import styles from './messenger.module.css'

import Facebook from '../../images/facebook_icon.svg'
import Instagram from '../../images/instagram_icon.svg'
import Youtube from '../../images/youtube_icon.svg'

function Messenger() {
  return (
    <div className={styles.messenger}>
        <div className={styles.icons}>
            <img className={styles.icon} src={Facebook} alt="Facebook" />
            <img className={styles.icon} src={Instagram} alt="Instagram" />
            <img className={styles.icon} src={Youtube} alt="Youtube" />
        </div>
        <p className={styles.text}>Ink. House ®</p>
        <p className={styles.text}>All rights reserved</p>
    </div>
  )
}

export default Messenger