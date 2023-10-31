import { motion } from 'framer-motion';

export default function Hero() {
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

  return (
    <motion.section
      className="hero-container grid"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="hero-grid-child-left flex-vert">
        <p id="hero-sub">Welcome to Bunga Raya Fitness </p>
        <h2 id="hero-main">Unleash Your Inner Strength</h2>
        <p className="hero-description">Transform your body and mind at Bungaraya Fitness Gym. Our state-of-the-art facility, experienced trainers, and vibrant community are here to support your fitness journey.</p>
        <button href="#membership" className="cta-button">GET STARTED</button>
      </div>
      <div className="hero-grid-child-right grid">
        <div className="mid-line"></div>
      </div>
    </motion.section>
  );
}
