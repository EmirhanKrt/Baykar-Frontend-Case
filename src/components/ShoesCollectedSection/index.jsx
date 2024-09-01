import Section from '../Section';

import './index.css';

import World from '../../assets/shoes-collected-section/world.webp';
import ShoeImage from '../../assets/shoes-collected-section/shoe.webp';

const greenDots = [
  {
    className: 'w-6 h-6 bottom-[111px] left-[324px]'
  },
  {
    className: 'w-6 h-6 bottom-[121px] right-[115px]'
  },
  {
    className: 'w-4 h-4 bottom-[149px] left-[371px]'
  },
  {
    className: 'w-[25px] h-[25px] bottom-[176px] right-[440px]'
  },
  {
    className: 'w-6 h-6 bottom-[270px] right-[240px]'
  },
  {
    className: 'w-4 h-4 bottom-[288px] right-[147px]'
  },
  {
    className: 'w-6 h-6 bottom-[311px] left-[210px]'
  },
  {
    className: 'w-8 h-8 top-[228px] left-[141px] bg-[#D9F99D]',
    content: (
      <div className="w-[256px] absolute bottom-[15px] left-[50%] -translate-x-1/2 flex flex-col items-center rounded-[5px]">
        <img
          src={ShoeImage}
          className="border-[5px] border-[#FFF] rounded-[10px]"
        />
        <div className="bg-[#E2E8F0] rounded-[5px] p-4 pb-2 w-[250px] font-normal text-[14px] leading-[19.6px] -mt-2 z-[-3] recently-bought ">
          Emma Simpson collected one pair of{' '}
          <span className="font-medium text-[14px] leading-[15.4px]">
            Cool Shoes
          </span>
          .
        </div>
      </div>
    )
  },
  {
    className: 'w-[30px] h-[30px] top-[168px] left-[328px]'
  },
  {
    className: 'w-4 h-4 top-[67px] left-[413px]'
  }
];

const GreenDot = ({ className, content }, index) => {
  return (
    <div
      key={index}
      className={`absolute rounded-full border-[3px] border-[#A3E635] ${className}`}
    >
      {content}
    </div>
  );
};

const ShoesCollectedSection = () => {
  return (
    <Section className="shoes-collected-section bg-[var(--primary-color)] overflow-hidden">
      <Section.Content className="shoes-collected-content-container relative h-[718px] !justify-center">
        <div className="absolute w-[1050px] h-[633px] left-0 lg:left-1/2 lg:-translate-x-1/2">
          <img
            src={World}
            className="absolute min-w-[1050px] h-full object-contain"
          />
          {greenDots.map(GreenDot)}
        </div>
        <div className="flex flex-col z-10 gap-2 lg:gap-8 mx-auto">
          <div className="font-black text-[3rem] leading-[52.8px] lg:text-[6rem] lg:leading-[105.6px] text-[#FFFBEB] text-center">
            11,658,467
          </div>
          <div className="font-bold text-[2rem] leading-[35.2px] lg:text-[3.5rem] lg:leading-[61.6px] text-[#FFFBEB] text-center">
            Shoes Collected
          </div>
        </div>
      </Section.Content>
    </Section>
  );
};

export default ShoesCollectedSection;
