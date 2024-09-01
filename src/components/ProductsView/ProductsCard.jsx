import './ProductsCard.css';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors'; // Ajusta la ruta según sea necesario

export default function ProductsCard({ title, price, image, idProd }) {
    return (
      <article className="products-card">
        <h4>{title}</h4>
        <img src={image} alt={title} className="product-image" />
        <p className="product-price">{price} <span className="currency">ARS</span></p>
        <button className="view-details-button">
          <Link to={`/product/${idProd}`} style={{ textDecoration: 'none', color: colors.celeste }}>Ver detalles</Link>
        </button>
      </article>
    );
  }
  
