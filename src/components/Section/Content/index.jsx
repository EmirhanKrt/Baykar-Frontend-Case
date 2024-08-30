import { amplifyClassnamePropWithStaticClassname } from '../../../utils';

import './index.css';

const Content = ({ type = 'div', className = '', children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'content-container',
    className
  );

  switch (type) {
    case 'header':
      return <header className={classNameProperty}>{children}</header>;

    case 'footer':
      return <footer className={classNameProperty}>{children}</footer>;

    case 'div':
    default:
      return <div className={classNameProperty}>{children}</div>;
  }
};

export default Content;
