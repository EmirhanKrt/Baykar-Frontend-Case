import Link from '../Link';
import './index.css';

const Item = ({ referTo, displayText, isButton = false, target = '_top' }) => {
  return (
    <Link
      target={target}
      className="navigation-item"
      referTo={referTo}
      isButton={isButton}
    >
      {displayText}
    </Link>
  );
};

export default Item;
