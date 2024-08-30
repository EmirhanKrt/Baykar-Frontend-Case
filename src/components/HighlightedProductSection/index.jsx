import Link from '../Link';
import HighlightedProductCard from './ProductCard';

import './index.css';

const HighlightedProductSection = () => {
  return (
    <section className="highlighted-product-section section-container">
      <div className="highlighted-product-title-container content-container">
        <h3 className="flex-1">The best of the best</h3>
        <Link referTo={'/sign-up'} isOverDarkBackground={true} isButton={true}>
          Sign up now
        </Link>
      </div>
      <HighlightedProductCard />
    </section>
  );
};

export default HighlightedProductSection;
