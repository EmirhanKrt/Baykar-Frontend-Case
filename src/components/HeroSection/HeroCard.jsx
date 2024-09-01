import Section from '../Section';

import constants from '../../constants';

import BackgrounBlueTriangle from '../../assets/hero-section/triangle-blue.webp';
import BackgrounGreenTriangle from '../../assets/hero-section/triangle-green.webp';
import BackgrounPurpleCircle from '../../assets/hero-section/circle-purple.webp';

const Card = ({ src, subIconSrc, title, description }) => {
  return (
    <div className="hero-card-item" key={title}>
      <div className="hero-card-icon-container">
        {src}
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
    src: constants.SvgIcons.HeroSection.Thropy,
    subIconSrc: BackgrounBlueTriangle,
    title: 'Nibh viverra',
    description:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
  },
  {
    src: constants.SvgIcons.HeroSection.Tunnel,
    subIconSrc: BackgrounGreenTriangle,
    title: 'Cursus amet',
    description:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
  },
  {
    src: constants.SvgIcons.HeroSection.Tv,
    subIconSrc: BackgrounPurpleCircle,
    title: 'Ipsum fermentum',
    description:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
  }
];

const HeroCard = () => {
  return cardDetails.map(Card);
};

export default HeroCard;
