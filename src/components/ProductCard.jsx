"use client"

function ProductCard({ product, onClick }) {
  // Función para formatear precio en pesos colombianos
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        {product.image ? (
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
        ) : (
          <div className="placeholder-image">🌱</div>
        )}
      </div>
      <div className="product-category">{product.category}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description.substring(0, 60)}...</p>
      <div className="product-footer">
        <span className="product-price">{formatPrice(product.price)}</span>
        <span className="product-stock">Stock: {product.stock}</span>
      </div>
    </div>
  )
}

export default ProductCard
