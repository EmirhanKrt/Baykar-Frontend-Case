import { amplifyClassnamePropWithStaticClassname } from '../../../utils';
import './index.css';

const SubTitle = ({ className = '', children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'section-sub-title',
    className
  );

  return <h4 className={classNameProperty}>{children}</h4>;
};

export default SubTitle;
