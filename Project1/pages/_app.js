import '../styles/globals.css'
import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
   <Component {...pageProps} />
  </>
}

export default MyApp
