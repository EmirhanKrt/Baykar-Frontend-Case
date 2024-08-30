import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import './index.css';

const Link = ({
  referTo,
  target = '_top',
  className = '',
  isOverDarkBackground = false,
  leftIcon = null,
  rightIcon = null,
  isButton = false,
  children
}) => {
  let classNameProperty = '';

  if (isButton) classNameProperty = 'button';

  if (isOverDarkBackground) classNameProperty += ' over-dark-background';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return (
    <a className={classNameProperty} href={referTo} target={target}>
      {leftIcon}
      <div className="link-item-text">{children}</div>
      {rightIcon}
    </a>
  );
};

export default Link;
