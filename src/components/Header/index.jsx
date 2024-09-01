import { useCallback, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import Section from '../Section';
import HeaderNavigation from './HeaderNavigation';
import Drawer from '../Drawer';
import Button from '../Button';
import Link from '../Link';

import constants from '../../constants';

import './index.css';
const Header = () => {
  const { width } = useWindowSize();

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  const isMobileView = width < 768;

  return (
    <Section className="header-section">
      <Section.Content type="header" className="header-content-container">
        <div className="header-logo-container">
          <Link className="header-logo-link" referTo={'/'}>
            <h1 style={{ all: 'inherit' }}>Collers</h1>
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
                  {constants.SvgIcons.Header.HamburgerMenu}
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
      </Section.Content>
    </Section>
  );
};

export default Header;
