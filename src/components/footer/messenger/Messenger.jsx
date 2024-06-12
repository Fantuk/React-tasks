import React from 'react'

import styles from './messenger.module.css'

import Facebook from '../../images/facebook_icon.svg'
import Instagram from '../../images/instagram_icon.svg'
import Youtube from '../../images/youtube_icon.svg'

function Messenger() {
  return (
    <div className={styles.messenger}>
        <div className={styles.messenger_icons}>
            <img src={Facebook} alt="netu" />
            <img src={Instagram} alt="netu" />
            <img src={Youtube} alt="netu" />
        </div>
        <p>Ink. House ®</p>
        <p>All rights reserved</p>
    </div>
  )
}

export default Messenger