import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react';
import Parallax from 'parallax-js';


export default function Header() {
    const currentRoute = usePathname();
    useEffect(() => {
        const scene = new Parallax(document.getElementById('p'), {
            relativeInput: true,
            limitY: 0,
        });
      }, []);
    return (
        <>
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <div className={styles.logo}></div>
                <h1>Valoo</h1>
            </div>
            <nav>
                <Link href="/" className={currentRoute === "/" ? styles.active : ""}>Home</Link>
                <Link href="/projects" className={currentRoute === "/projects" ? styles.active : ""}>Projects</Link>
                <Link href="/contact" className={currentRoute === "/contact" ? styles.active : ""}>Contact</Link>
            </nav>
        </header>
        <section className={styles.sub_header} id="p">
                <div className={styles.points} data-depth="0.1"></div>
                <div className={styles.rounds} data-depth="0.2"></div>
                <svg data-depth="0.1" className={styles.v} id="v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 530">
                    <path className={styles.vcolor} d="M252.5,530L0,0H142l181.5,383-71,147Z"/>
                    <path className={styles.vcolor}d="M346.5,334l-71-149.5L363,1h142l-158.5,333Z"/>
                </svg>
        </section>
        </>
    )
}