import Section from '../Section';
import Link from '../Link';

import './index.css';

const CustomerCarouselSection = () => {
  return (
    <Section className="customer-carousel-section">
      <Section.Content className="customer-carousel-content-container">
        <div className="customer-carousel-container">
          <div className="customer-carousel-container">
            <Section.Title className="text-center xl:text-start flex-1">
              Because they love us
            </Section.Title>
            <Link
              referTo={'/sign-up'}
              isOverDarkBackground={true}
              isButton={true}
            >
              Sign up now
            </Link>
          </div>
        </div>
      </Section.Content>
    </Section>
  );
};

export default CustomerCarouselSection;
