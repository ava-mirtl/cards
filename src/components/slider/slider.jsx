import React, {useState, useContext} from "react";
import { DataContext } from '../data/data';
import Spinner from '../spinner/spinner';
import Card from '../card/card';
import styles from "./slider.module.scss";

 export default function Slider() {
  const { data} = useContext(DataContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const handleCount = () =>{
   setCounter(counter+1);
    }

const handleClick = (e) => {

  if (activeIndex === data.length-1){
    const prevCardIndex = activeIndex - 1;
    const nextCardIndex = activeIndex +1 - data.length;
    e.target.id==="left"? setActiveIndex(prevCardIndex):setActiveIndex(nextCardIndex)

  }
  else if(activeIndex === 0){ 
    const prevCardIndex = activeIndex + data.length - 1;
    const nextCardIndex = activeIndex + 1;
    e.target.id==="left"? setActiveIndex(prevCardIndex):setActiveIndex(nextCardIndex)

  }
    else {
      const prevCardIndex = activeIndex - 1;
      const nextCardIndex = activeIndex + 1;
      e.target.id==="left"? setActiveIndex(prevCardIndex):setActiveIndex(nextCardIndex)
    };

    };
        if(!data){
      return <Spinner/>
}
        return <div className={styles.container}>
          <div className={styles.counter}>Вы изучили {counter} слов за тренировку
          </div>
          <div className={styles.main}><button className={styles.btn} 
          id="left" onClick={handleClick}>Предыдущее
          </button> <Card key={data[activeIndex].id}
          english={data[activeIndex].english} 
          russian={data[activeIndex].russian} 
          transcription={data[activeIndex].transcription} count={handleCount}>
          </Card>
<button className={styles.btn}  id="right" onClick={handleClick}>Следующее
          </button></div></div>;}