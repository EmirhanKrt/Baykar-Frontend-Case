import CustomerCarouselSection from './components/CustomerCarouselSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightedProductSection from './components/HighlightedProductSection';
import WhyJoinUsSection from './components/WhyJoinUsSection';
import ScrollListener from './utils/ScrollListener';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HighlightedProductSection />
      <WhyJoinUsSection />
      <CustomerCarouselSection />
      <ScrollListener />
    </>
  );
};

export default App;
