import { useState } from "react";
import styles from "../header/header.module.css";
import LogoHeader from "../../assets/img/logo-menu.svg";
import MenuMobile from "../../assets/img/menu-togle.svg";
import MenuMCloser from "../../assets/img/menu-closer.svg";
import Button from "../button/button";
import ButtonLi from "../buttonLi/buttonLi";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.headerWrapper}>
        <div>
          <button>
            <img src={LogoHeader} alt="logo Menu" />
          </button>
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? MenuMCloser : MenuMobile}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="">Inicio</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Sobre</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Linguagem</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Documentação</a>
            </li>
            <li className={styles.navLiLogin}>
              <ButtonLi>Login</ButtonLi>
            </li>
            <li className={styles.navLiReg}>
              <Button>Registrar</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
