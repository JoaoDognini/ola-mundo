import styles from './BotaoPrincipal.module.css'

export default function BotaoPrincipal({ children, tamanho, navegar }) {
    return (
        <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`} onClick={navegar}>{children}</button>
    )
}
