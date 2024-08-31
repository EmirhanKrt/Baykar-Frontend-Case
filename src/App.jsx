import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightedProductSection from './components/HighlightedProductSection';
import WhyJoinUsSection from './components/WhyJoinUsSection';
import CustomerCarouselSection from './components/CustomerCarouselSection';
import GrowYourCollectionSection from './components/GrowYourCollectionSection';

import ScrollListener from './utils/ScrollListener';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HighlightedProductSection />
      <WhyJoinUsSection />
      <CustomerCarouselSection />
      <GrowYourCollectionSection />
      <div className="h-20">sdgpokdsfkogsdkofg</div>
      <ScrollListener />
    </>
  );
};

export default App;
