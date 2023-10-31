import React from "react";
import pricingData from "./assets/pricingData";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Pricing() {

  const [scroll, setScroll] = useState(0);

  const pricingVariants = {
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
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <motion.section 
    className="pricing-container" 
    id="pricing" 
    initial="hidden"
    animate="visible"
    variants={pricingVariants}>
      <h1 className="pricing-header">Pricing</h1>
      <div className="plan grid">
        {pricingData.map((item, index) => (
          <div key={index} className={`pricing-item ${item.className}`}>
            <h2>{item.group}</h2>
            <p>
              <span className="price-amt">{item.price}</span> /mo
            </p>
            <p>{item.desc}</p>
            <ul className="perks">
              {item.perks.map((perk, perkIndex) => (
                  <li key={perkIndex}>{perk}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
