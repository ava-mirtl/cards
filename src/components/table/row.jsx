import { useState } from "react";
import styles from "./row.module.scss";

function Row({ word, translation, transcription, tags }) {
  const [isEditMode, changeEditMode] = useState(false);
  const isSelected = { ...word };
  const [save, setSaved] = useState({ word, translation });

  function onClick() {
    changeEditMode(true);
  }
  function onCancel() {
    changeEditMode(false);
  }
  function onChangeWord(event) {
    setSaved({
      word: event.target.value,
      translation: save.translation,
    });
  }
  function onChangeTranslation(event) {
    setSaved({
      word: save.word,
      translation: event.target.value,
    });
  }
  const onSave = () => {
    changeEditMode(false);
  };

  if (!isEditMode) {
    return (        <div className ={styles.wrapper} >
        <div className ={styles.row} >
          <div className={styles.word}>{save.word}</div>
          <div className={styles.transcription}>{transcription}</div>
          <div className={styles.translation}>{save.translation}</div>
          <div className={styles.tags}>{tags}</div>

          <div className={styles.buttons}>
            <button onClick={onClick} className={styles.btn}>edit</button>
            <button className={styles.btn}>delete</button>
          </div>
      </div>
      </div>
    );
  } else {
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
    );
  }
}

export default Row;