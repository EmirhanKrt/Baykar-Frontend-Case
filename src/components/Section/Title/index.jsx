import { amplifyClassnamePropWithStaticClassname } from '../../../utils';
import './index.css';

const Title = ({ className = '', children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'section-title',
    className
  );

  return <h3 className={classNameProperty}>{children}</h3>;
};

export default Title;
