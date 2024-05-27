'use client'; 
import React from 'react';
import { Navbar } from '@/Components/Navbar/Navbar';
import { cubicBezier, motion } from "framer-motion";
import styles from "./medios.module.scss";
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { ANIMATIONS } from '@/constants/anim';
import Image from 'next/image';
import { MEDIA_ITEMS } from '@/utils/media_presence';

const Text = ({text, delay}: {text: string, delay?: number})=>{
    return (
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: cubicBezier(.6, .6, 0, .1), delay: delay || 0 }}
        >
            {text}
        </motion.p>
    )
}

export default function Home() {
    const handleOpenLink = (l: string)=> {
        if(typeof window != "undefined"){
            window.open(l, "_blank")
        }
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <motion.h1 
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={{ ...ANIMATIONS.transition, delay: 0.1 }}
            >
                Presencia en medios
            </motion.h1>
            <section className={styles.main__texts}>
                <Text text={"Hemos presentado Tranqui en los siguientes medios de comunicación:"} delay={0}/>
            </section>
            <section className={styles.media}>
                {MEDIA_ITEMS
                    .sort((a, b) => {
                        if(a.priority < b.priority || a.date < b.date) return -1;
                        if(a.priority > b.priority || a.date > b.date) return 1;
                        return 0;
                    })
                    .map((media, i) => (
                    <motion.button
                        key={i}
                        className={styles.media__item}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.2, ease: cubicBezier(.6, .6, 0, .1), delay: parseFloat("0." + (i/ 2).toString()) }}
                        onClick={()=> handleOpenLink(media.play_url)}
                    >
                        <section className={styles.media__itemTextWrapper}>
                            <Image width={70} height={70} src={media.logo} alt={media.name} />
                            <div className={styles.media__itemText}>
                                <h2>{media.name}</h2>
                                <p>{media.date}</p>
                            </div>
                        </section>
                        {
                            media.background && <Image fill src={media.background} alt={media.name} />
                        }
                    </motion.button>
                ))}
            </section>
            <Link
                href="/"
            >
                <IconArrowLeft /> Volver al inicio
            </Link>
        </main>
    )
}
