import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import Item from './Item';

import './index.css';

const UnorderedList = ({ className = '', children }) => {
  let classNameProperty = 'unordered-list';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return <ul className={classNameProperty}>{children}</ul>;
};

export default UnorderedList;

UnorderedList.Item = Item;
