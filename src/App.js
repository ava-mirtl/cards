import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import Table from "./components/table/table";
import GetServices from "./api/GetServices";
import Error from "./components/error/error";
import './App.css';


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
            <Router><div>
              <Header></Header>
                <Routes>
                  <Route path="/about" element={<Error/>} />
                  <Route path="*" element={<Error/>} />
                  <Route path="/" element={<Table array={data}></Table> } />
                  <Route path="/training" element={<Slider cards={data}></Slider>} />
                </Routes>
                <Footer></Footer>
              </div>
            </Router>
          );
        }

export default App;