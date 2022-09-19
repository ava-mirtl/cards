import styles from "./card.module.scss";
import React, {useState} from "react";


function Card(props) {
    let [cardPosition, setPosition] = useState(true);

    const handleClick =()=>{
    setPosition(false)
    };
    if (cardPosition === true)
    return (
        <div key={props.id} className={styles.wrapper} id="wrapper">
  <h2 className={styles.word}>
    {props.english}
    </h2>
    <div className={styles.transcription}>транскрипция: {props.transcription}
    </div>
    <button onClick={()=>{handleClick()}} className={styles.btn}>Перевести</button>
      </div>
    )
    if (cardPosition === false) return <div key={props.id} className={styles.wrapper} id="wrapper">
    <h2 className={styles.word}>
      {props.english}
      </h2>
      <div>транскрипция: {props.transcription}
      </div>
      <div>перевод: <span className={styles.trans}>{props.russian}</span>
      </div>
        </div>
  }
  
  export default Card;
  