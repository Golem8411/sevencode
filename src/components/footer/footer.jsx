import styles from "../footer/footer.module.css";
import LogoF from "../../assets/img/logo-footer.svg";
import Button from "../button/button"

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <img src={LogoF} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            aliquet justo.
          </p>
        </div>
        <div className={styles.footerReg}>
            <p>Inscreva-se para saber de novidades do mundo uno. E receba atualizações direto no seu email!</p>
            <form action="post">
                <div className={styles.footerInput}>
                    <input type="text" placeholder="Insira seu email" />
                    <div className={styles.footerInputBtn}>
                        <Button>CADASTRE-SE</Button>
                    </div>
                </div>
            </form>
        </div>
      </div>
      <div className={styles.footerLegal}>
        <div className={styles.footerLegalA}>
          <span>© 2023 Ninesevem. Todos os direitos reservados.</span>
        </div>
        <div className={styles.footerLegalB}>
          <a className={styles.footerA}href="">Política de Privacidade</a>
          <a href="">Termo de Uso</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
