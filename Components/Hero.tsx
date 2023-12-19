import { cubicBezier, motion } from 'framer-motion'
import styles from '../app/page.module.scss'
import { ANIMATIONS } from '@/constants/anim'
import Image from 'next/image'
import { DownloadButton } from './Button'
import { NavLink } from './Navbar/Link/NavLink'
import { Navbar } from './Navbar/Navbar'

export const Hero = () => {
    return (
        <section className={styles.main}>
            <Navbar />
            <motion.h1
                className={styles.main__title}
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={{ ...ANIMATIONS.transition, delay: 0.1 }}
            >Herramienta para la prevención del suicidio</motion.h1>
            <motion.p
                className={styles.main__text}
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={{ ...ANIMATIONS.transition, delay: 0.5 }}
            >
                Apunta al acompañamiento en crisis y a la psicoeducación sobre esta problemática. Por eso, está pensada para ser utilizada por personas que están atravesando esta situación, familiares, amigxs, profesionales de salud, docentes, entre otros.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ...ANIMATIONS.transition, delay: 0.8 }}
            >
                <DownloadButton />
            </motion.div>
        </section>
    )
}