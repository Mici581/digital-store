import ProductOptions from '../ProductOptions';
import './styles.css';

const BuyBox = ({
  name,
  reference,
  stars = 0,
  rating = 0,
  reviews = 0,
  price,
  priceDiscount,
  description,
  children,
}) => {
  const formatar = (valor) =>
    valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <div className="buy-box">
      <h1 className="buy-box__nome">{name}</h1>
      <p className="buy-box__ref">{reference}</p>

      <div className="buy-box__avaliacao">
        <span className="buy-box__estrelas">
          {'★'.repeat(stars)}
          {'☆'.repeat(5 - stars)}
        </span>
        <span className="buy-box__nota">{rating} ★</span>
        <span className="buy-box__reviews">({reviews} avaliações)</span>
      </div>

      <div className="buy-box__precos">
        <span className="buy-box__preco">R$ {formatar(priceDiscount ?? price)}</span>
        {priceDiscount && (
          <span className="buy-box__preco-antigo">R$ {formatar(price)}</span>
        )}
      </div>

      <div className="buy-box__descricao">
        <h4>Descrição do produto</h4>
        <p>{description}</p>
      </div>

      {children}

      <button type="button" className="buy-box__comprar">
        COMPRAR
      </button>
    </div>
  );
};

export { ProductOptions };
export default BuyBox;