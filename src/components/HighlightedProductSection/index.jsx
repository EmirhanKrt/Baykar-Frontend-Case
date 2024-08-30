import LinkButton from '../LinkButton';
import './index.css';
import HighlightedProductCard from './ProductCard';

const HighlightedProductSection = () => {
  return (
    <section className="highlighted-product-section">
      <div className="highlighted-product-title-container content-container">
        <h3>The best of the best</h3>
        <LinkButton isOverDarkBackground={true} referTo={'/sign-up'}>
          Sign up now
        </LinkButton>
      </div>
      <HighlightedProductCard />
    </section>
  );
};

export default HighlightedProductSection;
