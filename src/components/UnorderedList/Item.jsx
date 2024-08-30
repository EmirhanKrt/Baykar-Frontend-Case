import { amplifyClassnamePropWithStaticClassname } from '../../utils';

const Item = ({ className = '', listIcon = null, children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'unordered-list-item',
    className
  );

  return (
    <li className={classNameProperty}>
      {listIcon}
      <div className="unordered-list-item-text">{children}</div>
    </li>
  );
};

export default Item;
