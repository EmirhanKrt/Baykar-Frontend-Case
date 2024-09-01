import Section from '../Section';
import Link from '../Link';
import UnorderedList from '../UnorderedList';

import constants from '../../constants';

import './index.css';
import WhyJoinUsImage from './WhyJoinUsImage';

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
              <UnorderedList.Item
                listIcon={constants.SvgIcons.WhyJoinUs.CheckMark}
              >
                Est et in pharetra magna adipiscing ornare aliquam.
              </UnorderedList.Item>
              <UnorderedList.Item
                listIcon={constants.SvgIcons.WhyJoinUs.CheckMark}
              >
                Tellus arcu sed consequat ac velit ut eu blandit.
              </UnorderedList.Item>
              <UnorderedList.Item
                listIcon={constants.SvgIcons.WhyJoinUs.CheckMark}
              >
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
