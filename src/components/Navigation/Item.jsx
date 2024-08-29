import './index.css';

const Item = ({ target, displayText, isButton = false }) => {
  return (
    <a
      href={`/${target}`}
      className={`navigation-item${isButton ? ' button' : ''}`}
    >
      {displayText}
    </a>
  );
};

export default Item;
