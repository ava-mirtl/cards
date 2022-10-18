import Card from '../card/card';
import React, {useState} from "react";
import styles from "./slider.module.scss";

 export default function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

const handleClick = (e) => {

  if (activeIndex === props.cards.length-1){
    const prevCardIndex = activeIndex - 1;
    const nextCardIndex = activeIndex +1 - props.cards.length;
    e.target.id==="left"? setActiveIndex(prevCardIndex):setActiveIndex(nextCardIndex)

  }
  else if(activeIndex === 0){ 
    const prevCardIndex = activeIndex + props.cards.length - 1;
    const nextCardIndex = activeIndex + 1;
    e.target.id==="left"? setActiveIndex(prevCardIndex):setActiveIndex(nextCardIndex)

  }
    else {
      const prevCardIndex = activeIndex - 1;
      const nextCardIndex = activeIndex + 1;
      e.target.id==="left"? setActiveIndex(prevCardIndex):setActiveIndex(nextCardIndex)
    };

    }
        return <div className={styles.container}>
          <div className={styles.main}><button className={styles.btn} id="left" onClick={handleClick}>Предыдущее
          </button> <Card key={props.cards[activeIndex].id} english={props.cards[activeIndex].english} russian={props.cards[activeIndex].russian} transcription={props.cards[activeIndex].transcription}></Card>
<button className={styles.btn}  id="right" onClick={handleClick}>Следующее
          </button></div></div>;}