import './index.css';

const Overlay = ({ open, onClose }) => {
  if (open) {
    return (
      <div
        className="overlay-background overlay-open"
        onClick={onClose}
        aria-hidden="true"
      />
    );
  }

  return null;
};

export default Overlay;
