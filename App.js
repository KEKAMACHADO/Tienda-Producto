// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: 10, description: 'Descripción 1' },
    { id: 2, name: 'Producto 2', price: 20, description: 'Descripción 2' },
    // Agrega más productos si es necesario
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Tienda de Productos</h1>
      <ProductList products={products} onViewDetails={handleViewDetails} />
      <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
      <Cart cartItems={cart} />
    </div>
  );
};

export default App;
