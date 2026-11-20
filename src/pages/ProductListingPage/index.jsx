import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterGroup from '../../components/FilterGroup';
import ProductListing from '../../components/ProductListing';
import './styles.css';

const produtos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: 'Tênis Nike Air Force 1 Low Since',
  image: `/NikeAirForce${(i % 3) + 1}.png`,
  price: 239.7,
  priceDiscount: 559.3,
}));

const marcas = [
  { value: 'adiddas', text: 'Adiddas', checked: true },
  { value: 'calenciaga', text: 'Calenciaga' },
  { value: 'k-swiss', text: 'K-Swiss', checked: true },
  { value: 'nike', text: 'Nike' },
  { value: 'puma', text: 'Puma' },
];

const categorias = [
  { value: 'esporte', text: 'Esporte e lazer', checked: true },
  { value: 'casual', text: 'Casual' },
  { value: 'utilitario', text: 'Utilitário' },
  { value: 'corrida', text: 'Corrida' },
];

const generos = [
  { value: 'masculino', text: 'Masculino', checked: true },
  { value: 'feminino', text: 'Feminino', checked: true },
  { value: 'unisex', text: 'Unisex' },
];

const estados = [
  { value: 'novo', text: 'Novo', checked: true },
  { value: 'usado', text: 'Usado' },
];

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const termo = searchParams.get('filter') || '';
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);

  return (
    <div className="listagem">
      <div className="listagem__topo">
        <p>
          {termo ? <>Resultados para "<strong>{termo}</strong>" - </> : ''}
          <strong>{produtos.length} produtos</strong>
        </p>

        <div className="listagem__ordenar-linha">
          <select className="listagem__ordenar" defaultValue="relevantes">
            <option value="relevantes">Ordenar por: mais relevantes</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
          <button
            type="button"
            className="listagem__botao-filtro"
            onClick={() => setFiltrosAbertos(true)}
            aria-label="Abrir filtros"
          >
            <i className="bi bi-funnel"></i>
          </button>
        </div>
      </div>

      <div className="listagem__corpo">
        <aside className={`listagem__filtros ${filtrosAbertos ? 'aberto' : ''}`}>
          <button
            type="button"
            className="listagem__fechar"
            onClick={() => setFiltrosAbertos(false)}
            aria-label="Fechar filtros"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <h3>Filtrar por</h3>
          <FilterGroup title="Marca" inputType="checkbox" options={marcas} />
          <FilterGroup title="Categoria" inputType="checkbox" options={categorias} />
          <FilterGroup title="Gênero" inputType="checkbox" options={generos} />
          <FilterGroup title="Estado" inputType="radio" options={estados} />
        </aside>

        <div className="listagem__produtos">
          <ProductListing products={produtos} />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;