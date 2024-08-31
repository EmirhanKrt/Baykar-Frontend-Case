import Section from '../Section';
import Link from '../Link';
import UnorderedList from '../UnorderedList';

import WindowImage from '../../assets/why-join-us-window-image.png';

import './index.css';
import WhyJoinUsImage from './WhyJoinUsImage';

const CheckMarkIcon = (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.48599 9.72989C5.35472 9.73016 5.2247 9.7045 5.10337 9.6544C4.98204 9.60429 4.87181 9.53071 4.77899 9.43789L0.536988 5.19489C0.441415 5.10271 0.365157 4.99242 0.312663 4.87046C0.26017 4.74849 0.232492 4.61729 0.231245 4.48451C0.229999 4.35174 0.255208 4.22004 0.305401 4.09711C0.355595 3.97418 0.429769 3.86248 0.523594 3.76852C0.61742 3.67456 0.729018 3.60023 0.851878 3.54986C0.974737 3.49949 1.1064 3.4741 1.23918 3.47516C1.37196 3.47622 1.50319 3.50371 1.62523 3.55603C1.74727 3.60835 1.85767 3.68445 1.94999 3.77989L5.48499 7.31489L11.85 0.951894C12.0375 0.764253 12.2919 0.658785 12.5571 0.658691C12.8224 0.658598 13.0768 0.763886 13.2645 0.951394C13.4521 1.1389 13.5576 1.39327 13.5577 1.65854C13.5578 1.92381 13.4525 2.17825 13.265 2.36589L6.19299 9.43789C6.10017 9.53071 5.98993 9.60429 5.86861 9.6544C5.74728 9.7045 5.61725 9.73016 5.48599 9.72989Z"
      fill="#15803D"
    />
  </svg>
);

const WhyJoinUsSection = () => {
  return (
    <Section className="why-join-us-section">
      <Section.Content className="why-join-us-content-container">
        <div className="why-join-us-container">
          <div className="why-join-us-text-container">
            <Section.Title className="text-center xl:text-start">
              Why join us
            </Section.Title>
            <UnorderedList className="why-join-us-text-unordered-list-container">
              <UnorderedList.Item listIcon={CheckMarkIcon}>
                Est et in pharetra magna adipiscing ornare aliquam.
              </UnorderedList.Item>
              <UnorderedList.Item listIcon={CheckMarkIcon}>
                Tellus arcu sed consequat ac velit ut eu blandit.
              </UnorderedList.Item>
              <UnorderedList.Item listIcon={CheckMarkIcon}>
                Ullamcorper ornare in et egestas dolor orci.
              </UnorderedList.Item>
            </UnorderedList>
            <div className="why-join-us-button-container">
              <Link
                referTo={'/sign-up'}
                className="w-fit z-[7]"
                isButton={true}
              >
                Sign up now
              </Link>
            </div>
          </div>
          <WhyJoinUsImage />
        </div>
      </Section.Content>
    </Section>
  );
};

export default WhyJoinUsSection;
