import React, {useState} from 'react';
import styles from "./table.module.scss";

export default function Table(props) {
  const [isReadonly, setIsReadonly] = useState(true);

const handleClick = (e) => {
const arr = e.target.parentElement.parentElement.childNodes;
for (let i = 0; i < arr.length; ++i) {
  setIsReadonly(prevState => !prevState);
}
}

          return (<div>
    <div className={styles.wrapper}>
      <div className={styles.title}>Cлово</div>
      <div className={styles.title}>Перевод</div>
      <div className={styles.title}>Транскрипция</div>
      <div className={styles.title}>Теги</div>
      <div className={styles.title}>Редактирование</div>
      </div>
      
      {props.array.map((item)=>(<div key = {Math.floor(Math.random()*100000)} className={styles.wrapper}>
      <input type="text" defaultValue={item.english} readOnly={isReadonly}/>
      <input type="text" defaultValue={item.russian} readOnly={isReadonly}/>
      <input type="text" defaultValue={item.transcription} readOnly={isReadonly}/>
      <input type="text" defaultValue={item.tags} readOnly={isReadonly}/>
      <div><button>del</button><button onClick={handleClick}>create</button></div></div>))}
    </div>
  )
}
