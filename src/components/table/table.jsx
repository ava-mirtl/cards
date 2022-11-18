import React, { useContext, useState} from 'react';
import Row from './row';
import Spinner from '../spinner/spinner';
import { DataContext } from '../data/data';
import PostServices from '../../api/PostServices';
import styles from "./row.module.scss";



export default function Table() {  

      const { data, setFlag, flag, setData} =
      useContext(DataContext);
      const [formIsValid, setFormIsValid ]= useState(true);
      const [isEditMode, changeEditMode] = useState(false);
      const [errorMsg, setErrorMsg ] = useState("");


      function onSave() {


let arr = document.querySelectorAll(`.${styles.input}`);
arr.forEach((item)=> {
      if(item.value===""){
            setErrorMsg("поле не может быть пустым");
            setFormIsValid(false);
            }})
    if(!errorMsg){
      setFlag(!flag)
      PostServices.postWord({
            id: +(data[data.length-1].id)+ 1,
            english: arr[0].value,
            transcription:  arr[1].value,
            russian: arr[2].value,
            tags: arr[3].value,
            tags_json: '[new]'});
      
      setData([...data, {
            id: +(data[data.length-1].id)+ 1,
            english: arr[0].value,
            transcription:  arr[1].value,
            russian: arr[2].value,
            tags: arr[3].value,
            tags_json: '[new]'} ]);

      arr.forEach(function(item) {item.value=""});
        
    }            
}




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
      


      if (!data) {
            return <Spinner/>;
          } else {
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
                    {!formIsValid&&<div className={styles.buttons}>
                    <div className={styles.error}>{errorMsg}</div>
                    </div>
                    }
                    {isEditMode&formIsValid? <div className={styles.buttons}>
              <button onClick={onSave} className={styles.btn}>Save</button>
              <button onClick={onCancel} className={styles.btn}>Cancel</button>
              </div>:<div className={styles.buttons}>
              </div>}
                    </div></div>
              
      {data.map((item,i)=>(
            <Row key = {i} word = {item.english} translation = {item.russian} transcription={item.transcription} id={item.id} tags ={item.tags}/>
                  ))
}

              <div className={styles.kostyl}>пробел</div>``
                  </>
                ) }
        
}
