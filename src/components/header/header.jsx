import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Icon from "../../assets/img/icons8-translate.png";
import styles from "./header.module.scss";


function Header() {
    return (
        <div className={styles.wrapper} id="wrapper">
  <div className={styles.wrapper2}>
    <div className={styles.txt}><Link to="/"><img src={Icon} className={styles.img} alt="icon"/></Link><span>Word Intelligence</span></div>  
    <div className={styles.link}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/training">Game</Link></div>
    </div><button className={styles.btn}>Log In</button></div>
    );
  }
  
  export default Header;
  