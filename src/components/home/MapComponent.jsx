import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { motion, useAnimation } from "framer-motion";

export default function MapComponent({ isContactPage }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD-HI1mylVZYOPGYm1g-L6YJgNkifsAW4o",
  });

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const center = { lat: 3.0542152625112036, lng: 101.73801388372073 };
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const address =
    "Jalan Damai Perdana 6/1E, Taman Damai Perdana, Bandar Damai Perdana, 56000 Cheras, Wilayah Persekutuan Kuala Lumpur, Malaysia";

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const element = document.getElementById("map-component");

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

  const handleMouseMove = (e) => {
    if (isTooltipVisible) {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <motion.section
      className="map-component"
      id="map-component"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
            delay: 0.4,
          },
        },
        hidden: {
          opacity: 0,
          y: -50,
        },
      }}
    >
      {isContactPage && <h1 className="loc-header">Our Location</h1>}
      <div className="loc-info flex-hori">
        <div className="map-container">
          {!isLoaded ? (
            <h1 className="loading">Loading...</h1>
          ) : (
            <GoogleMap mapContainerClassName="map" center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>
        <div
          className="address-container flex-vert"
          onMouseMove={handleMouseMove}
        >
          <motion.i
            className="fa-sharp fa-solid fa-location-dot fa-2xl"
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
          />
          <motion.h2
            className="address-name"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            Bunga Raya Fitness - CS Hypermarket 2nd Floor
          </motion.h2>
          <motion.h2
            className="address"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 },
            }}
            onMouseEnter={() => {
              setIsTooltipVisible(true);
            }}
            onMouseLeave={() => {
              setIsTooltipVisible(false);
            }}
            onClick={() => navigator.clipboard.writeText(address)}
          >
            {isTooltipVisible && (
              <div
                className="tooltip"
                style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
              >
                Copy Address to Clipboard
              </div>
            )}
            {address}
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
}
