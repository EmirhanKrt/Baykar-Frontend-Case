import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightedProductSection from './components/HighlightedProductSection';
import WhyJoinUsSection from './components/WhyJoinUsSection';
import CustomerCarouselSection from './components/CustomerCarouselSection';
import GrowYourCollectionSection from './components/GrowYourCollectionSection';
import ShoesCollectedSection from './components/ShoesCollectedSection';

import ScrollListener from './utils/ScrollListener';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HighlightedProductSection />
      <WhyJoinUsSection />
      <CustomerCarouselSection />
      <GrowYourCollectionSection />
      <ShoesCollectedSection />
      <Footer />
      <ScrollListener />
    </>
  );
};

export default App;
