import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>

      {/* top section — logo, nav columns, email signup */}
      <div className={styles.top}>

        {/* brand column */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>K.C.SHOP</Link>
          <p className={styles.tagline}>
            Handcrafted jewelry made with intention. Every piece tells a story.
          </p>
          {/* social links */}
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.social}>Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className={styles.social}>Pinterest</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={styles.social}>TikTok</a>
          </div>
        </div>

        {/* shop links column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Shop</h4>
          <ul className={styles.columnLinks}>
            <li><Link to="/shop">All Pieces</Link></li>
            <li><Link to="/shop">Rings</Link></li>
            <li><Link to="/shop">Necklaces</Link></li>
            <li><Link to="/shop">Earrings</Link></li>
            <li><Link to="/shop">Bracelets</Link></li>
          </ul>
        </div>

        {/* info links column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Info</h4>
          <ul className={styles.columnLinks}>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/about">Custom Orders</Link></li>
            <li><a href="mailto:hello@yourshop.com">Contact Us</a></li>
          </ul>
        </div>

        {/* email signup column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Stay in touch</h4>
          <p className={styles.signupText}>
            Get early access to new pieces and behind the scenes updates.
          </p>
          {/* email input row */}
          <div className={styles.signupRow}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.signupInput}
            />
            <button className={styles.signupBtn}>→</button>
          </div>
        </div>

      </div>

      {/* bottom bar — copyright */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} K.C.SHOP. All rights reserved.
        </p>
        <p className={styles.credit}>
          Handmade with care.
        </p>
      </div>

    </footer>
  )
}

export default Footer