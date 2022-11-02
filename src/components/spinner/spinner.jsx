import React from 'react';
import styles from "./spinner.module.scss"

export default function Spinner() {
  return (<div className={styles.body}>
    <div className={styles.loader}>
  <div className={styles.loader_cogs}>
    <div className={styles.COGfirst}>
      <div className={styles.firstPart}></div>
      <div className={styles.firstPart}></div>
      <div className={styles.firstPart}></div>
      <div className={styles.firstHole}></div>
    </div>
    <div className={styles.COGsecond}>
      <div className={styles.secondPart}></div>
      <div className={styles.secondPart}></div>
      <div className={styles.secondPart}></div>
      <div className={styles.secondHole}></div>
    </div>
    <div className={styles.COGthird}>
      <div className={styles.thirdPart}></div>
      <div className={styles.thirdPart}></div>
      <div className={styles.thirdPart}></div>
      <div className={styles.thirdHole}></div>
    </div>
    <p>loading...</p>
  </div>
</div></div>
  )
}
