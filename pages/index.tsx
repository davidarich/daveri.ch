import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreeCloud from '../components/three-cloud'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dave Rich - Full Stack Engineer</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Engineering scalable software for the cloud<span className={styles.accent}>.</span>
        </h1>
        <ThreeCloud></ThreeCloud>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
