import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import './index.css';

const Button = ({
  className = '',
  isOverDarkBackground = false,
  leftIcon = null,
  rightIcon = null,
  onClick = (event) => {
    console.log('Clicked Button', event.target);
  },
  children
}) => {
  let classNameProperty = '';

  if (isOverDarkBackground) classNameProperty += ' over-dark-background';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return (
    <button className={classNameProperty} onClick={onClick}>
      {leftIcon}
      {children && <div className="button-item-text">{children}</div>}
      {rightIcon}
    </button>
  );
};

export default Button;
