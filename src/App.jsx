import { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx'
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header handlePageChange={handlePageChange} />
      {currentPage === "Home" && <Home />}
      {currentPage === "Gallery" && <Gallery />}
      {currentPage === "Pricing" && <Pricing />}
      {currentPage === "Contact" && <Contact />}
      <Footer />
    </>
  );
}



