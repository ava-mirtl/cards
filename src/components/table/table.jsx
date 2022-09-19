import React, {useEffect} from 'react';
import styles from "./table.module.scss";
import Error from '../error/error';

export default function Table() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch("../data/data.json")
          .then((result) => {
              setIsLoaded(true);
              setArray(result);
            (error) => {
              setIsLoaded(true);
              setError(error);
            })}
    , []);

    if (error) {
        return <><div>Ошибка: {error.message}</div>
        <Error></Error></>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
          return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Cлово</div><div className={styles.title}>Перевод</div><div className={styles.title}>Транскрипция</div><div className={styles.title}>Теги</div>
      {array.map(item=><div>{item.english}</div><div>{item.translation}</div><div>{item.transcription}</div><div>{item.tag}</div>)}
    </div>
  )
}
