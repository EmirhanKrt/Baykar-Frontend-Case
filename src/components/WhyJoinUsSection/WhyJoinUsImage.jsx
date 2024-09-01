import MainImage from '../../assets/why-join-us-section/main-image.webp';

import BackgroundCircleBlue from '../../assets/why-join-us-section/circle-blue.webp';
import BackgroundCircleGreen from '../../assets/why-join-us-section/circle-green.webp';
import BackgroundRectangleYellow from '../../assets/why-join-us-section/rectangle-yellow.webp';
import BackgroundRectangleOrange from '../../assets/why-join-us-section/rectangle-orange.webp';
import BackgroundRectanglePurple from '../../assets/why-join-us-section/rectangle-purple.webp';
import BackgroundRectangleRed from '../../assets/why-join-us-section/rectangle-red.webp';

const BackgroundImage = ({ src, alt, className, imgClassName }) => {
  return (
    <div className={`absolute ${className}`} key={alt}>
      <img src={src} alt={alt} className={imgClassName ? imgClassName : ''} />
    </div>
  );
};

const backgroundImages = [
  {
    src: BackgroundCircleBlue,
    alt: 'Blue Background Circle Image',
    className:
      'z-[7] w-[36px] h-[37px] right-[43px] top-[-42px] xl:right-[23px] xl:top-[-88px] xl:w-[59px] xl:h-[60px]'
  },
  {
    src: BackgroundCircleGreen,
    alt: 'Green Background Circle Image',
    className:
      'z-[7] w-[49px] h-[50px] left-[43px] bottom-[-19px] xl:left-[70px] xl:bottom-[-36px] xl:w-[85px] xl:h-[86px]'
  },
  {
    src: BackgroundRectangleYellow,
    alt: 'Yellow Background Rectangle Image',
    className:
      '-rotate-45 z-[5] min-h-[135px] left-[-69px] top-[54px] xl:left-[-96px] xl:top-[71px]',
    imgClassName: 'xl:max-w-none'
  },
  {
    src: BackgroundRectangleOrange,
    alt: 'Orange Background Rectangle Image',
    className:
      'z-[5] w-[56px] h-[56px] left-[-22px] top-[26px] xl:left-[-20px] xl:top-[25px] xl:w-[90px] xl:h-[90px]'
  },
  {
    src: BackgroundRectanglePurple,
    alt: 'Purple Background Rectangle Image',
    className:
      'z-[4] w-[46px] h-[46px] right-[57px] bottom-[-20px] xl:right-[63px] xl:bottom-[-44px] xl:w-[74px] xl:h-[74px]'
  },
  {
    src: BackgroundRectangleRed,
    alt: 'Red Background Rectangle Image',
    className:
      'z-[5] w-[135px] h-[135px] right-[-55px] bottom-[-60px] xl:right-[-118px] xl:bottom-[-109px] xl:w-[218px] xl:h-[218px]'
  }
];

const WhyJoinUsImage = () => {
  return (
    <div className="why-join-us-image-container">
      <img
        src={MainImage}
        alt="Why Join Us Section Main Image"
        className="why-join-us-main-image"
      />
      {backgroundImages.map(BackgroundImage)}
    </div>
  );
};

export default WhyJoinUsImage;
