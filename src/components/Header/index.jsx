import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import './styles.css';

const Header = () => {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  const buscar = () => {
    if (busca.trim()) {
      navigate(`/products?filter=${encodeURIComponent(busca.trim())}`);
    }
  };

  const aoApertarTecla = (e) => {
    if (e.key === 'Enter') buscar();
  };

  return (
    <header className="header">
      <div className="header__topo">
        <Link to="/">
          <Logo />
        </Link>

        <div className="header__busca">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={aoApertarTecla}
          />
          <button type="button" onClick={buscar} aria-label="Buscar">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="header__acoes">
          <Link to="/cadastro" className="header__cadastro">
            Cadastre-se
          </Link>
          <Link to="/login" className="header__entrar">
            Entrar
          </Link>
          <i className="bi bi-cart header__carrinho"></i>
        </div>
      </div>

      <nav className="header__nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/categories">Categorias</NavLink>
        <NavLink to="/orders">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
};

export default Header;