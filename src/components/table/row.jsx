import { useState } from "react";
import styles from "./row.module.scss";

function Row({ word, translation, transcription, tags, id }) {
  const [isEditMode, changeEditMode] = useState(false);
  const [save, setSaved] = useState({ word, translation });
  const [formIsValid, setFormIsValid ]= useState(true);
  const [errorMsg, setErrorMsg ] = useState("");
  function onClick() {
    changeEditMode(true);
  }
  function onCancel() {
    changeEditMode(false);
    setErrorMsg("");
    setSaved({
      word: word,
      translation: translation
  })}


  function onChangeWord(event) {
    if(event.target.value === ""){
    setErrorMsg("поле не может быть пустым");
    setFormIsValid(false);
    event.currentTarget.classList.add(styles.invalid);}
    else{
      setErrorMsg("");
      setFormIsValid(true);
      event.currentTarget.classList.remove(styles.invalid);
      setSaved({
      word: event.target.value,
      translation: save.translation,
    });}
  }
  function onChangeTranslation(event) {
    if(event.target.value === ""){
      setErrorMsg("поле не может быть пустым");
      setFormIsValid(false);
      event.currentTarget.classList.add(styles.invalid);}
      else{
        setErrorMsg("");
    setFormIsValid(true);
    event.currentTarget.classList.remove(styles.invalid);
    setSaved({
      word: save.word,
      translation: event.target.value,
    });}
  }
  const onSave = () => { 
      changeEditMode(false);
      console.log(save.word, save.translation, transcription, tags);
  };
  const onDelete = (e) => { 

  }

  if (!isEditMode) {
    return (        <div id={id} className ={styles.wrapper} >
        <div className ={styles.row} >
          <div className={styles.word}>{save.word}</div>
          <div className={styles.transcription}>{transcription}</div>
          <div className={styles.translation}>{save.translation}</div>
          <div className={styles.tags}>{tags}</div>
          <div className={styles.buttons}>
            <button onClick={onClick} className={styles.btn}>edit</button>
            <button onClick={onDelete} className={styles.btn}>delete</button>
          </div>
      </div>
      </div>
    );
  } 

  else {
  if(formIsValid){
    return (<div className ={styles.wrapper} >
        <div className={styles.row}>
            <input className={styles.input} value={save.word} onChange={onChangeWord} />
          <div className={styles.transcription}>{transcription} </div>
            <input className={styles.input}
              onChange={onChangeTranslation}
              value={save.translation}
            ></input>
          <div className={styles.tags}>{tags}</div>
          <div className={styles.buttons}>
            <button className={styles.btn} onClick={onSave}>
              Save
            </button>
            <button onClick={onCancel} className={styles.btn}>
              cancel
            </button>
          </div>
      </div>
      </div>
    );}
    else{ 
      return (<div className ={styles.wrapper} >
        <div className={styles.row}>
            <input className={styles.input} value={save.word} onChange={onChangeWord} />
          <div className={styles.transcription}>{transcription} </div>
            <input className={styles.input}
              onChange={onChangeTranslation}
              value={save.translation}
            ></input>
          <div className={styles.tags}>{tags}</div>
          <div className={styles.buttons}>
            <button disabled className={styles.btn} onClick={onSave}>
              Save
            </button>
            <button onClick={onCancel} className={styles.btn}>
              cancel
            </button>
            <div className={styles.error}>{errorMsg}</div>
          </div>
      </div>
      </div>
    );
    }
  }
}

export default Row;