import React, {useState, useEffect} from "react";
import './App.css';
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import Error from "./components/error/error";
import Table from "./components/table/table";


function App() {
  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCard] = useState([]);


    useEffect(() => {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then(res => res.json())
        .then((result) => {
          console.log(result);
            setIsLoaded(true);
              setCard([...result])},
          (error) => {
            setIsLoaded(true);
            setError(error);
          })}, []);

          if (error) {
            return <><div>Ошибка: {error.message}</div>
            <Error></Error> </>;
          } else if (!isLoaded) {
            return <div>Загрузка...</div>;
          } else { return (
    <div>
    {/* <Header></Header>*/
      <Table array={cards}></Table> }
      <Slider cards={cards}></Slider>
      <Footer></Footer>
    </div>
  );
}}

export default App;