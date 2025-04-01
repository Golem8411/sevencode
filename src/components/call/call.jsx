import Button from "../button/button";
import styles from "../call/call.module.css"
import Mac from "../../assets/img/mac.png"
const Call = () => {
    return(
        <section className={styles.Call}>
            <div className={styles.callWrapper}>
                <div className={styles.callImg}>
                    <img src={Mac} alt="Mac" />
                </div>
                <div className={styles.callContent}>
                    <p>É hora de se juntar aos milhares de criadores, artistas e desenvolvedores que usam Nineseven.</p>
                    <div className={styles.btnCall}>
                        <Button>SAIBA MAIS</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Call;