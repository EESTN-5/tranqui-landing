'use client'
import Link from "next/link"
import { EmailIcon, EmailIconFilled } from "../EmailIcon"
import { HomeIcon, HomeIconFilled } from "../HomeIcon"
import { TeamIcon, TeamIconFilled } from "../TeamIcon"
import styles from "./NavLink.module.scss";
import { useEffect, useState } from "react"

interface NavLinkProps{
    label: string,
    page: string,
    icon?: string
};

export const NavLink = ({label, page, icon}: NavLinkProps) => {
    const [active, setActive] = useState<string>("");

    const icons: {[key: string]: JSX.Element} = {
        'home': active == "/" ? <HomeIconFilled/> : <HomeIcon />,
        'team': active == "/equipo" ? <TeamIconFilled/> : <TeamIcon />,
        'support': active == "/soporte" ? <EmailIconFilled/> : <EmailIcon />,
    }

    useEffect(() => {
        if(typeof window !== "undefined"){
            setActive(window.location.pathname);
        }
    }, []);

    return (
        <Link href={page} className={styles.link}>
            {icons[icon ?? ""] ?? <></>}
            <span className={page == active ? styles.linkActive : ""}>{label}</span>
        </Link>
    );
}