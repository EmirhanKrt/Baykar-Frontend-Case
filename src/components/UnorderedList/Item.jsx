import { amplifyClassnamePropWithStaticClassname } from '../../utils';

const Item = ({
  className = '',
  listIcon = null,
  activeIcon = null,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  children
}) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'unordered-list-item',
    className
  );

  return (
    <li
      className={classNameProperty}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="unordered-list-item-icon-container">{listIcon}</div>
      <div className="unordered-list-item-text">{children}</div>
      <div className="unordered-list-item-icon-container ml-auto">
        {classNameProperty.split(' ').includes('active') ? activeIcon : ''}
      </div>
    </li>
  );
};

export default Item;
