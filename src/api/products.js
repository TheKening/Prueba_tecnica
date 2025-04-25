import React from 'react';
import tomates from "../assets/tomates.webp"
import arroz from "../assets/arroz.webp"
import manzanas from "../assets/manzanas.jpg"
import oliva from "../assets/Aceite-Oliva.webp"   
import lechuga from "../assets/lechuga.webp"
import quinoa from "../assets/quinoa.avif"
import naranjas from "../assets/naranjas.jpg"
import aguacate from "../assets/Aceite-Aguacate.png"

export const getProducts = () => {
    return [
      {
        id: 1,
      name: "Tomates Orgánicos",
      description: "Tomates orgánicos frescos cultivados sin pesticidas. Perfectos para ensaladas y cocina.",
      category: "Verduras",
      price: 4500,
      stock: 150,
      image: tomates
    },
    {
      id: 2,
      name: "Arroz Premium",
      description: "Arroz de grano largo de alta calidad. Ideal para una variedad de platos.",
      category: "Granos",
      price: 8900,
      stock: 200,
      image: arroz
    },
    {
      id: 3,
      name: "Manzanas Orgánicas",
      description: "Manzanas orgánicas dulces y jugosas. Ricas en vitaminas y fibra.",
      category: "Frutas",
      price: 6500,
      stock: 100,
      image: manzanas
    },
    {
      id: 4,
      name: "Aceite de Oliva Extra Virgen",
      description: "Aceite de oliva premium prensado en frío de olivas seleccionadas.",
      category: "Aceites",
      price: 25000,
      stock: 75,
      image: oliva
    },
    {
      id: 5,
      name: "Lechuga",
      description: "Conocida por su alto contenido de hierro y vitaminas A y C.",
      category: "Verduras",
      price: 3800,
      stock: 180,
      image: lechuga
    },
    {
      id: 6,
      name: "Quinoa",
      description: "Quinoa rica en nutrientes, alta en proteínas y aminoácidos esenciales.",
      category: "Granos",
      price: 12000,
      stock: 120,
      image: quinoa
    },
    {
      id: 7,
      name: "Naranjas Orgánicas",
      description: "Naranjas orgánicas jugosas, ricas en vitamina C y antioxidantes.",
      category: "Frutas",
      price: 5000,
      stock: 90,
      image: naranjas
    },
    {
      id: 8,
      name: "Aceite de Aguacate",
      description: "Aceite de aguacate de alta calidad, perfecto para cocinar y aderezos.",
      category: "Aceites",
      price: 30000,
      stock: 60,
      image: aguacate
    },
    ]
  }
  
  // Obtener un producto por ID
  export const getProductById = (id) => {
    const products = getProducts()
    return products.find((product) => product.id === id)
  }
  
  // Calcular descuento basado en cantidad
  export const calculateDiscount = (quantity, basePrice) => {
    let discount = 0
    if (quantity >= 10)
      discount = 0.15 // 15% descuento para 10+ items
    else if (quantity >= 5)
      discount = 0.1 // 10% descuento para 5+ items
    else if (quantity >= 3) discount = 0.05 // 5% descuento para 3+ items
  
    const discountedPrice = basePrice * (1 - discount)
    return {
      discountPercentage: discount * 100,
      finalPrice: discountedPrice,
    }
  }
  