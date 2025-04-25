# Prueba Técnica AgriCapital

Este proyecto es una aplicación web para mostrar y filtrar productos agrícolas, desarrollada como parte de la prueba técnica para AgriCapital.

## Características

- Listado de productos agrícolas
- Filtrado por categoría
- Búsqueda por nombre en tiempo real
- Vista detallada de productos con modal
- Cálculo de descuentos basado en cantidad
- Diseño responsivo para móviles y escritorio

## Tecnologías Utilizadas

- **Frontend**: React con Vite
- **Backend**: Javascript
- **Estilos**: CSS puro

## Estructura del Proyecto

/
├── public/              # Archivos estáticos
│   └── assets/          # Imágenes de productos
├── src/                 # Código fuente frontend
│   ├── components/      # Componentes React
│   │   ├── ProductCard.jsx  # Tarjeta de producto
│   │   └── ProductModal.jsx # Modal de detalle
│   ├── App.css          # Estilos de la aplicación
│   ├── App.jsx          # Componente principal
└── README.md            # Documentación

## Instalación y Ejecución

Instala las dependencias

npm install

## Inicia la aplicación frontend

npm run dev




## Mejoras Futuras

Con más tiempo, se podrían implementar las siguientes mejoras:
ademas de poder implementar la API correctamente corrigiendo errores de dispositivo 
logrando instalar librerias

1. **Integración de Base de Datos**:
   - Reemplazar datos en memoria con PostgreSQL o MongoDB
   - Añadir operaciones CRUD para gestión de productos

2. **Autenticación**:
   - Añadir autenticación de usuarios para funciones de administrador
   - Implementar control de acceso basado en roles

3. **Soporte Docker**:
   - Añadir Dockerfile y docker-compose.yml para containerización
   - Incluir servicio de base de datos en la configuración docker-compose