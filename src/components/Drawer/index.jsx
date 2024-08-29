import Overlay from '../Overlay';
import './index.css';

const Drawer = ({ open, onClose, children }) => {
  return (
    <>
      <Overlay open={open} onClose={onClose} />

      <div
        tabIndex="-1"
        className={`drawer ${open ? 'drawer-animate' : 'drawer-hidden'}`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
