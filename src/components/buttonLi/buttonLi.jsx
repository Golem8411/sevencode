import styles from "../buttonLi/buttonLi.module.css"

const ButtonLi = (props,link) =>{
    return(
        <div className={styles.WrapperButtonLi}>
            <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    );
}

export default ButtonLi;