'use client';
import { SendEmailButton } from '@/Components/Button'
import styles from '../page.module.scss'
import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'
import Image from 'next/image'
import { Navbar } from '@/Components/Navbar/Navbar'
import { ANIMATIONS } from '@/constants/anim'
import { motion } from 'framer-motion'
import { DeleteAccountForm } from '@/Components/DeleteAccountForm';

export default function Soporte() {
    return (
        <main className={styles.support}>
            <Navbar />
            <motion.h1 
                className={styles.main__title}
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={{ ...ANIMATIONS.transition, delay: 0.1 }}
            >Eliminar cuenta</motion.h1>
            <motion.p className={styles.main__text}
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={{ ...ANIMATIONS.transition, delay: 0.5 }}
            >
                Al eliminar tu cuenta, todo los datos guardados que tenemos de tu cuenta van a ser elimindos. Es probable que por cuestiones de seguridad mantengamos esos datos hasta 30 dias despues de la eliminación de tu cuenta.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ...ANIMATIONS.transition, delay: 0.7 }}
            >
                <DeleteAccountForm />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ...ANIMATIONS.transition, delay: 0.8 }}
            >
                <Link
                    href="/"
                >
                    <IconArrowLeft /> Volver al inicio
                </Link>
            </motion.div>
        </main>
    )
}
