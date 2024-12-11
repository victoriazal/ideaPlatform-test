import React, { useEffect, useState } from 'react';
import arrowUpIcon from '../../../assets/icons/arrowUpIcon.png';
import './ScrollToTopButton.scss';

const ScrollToTopButton: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src={arrowUpIcon} alt="Scroll to top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;