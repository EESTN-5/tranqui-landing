import styles from '../app/page.module.scss'
import Image from 'next/image'
import { EmailIcon } from './Navbar/EmailIcon'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <Image src="/tranqui-logo.svg" alt='Tranqui logo' width={138.14} height={50} className={styles.footer__logo} />
                <p>
                Tranqui es un dispositivo creado por el Equipo de Extensión de  promo-prevención del suicidio adolescentes y jóvenes de la Facultad de Psicología de la UNMDP.
                <br />
                Desarrollo de la aplicación  realizado por alumnos de la EEST N°5.
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