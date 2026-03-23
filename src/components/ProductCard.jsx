import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import { useToastContext } from '../context/ToastContext' // 🆕 NEW — updated import path
import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem)
  const { showToast } = useToastContext()

  const handleAddToCart = () => {
    addItem(product)
    showToast(`${product.name} added to cart`)
  }

  return (
    <div className={styles.card}>
      <Link to={`/shop/${product.id}`} className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <button className={styles.wishlist}>♡</button>
      </Link>
      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>
        <button className={styles.btn} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard