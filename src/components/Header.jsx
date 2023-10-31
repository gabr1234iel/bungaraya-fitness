import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import logo from "./assets/logo.jpeg";

export default function Header({ handlePageChange }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavButtonClick = (page) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
  
      setCurrentPage(page);
  
      setTimeout(() => {
        handlePageChange(page);
        setIsTransitioning(false);
      }, 200);
    }
  };
  

  return (
    <header className="header-container flex-hori">
      <img src={logo} alt="logo" className="header-logo" />
      {isMobile ? (
        <>
          <i className="fa-solid fa-bars fa-2xl" onClick={handleToggleSidebar}></i>
          {isSidebarOpen && <Sidebar handleNavButtonClick={handleNavButtonClick} onCloseSidebar={handleCloseSidebar} currentPage={currentPage}/>}
        </>
      ) : (
        <div className="nav-links flex-hori">
          <button
            className={currentPage === "Home" ? "button-selected" : ""}
            onClick={() => handleNavButtonClick("Home")}
          >
            Home
          </button>
          <button
            className={currentPage === "Gallery" ? "button-selected" : ""}
            onClick={() => handleNavButtonClick("Gallery")}
          >
            Gallery
          </button>
          <button
            className={currentPage === "Pricing" ? "button-selected" : ""}
            onClick={() => handleNavButtonClick("Pricing")}
          >
            Pricing
          </button>
          <button
            className={currentPage === "Contact" ? "button-selected" : ""}
            onClick={() => handleNavButtonClick("Contact")}
          >
            Contact
          </button>
          <button
            className={currentPage === "Register" ? "button-selected register-btn" : "register-btn"}
            onClick={() => handleNavButtonClick("Register")}
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
}

function Sidebar({ handleNavButtonClick, onCloseSidebar, currentPage }) {
  const sidebarVariants = {
    initial: {
      x: "100%",
    },
    enter: {
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="sidebar"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={sidebarVariants}
    >
      <i className="fa-solid fa-xmark fa-2xl close-sidebar" onClick={onCloseSidebar}></i>
      <ul className="sidebar-links">
        <li
          className={currentPage === "Home" ? "button-selected" : ""}
          onClick={() => handleNavButtonClick("Home")}
        >
          Home
        </li>
        <li
          className={currentPage === "Gallery" ? "button-selected" : ""}
          onClick={() => handleNavButtonClick("Gallery")}
        >
          Gallery
        </li>
        <li
          className={currentPage === "Pricing" ? "button-selected" : ""}
          onClick={() => handleNavButtonClick("Pricing")}
        >
          Pricing
        </li>
        <li
          className={currentPage === "Contact" ? "button-selected" : ""}
          onClick={() => handleNavButtonClick("Contact")}
        >
          Contact
        </li>
        <li
          className={currentPage === "Register" ? "button-selected" : ""}
          onClick={() => handleNavButtonClick("Register")}
        >
          Register
        </li>
      </ul>
    </motion.div>
  );
}
