import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <><Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="Portfolio - Valoo"
                content="Web Developer - Valentin Gorgodian" />
            <title>
                Valoo - Home
            </title>
        </Head>
        <Header></Header>
        <h1 className={styles.about_me_title}>ABOUT ME</h1>
        <div className={styles.content_container}>
            <div className={styles.desc_container}>
                <h2>Who am I ?</h2>
                <p>I'm a young <b>fullstack web developer</b>, still a student. I've had several <b>projects</b> in my development career, which you can find on my <Link href="/projects">projects</Link> page.
                    I started coding with <b>NodeJS</b>, then gradually learned <b>HTML and CSS. </b>
                    More recently, I've started using <b>NextJS</b> (this site being made with this).
                    I was able to learn <b>C++</b> during my studies too, although it's not much use to me for the web! 
                    If you'd like to <b>contact me</b>, please go to my <Link href="/contact">contact</Link> page !
                </p>
            </div>
            <div className={styles.skills_all_container}>
                <h2>My skills</h2>
                <div className={styles.skills_container}>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>HTML</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>CSS</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>NodeJS</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>NextJS</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>C++</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}