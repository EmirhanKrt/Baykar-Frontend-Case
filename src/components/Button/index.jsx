import './index.css';

const Button = ({ className = '', isOverDarkBackground = false, children }) => {
  let classNameProperty = '';

  if (isOverDarkBackground) classNameProperty += ' over-dark-background';

  if (className !== '') classNameProperty += className;

  return <button className={classNameProperty}>{children}</button>;
};

export default Button;
