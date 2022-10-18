import styles from "./header.module.scss";
import Icon from "../../assets/img/icons8-translate.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className={styles.wrapper} id="wrapper">
  <div className={styles.wrapper2}>
    <div className={styles.txt}><Link to="/"><img className={styles.img} src={Icon}/></Link><span>Word Intelligence</span></div>  <div img className={styles.link}><Link to="/">Home</Link>
                   
                   <Link to="/about">About</Link>
                 
                   <Link to="/training">Game</Link></div></div><button className={styles.btn}>Log In</button>
                    
      </div>

    );
  }
  
  export default Header;
  