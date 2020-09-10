import React from 'react'
import { IonProgressBar } from '@ionic/react'
import styles from './style.module.css'

function ProgressBar({ isFetching }) {
  return isFetching ? (
    <IonProgressBar type="indeterminate" className={styles.wrapper} />
  ) : null
}

export default ProgressBar
