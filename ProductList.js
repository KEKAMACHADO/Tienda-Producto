// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onViewDetails }) => (
  <div>
    {products.map(product => (
      <ProductItem 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        onViewDetails={() => onViewDetails(product)}
      />
    ))}
  </div>
);

export default ProductList;
