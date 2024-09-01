import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock.js';

export default function SingleProd() {
  const [product, setProduct] = useState(null); // Inicializa como null para manejar el estado de carga
  const [loading, setLoading] = useState(true); // Estado para indicar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const { prodId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = getProduct(prodId);
        if (result) {
          setProduct(result);
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        setError('Hubo un error al cargar el producto');
      } finally {
        setLoading(false); // Independientemente del resultado, se termina la carga
      }
    };

    fetchProduct();
  }, [prodId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <article>
      <h4>{product.title}</h4>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p>
      <p>Categoría: {product.category}</p>
    </article>
  );
}
