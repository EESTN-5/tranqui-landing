import { DownloadButton, SendEmailButton } from '@/Components/Button'
import styles from '../page.module.scss'
import Link from 'next/link'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'

export default function Soporte() {
    return (
        <main className={styles.support}>
            <Image src="/tranqui-logo.svg" alt='Tranqui logo' width={138.14} height={50} />
            <h1 className={styles.main__title}>Contactanos</h1>
            <p className={styles.main__text}>
                Por consultas que le quieras hacer al equipo de desarrolladores de la app, podes enviarnos un correo a hola@tdm.ar
            </p>
            <SendEmailButton />
            <Link
                href="/"
            >
                <IconArrowLeft /> Volver al inicio
            </Link>
        </main>
    )
}
