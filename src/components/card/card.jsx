import React, {useState, useEffect, useRef} from "react";
import Btn from "../btn/btn";
import styles from "./card.module.scss";


function Card(props) {
  const ref = useRef();
     let [cardPosition, setPosition] = useState(true);
     useEffect(() => {
     ref.current.focus()},[])
    const handleClick =()=>{
    setPosition(false);
    props.count();
  }
    if (cardPosition === true)
    return (
        <div key={props.id} className={styles.wrapper} id="wrapper">
  <h2 className={styles.word}>
    {props.english}
    </h2>
    <div className={styles.transcription}>транскрипция: {props.transcription}
    </div>
    <Btn click={()=>{handleClick()}} txt = "Перевести" ref={ref}></Btn>
      </div>
    )
    if (cardPosition === false)
    return <div key={props.id} className={styles.wrapper} id="wrapper">
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

// В компоненте карточки слова автоматически устанавливать фокус на 
// кнопке "посмотреть перевод" как только новая карточка отрендерилась на странице.
//  Подумайте, в каком методе жизненного цикла это сделать?