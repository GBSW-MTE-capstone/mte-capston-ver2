import styles from '../styles/globals.scss'
import Header from '../components/header'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className={styles.Frame}>
        <Header/>
      </div>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
