import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock'; 
import ProductsCard from './ProductsCard';
import './ProductsList.css'; 

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then(data => setProducts(data));
  }, []);

  return (
    <div className="products-list">
      {products.map(product => (
        <ProductsCard 
          key={product.id} 
          title={product.title} 
          price={product.price} 
          image={product.image} 
          idProd={product.id} 
        />
      ))}
    </div>
  );
}
