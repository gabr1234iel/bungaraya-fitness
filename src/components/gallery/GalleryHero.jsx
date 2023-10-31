import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GalleryHero() {
  const [scroll, setScroll] = useState(0);

  const heroVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      className="hero-container grid"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <h2 id="hero-main">Our Gallery</h2>
      <p className="hero-description g-hero">
        Experience the Power of Fitness: Discover our inspiring Gym Gallery, showcasing the strength, energy, and achievements of our members. Witness the transformation and be motivated to embark on your own fitness journey.
      </p>
      <div className={`arrow animated ${scroll >= 1 ? 'fade' : ''}`}>
        <i className="fa-sharp fa-solid fa-angle-down fa-bounce fa-2xl"></i>
      </div>
    </motion.section>
  );
}
