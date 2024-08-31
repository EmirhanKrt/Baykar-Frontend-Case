import { useEffect, useRef, useState } from 'react';

import Section from '../Section';
import UnorderedList from '../UnorderedList';

import useWindowSize from '../../hooks/useWindowSize';

import constants from '../../constants';

import TabItemImage from '../../assets/grow-your-collection-section/tab-item-image.png';

import './index.css';

const listItems = [
  {
    listIcon: constants.SvgIcons.Search,
    displayText: 'Bibendum tellus',
    tabItemImage: TabItemImage
  },
  {
    listIcon: constants.SvgIcons.Shield,
    displayText: 'Cras eget',
    tabItemImage: TabItemImage
  },
  {
    listIcon: constants.SvgIcons.Rocket,
    displayText: 'Dolor pharetra',
    tabItemImage: TabItemImage
  },
  {
    listIcon: constants.SvgIcons.Screen,
    displayText: 'Amet, fringilla',
    tabItemImage: TabItemImage
  },
  {
    listIcon: constants.SvgIcons.Podcast,
    displayText: 'Amet nibh',
    tabItemImage: TabItemImage
  },
  {
    listIcon: constants.SvgIcons.Settings,
    displayText: 'Sed velit',
    tabItemImage: TabItemImage
  }
];

const List = ({
  hoveredItemIndex,
  setHoveredItemIndex,
  activeItemIndex,
  setActiveItemIndex
}) => {
  const { width } = useWindowSize();

  return (
    <UnorderedList>
      {listItems.map(({ listIcon, displayText }, index) => {
        return (
          <UnorderedList.Item
            key={index}
            listIcon={listIcon}
            activeIcon={width >= 1024 ? constants.SvgIcons.RightArrow : null}
            className={
              activeItemIndex === index || hoveredItemIndex === index
                ? 'active'
                : ''
            }
            onClick={() => setActiveItemIndex(index)}
            onMouseEnter={() => setHoveredItemIndex(index)}
            onMouseLeave={() => setHoveredItemIndex(null)}
          >
            {displayText}
          </UnorderedList.Item>
        );
      })}
    </UnorderedList>
  );
};

const GrowYourCollectionSection = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const tabContainerRef = useRef(null);

  const handleAnimationEnd = (e) => {
    if (e.animationName === 'fadeDown') {
      tabContainerRef.current.classList.remove('inactive');
      tabContainerRef.current.classList.add('active');
    } else if (e.animationName === 'fadeUp') {
      tabContainerRef.current.classList.remove('active');
    }
  };

  useEffect(() => {
    const tabContainer = tabContainerRef.current;

    if (!tabContainer) return;

    tabContainer.classList.add('inactive');
    tabContainer.addEventListener('animationend', handleAnimationEnd);

    return () => {
      tabContainer.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [activeItemIndex]);

  return (
    <Section className="grow-your-collection-section">
      <Section.Content className="grow-your-collection-content-container">
        <div className="flex flex-col gap-8">
          <Section.Title className="text-center lg:text-start">
            Grow your collection
          </Section.Title>
          <Section.Description className="text-center lg:text-start">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
            proin neque placerat at bibendum quam tellus.
          </Section.Description>
        </div>
      </Section.Content>
      <Section.Content className="grow-your-collection-unordered-list-and-tab-container">
        <List
          hoveredItemIndex={hoveredItemIndex}
          setHoveredItemIndex={setHoveredItemIndex}
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
        />
        <div
          className="grow-your-collection-tab-container"
          ref={tabContainerRef}
        >
          {listItems[activeItemIndex] &&
            listItems[activeItemIndex].tabItemImage && (
              <img
                src={listItems[activeItemIndex].tabItemImage}
                className="w-[600px] xl:w-[900px]"
              />
            )}
        </div>
      </Section.Content>
      <div className="grow-your-collection-background-layer-image-container">
        {constants.SvgIcons.GrowYourCollectionSectionBottomLayer}
        {constants.SvgIcons.GrowYourCollectionSectionMiddleLayer}
        {constants.SvgIcons.GrowYourCollectionSectionTopLayer}
      </div>
    </Section>
  );
};

export default GrowYourCollectionSection;
