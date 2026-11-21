import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import './styles.css';

const slides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

const colecoes = [
  '/collection-1.png',
  '/collection-2.png',
  '/collection-3.png',
];

const produtos = Array.from({ length: 8 }, (_, i) => ({
  name: 'Tênis Nike Air Force 1 Low Since',
  image: `/NikeAirForce${(i % 3) + 1}.png`,
  price: 799,
  priceDiscount: 559.3,
}));

const HomePage = () => {
  return (
    <>
      <Gallery images={slides} width="100%" height="auto" />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="home__colecoes">
          {colecoes.map((src) => (
            <img key={src} src={src} alt="Coleção" />
          ))}
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={produtos} />
      </Section>
    </>
  );
};

export default HomePage;