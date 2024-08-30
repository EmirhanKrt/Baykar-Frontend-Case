import { useEffect } from 'react';

/* 
  Listening window's scrollY attribute for applying box shadow to "sticky header".
*/

const HEADER_BOX_SHADOW =
  'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';

const ScrollListener = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 96) {
        document.documentElement.style.setProperty(
          '--header-box-shadow',
          HEADER_BOX_SHADOW
        );
      } else {
        document.documentElement.style.removeProperty('--header-box-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollListener;
