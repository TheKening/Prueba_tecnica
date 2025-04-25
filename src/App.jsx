"use client"

import { useState, useEffect } from "react"
import "./App.css"
import ProductCard from "./components/ProductCard"
import ProductModal from "./components/ProductModal"
import { getProducts } from "./api/products"

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Cargar productos al iniciar
  useEffect(() => {
    // Simulamos una llamada a API con un pequeño retraso
    setTimeout(() => {
      const data = getProducts()
      setProducts(data)
      setFilteredProducts(data)

      // Extraer categorías únicas
      const uniqueCategories = [...new Set(data.map((product) => product.category))]
      setCategories(uniqueCategories)
      setIsLoading(false)
    }, 500)
  }, [])

  // Filtrar productos cuando cambia la categoría o la búsqueda
  useEffect(() => {
    let result = [...products]

    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((product) => product.name.toLowerCase().includes(query))
    }

    setFilteredProducts(result)
  }, [selectedCategory, searchQuery, products])

  // Abrir modal de producto
  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  // Cerrar modal de producto
  const closeModal = () => {
    setSelectedProduct(null)
  }

  // Manejar cambio de categoría
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Manejar cambio en la búsqueda
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="container">
      <h1>AgriCapital - Productos Agrícolas</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />

        <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
          <option value="all">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className="loading">Cargando productos...</div>
      ) : filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No se encontraron productos</h3>
          <p>Intenta cambiar los filtros de búsqueda</p>
          <button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
            }}
            className="clear-button"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  )
}

export default App
