import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Valoo - Projects</title>
            </Head>
            <Header></Header>
            <h1 className={styles.about_me_title}>PROJECTS</h1>
            <div className={styles.projects_container}>
                <div className={styles.projects}>
                    <div className={styles.projects_img}></div>
                    <div className={styles.projects_text}>
                        <h2>L&apos;Atelier Burger</h2>
                        <p>L&apos;Atelier Burger is a restaurant in the south of France. I was in charge of creating the entire website (backend and frontend).</p>
                    </div>
                </div>
                <div className={styles.projects}>
                    <div className={styles.projects_img}></div>
                    <div className={styles.projects_text}>
                        <h2>Palamazon</h2>
                        <p>Palamazon is the first site for a minecraft pvp-faction server.
                            It lets you post ads online to sell your in-game items, or buy directly from our sellers.
                            I created this project, and its final version was developed by 9 developers.</p>
                    </div>
                </div>
                <div className={styles.projects}>
                    <div className={styles.projects_img}></div>
                    <div className={styles.projects_text}>
                        <h2>My Portfolio</h2>
                        <p>You are currently on this site. This is my portfolio, which I coded on my own, using NextJS.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}