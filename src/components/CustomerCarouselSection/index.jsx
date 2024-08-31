import { useState, useRef, useLayoutEffect, useCallback } from 'react';

import Section from '../Section';
import Button from '../Button';

import useWindowSize from '../../hooks/useWindowSize';

import Kontrastr from '../../assets/customer-carousel-section/kontrastr-logo.png';
import Zoomer from '../../assets/customer-carousel-section/zoomer-logo.png';
import Shells from '../../assets/customer-carousel-section/shells-logo.png';
import ArtVenture from '../../assets/customer-carousel-section/art-venture-logo.png';
import Waves from '../../assets/customer-carousel-section/waves-logo.png';

import RalphEdwards from '../../assets/customer-carousel-section/ralph-edwards-image.jpg';
import HellenJummy from '../../assets/customer-carousel-section/hellen-jummy-image.jpg';
import HellenaJohn from '../../assets/customer-carousel-section/hellena-john-image.jpg';
import DavidOshodi from '../../assets/customer-carousel-section/david-oshodi-image.jpg';
import CharoletteHanlin from '../../assets/customer-carousel-section/charolette-hanlin-image.jpg';

import './index.css';

const cards = [
  {
    companyLogo: Kontrastr,
    comment:
      'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
    commentedBy: {
      name: 'Ralph Edwards',
      image: RalphEdwards,
      position: 'Product Designer'
    },
    key: 'content-1'
  },
  {
    companyLogo: Zoomer,
    comment:
      'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    commentedBy: {
      name: 'Hellen Jummy',
      image: HellenJummy,
      position: 'Team Lead'
    },
    key: 'content-2'
  },
  {
    companyLogo: Shells,
    comment:
      'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
    commentedBy: {
      name: 'Hellena John',
      image: HellenaJohn,
      position: 'Co-founder'
    },
    key: 'content-3'
  },
  {
    companyLogo: ArtVenture,
    comment:
      'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
    commentedBy: {
      name: 'David Oshodi',
      image: DavidOshodi,
      position: 'Manager'
    },
    key: 'content-4'
  },
  {
    companyLogo: Waves,
    comment:
      'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
    commentedBy: {
      name: 'Charolette Hanlin',
      image: CharoletteHanlin,
      position: 'CEO'
    },
    key: 'content-5'
  },
  {
    companyLogo: Kontrastr,
    comment:
      'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
    commentedBy: {
      name: 'Ralph Edwards',
      image: RalphEdwards,
      position: 'Product Designer'
    },
    key: 'content-6'
  },
  {
    companyLogo: Zoomer,
    comment:
      'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    commentedBy: {
      name: 'Hellen Jummy',
      image: HellenJummy,
      position: 'Team Lead'
    },
    key: 'content-7'
  }
];

const CARDS_CENTER_INDEX = Math.floor(cards.length / 2);

const emptyCards = [];

for (let index = 0; index < CARDS_CENTER_INDEX; index++) {
  emptyCards.push({ key: 'empty-left-' + index.toFixed(0), isEmpty: true });
}

const CARDS_WITH_EMPTY_CENTER_INDEX = Math.floor(
  (cards.length + emptyCards.length * 2) / 2
);

const leftArrowSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18L6 12Z"
      fill="currentColor"
    />
    <path
      d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rightArrowSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18L18.5 12Z"
      fill="currentColor"
    />
    <path
      d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Card = ({ companyLogo, comment, commentedBy, key, isEmpty = false }) => {
  if (isEmpty)
    return <div className="customer-carousel-slider-card" key={key}></div>;

  return (
    <div className="customer-carousel-slider-card not-empty" key={key}>
      <div className="customer-carousel-slider-card-logo-container">
        <img src={companyLogo} />
      </div>
      <Section.Description className="customer-carousel-slider-card-description">
        {comment}
      </Section.Description>
      <div className="customer-carousel-slider-card-customer-container">
        <img
          className="customer-carousel-slider-card-customer-avatar"
          src={commentedBy && commentedBy.image}
        />
        <div className="customer-carousel-slider-card-customer-detailes-container">
          <span className="customer-carousel-slider-card-customer-name">
            {commentedBy && commentedBy.name}
          </span>
          <span className="customer-carousel-slider-card-customer-position">
            {commentedBy && commentedBy.position}
          </span>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  const { width } = useWindowSize();

  const isDesktopView = width >= 1024;

  return (
    <>
      {isDesktopView && emptyCards && emptyCards.map(Card)}
      {cards && cards.map(Card)}
      {isDesktopView &&
        emptyCards &&
        emptyCards
          .reverse()
          .map(({ key, isEmpty }) => ({
            key: key.replace('left', 'right'),
            isEmpty
          }))
          .map(Card)}
    </>
  );
};

const CustomerCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(
    CARDS_WITH_EMPTY_CENTER_INDEX
  );

  const carouselRef = useRef(null);

  const handleSlider = useCallback(
    (direction) => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      let tempCurrentIndex = currentIndex;

      switch (direction) {
        case 'left':
          tempCurrentIndex = Math.max(
            tempCurrentIndex - 1,
            CARDS_WITH_EMPTY_CENTER_INDEX - CARDS_CENTER_INDEX
          );

          break;

        case 'right':
          tempCurrentIndex = Math.min(
            tempCurrentIndex + 1,
            CARDS_WITH_EMPTY_CENTER_INDEX + CARDS_CENTER_INDEX
          );
          break;

        default:
          break;
      }

      carousel.children[tempCurrentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });

      setCurrentIndex(tempCurrentIndex);
    },
    [currentIndex]
  );

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const middlePosition = (carousel.scrollWidth - carousel.clientWidth) / 2;
    carousel.scrollLeft = middlePosition;
  }, []);

  return (
    <Section className="customer-carousel-section">
      <Section.Content className="customer-carousel-title-content-container">
        <div className="customer-carousel-title-container">
          <Section.Title className="text-center lg:text-start flex-1">
            Because they love us
          </Section.Title>
          <div className="customer-carousel-title-button-container">
            <Button
              className="customer-carousel-title-button"
              leftIcon={leftArrowSvg}
              onClick={() => {
                handleSlider('left');
              }}
            ></Button>
            <Button
              className="customer-carousel-title-button"
              leftIcon={rightArrowSvg}
              onClick={() => {
                handleSlider('right');
              }}
            ></Button>
          </div>
        </div>
      </Section.Content>

      <Section.Content className="customer-carousel-card-content-container">
        <div
          ref={carouselRef}
          className="customer-carousel-card-slider-container"
        >
          <Slider />
        </div>
        <div className="customer-carousel-background-color"></div>
      </Section.Content>
    </Section>
  );
};

export default CustomerCarouselSection;
