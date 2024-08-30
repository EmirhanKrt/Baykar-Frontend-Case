import { amplifyClassnamePropWithStaticClassname } from '../../utils';

const Item = ({ className = '', listIcon = null, children }) => {
  let classNameProperty = 'unordered-list-item';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
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
