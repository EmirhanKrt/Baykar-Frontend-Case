import { amplifyClassnamePropWithStaticClassname } from '../../../utils';
import './index.css';

const Title = ({ className = '', children }) => {
  let classNameProperty = 'section-title';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return <h3 className={classNameProperty}>{children}</h3>;
};

export default Title;
