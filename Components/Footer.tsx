import styles from '../app/page.module.scss'
import Image from 'next/image'
import { EmailIcon } from './EmailIcon'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <Image src="/tranqui-logo.svg" alt='Tranqui logo' width={138.14} height={50} className={styles.footer__logo} />
                <p>
                    Desarrollado con ❤️ por alumnos de la EEST N°5 en conjunto con la UNMDP
                </p>
            </section>
            <section>
                <Link
                    href={'/soporte'}
                >
                    <EmailIcon />
                    Contacto Técnico
                </Link>
            </section>
        </footer>
    )
}