import { useState, useEffect } from 'react';
import ProductList from '../ProductsView/ProductsList';
import { getCategory } from '../../asyncMock';

export default function DeliveryComponent() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('café'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryProducts = await getCategory(category);
        setProducts(categoryProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]); 

  const handleClick = (newCategory) => {
    // Log para depuración
    console.log(`Changing category to: ${newCategory}`);
    setCategory(newCategory); 
  };

  return (
    <div>
      <h2>Nuestros productos</h2>
      <button onClick={() => handleClick('café')}>Café</button>
      <button onClick={() => handleClick('donas')}>Donas</button>
      <ProductList products={products} /> 
    </div>
  );
}
