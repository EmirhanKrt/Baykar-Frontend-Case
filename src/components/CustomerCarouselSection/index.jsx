import { useState, useRef, useLayoutEffect } from 'react';

import Section from '../Section';
import Button from '../Button';

import useWindowSize from '../../hooks/useWindowSize';

import constants from '../../constants';

import Kontrastr from '../../assets/customer-carousel-section/kontrastr-logo.webp';
import Zoomer from '../../assets/customer-carousel-section/zoomer-logo.webp';
import Shells from '../../assets/customer-carousel-section/shells-logo.webp';
import ArtVenture from '../../assets/customer-carousel-section/art-venture-logo.webp';
import Waves from '../../assets/customer-carousel-section/waves-logo.webp';

import RalphEdwards from '../../assets/customer-carousel-section/ralph-edwards-image.webp';
import HellenJummy from '../../assets/customer-carousel-section/hellen-jummy-image.webp';
import HellenaJohn from '../../assets/customer-carousel-section/hellena-john-image.webp';
import DavidOshodi from '../../assets/customer-carousel-section/david-oshodi-image.webp';
import CharoletteHanlin from '../../assets/customer-carousel-section/charolette-hanlin-image.webp';

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

/* 
    The main idea of carousel is centering the current card.
    So for devices which's viewport width is more than 1024 px; adding empty cards.
*/

const CARDS_CENTER_INDEX = Math.floor(cards.length / 2);

const emptyCards = [];

for (let index = 0; index < CARDS_CENTER_INDEX; index++) {
  emptyCards.push({ key: 'empty-left-' + index.toFixed(0), isEmpty: true });
}

const CARDS_WITH_EMPTY_CENTER_INDEX = Math.floor(
  (cards.length + emptyCards.length * 2) / 2
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

const CustomerCarouselSection = () => {
  const { width } = useWindowSize();

  const [currentIndex, setCurrentIndex] = useState(
    CARDS_WITH_EMPTY_CENTER_INDEX
  );

  const carouselRef = useRef(null);

  const handleSlider = (direction) => {
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

    const targetChild = carousel.children[tempCurrentIndex];
    if (!targetChild) return null;

    const rect = targetChild.getBoundingClientRect();

    // Send user to section container's top
    // 222 is height of the section title
    // 96 is height og the header
    const offsetTop = rect.top + window.scrollY - 222 - 96;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    carousel.children[tempCurrentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });

    setCurrentIndex(tempCurrentIndex);
  };

  useLayoutEffect(() => {
    // Calculates horizontally center position and scrolls carousel
    const centerCarousel = () => {
      const carousel = carouselRef.current;
      if (!carousel || !carousel.children.length) return null;

      // Selecting target index different for desktop and mobile views because of empty cards
      const targetIndex =
        width >= 1024 ? CARDS_WITH_EMPTY_CENTER_INDEX : CARDS_CENTER_INDEX;

      const targetChild = carousel.children[targetIndex];
      if (!targetChild) return null;

      const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

      let totalWidth = 0;
      for (let i = 0; i < targetIndex; i++) {
        const item = carousel.children[i];
        totalWidth += item.offsetWidth + gap;
      }

      totalWidth += targetChild.offsetWidth / 2;

      const carouselCenter = carousel.clientWidth / 2;

      const scrollPosition = totalWidth - carouselCenter;

      carousel.scrollLeft = scrollPosition;

      return null;
    };

    centerCarousel();
  }, [width]);

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
              leftIcon={constants.SvgIcons.CustomerCarouselSection.LeftArrow}
              onClick={() => {
                handleSlider('left');
              }}
            ></Button>
            <Button
              className="customer-carousel-title-button"
              leftIcon={constants.SvgIcons.CustomerCarouselSection.RightArrow}
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
          {width >= 1024 && emptyCards && emptyCards.map(Card)}
          {cards && cards.map(Card)}
          {width >= 1024 &&
            emptyCards &&
            emptyCards
              .reverse()
              .map(({ key, isEmpty }) => ({
                key: key.replace('left', 'right'),
                isEmpty
              }))
              .map(Card)}
        </div>
        <div className="customer-carousel-background-color"></div>
      </Section.Content>
    </Section>
  );
};

export default CustomerCarouselSection;
