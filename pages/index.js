import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

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
        </>
    )
}