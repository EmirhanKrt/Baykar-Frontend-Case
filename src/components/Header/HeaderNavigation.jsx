import Navigation from '../Navigation';

const HeaderNavigationItems = ({
  referTo,
  displayText,
  isButton = false,
  target = '_top'
}) => (
  <Navigation.Item
    key={referTo}
    referTo={referTo}
    target={target}
    displayText={displayText}
    isButton={isButton}
  />
);

const navigationItems = [
  {
    referTo: 'products',
    displayText: 'Products'
  },
  {
    referTo: 'solutions',
    displayText: 'Solutions'
  },
  {
    referTo: 'pricing',
    displayText: 'Pricing'
  },
  {
    referTo: 'resources',
    displayText: 'Resources'
  },
  {
    referTo: 'log-in',
    displayText: 'Log In'
  },
  {
    referTo: 'sign-up',
    displayText: 'Sign up now',
    isButton: true
  }
];

const HeaderNavigation = ({ isMobileView = false }) => {
  return (
    <Navigation className={isMobileView ? 'mobile' : ''}>
      {navigationItems.map(HeaderNavigationItems)}
    </Navigation>
  );
};

export default HeaderNavigation;
