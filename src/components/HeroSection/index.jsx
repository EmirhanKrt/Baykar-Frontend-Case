import Section from '../Section';
import HeroCard from './HeroCard';
import HeroContent from './HeroContent';
import RightBottomBackgroundColorAreaComponent from './RightBottomBackgroundColorAreaComponent';

import './index.css';

const HeroSection = () => {
  return (
    <Section className="hero-section">
      <Section.Content className="hero-main-content-container">
        <HeroContent />
      </Section.Content>

      <Section.Content className="hero-card-content-container">
        <HeroCard />
      </Section.Content>

      <RightBottomBackgroundColorAreaComponent />
    </Section>
  );
};

export default HeroSection;
