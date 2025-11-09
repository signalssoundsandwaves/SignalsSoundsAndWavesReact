// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top whenever pathname changes
  }, [pathname]);

  return null; // component doesn’t render anything
}

export default ScrollToTop;
