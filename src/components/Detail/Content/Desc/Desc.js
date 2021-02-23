import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

function Desc({ children }) {
  return (
    <div
      className={classNames(['ion-margin-top', styles.wrapper])}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

export default Desc
