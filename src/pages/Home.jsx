import { Link } from 'react-router-dom'
import images from '../data/images' // 🆕 NEW — import centralized images
import styles from './Home.module.css'

function Home() {
  return (
    <main>
      <div className={styles.topBanner}>
        <img
          src={images.home.banner} // 🆕 NEW — image now comes from images.js
          alt="Handmade jewelry banner"
          className={styles.bannerImg}
        />
        <div className={styles.bannerOverlay}>
          <p className={styles.bannerTag}>Handmade &amp; Custom</p>
          <h2 className={styles.bannerHeading}>Crafted by hand.<br />Worn with pride.</h2>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <img
            src={images.home.hero} // 🆕 NEW — image now comes from images.js
            alt="Handmade jewelry"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroRight}>
          <span className={styles.eyebrow}>Est. in your city · Made by hand</span>
          <h1 className={styles.heroTitle}>
            Jewelry made<br /><em>with intention</em>
          </h1>
          <p className={styles.heroBody}>
            Every piece is crafted by hand, one at a time. No factories,
            no shortcuts — just raw materials and care turned into something
            you'll wear forever.
          </p>
          <div className={styles.heroBtns}>
            <Link to="/shop" className={styles.btnPrimary}>Shop the collection</Link>
            <Link to="/about" className={styles.btnSecondary}>Our story</Link>
          </div>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeNum}>100%</span>
              <span className={styles.badgeLabel}>Handmade</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeNum}>Custom</span>
              <span className={styles.badgeLabel}>Orders welcome</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeNum}>Free</span>
              <span className={styles.badgeLabel}>Shipping $75+</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home