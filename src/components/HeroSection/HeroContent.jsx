import PlayButtonIcon from '../../assets/play-button-icon.svg';
import HeroSectionImage from '../../assets/hero-section-image.png';
import LinkButton from '../LinkButton';

const HeroContent = () => {
  return (
    <div className="hero-content-container content-container">
      <div className="hero-content-text-container">
        <h2 className="hero-content-title">Collectible Sneakers</h2>
        <p className="hero-content-text">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="hero-content-button-group-container">
          <LinkButton referTo={'/sign-up'}>Sign up now</LinkButton>
          <button>
            <img src={PlayButtonIcon} alt="Play Button Icon" className="" />
            <span> Watch Demo</span>
          </button>
        </div>
      </div>
      <div className="hero-content-image-container">
        <img
          src={HeroSectionImage}
          alt="Hero Section Image"
          className="max-w-[300px] xl:max-w-[486px]"
        />
      </div>
    </div>
  );
};

export default HeroContent;
