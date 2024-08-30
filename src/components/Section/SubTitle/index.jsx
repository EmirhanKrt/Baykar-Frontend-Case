import { amplifyClassnamePropWithStaticClassname } from '../../../utils';
import './index.css';

const SubTitle = ({ className = '', children }) => {
  let classNameProperty = 'section-sub-title';

  classNameProperty = amplifyClassnamePropWithStaticClassname(
    classNameProperty,
    className
  );

  return <h4 className={classNameProperty}>{children}</h4>;
};

export default SubTitle;
