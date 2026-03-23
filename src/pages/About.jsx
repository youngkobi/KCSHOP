import images from '../data/images' // 🆕 NEW — import centralized images
import styles from './About.module.css'

function About() {
  return (
    <main className={styles.page}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Our Story</h1>
        <p className={styles.bannerSub}>Handmade with love, one piece at a time</p>
      </div>

      <section className={styles.story}>
        <div className={styles.storyLeft}>
          <img
            src={images.about.story} // 🆕 NEW — image now comes from images.js
            alt="Jewelry being made by hand"
            className={styles.storyImg}
          />
        </div>
        <div className={styles.storyRight}>
          <span className={styles.eyebrow}>Who we are</span>
          <h2 className={styles.storyTitle}>Built from a passion<br /><em>for the handmade</em></h2>
          <p className={styles.storyText}>
            Every piece in our collection starts the same way — with raw
            materials, two hands, and a lot of care. We started this shop
            because we believed jewelry should feel personal, not mass produced.
          </p>
          <p className={styles.storyText}>
            No factories. No shortcuts. Just thoughtful design and honest
            craftsmanship that you can feel the moment you hold it.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.value}>
          <span className={styles.valueIcon}>✦</span>
          <h3 className={styles.valueTitle}>Handmade</h3>
          <p className={styles.valueText}>Every piece is made by hand in small batches. No two are exactly alike.</p>
        </div>
        <div className={styles.value}>
          <span className={styles.valueIcon}>✦</span>
          <h3 className={styles.valueTitle}>Custom Orders</h3>
          <p className={styles.valueText}>Want something made just for you? We take custom orders year round.</p>
        </div>
        <div className={styles.value}>
          <span className={styles.valueIcon}>✦</span>
          <h3 className={styles.valueTitle}>Quality Materials</h3>
          <p className={styles.valueText}>We only use sterling silver, 14k gold, and ethically sourced stones.</p>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>Want something custom?</h2>
        <p className={styles.contactText}>Reach out and let's create something made just for you.</p>
        <a href="mailto:hello@yourshop.com" className={styles.contactBtn}>Get in touch</a>
      </section>
    </main>
  )
}

export default About