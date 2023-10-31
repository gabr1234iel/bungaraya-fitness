import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform email sending logic using the formData
    sendEmail(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const sendEmail = (data) => {
    // Dummy function to simulate sending an email
    console.log("Sending email:", data);
  };

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const element = document.getElementById("contact-form");

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
    <motion.section
      className="contact-form flex-vert"
      id="contact-form"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.4,
            delay: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          y: -50,
        },
      }}
    >
      <h1 className="contact-heading">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <motion.div
          className="form-group"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </motion.div>
        <motion.div
          className="form-group"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </motion.div>
        <motion.div
          className="form-group"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </motion.div>
        <motion.div
          className="form-group"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="contact-btn"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
}
