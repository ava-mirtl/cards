import styles from "./404.module.scss";
import errorpage from "../../assets/img/5203299.jpg"

function Error() {
    return (
        <div className={styles.wrapper} id="wrapper">
  <img className={styles.img} src={errorpage} alt="error"/>
      </div>
    );
  }
  
  export default Error;
  