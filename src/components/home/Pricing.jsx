import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import pricingData from '../assets/pricingData';

export default function Pricing() {

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const element = document.getElementById("pricing");

      if (element) {
        const elementPosition = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (scrollY + innerHeight >= elementPosition && scrollY <= elementPosition + elementHeight) {
          if (!isVisible) {
            setIsVisible(true);
          }
        } else {
          if (isVisible) {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <section className="pricing-container" id="pricing">
      <h1 className="pricing-header">Pricing</h1>
      <motion.div
        className="plan grid"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.4,
              delay: 0.3, // Add a slight delay for a staggered effect
            },
          },
          hidden: {},
        }}
      >
        {pricingData.map((item, index) => (
          <motion.div
            key={index}
            className={`pricing-item ${item.className}`}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <h2>{item.group}</h2>
            <p>
              <span className="price-amt">{item.price}</span> /mo
            </p>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
