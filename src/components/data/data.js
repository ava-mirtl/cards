import GetServices from "../../api/GetServices";
//import PostServices from "../../api/PostServices";
import React, { useState, useEffect,  createContext } from "react";
const DataContext = createContext();

function DataContextProvider(props) {
    const[flag, setFlag] = useState(false)
    const [data, setData] = useState(false);

  async function componentDidMount(){
    const words = await GetServices.getWord();
    setData(words);
    }
  

      useEffect(() => {
  componentDidMount();
  },[])


  return (

    <DataContext.Provider
      value={{ data, flag, setFlag, setData }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
