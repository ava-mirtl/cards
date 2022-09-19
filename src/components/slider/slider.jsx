import Card from '../card/card';
import React, {useState, useEffect} from "react";
import styles from "./slider.module.scss";
import Error from "../error/error";


 export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCard] = useState([]);


    useEffect(() => {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then(res => res.json())
        .then((result) => {
          console.log(result);
            setIsLoaded(true);
              setCard([...result]);
          }
          ,
          (error) => {
            setIsLoaded(true);
            setError(error);
          })}
  , []);

  

const handleClick = (e) => {
    const prevCardIndex = activeIndex - 1 || cards.length - 1;
    const nextCardIndex = activeIndex + 1 || cards.length + 1;
    if (e.target.id==="left"){
        setActiveIndex(prevCardIndex)
    } if (e.target.id==="right"){
        setActiveIndex(nextCardIndex)
    }
    else{
        return
    }
};
    if (error) {
      return <><div>Ошибка: {error.message}</div>
      <Error></Error> </>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {console.log(activeIndex);
        return <div className={styles.container}>
          <div className={styles.main}><button id="left" onClick={handleClick}>Предыдущее
          </button> <Card key={cards[activeIndex].id} english={cards[activeIndex].english} russian={cards[activeIndex].russian} transcription={cards[activeIndex].transcription}></Card>
<button id="right" onClick={handleClick}>Следующее
          </button></div></div>;}}