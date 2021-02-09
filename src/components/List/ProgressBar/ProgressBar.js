import React from 'react'
import { IonProgressBar } from '@ionic/react'
import { useContextSelector } from 'use-context-selector'
import ListContext from '../../../pages/List/context'
import styles from './style.module.css'

function ProgressBar() {
  const isFetching = useContextSelector(
    ListContext,
    (result) =>
      result.isFetchingNextPage || (result.isSuccess && result.isFetching)
  )

  return isFetching ? (
    <IonProgressBar type="indeterminate" className={styles.wrapper} />
  ) : null
}

export default ProgressBar
