import Link from '../Link';

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
