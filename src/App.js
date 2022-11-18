import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DataContextProvider } from "./components/data/data";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import Table from "./components/table/table";
import Error from "./components/error/error";
import './App.css';


function App() {          
          return (<DataContextProvider>
            <Router><div>
              <Header></Header>
                <Routes>
                  <Route path="/about" element={<Error/>} />
                  <Route path="*" element={<Error/>} />
                  <Route path="/" element={<Table></Table> } />
                  <Route path="/training" element={<Slider></Slider>} />
                </Routes>
                <Footer></Footer>
              </div>
            </Router></DataContextProvider>
          );
        }

export default App;