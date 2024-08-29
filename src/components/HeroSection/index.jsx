import Header from '../Header';
import HeroCard from './HeroCard';
import HeroContent from './HeroContent';

import './index.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Header />
      <HeroContent />
      <HeroCard />
      <div className="hero-section-right-bottom-area"></div>
    </section>
  );
};

export default HeroSection;
