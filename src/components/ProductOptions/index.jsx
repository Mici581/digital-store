import { useState } from 'react';
import './styles.css';

const ProductOptions = ({
  options = [],
  shape = 'square',
  type = 'text',
  radius = '4px',
}) => {
  const [selecionado, setSelecionado] = useState(0);

  return (
    <div className="product-options">
      {options.map((opcao, index) => {
        const estilo = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          ...(type === 'color' ? { backgroundColor: opcao } : {}),
        };

        return (
          <button
            key={opcao}
            type="button"
            className={`product-options__item product-options__item--${type} ${
              index === selecionado ? 'ativo' : ''
            }`}
            style={estilo}
            onClick={() => setSelecionado(index)}
            aria-label={`Opção ${opcao}`}
          >
            {type === 'text' ? opcao : ''}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;