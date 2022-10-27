import mailIcon from "../../assets/img/stay-connected.png";
import phoneIcon from "../../assets/img/telefone.png"
import styles from "./footer.module.scss";


function Footer() {
    return (
        <div className={styles.wrapper} id="wrapper">
  <div className={styles.wrapper2}>
    <div className={styles.txt}>Свяжитесь с нами:
  <a className={styles.link} href="mailto:kkkkkkk@kkk.kk"><img className={styles.icon1} src={mailIcon} alt="mail"/>kkkkkk@kkk.kk</a>
  <a className={styles.link} href="callto:+79996669666"><img className={styles.icon2} src={phoneIcon} alt="phone"/>+79996669666</a>
  </div></div>
      </div>

    );
  }
  
  export default Footer;
  