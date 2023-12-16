import { motion } from 'framer-motion'
import styles from '../app/page.module.scss'
import { ANIMATIONS } from '@/constants/anim'
import { DownloadButton } from './Button'
import { Footer } from './Footer'

export const Bottom = () => {
    return (
        <section className={styles.bottomWrapper}>
            <div className={styles.bottomBackground}/>
            <section className={styles.main}>
                <motion.h2 
                    className={styles.main__title}
                    initial={ANIMATIONS.text_initial}
                    whileInView={ANIMATIONS.text_whileInView}
                    transition={ANIMATIONS.transition}
                >Información para ayudar a personas en crisis</motion.h2>
                <motion.p 
                    className={styles.main__text}
                    initial={ANIMATIONS.text_initial}
                    whileInView={ANIMATIONS.text_whileInView}
                    transition={ANIMATIONS.transition}
                >
                    ¿Sos profesional, docente o conoces a alguien que esté pasando por una crisis? 
                    <br /><br />
                    Dentro de la app podrás encontrar información y recursos útiles para saber qué le esta pasando y qué podes hacer.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...ANIMATIONS.transition, delay: 0.8 }}
                >
                    <DownloadButton />
                </motion.div>
            </section>
            <Footer />
        </section>
    )
}