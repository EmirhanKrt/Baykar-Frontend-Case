import LinkButton from '../LinkButton';
import './index.css';

const Item = ({ referTo, displayText, isButton = false, target = '_top' }) => {
  if (isButton)
    return (
      <LinkButton className="navigation-item" referTo={referTo} target={target}>
        {displayText}
      </LinkButton>
    );

  return (
    <a target={target} href={referTo} className={'navigation-item'}>
      {displayText}
    </a>
  );
};

export default Item;
