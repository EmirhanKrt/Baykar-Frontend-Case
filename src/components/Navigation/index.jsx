import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import Item from './Item';

import './index.css';

const Navigation = ({ children, className = '' }) => {
  let classNameProperty = 'navigation';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return <nav className={classNameProperty}>{children}</nav>;
};

export default Navigation;

Navigation.Item = Item;
