import styles from "../devreg/devreg.module.css";
import Globe from "../../assets/img/globo.png";
import Button from "../button/button";

const Devreg = () => {
  return (
    <section className={styles.Devreg}>
      <div className={styles.devregFundo}>
        <div className={styles.devregWrapper}>
          <div className={styles.devregContainer}>
            <div className={styles.devregContent}>
              <h2>Sistemas feito de Devs para Devs.</h2>
              <p>
                Conheça nossos novos recursos, novos commits, novas propostas e
                muito mais.
              </p>
              <div className={styles.btnDevreg}>
                <Button>REGISTRAR</Button>
              </div>
            </div>
            <div className={styles.devregImg}>
              <img src={Globe} alt="Globo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devreg;
