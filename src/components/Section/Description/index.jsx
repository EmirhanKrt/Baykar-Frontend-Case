import { amplifyClassnamePropWithStaticClassname } from '../../../utils';
import './index.css';

const Description = ({ className = '', children }) => {
  let classNameProperty = 'section-description';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return <p className={classNameProperty}>{children}</p>;
};

export default Description;
