import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import trainingImg1 from "../assets/train1.avif";
import trainingImg2 from "../assets/train2.avif";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const element = document.querySelector(".gallery");

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

  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <section className="gallery">
      <p className="section-title">We are here to improve your health and physique in a proper and correct manner.</p>
      <motion.div
        className="gallery-grid grid"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25,
              delay: 0.3, // Add a slight delay for a staggered effect
            },
          },
          hidden: {},
        }}
      >
        <motion.div
          className="gal-mid-line"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        ></motion.div>
        <motion.div
          className="gal-left-sec"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <img src={trainingImg1} alt="training image" className="gal-img" />
        </motion.div>
        <motion.div
          className="gal-right-sec"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <img src={trainingImg2} alt="training image" className="gal-img" />
        </motion.div>
        <motion.div
          className="gal-info-1"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <p>
            Our fitness gym offers a wide range of physical activities for people of all ages and fitness levels, with a highly qualified team of professionals committed to helping clients achieve their fitness goals and promote a healthy lifestyle. Additionally, our gym is equipped with modern and high-quality equipment, providing additional services such as nutrition and physiotherapy to help clients maintain a healthy and balanced lifestyle.
          </p>
        </motion.div>
        <motion.div
          className="gal-info-2"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <p>
            Our gym is a space dedicated to health and well-being, offering a wide variety of physical activities for people of all ages and fitness levels. With a highly qualified team of professionals, we are committed to helping our clients achieve their fitness goals and promote a healthy lifestyle.
          </p>
          <motion.button
            className="contact-btn"
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
