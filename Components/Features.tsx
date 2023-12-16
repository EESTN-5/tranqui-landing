import { Advice } from '@/Components/Grid/Advice'
import { Places } from '@/Components/Grid/Places'
import { MySpace } from '@/Components/Grid/MySpace'
import { SecurityPlan } from '@/Components/Grid/SecurityPlan'
import { Verified } from '@/Components/Grid/Verified'
import { motion } from 'framer-motion'
import styles from '../app/page.module.scss'
import { ANIMATIONS } from '@/constants/anim'

export const Features = () => {
    return (
        <section className={styles.features}>
            <motion.h2 
                className={styles.main__title}
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={ANIMATIONS.transition}
            >Cuidemos tu bienestar emocional</motion.h2>
            <section 
                className={styles.main__grid}
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...ANIMATIONS.transition, delay: 0}}
                    className={styles.main__grid1}
                >
                    <h3>Consejos rápidos para momentos de crisis</h3>
                    <Advice />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...ANIMATIONS.transition, delay: 0.2}}
                    className={styles.main__grid2}
                >
                    <MySpace />
                    <h3>Creá tu espacio</h3>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...ANIMATIONS.transition, delay: 0.4}}
                    className={styles.main__grid3}
                >
                    <Places />
                    <h3>Encontrá lugares a donde recurrir</h3>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...ANIMATIONS.transition, delay: 0.5}}
                    className={styles.main__grid5}
                >
                    <SecurityPlan />
                    <h3>Creá tu plan de seguridad</h3>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...ANIMATIONS.transition, delay: 0.7}}
                    className={styles.main__grid4}
                >
                    <Verified />
                    <h3>Verificado por profesionales de la salud mental</h3>
                </motion.div>
            </section>
        </section>
    )
}