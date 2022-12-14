import React from 'react';
import Row from './row';
import styles from "./row.module.scss";

export default function Table(props) {  
          return (<>
    <div className={styles.wrapperq}>
    <div className ={styles.rows} >
      <div className={styles.title}>Cлово</div>
      <div className={styles.title}>Транскрипция</div>
      <div className={styles.title}>Перевод</div>
      <div className={styles.title}>Теги</div>
      <div className={styles.title}>Редактирование</div>
      </div>
      </div>
      {props.array.map((item)=>(
<Row key = {item.id} word = {item.english} translation = {item.russian} transcription={item.transcription} id={item.id} tags ={item.tags}/>
      ))}
<div className={styles.kostyl}>пробел</div>``
    </>
  )
}
