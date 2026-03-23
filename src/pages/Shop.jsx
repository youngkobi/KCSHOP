import { useState } from 'react' // 🔍 NEW — useState to track search and filter
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import styles from './Shop.module.css'

function Shop() {

  const [search, setSearch] = useState('') // 🔍 NEW — tracks what user types in search box
  const [activeCategory, setActiveCategory] = useState('all') // 🗂️ NEW — tracks which category filter is active

  // 🗂️ NEW — pull unique categories from product data and add "all" at the front
  const categories = ['all', ...new Set(products.map(p => p.category))]

  // 🔍 NEW — filter products by both search text and active category
  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Collection</h1>
        <p className={styles.subtitle}>Handcrafted pieces for every moment</p>
      </div>

      {/* 🔍 NEW — search and filter bar */}
      <div className={styles.controls}>

        {/* 🔍 NEW — text input that updates search state as user types */}
        <input
          type="text"
          placeholder="Search pieces..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        {/* 🗂️ NEW — category filter buttons, one per unique category */}
        <div className={styles.filters}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      {/* 🔍 NEW — show how many results are showing */}
      <p className={styles.resultCount}>
        {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
      </p>

      {/* 🔍 NEW — render filtered products instead of all products */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // 🔍 NEW — empty state when no products match the search
        <div className={styles.empty}>
          <p>No pieces found for "{search}"</p>
          <button onClick={() => { setSearch(''); setActiveCategory('all') }}>
            Clear search
          </button>
        </div>
      )}

    </main>
  )
}

export default Shop