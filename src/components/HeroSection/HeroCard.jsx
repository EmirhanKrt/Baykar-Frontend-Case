import Section from '../Section';

import ThropyIcon from '../../assets/thropy-icon.svg';
import TunnelIcon from '../../assets/tunnel-icon.svg';
import TvIcon from '../../assets/tv-icon.svg';

import BlueTriangleIcon from '../../assets/blue-triangle-icon.svg';
import GreenTriangleIcon from '../../assets/green-triangle-icon.svg';
import PurpleCircleIcon from '../../assets/purple-circle-icon.svg';

const Card = ({ src, subIconSrc, title, description }) => {
  return (
    <div className="hero-card-item" key={title}>
      <div className="hero-card-icon-container">
        <img src={src} alt={title + ' Icon'} className="hero-card-main-icon" />
        <img
          src={subIconSrc}
          alt={title + ' Sub Icon'}
          className="hero-card-background-icon absolute"
        />
      </div>
      <Section.SubTitle>{title}</Section.SubTitle>
      <Section.Description className="hero-card-description">
        {description}
      </Section.Description>
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
  return cardDetails.map(Card);
};

export default HeroCard;
