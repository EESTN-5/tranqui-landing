'use client'; 
import React from 'react';
import { Navbar } from '@/Components/Navbar/Navbar';
import { cubicBezier, motion } from "framer-motion";
import styles from "./equipo.module.scss";
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { ANIMATIONS } from '@/constants/anim';

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
        "Tranqui App es una herramienta para la prevención del suicidio, que apunta al acompañamiento en crisis y a la psicoeducación sobre esta problemática. Está pensada para ser utilizada por personas que están atravesando esta situación, familiares, amigos, profesionales de salud, docentes, etc... ",
        "Todo el contenido de Tranqui App ha sido desarrollado siguiendo las recomendaciones de la Organización Mundial de la Salud, el Ministerio de Salud de la Nación Argentina, UNICEF, y de asociaciones nacionales e internacionales que se dedican a la prevención del suicidio -International Association for Suicide Prevention, Fundación Salud Mental España, y American Association of Suicidology-.",
        "Tranqui surgió en el 2018 y es el resultado del trabajo desinteresado, comprometido y solidario de un grupo de personas. En ese momento, la Dra. Aixa Galarza, docente e investigadora de la Facultad de Psicología especializada en Suicidología, junto el Lic. Santiago González, en ese entonces Jefe de Salud Mental de la Municipalidad de General Pueyrredón, se abocaron al diseño de una app para la prevención del suicidio en adolescentes.",
        "Tras un año de trabajo, se contactaron con la Escuela de Educación Secundaria Técnica Nº5 para el desarrollo informático de la misma. Específicamente se trabajó con el Prof. Pablo Abdala Achaval, quien supervisó el trabajo de dos estudiantes, Lucas Funes y Darío Funes. Estos jóvenes desarrollaron su primera versión para página web presentada a fines del 2020." ,
        "En una segunda etapa, en el año 2023 se configuró en la Facultad de Psicología la actividad de extensión “Espacio de formación y divulgación promo-preventiva sobre el suicidio en adolescentes y jóvenes”, coordinado por la Dra. Galarza y conformado por la Lic. Matea Carranza Barrios, Lic. Inés Rodríguez, Est. Victoria Segura, Est. Evelyn Lazo Dome, Est. Sabrina de Pizzol y Est. Lourdes Volpicina. Entre otras actividades, se propusieron actualizar la app y que pueda estar disponible para descargar en celulares." ,
        "Así, un segundo grupo de estudiantes de la EEST Nº5 supervisados por el prof. Abdala Achaval, desarrolló la versión que aquí se presenta. Ellos son: Est. Tomás Di Mauro (coordinador), Est. Facundo Nicolás Berardi Hernández, Est. Alan Barbé, Est. Matías Nicolás Celiz Ramos, Est. Kiara Enríquez y Est. Luca Nahuel López."
    ]
    return (
        <main className={styles.main}>
            <Navbar />
            <motion.h1 
                initial={ANIMATIONS.text_initial}
                whileInView={ANIMATIONS.text_whileInView}
                transition={{ ...ANIMATIONS.transition, delay: 0.1 }}
            >
                Sobre Tranqui
            </motion.h1>
            <section className={styles.main__texts}>
                {TEXTS.map((text, i) => <Text text={text} key={i} delay={parseFloat("0." + (i/ 2).toString())}/>)}
            </section>
            <Link
                href="/"
            >
                <IconArrowLeft /> Volver al inicio
            </Link>
        </main>
    )
}
