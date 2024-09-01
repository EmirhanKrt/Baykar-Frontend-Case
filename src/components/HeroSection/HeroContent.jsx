import Section from '../Section';
import Button from '../Button';
import Link from '../Link';

import constants from '../../constants';

import HeroSectionMainImage from '../../assets/hero-section/main-image.webp';

const HeroContent = () => {
  return (
    <>
      <div className="hero-content-text-container">
        <h2 className="hero-content-title">Collectible Sneakers</h2>
        <Section.Description className="hero-content-text">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </Section.Description>
        <div className="hero-content-button-group-container">
          <Link referTo={'/sign-up'} isButton={true}>
            Sign up now
          </Link>
          <Button leftIcon={constants.SvgIcons.HeroSection.PlayButton}>
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="hero-content-image-container">
        <img
          src={HeroSectionMainImage}
          alt="Hero Section Main Image"
          className="w-full max-w-[361px] md:w-auto xl:max-w-[486px]"
        />
      </div>
    </>
  );
};

export default HeroContent;
