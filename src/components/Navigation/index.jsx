import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import Item from './Item';

import './index.css';

const Navigation = ({ children, className = '' }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'navigation',
    className
  );

  return <nav className={classNameProperty}>{children}</nav>;
};

export default Navigation;

Navigation.Item = Item;
