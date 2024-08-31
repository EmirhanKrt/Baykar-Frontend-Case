import Section from '../Section';
import Link from '../Link';
import HighlightedProductCard from './ProductCard';

import './index.css';

const HighlightedProductSection = () => {
  return (
    <Section className="highlighted-product-section">
      <Section.Content className="highlighted-product-content-container">
        <div className="highlighted-product-title-container">
          <Section.Title className="flex-1 text-center lg:text-start">
            The best of the best
          </Section.Title>
          <Link
            referTo={'/sign-up'}
            isOverDarkBackground={true}
            isButton={true}
          >
            Sign up now
          </Link>
        </div>
        <div className="highlighted-product-card-container">
          <HighlightedProductCard />
        </div>
      </Section.Content>
    </Section>
  );
};

export default HighlightedProductSection;
