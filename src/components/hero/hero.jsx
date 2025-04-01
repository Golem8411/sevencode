import styles from "../hero/hero.module.css"
import Image from "../../assets/img/IMAGE.png"
import Button from "../button/button";
import ButtonLi from "../buttonLi/buttonLi";

const Hero = () =>{
    return(
        <section className={styles.Hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <h2>Poderoso para Devs.
                    Rápido e fácil uso.</h2>
                    <p>Leve nossa IDE para sua equipe. Ninesevem oferece suporte a experiências para usuários avançados, novos consumidores e todos os demais.</p>
                    <div className={styles.btnHero}>
                        <Button>SAIBA MAIS</Button>
                        <ButtonLi>SOBRE NÓS</ButtonLi>
                    </div>
                </div>
                <div className={styles.imgHero}>
                    <img src={Image} alt="Globo" />
                </div>
            </div>
        </section>
    )
}

export default Hero;