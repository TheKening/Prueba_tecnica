"use client"

import { useState } from "react"

function ProductModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [calculatedPrice, setCalculatedPrice] = useState(product.price)

  // Calcular descuento basado en cantidad
  const calculateDiscount = (qty, basePrice) => {
    let discount = 0
    if (qty >= 10)
      discount = 0.15 // 15% descuento para 10+ items
    else if (qty >= 5)
      discount = 0.1 // 10% descuento para 5+ items
    else if (qty >= 3) discount = 0.05 // 5% descuento para 3+ items

    const discountedPrice = basePrice * (1 - discount)
    return {
      discountPercentage: discount * 100,
      finalPrice: discountedPrice,
    }
  }

  // Manejar cambio de cantidad
  const handleQuantityChange = (newQty) => {
    if (newQty < 1 || newQty > product.stock) return

    setQuantity(newQty)
    const { finalPrice } = calculateDiscount(newQty, product.price)
    setCalculatedPrice(finalPrice * newQty)
  }

  const { discountPercentage } = calculateDiscount(quantity, product.price)

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
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{product.name}</h2>
        <div className="modal-category">{product.category}</div>

        <div className="modal-image">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
        </div>

        <div className="modal-section">
          <h4>Descripción</h4>
          <p>{product.description}</p>
        </div>

        <div className="modal-info">
          <div>
            <h4>Precio</h4>
            <p className="modal-price">{formatPrice(product.price)}</p>
          </div>
          <div>
            <h4>Stock Disponible</h4>
            <p>{product.stock} unidades</p>
          </div>
        </div>

        <div className="modal-calculator">
          <h4>Calcular Precio con Cantidad</h4>
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity >= product.stock}>
              +
            </button>

            <div className="calculated-price">
              {discountPercentage > 0 && <p className="discount-info">{discountPercentage}% de descuento aplicado</p>}
              <p className="total-price">{formatPrice(calculatedPrice)}</p>
            </div>
          </div>
        </div>

        <button className="modal-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default ProductModal
