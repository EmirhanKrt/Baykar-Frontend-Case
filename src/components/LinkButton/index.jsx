const LinkButton = ({
  referTo,
  target = '_top',
  className = '',
  isOverDarkBackground = false,
  children
}) => {
  let classNameProperty = 'button';

  if (isOverDarkBackground) classNameProperty += ' over-dark-background';

  if (className !== '') classNameProperty += ` ${className}`;

  return (
    <a className={classNameProperty} href={referTo} target={target}>
      {children}
    </a>
  );
};

export default LinkButton;
