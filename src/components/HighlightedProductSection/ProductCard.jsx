import Section from '../Section';
import Link from '../Link';

import Product1Image from '../../assets/highlighted-product-section/product-1.webp';
import Product2Image from '../../assets/highlighted-product-section/product-2.webp';
import Product3Image from '../../assets/highlighted-product-section/product-3.webp';

import BackgroundRectangleBlue from '../../assets/highlighted-product-section/rectangle-blue.webp';
import BackgroundRectangleGreen from '../../assets/highlighted-product-section/rectangle-green.webp';
import BackgroundRectangleOrange from '../../assets/highlighted-product-section/rectangle-orange.webp';
import BackgroundRectanglePurple from '../../assets/highlighted-product-section/rectangle-purple.webp';
import BackgroundRectangleRed from '../../assets/highlighted-product-section/rectangle-red.webp';

import constants from '../../constants';

const BackgroundRectangle = ({ src, alt, className }) => {
  return (
    <div className={`absolute z-[-1] ${className}`} key={alt}>
      <img src={src} alt={alt} />
    </div>
  );
};

const backgroundRectangles = [
  {
    src: BackgroundRectangleRed,
    alt: 'Red Background Rectangle Image',
    className:
      'w-[202px] h-[202px] left-[21px] bottom-[-33px] lg:w-[271px] lg:h-[271px] lg:left-[-35px] lg:bottom-[25px]'
  },
  {
    src: BackgroundRectangleBlue,
    alt: 'Blue Background Rectangle Image',
    className:
      'w-[120px] h-[120px] right-[-16px] top-[140px] lg:w-[161px] lg:h-[161px] lg:left-[-20px] lg:top-[-31px]'
  },
  {
    src: BackgroundRectangleOrange,
    alt: 'Orange Background Rectangle Image',
    className:
      'w-[97px] h-[97px] left-[38px] bottom-[13px] lg:w-[130px] lg:h-[130px] lg:right-[-14px] lg:bottom-[48px] lg:left-auto'
  },
  {
    src: BackgroundRectangleGreen,
    alt: 'Green Background Rectangle Image',
    className:
      'w-[173px] h-[173px] right-[32px] top-[135px] lg:w-[232px] lg:h-[232px] lg:right-[-43px] lg:top-[33px]'
  },
  {
    src: BackgroundRectanglePurple,
    alt: 'Purple Background Rectangle Image',
    className:
      'w-[151px] h-[151px] left-[-16px] top-[54px] lg:w-[202px] lg:h-[202px] lg:left-[96px] lg:bottom-[-24px] lg:top-auto'
  }
];

const Card = ({ src, title, slug, description, backgroundRectangles }) => {
  return (
    <div className="highlighted-product-card" key={slug}>
      <div className="highlighted-product-card-image-container">
        <img
          src={src}
          alt={`${title} Image`}
          className="highlighted-product-card-image"
        />
      </div>
      <div className="highlighted-product-card-text-content-container">
        <Section.SubTitle>{title}</Section.SubTitle>
        <Section.Description>{description}</Section.Description>
      </div>
      <div className="highlighted-product-card-button-container">
        <Link
          isOverDarkBackground={true}
          referTo={`/product/${slug}`}
          leftIcon={constants.SvgIcons.HighlightedProductCard.BasketIcon}
          isButton={true}
        >
          Buy Now
        </Link>
      </div>

      {backgroundRectangles.map(BackgroundRectangle)}
    </div>
  );
};

const products = [
  {
    src: Product1Image,
    title: 'Title 1',
    slug: 'product-1',
    description:
      'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    backgroundRectangles: [backgroundRectangles[0]]
  },
  {
    src: Product2Image,
    title: 'Title 2',
    slug: 'product-2',
    description:
      'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    backgroundRectangles: [backgroundRectangles[1], backgroundRectangles[2]]
  },
  {
    src: Product3Image,
    title: 'Title 3',
    slug: 'product-3',
    description:
      'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    backgroundRectangles: [backgroundRectangles[3], backgroundRectangles[4]]
  }
];

const HighlightedProductCard = () => {
  return products.map(Card);
};

export default HighlightedProductCard;
