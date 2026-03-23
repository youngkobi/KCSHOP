import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import styles from './Navbar.module.css'

function Navbar() {
  const items = useCartStore((state) => state.items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>K.C.SHOP</Link>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <Link to="/cart">
            Cart {totalItems > 0 && (
              <span className={styles.count}>{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar