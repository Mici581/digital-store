import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import './styles.css';

const imagens = [1, 2, 3].map((n) => ({
    src: `/NikeAirForce${n}.png`,
}));

const relacionados = Array.from({ length: 4 }, (_, i) => ({
    name: 'Tênis Nike Air Force 1 Low Since',
    image: `/NikeAirForce${(i % 3) + 1}.png`,
    price: 799,
    priceDiscount: 559.3,
}));

const ProductViewPage = () => {
    return (
        <div className="produto">
            <nav className="produto__breadcrumb">
                <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{' '}
                <span>Tênis Nike Air Force 1 Low Since '82 Branco e Vermelho</span>
            </nav>

            <div className="produto__topo">
                <div className="produto__galeria">
                    <Gallery
                        images={imagens}
                        width="100%"
                        height="auto"
                        radius="4px"
                        showThumbs
                    />
                </div>

                <BuyBox
                    name="Tênis Nike Air Force 1 Low Since '82 Branco e Vermelho"
                    reference="Casual | Nike | REF:38416711"
                    stars={4}
                    rating={4.7}
                    reviews={90}
                    price={239.7}
                    priceDiscount={559.3}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                >
                    <div>
                        <p className="produto__label">Tamanho</p>
                        <ProductOptions options={['39', '40', '41', '42', '43']} />
                    </div>
                    <div>
                        <p className="produto__label">Cor</p>
                        <ProductOptions
                            options={['#ebf3f4c1', '#c11111']}
                            shape="circle"
                            type="color"
                        />
                    </div>
                </BuyBox>
            </div>

            <Section
                title="Produtos Relacionados"
                titleAlign="left"
                link={{ text: 'Ver todos', href: '/products' }}
            >
                <ProductListing products={relacionados} />
            </Section>
        </div>
    );
};

export default ProductViewPage;