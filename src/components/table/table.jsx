import React from 'react';
import styles from "./row.module.scss";
import Row from './row';

export default function Table(props) {  
          return (<>
    <div className={styles.wrapperq}>
    <div className ={styles.rows} >
      <div className={styles.title}>Cлово</div>
      <div className={styles.title}>Перевод</div>
      <div className={styles.title}>Транскрипция</div>
      <div className={styles.title}>Теги</div>
      <div className={styles.title}>Редактирование</div>
      </div>
      </div>
      {props.array.map((item)=>(
<Row key = {item.id} word = {item.english} translation = {item.russian} transcription={item.transcription} tags ={item.tags} />
      ))}
<div className={styles.kostyl}>пробел</div>
    </>
  )
}
