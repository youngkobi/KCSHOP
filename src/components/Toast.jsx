// 🔔 Toast component — shows a small popup message at the bottom of the screen
// It receives a `message` to display and an `onClose` function to hide it
import styles from './Toast.module.css'

function Toast({ message, onClose }) {
  return (
    // 🎨 The toast container — sits fixed at the bottom right of the screen
    <div className={styles.toast}>

      {/* 💬 The message text passed in from the parent */}
      <p className={styles.message}>{message}</p>

      {/* ✕ Clicking this button manually closes the toast */}
      <button className={styles.close} onClick={onClose}>✕</button>

    </div>
  )
}

export default Toast