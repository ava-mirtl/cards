import React from 'react';
import styles from './btn.module.scss';

const Btn = React.forwardRef((props, ref) => (

    <button className={styles.btn} ref={ref}  onClick = {props.click} >
      {props.txt}
    </button>
  ))
  export default Btn