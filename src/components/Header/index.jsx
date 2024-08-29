import { useCallback, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import HeaderNavigation from './HeaderNavigation';
import Drawer from '../Drawer';

import HamburgerMenuIcon from '../../assets/hamburger-menu-logo.svg';
import './index.css';

const Header = () => {
  const { width } = useWindowSize();

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  const isMobileView = width < 768;

  return (
    <header className="header content-container">
      <div className="header-logo-container">
        <a href="/" className="header-logo">
          Collers
        </a>
      </div>

      <div className="header-navigation-container">
        {isMobileView ? (
          <>
            <div
              className="header-hamburger-menu-container"
              onClick={handleOpen}
            >
              <button className="header-hamburger-menu">
                <img src={HamburgerMenuIcon} alt="Menu" />
              </button>
            </div>

            <Drawer open={open} onClose={handleClose}>
              <HeaderNavigation isMobileView={true} />
            </Drawer>
          </>
        ) : (
          <HeaderNavigation />
        )}
      </div>
    </header>
  );
};

export default Header;
