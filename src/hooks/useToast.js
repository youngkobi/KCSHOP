// 🪝 Custom hook — manages the toast's visibility and message
// Any component can call this hook to show a toast
import { useState } from 'react'

function useToast() {

  // 📝 message holds the text to display, null means toast is hidden
  const [message, setMessage] = useState(null)

  // 📣 showToast — call this to display a message
  // It automatically hides the toast after 3 seconds
  const showToast = (text) => {
    setMessage(text)
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  // 🙈 hideToast — call this when the user clicks the ✕ button
  const hideToast = () => setMessage(null)

  // 📤 Return everything the component needs
  return { message, showToast, hideToast }
}

export default useToast