import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import dataContext from "./components/data/data";
import Spinner from "./components/spinner/spinner";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import Table from "./components/table/table";
import GetServices from "./api/GetServices";
import Error from "./components/error/error";
import './App.css';


function App() {
  
  const [data, setData] = useState([{func: postWords}]);

async function componentDidMount(){
  const words = await GetServices.getWord();
  setData(prevState =>[...prevState, words]);
}

    useEffect(() => {
componentDidMount()},[])


function postWords(english,transcription,russian,tags){
setData([...data[1].push({id: Math.random(),
  english: english,
  transcription: transcription,
  russian: russian,
  tags: tags,
  tags_json: '[new]'})]);
  console.log(data);
}


          if (data.length<2) {
            return <Spinner/>;
          } 
          return (<dataContext.Provider value={data}>
            <Router><div>
              <Header></Header>
                <Routes>
                  <Route path="/about" element={<Error/>} />
                  <Route path="*" element={<Error/>} />
                  <Route path="/" element={<Table array={data}></Table> } />
                  <Route path="/training" element={<Slider></Slider>} />
                </Routes>
                <Footer></Footer>
              </div>
            </Router></dataContext.Provider>
          );
        }

export default App;