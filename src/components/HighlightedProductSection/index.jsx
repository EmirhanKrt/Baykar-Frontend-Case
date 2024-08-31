import Section from '../Section';
import Link from '../Link';
import HighlightedProductCard from './ProductCard';

import './index.css';

const HighlightedProductSection = () => {
  return (
    <Section className="highlighted-product-section">
      <Section.Content className="highlighted-product-title-container">
        <Section.Title className="flex-1 text-center">
          The best of the best
        </Section.Title>
        <Link referTo={'/sign-up'} isOverDarkBackground={true} isButton={true}>
          Sign up now
        </Link>
      </Section.Content>

      <Section.Content className="highlighted-product-card-container">
        <HighlightedProductCard />
      </Section.Content>
    </Section>
  );
};

export default HighlightedProductSection;
