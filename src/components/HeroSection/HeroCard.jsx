import ThropyIcon from '../../assets/thropy-icon.svg';
import TunnelIcon from '../../assets/tunnel-icon.svg';
import TvIcon from '../../assets/tv-icon.svg';
import BlueTriangleIcon from '../../assets/blue-triangle-icon.svg';
import GreenTriangleIcon from '../../assets/green-triangle-icon.svg';
import PurpleCircleIcon from '../../assets/purple-circle-icon.svg';

const Card = ({ src, subIconSrc, title, description }) => {
  return (
    <div
      className="items-center flex flex-col gap-4 md:items-start"
      key={title}
    >
      <div className="relative">
        <img src={src} alt={title + ' Icon'} className="z-10 relative" />
        <img
          src={subIconSrc}
          alt={title + ' Sub Icon'}
          className="absolute left-8 top-0"
        />
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="font-normal text-center md:text-start">{description}</p>
    </div>
  );
};

const cardDetails = [
  {
    src: ThropyIcon,
    subIconSrc: BlueTriangleIcon,
    title: 'Nibh viverra',
    description:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
  },
  {
    src: TunnelIcon,
    subIconSrc: GreenTriangleIcon,
    title: 'Cursus amet',
    description:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
  },
  {
    src: TvIcon,
    subIconSrc: PurpleCircleIcon,
    title: 'Ipsum fermentum',
    description:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
  }
];

const HeroCard = () => {
  return (
    <div className="hero-section-card content-container">
      {cardDetails.map(Card)}
    </div>
  );
};

export default HeroCard;
