import React, { useContext, useState } from 'react';
import Row from './row';
import Spinner from '../spinner/spinner';
import dataContext from '../data/data';
import PostServices from '../../api/PostServices';
import styles from "./row.module.scss";

export default function Table() {  
      const data = useContext(dataContext);
      console.log(data);

      const [formIsValid, setFormIsValid ]= useState(true);
      const [isEditMode, changeEditMode] = useState(false);
      const [errorMsg, setErrorMsg ] = useState("");
      
      function onSave() {
      let arr = document.querySelectorAll(`.${styles.input}`);
console.log(arr);
arr.forEach(function(item) {
      if(item.value===""){
            setErrorMsg("поле не может быть пустым");
            setFormIsValid(false);
            }
            
    })
    if(!errorMsg){
      console.log(data);
      PostServices.postWord(arr[0], arr[1], arr[2], arr[3]);
     data[0].func(arr[0], arr[1], arr[2], arr[3]);
      arr.forEach(function(item) {item.value=""});
    }}




      function onCancel() {
       changeEditMode(false);
       let arr = document.querySelectorAll(`.${styles.input}`);
       for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            element.value = '';
            
       }
      }


      function onWrite(e) { 
            changeEditMode(true);
            if(e.currentTarget!==""){
                  setErrorMsg("");
                  setFormIsValid(true);
            }
      }
      


      if(!data){
            return <Spinner/>
      }
      else if(!formIsValid){
            return (<>
                  <div className={styles.wrapperq}>
                  <div className ={styles.rows} >
                    <div className={styles.title}>Cлово</div>
                    <div className={styles.title}>Транскрипция</div>
                    <div className={styles.title}>Перевод</div>
                    <div className={styles.title}>Теги</div>
                    <div className={styles.title}>Редактирование</div>
                    </div>
                    </div>
                    <div className={styles.wrapper}>
                  <div className ={styles.row} >
                    <input onChange={onWrite} defaultValue="" className={styles.input}/>
                    <input onChange={onWrite} defaultValue="" className={styles.input}/>
                    <input onChange={onWrite} defaultValue="" className={styles.input}/>
                    <input onChange={onWrite} defaultValue="" className={styles.input}/>
                    <div className={styles.buttons}>
                    <div className={styles.error}>{errorMsg}</div>
                    </div>
                    </div></div>
              
                    {data[1].map((item)=>(
              <Row key = {item.id} word = {item.english} translation = {item.russian} transcription={item.transcription} id={item.id} tags ={item.tags}/>
                    ))}
              <div className={styles.kostyl}>пробел</div>``
                  </>
                ) 
      }
else if(isEditMode&formIsValid){
      return (<>
            <div className={styles.wrapperq}>
            <div className ={styles.rows} >
              <div className={styles.title}>Cлово</div>
              <div className={styles.title}>Транскрипция</div>
              <div className={styles.title}>Перевод</div>
              <div className={styles.title}>Теги</div>
              <div className={styles.title}>Редактирование</div>
              </div>
              </div>
              <div className={styles.wrapper}>
            <div className ={styles.row} >
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <div className={styles.buttons}>
              <button onClick={onSave} className={styles.btn}>Save</button>
              <button onClick={onCancel} className={styles.btn}>Cancel</button>
              </div>
              </div></div>
              {data[1].map((item)=>(
        <Row key = {item.id} word = {item.english} translation = {item.russian} transcription={item.transcription} id={item.id} tags ={item.tags}/>
              ))}
        <div className={styles.kostyl}>пробел</div>``
            </>  ) 
}
else{
      return (<>
            <div className={styles.wrapperq}>
            <div className ={styles.rows} >
              <div className={styles.title}>Cлово</div>
              <div className={styles.title}>Транскрипция</div>
              <div className={styles.title}>Перевод</div>
              <div className={styles.title}>Теги</div>
              <div className={styles.title}>Редактирование</div>
              </div>
              </div>
            <div className={styles.wrapper}>
            <div className ={styles.row}>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <input onChange={onWrite} defaultValue="" className={styles.input}/>
              <div className={styles.buttons}>
              </div>
              </div></div>
        
              {data[1].map((item)=>(
        <Row key = {item.id} word = {item.english} translation = {item.russian} transcription={item.transcription} id={item.id} tags ={item.tags}/>
              ))}
        <div className={styles.kostyl}>пробел</div>``
            </>)  
}}
