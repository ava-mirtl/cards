import React, {useState, useEffect} from "react";
import './App.css';
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import Table from "./components/table/table";
import GetServices from "./api/GetServices";

function App() {
  const [data, setData] = useState(false);
  

async function getWords(){
  const words = await GetServices.getWord()
  setData(words)


}
    useEffect(() => {
getWords()},[])

          if (!data) {
            return <div>Загрузка...</div>;
          } 
       return (
    <div>
      <Table array={data}></Table> 
      <Slider cards={data}></Slider>
      <Footer></Footer>
    </div>
  );}

export default App;