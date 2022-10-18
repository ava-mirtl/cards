import React from 'react';
import styles from './btn.module.scss';

export default function Btn(props) {
  return (
    <button className={styles.btn}  >
      {props.txt}
    </button>
  )
}
