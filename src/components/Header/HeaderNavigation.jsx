import Navigation from '../Navigation';

const HeaderNavigationItems = ({ target, displayText, isButton }) => (
  <Navigation.Item
    key={target}
    target={target}
    displayText={displayText}
    isButton={isButton}
  />
);

const navigationItems = [
  {
    target: 'products',
    displayText: 'Products'
  },
  {
    target: 'solutions',
    displayText: 'Solutions'
  },
  {
    target: 'pricing',
    displayText: 'Pricing'
  },
  {
    target: 'resources',
    displayText: 'Resources'
  },
  {
    target: 'log-in',
    displayText: 'Log In'
  },
  {
    target: 'sign-up',
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
