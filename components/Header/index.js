import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {
    const currentRoute = usePathname();
    return (
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
    )
}