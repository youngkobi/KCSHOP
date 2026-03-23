import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import styles from './Cart.module.css'

function Cart() {
  const { items, removeItem, clearCart } = useCartStore()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>Your cart is empty</p>
        <Link to="/shop" className={styles.shopLink}>Browse the collection</Link>
      </div>
    )
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Your Cart</h1>

      <div className={styles.layout}>
        <div className={styles.items}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.name} className={styles.itemImg} />
              <div className={styles.itemInfo}>
                <p className={styles.itemCategory}>{item.category}</p>
                <h2 className={styles.itemName}>{item.name}</h2>
                <p className={styles.itemQty}>Qty: {item.quantity}</p>
              </div>
              <div className={styles.itemRight}>
                <p className={styles.itemPrice}>
                  ${item.price * item.quantity}
                </p>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>{total >= 75 ? 'Free' : '$9.99'}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${total >= 75 ? total : total + 9.99}</span>
          </div>
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          <button className={styles.clearBtn} onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </main>
  )
}

export default Cart