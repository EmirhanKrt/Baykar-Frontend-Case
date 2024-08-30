import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import Item from './Item';

import './index.css';

const UnorderedList = ({ className = '', children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'unordered-list',
    className
  );

  return <ul className={classNameProperty}>{children}</ul>;
};

export default UnorderedList;

UnorderedList.Item = Item;
