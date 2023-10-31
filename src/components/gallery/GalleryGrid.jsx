import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GalleryGrid() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const elementRefs = useRef([]);

  const placeholders = [
    { className: 'lg-square', content: 'Placeholder 1' },
    { className: 'lg-rect-hori', content: 'Placeholder 2' },
    { className: 'lg-rect-hori', content: 'Placeholder 3' },
    { className: 'lg-square', content: 'Placeholder 4' },
    { className: 'sm-square', content: 'Placeholder 5' },
    { className: 'lg-rect-vert', content: 'Placeholder 6' },
    { className: 'sm-square', content: 'Placeholder 7' },
    { className: 'sm-square', content: 'Placeholder 8' },
    { className: 'sm-square', content: 'Placeholder 9' },
    { className: 'lg-square', content: 'Placeholder 10' },
    { className: 'sm-square', content: 'Placeholder 11' },
    { className: 'sm-square', content: 'Placeholder 12' },
    { className: 'sm-rect-vert', content: 'Placeholder 13' },
    { className: 'sm-square', content: 'Placeholder 14' },
    { className: 'sm-square', content: 'Placeholder 15' },
    { className: 'sm-rect-hori', content: 'Placeholder 16' },
    { className: 'lg-rect-vert', content: 'Placeholder 17' },
    { className: 'sm-square', content: 'Placeholder 18' },
    { className: 'sm-square', content: 'Placeholder 19' },
    { className: 'sm-square', content: 'Placeholder 20' },
    { className: 'sm-square', content: 'Placeholder 21' },
    { className: 'sm-square', content: 'Placeholder 22' },
    { className: 'sm-square', content: 'Placeholder 23' },
    { className: 'sm-rect-hori', content: 'Placeholder 24' },
    { className: 'sm-square', content: 'Placeholder 25' },
    { className: 'sm-square', content: 'Placeholder 26' },
    { className: 'sm-square', content: 'Placeholder 27' },
    { className: 'lg-rect-vert', content: 'Placeholder 28' },
    { className: 'sm-rect-hori', content: 'Placeholder 29' },
    { className: 'sm-square', content: 'Placeholder 30' },
    { className: 'sm-square', content: 'Placeholder 31' },
    { className: 'lg-square', content: 'Placeholder 32' },
    { className: 'sm-rect-vert', content: 'Placeholder 33' },
    { className: 'sm-square', content: 'Placeholder 34' },
    { className: 'lg-rect-hori', content: 'Placeholder 35' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    elementRefs.current = elementRefs.current.slice(0, placeholders.length);
  }, [placeholders]);

  const isVisible = (el) => {
    if (!el || !el.getBoundingClientRect) return false; // Check if element or getBoundingClientRect is available
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isInitialVisible = rect.top >= 0 && rect.bottom <= windowHeight;
    return isInitialVisible || (rect.top <= windowHeight && rect.bottom >= 0);
  };


  const motionVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
    
     <div className="gal-gallery grid">
      {placeholders.map((placeholder, index) => (
        <motion.div
          key={index}
          className={placeholder.className}
          variants={motionVariants}
          initial="hidden"
          animate={isVisible(elementRefs.current[index]) ? 'visible' : 'hidden'}
          ref={(el) => (elementRefs.current[index] = el)}
        >
          {placeholder.content}
        </motion.div>
      ))}
    </div>
    </>
  );
}
