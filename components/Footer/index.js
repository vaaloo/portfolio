import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <div className={styles.footer_name}>
                        <h2>Valoo</h2>
                        <p>
                            A fullstack web developer who loves coding and learning new things.
                        </p>
                    </div>
                    <div className={styles.footer_socials}>
                        <h2>Socials</h2>
                        <div className={styles.footer_socials_container}>
                            <Link href="https://github.com/vaaloo"><img src="/images/github-ico.png"></img></Link>
                            <Link href="https://youtube.com/valoogaming"><img src="/images/yt-ico.png"></img></Link>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>Made by <Link href="/">Valoo</Link>. © Copyright 2023</p>
            </div>
        </>
    )
}