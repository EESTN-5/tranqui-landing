import { DownloadButton, SendEmailButton } from '@/Components/Button'
import styles from '../page.module.scss'

export default function Soporte() {
    return (
        <main className={styles.main}>
            <section className={styles.mainLeft}>
            <img src="/tranqui-logo.svg" alt='Tranqui logo'/>
            <h1 className={styles.main__title}>Contactanos</h1>
            <p className={styles.main__text}>
                Por consultas que le quieras hacer al equipo de desarrolladores de la app, podes enviarnos un correo a hola@tdm.ar
            </p>
            <SendEmailButton />
            </section>
            <section className={styles.mainRight}>
            <img src="/tranqui-img.svg" alt="Tranqui image" />
            </section>
        </main>
    )
}
