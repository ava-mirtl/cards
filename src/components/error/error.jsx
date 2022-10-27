import errorpage from "../../assets/img/5203299.jpg"
import styles from "./404.module.scss";

function Error() {
    return (
        <div className={styles.wrapper} id="wrapper">
  <img className={styles.img} src={errorpage} alt="error"/>
      </div>
    );
  }
  
  export default Error;
  