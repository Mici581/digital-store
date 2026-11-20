import ProductCard from '../ProductCard';
import './styles.css';

const ProductListing = ({ products = [] }) => {
  return (
    <div className="product-listing">
      {products.map((produto, index) => (
        <ProductCard key={index} {...produto} />
      ))}
    </div>
  );
};

export default ProductListing;