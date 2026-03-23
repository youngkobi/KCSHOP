import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'
import useToast from './hooks/useToast'
import { ToastContext } from './context/ToastContext' // 🆕 NEW — import from its own file

function App() {
  const { message, showToast, hideToast } = useToast()

  return (
    <ToastContext.Provider value={{ showToast }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        {message && (
          <Toast message={message} onClose={hideToast} />
        )}
      </BrowserRouter>
    </ToastContext.Provider>
  )
}

export default App