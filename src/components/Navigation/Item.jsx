import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import Link from '../Link';

const Item = ({
  referTo,
  displayText,
  isButton = false,
  target = '_top',
  className = '',
  children
}) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'navigation-item',
    className
  );

  if (displayText)
    return (
      <Link
        target={target}
        className={classNameProperty}
        referTo={referTo}
        isButton={isButton}
      >
        {displayText}
      </Link>
    );

  if (children)
    return (
      <Link
        target={target}
        className={classNameProperty}
        referTo={referTo}
        isButton={isButton}
      >
        {children}
      </Link>
    );
};

export default Item;
