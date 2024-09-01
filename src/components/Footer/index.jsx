import Section from '../Section';
import Navigation from '../Navigation';

import constants from '../../constants';

import './index.css';

const Footer = () => {
  return (
    <Section className="footer-section">
      <Section.Content type="footer" className="footer-content-container">
        <div className="footer-navigation-container">
          <Navigation>
            <h4>Product</h4>
            <Navigation.Item displayText={'Pricing'} referTo={'pricing'} />
            <Navigation.Item displayText={'Overview'} referTo={'overview'} />
            <Navigation.Item displayText={'Browse'} referTo={'browse'} />
            <Navigation.Item
              displayText={'Accessibility'}
              referTo={'accessibility'}
            />
            <Navigation.Item displayText={'Five'} referTo={'five'} />
          </Navigation>
          <Navigation>
            <h4>Solutions</h4>
            <Navigation.Item
              displayText={'Brainstorming'}
              referTo={'brainstorming'}
            />
            <Navigation.Item displayText={'Ideation'} referTo={'ideation'} />
            <Navigation.Item
              displayText={'Wireframing'}
              referTo={'wireframing'}
            />
            <Navigation.Item displayText={'Research'} referTo={'research'} />
            <Navigation.Item displayText={'Design'} referTo={'design'} />
          </Navigation>
          <Navigation>
            <h4>Support</h4>
            <Navigation.Item
              displayText={'Contact Us'}
              referTo={'contact-us'}
            />
            <Navigation.Item
              displayText={'Developers'}
              referTo={'developers'}
            />
            <Navigation.Item
              displayText={'Documentation'}
              referTo={'documentation'}
            />
            <Navigation.Item
              displayText={'Integrations'}
              referTo={'integrations'}
            />
            <Navigation.Item displayText={'Reports'} referTo={'reports'} />
          </Navigation>
          <Navigation className="footer-social-navigation-container">
            <h4>Get the App</h4>
            <div className="footer-social-navigation-content-container">
              <Navigation.Item referTo={'app-store'}>
                {constants.SvgIcons.FooterSection.AppStore}
              </Navigation.Item>
              <Navigation.Item referTo={'google-play'}>
                {constants.SvgIcons.FooterSection.GooglePlay}
              </Navigation.Item>
              <h4 className="mt-auto !pt-12 text-[#E2E8F0]">Follow Us</h4>
              <div className="flex gap-4">
                <Navigation.Item referTo={'youtube'}>
                  {constants.SvgIcons.FooterSection.Youtube}
                </Navigation.Item>
                <Navigation.Item referTo={'facebook'}>
                  {constants.SvgIcons.FooterSection.Facebook}
                </Navigation.Item>
                <Navigation.Item referTo={'twitter'}>
                  {constants.SvgIcons.FooterSection.Twitter}
                </Navigation.Item>
                <Navigation.Item referTo={'instagram'}>
                  {constants.SvgIcons.FooterSection.Instagram}
                </Navigation.Item>
                <Navigation.Item referTo={'linked-in'}>
                  {constants.SvgIcons.FooterSection.LinkedIn}
                </Navigation.Item>
              </div>
            </div>
          </Navigation>
        </div>
        <div className="footer-text-content-container">
          <div className="flex-grow">Collers @ 2023. All rights reserved.</div>

          <Navigation className="!gap-12">
            <Navigation.Item referTo={'terms'}>Terms</Navigation.Item>
            <Navigation.Item referTo={'Privacy'}>Privacy</Navigation.Item>
            <Navigation.Item referTo={'Contact'}>Contact</Navigation.Item>
            <Navigation.Item referTo={'tr'}>
              <div className="flex gap-2">
                <span>{constants.SvgIcons.FooterSection.GlobeWorld}</span>
                <span>EN</span>
              </div>
            </Navigation.Item>
          </Navigation>
        </div>
      </Section.Content>
    </Section>
  );
};

export default Footer;
