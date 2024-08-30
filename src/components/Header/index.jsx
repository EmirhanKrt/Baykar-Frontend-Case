import { useCallback, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import HeaderNavigation from './HeaderNavigation';
import Drawer from '../Drawer';
import Button from '../Button';

import HamburgerMenuIcon from '../../assets/hamburger-menu-logo.svg';
import './index.css';
import Link from '../Link';

const Header = () => {
  const { width } = useWindowSize();

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  const isMobileView = width < 768;

  return (
    <header className="header content-container">
      <div className="header-logo-container">
        <Link className="header-logo" referTo={'/'}>
          <h1 style={{ all: 'unset' }}>Collers</h1>
        </Link>
      </div>

      <div className="header-navigation-container">
        {isMobileView ? (
          <>
            <div
              className="header-hamburger-menu-container"
              onClick={handleOpen}
            >
              <Button className="header-hamburger-menu">
                <img src={HamburgerMenuIcon} alt="Menu" />
              </Button>
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
