'use client'; 
import React from 'react';
import { Navbar } from '@/Components/Navbar/Navbar';
import { cubicBezier, motion } from "framer-motion";
import styles from "./medios.module.scss";
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { ANIMATIONS } from '@/constants/anim';
import Image from 'next/image';

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
    const TEXTS: string[] = [
        "Hemos presentado Tranqui en los siguientes medios de comunicación:",
    ]

    const MEDIA_ITEMS: {
        name: string,
        media_url: string,
        logo: string,
        background: string | null,
        play_url: string,
        date: string,
        priority: number,
    }[] = [
        {
            name: "Radio de la Azotea (88.7 FM)",
            media_url: "http://www.radiodelaazotea.com.ar/",
            logo: "/logo_azotea.jpg",
            background: "/foto_radio_azotea.jpeg",
            play_url: "https://ar.radiocut.fm/audiocut/presentacion-app-tranqui-en-esto-no-se-habla-por-radio-azotea-88-7-mhz/",
            date: "16/05/2024",
            priority: 1,
        },
        {
            name: "Radio Vinilo (89.1 FM)",
            media_url: "http://www.radiovinilo.com.ar/",
            background: "/foto_radio_vinilo.jpeg",
            logo: "/logo_vinilo.jpg",
            play_url: "/audio_radio_vinilo.ogg",
            date: "21/05/2024",
            priority: 1,
        },
        {
            name: "0223",
            media_url: "https://www.0223.com.ar/",
            background: "/foto_0223.jpeg",
            logo: "https://www.0223.com.ar/img/estructura/0223-logo.png",
            play_url: "https://www.0223.com.ar/nota/2024-5-25-19-19-0-estudiantes-marplatenses-crearon-una-app-de-prevencion-del-suicidio",
            date: "25/05/2024",
            priority: 2,
        },
        {
            name: "El Marplatense",
            media_url: "https://www.0223.com.ar/",
            logo: "/logo_elmarplatense.jpg",
            background: "/foto_elmarplatense.jpeg",
            play_url: "https://www.elmarplatense.com/",
            date: "26/05/2024",
            priority: 2,
        },
        {
            name: "Infobrisas",
            media_url: "https://www.infobrisas.com",
            background: "/foto_infobrisas.jpeg",
            logo: "/logo_infobrisas.jpg",
            play_url: "https://www.infobrisas.com/noticias/2024/05/24/69110-alumnos-de-la-escuela-tecnica-n5-presentan-la-app-tranqui-para-la-prevencion-del-suicidio",
            date: "26/05/2024",
            priority: 2,
        },
        {
            name: "MDZ",
            media_url: "https://mdzol.com/",
            logo: "https://www.mdzol.com/u/banners/1376.svg",
            background: "/foto_mdz.jpeg",
            play_url: "https://www.mdzol.com/sociedad/2024/5/27/alumnos-de-secundaria-crearon-una-aplicacion-para-la-prevencion-de-suicidios-430223.html",
            date: "27/05/2024",
            priority: 2,
        },
        {
            name: "TramaEducativa",
            media_url: "https://tramaeducativa.ar/",
            logo: "https://pbs.twimg.com/profile_images/1103000072789331970/hyWm7Ja2_400x400.png",
            background: "/foto_tramaeducativa.jpeg",
            play_url: "https://tramaeducativa.ar/tranqui-una-app-para-la-prevencion-del-suicidio-creada-por-estudiantes/",
            date: "27/05/2024",
            priority: 2
        },
        {
            name: "Canal 8 (MdP)",
            media_url: "https://canal8mardelplata.com.ar/",
            background: "/foto_canal8.jpeg",
            logo: "https://canal8mardelplata.com.ar/wp-content/uploads/2023/02/Mi-8-alta-06.png",
            play_url: "https://www.youtube.com/watch?v=yadOvDTjyMs",
            date: "27/05/2024",
            priority: 0
        },
        {
            name: "Canal 2 (MdP)",
            media_url: "https://canal2mdp.com.ar/",
            background: "/foto_canal2.jpeg",
            logo: "https://canal2mdp.com.ar/wp-content/uploads/2016/04/13427954_1104019889671271_5647949923378659701_n-1.jpg",
            play_url: "",
            date: "27/05/2024",
            priority: 0
        },
    ]

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
                {TEXTS.map((text, i) => <Text text={text} key={i} delay={parseFloat("0." + (i/ 2).toString())}/>)}
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
                        onClick={()=>{
                            window.open(media.play_url, "_blank")
                        }}
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
