'use client';
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { NavLink } from "./Link/NavLink";
import { MenuIcon } from "./MenuIcon";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const Navbar = ()=>{
    const [mobile, setMobile] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setMobile(isMobile);
    }, []);

    const handleOpen = () => setOpen(!open);
    const router = useRouter();
    const openPage = (url: string) => router.push(url);
    const handleOpenHome = () => openPage("/");
    const handleOpenTeam = () => openPage("/equipo");
    const handleOpenSupport = () => openPage("/soporte");
    const handleOpenMediaPresence = () => openPage("/presencia-en-medios");

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: cubicBezier(.6, .6, 0, .1) }}
            className={styles.nav}
        >
            <Image src="/tranqui-logo.svg" alt='Tranqui logo' width={138.14} height={50} className={styles.main__logo} />
            <AnimatePresence >
                {
                    (mobile && open) ? (
                        <motion.section 
                            className={styles.nav__linksOpen}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            exit={{ width: "0%" }}
                            transition={{ duration: 0.1, ease: cubicBezier(.6, .6, 0, .1) }}
                        >
                            <div className={styles.nav__link} onClick={handleOpenHome} onKeyDown={()=>{}}>
                                Inicio <IconArrowRight />
                            </div>
                            <div className={styles.nav__link} onClick={handleOpenTeam} onKeyDown={()=>{}}>
                                Sobre Tranqui <IconArrowRight />
                            </div>
                            <div className={styles.nav__link} onClick={handleOpenSupport} onKeyDown={()=>{}}>
                                Consultas Técnicas <IconArrowRight />
                            </div>
                            <div className={styles.nav__link} onClick={handleOpenMediaPresence} onKeyDown={()=>{}}>
                                Presencia en medios <IconArrowRight />
                            </div>
                            <div className={styles.nav__linkClose} onClick={handleOpen} onKeyDown={()=>{}}>
                                <IconX />
                                Cerrar
                            </div>
                        </motion.section>
                    ) : null
                }
            </AnimatePresence>
            <section className={styles.nav__links}>
                <NavLink label='Inicio' page='/' />
                <NavLink label='Sobre Tranqui' page='/equipo' />
                <NavLink label='Consultas Técnicas' page='/soporte' />
                <NavLink label='Presencia en medios' page='/presencia-en-medios' />
            </section>
            {mobile && <button onClick={handleOpen}><MenuIcon /></button>}
        </motion.section>
    )
}