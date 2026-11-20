import { Link } from 'react-router-dom';
import logo from '../../assets/logo-header.svg';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__conteudo">
        <div className="footer__marca">
          <img src={logo} alt="Digital Store" width={253} height={44} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="footer__redes">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>

        <div className="footer__coluna">
          <h4>Informação</h4>
          <Link to="/">Sobre Drip Store</Link>
          <Link to="/">Segurança</Link>
          <Link to="/">Wishlist</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Trabalhe conosco</Link>
          <Link to="/orders">Meus Pedidos</Link>
        </div>

        <div className="footer__coluna">
          <h4>Categorias</h4>
          <Link to="/products">Camisetas</Link>
          <Link to="/products">Calças</Link>
          <Link to="/products">Bonés</Link>
          <Link to="/products">Headphones</Link>
          <Link to="/products">Tênis</Link>
        </div>

        <div className="footer__coluna">
          <h4>Contato</h4>
          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <div className="footer__copy">© 2022 Digital College</div>
    </footer>
  );
};

export default Footer;