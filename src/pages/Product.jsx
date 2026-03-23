import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import useCartStore from '../store/cartStore'
import { useToastContext } from '../context/ToastContext' // 🆕 NEW — updated import path
import styles from './Product.module.css'

function Product() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const addItem = useCartStore((state) => state.addItem)
  const { showToast } = useToastContext()

  const handleAddToCart = () => {
    addItem(product)
    showToast(`${product.name} added to cart`)
  }

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Product not found.</p>
        <Link to="/shop">Back to shop</Link>
      </div>
    )
  }

  return (
    <main className={styles.page}>
      <Link to="/shop" className={styles.back}>← Back to shop</Link>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>
        <div className={styles.details}>
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.meta}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Materials</span>
              <span className={styles.metaValue}>{product.materials}</span>
            </div>
            {product.details.map((detail, i) => (
              <div key={i} className={styles.metaRow}>
                <span className={styles.metaValue}>{detail}</span>
              </div>
            ))}
          </div>
          <button className={styles.addBtn} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <p className={styles.shipping}>
            Free shipping on orders over $75 · Handmade to order
          </p>
        </div>
      </div>
    </main>
  )
}

export default Product