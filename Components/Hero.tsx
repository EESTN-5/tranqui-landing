import { cubicBezier, motion } from 'framer-motion'
import styles from '../app/page.module.scss'
import { ANIMATIONS } from '@/constants/anim'
import Image from 'next/image'
import { DownloadButton } from './Button'

export const Hero = () => {
    return (
        <section className={styles.main}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: cubicBezier(.6, .6, 0, .1) }}
            >
                <Image src="/tranqui-logo.svg" alt='Tranqui logo' width={138.14} height={50} className={styles.main__logo} />
            </motion.div>
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