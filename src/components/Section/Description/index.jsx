import { amplifyClassnamePropWithStaticClassname } from '../../../utils';
import './index.css';

const Description = ({ className = '', children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'section-description',
    className
  );

  return <p className={classNameProperty}>{children}</p>;
};

export default Description;
