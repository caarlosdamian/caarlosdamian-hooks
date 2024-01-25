import { useEffect, useState } from 'react';

interface ScrollCallbacks {
  callbackUp?: () => void;
  callbackOnScroll?: () => void;
  callbackDown?: () => void;
}

export const useScroll = ({
  callbackUp = () => {},
  callbackDown = () => {},
  callbackOnScroll = () => {},
}: ScrollCallbacks = {}) => {
  const [scrollDirection, setScrollDirection] = useState('');
  const [scrollValue, setScrollValue] = useState(window.scrollY);

  const handleScroll = () => {
    callbackOnScroll();

    if (window.scrollY > scrollValue) {
      callbackDown();
      setScrollDirection('down');
    } else {
      callbackUp();
      setScrollDirection('up');
    }
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollDirection,
  };
};
