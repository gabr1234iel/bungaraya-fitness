import React from "react";
import pricingData from "./assets/pricingData";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MapComponent from './home/MapComponent';

export default function Contact() {
  const contactVariants = {
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

  const handlePhoneClick = () => {
    const phoneNumber = '03-12371823';
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const emailAddress = 'support@bungarayafitness.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <motion.section
      className="ct-contact"
      id="contact"
      initial="hidden"
      animate="visible"
      variants={contactVariants}
    >
      <p className="ct-title">visit us</p>
      <MapComponent/>
      <p className="ct-title">contact us</p>
      <div className="flex-hori">
        <i className="fa fa-phone hover-mouse" onClick={handlePhoneClick}></i>
        <p className="contact-desc hover-mouse" onClick={handlePhoneClick}>03-12371823</p>
      </div>
      <div className="flex-hori">
        <i className="fa fa-envelope hover-mouse" onClick={handleEmailClick}></i>
        <p className="contact-desc hover-mouse" onClick={handleEmailClick}>fitness@bungaraya.com</p>
      </div>
      <br />
    </motion.section>
  );
}
