import Section from '../Section';
import Link from '../Link';

import Product1Image from '../../assets/product-1.png';
import Product2Image from '../../assets/product-2.png';
import Product3Image from '../../assets/product-3.png';

import BackgroundRectangleBlue from '../../assets/highlighted-product-background-rectangle-blue.png';
import BackgroundRectangleGreen from '../../assets/highlighted-product-background-rectangle-green.png';
import BackgroundRectangleOrange from '../../assets/highlighted-product-background-rectangle-orange.png';
import BackgroundRectanglePurple from '../../assets/highlighted-product-background-rectangle-purple.png';
import BackgroundRectangleRed from '../../assets/highlighted-product-background-rectangle-red.png';

const BasketIconSvg = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3333 20C9.80287 20 9.29417 19.7893 8.91909 19.4142C8.54402 19.0391 8.33331 18.5304 8.33331 18C8.33331 17.4696 8.54402 16.9609 8.91909 16.5858C9.29417 16.2107 9.80287 16 10.3333 16C10.8637 16 11.3724 16.2107 11.7475 16.5858C12.1226 16.9609 12.3333 17.4696 12.3333 18C12.3333 18.5304 12.1226 19.0391 11.7475 19.4142C11.3724 19.7893 10.8637 20 10.3333 20ZM17.3333 20C16.8029 20 16.2942 19.7893 15.9191 19.4142C15.544 19.0391 15.3333 18.5304 15.3333 18C15.3333 17.4696 15.544 16.9609 15.9191 16.5858C16.2942 16.2107 16.8029 16 17.3333 16C17.8637 16 18.3724 16.2107 18.7475 16.5858C19.1226 16.9609 19.3333 17.4696 19.3333 18C19.3333 18.5304 19.1226 19.0391 18.7475 19.4142C18.3724 19.7893 17.8637 20 17.3333 20ZM4.29531 5.923C4.04567 5.91495 3.80895 5.81012 3.6352 5.63068C3.46146 5.45125 3.36432 5.21127 3.36432 4.9615C3.36432 4.71173 3.46146 4.47175 3.6352 4.29232C3.80895 4.11288 4.04567 4.00805 4.29531 4H5.44631C6.34831 4 7.12831 4.626 7.32431 5.506L8.57731 11.148C8.77331 12.028 9.55331 12.654 10.4553 12.654H17.9673L19.4093 6.884H10.0643C9.81702 6.87272 9.5836 6.76654 9.41259 6.58755C9.24159 6.40857 9.14616 6.17055 9.14616 5.923C9.14616 5.67545 9.24159 5.43743 9.41259 5.25845C9.5836 5.07946 9.81702 4.97328 10.0643 4.962H19.4093C19.7016 4.96191 19.9901 5.02848 20.2529 5.15663C20.5156 5.28479 20.7457 5.47116 20.9256 5.70158C21.1055 5.93201 21.2305 6.20041 21.2911 6.4864C21.3517 6.77238 21.3463 7.06842 21.2753 7.352L19.8333 13.12C19.7294 13.5362 19.4892 13.9057 19.1511 14.1697C18.813 14.4337 18.3963 14.5771 17.9673 14.577H10.4553C9.5801 14.5771 8.73103 14.2787 8.04832 13.7311C7.36561 13.1835 6.89009 12.4194 6.70031 11.565L5.44631 5.923H4.29531Z"
      fill="currentColor"
    />
  </svg>
);

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
          leftIcon={BasketIconSvg}
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
