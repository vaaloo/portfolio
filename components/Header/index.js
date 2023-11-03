import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Parallax from 'parallax-js'

export default function Header() {
    const currentRoute = usePathname();
    const [translateX1, setTranslateX1] = useState(1);
    const [translateX2, setTranslateX2] = useState(1);
    
    useEffect(() => {
        const scene = new Parallax(document.getElementById('p'), {
            relativeInput: true,
            limitY: 0,
        });
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newTranslateX1 = scrollY / 14
            const newTranslateX2 = scrollY / 14
            setTranslateX1(newTranslateX1);
            setTranslateX2(newTranslateX2);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
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
                <div  className={styles.rounds} data-depth="0.2"></div>
                <svg data-depth="0.25" className={styles.v} id="v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 530">
                    <path style={{ transform: `translateX(${-translateX1}px)`, transition: 'transform 0.2s' }} className={styles.vcolor} d="M252.5,530L0,0H142l181.5,383-71,147Z"/>
                    <path style={{ transform: `translateX(${translateX2}px)`, transition: 'transform 0.2s' }} className={styles.vcolor}d="M346.5,334l-71-149.5L363,1h142l-158.5,333Z"/>
                </svg>
        </section>
        </>
    )
}