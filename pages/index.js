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
                <p>I&apos;m a young <b>fullstack web developer</b>, still a student. I&apos;ve had
                    several <b>projects</b> in my development career, which you can find on my <Link
                        href="/projects">projects</Link> page.
                    I started coding with <b>NodeJS</b>, then gradually learned <b>HTML and CSS</b>.
                    More recently, I&apos;ve started using <b>NextJS</b> (this site being made with this).
                    <br/>I also had the opportunity to code <b>trading bots</b> and explore <b>Java</b> during my studies,
                    adding to my development skills.
                    I was able to learn <b>C++</b> too, although it&apos;s not much use to me for the web !
                    If you&apos;d like to <b>contact me</b>, please go to my <Link href="/contact">contact</Link> page !
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
                        <p>Java</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>NextJS</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>SQL</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>ReactJS</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>Figma</p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skills_img}></div>
                        <p>TypeScript</p>
                    </div>
                </div>
            </div>
        </div>
            <Footer></Footer>
        </>
    )
}