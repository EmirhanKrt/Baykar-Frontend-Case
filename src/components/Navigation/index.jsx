import Item from './Item';

import './index.css';

const Navigation = ({ children, className = '' }) => {
  return (
    <nav className={`navigation${className !== '' ? ` ${className}` : ''}`}>
      {children}
    </nav>
  );
};

export default Navigation;

Navigation.Item = Item;
