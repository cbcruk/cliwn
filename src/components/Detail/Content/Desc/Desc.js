import React from 'react'
import styles from './style.module.css'

function Desc({ children }) {
  return <p className={styles.wrapper}>{children}</p>
}

export default Desc
