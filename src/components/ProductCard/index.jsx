import { Link } from 'react-router-dom';
import './styles.css';

const ProductCard = ({ id = 1, name, image, price, priceDiscount }) => {
  return (
    <Link to={`/products/${id}`} className="product-card">
      <div className="product-card__imagem">
        {priceDiscount && <span className="product-card__desconto">30% OFF</span>}
        <img src={image} alt={name} />
      </div>
      <span className="product-card__categoria">Tênis</span>
      <h3 className="product-card__nome">{name}</h3>
      <div className="product-card__precos">
        {priceDiscount ? (
          <>
            <span className="product-card__preco-antigo">${price}</span>
            <span className="product-card__preco">${priceDiscount}</span>
          </>
        ) : (
          <span className="product-card__preco">${price}</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;