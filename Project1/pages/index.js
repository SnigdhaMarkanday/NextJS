import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'
import Link from 'next/link'
import Script from 'next/script'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <style jsx>
        {`
          h2{
            font-size:45px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next ,next blog,hunting coder"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Script src='/sc.js' strategy="lazyOnload" />
      <main className={styles.main}>
        <div className={styles.imgwrap}>
        <h1 className={styles.title}>
          <span className='mySpan'>Hunting Coder</span>
          
        </h1>
        <Image className={styles.myimg} src='/homeimg.jpg' width={245} height={250}></Image>
        </div>
        <h2>Popular Blogs</h2>
        <p className={styles.description}>
          A blog for hunting Coders by coders
        </p>
        <div className="blogs">
          
          <div className="blogItem">
              <h1>How to Learn JS in 2022</h1>
              <p>Js is a language to define logic for the web</p>
          </div>
        </div>

        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
