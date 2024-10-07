import React, { useEffect, useRef } from 'react'
import { Outlet, Link, Navigate, useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import ScrollToTopButton from '../components/ScrollToTopButton';
import CallIconFixed from '../components/CallIconFixed';
import Navabre from '../components/Navabre';
  

function Layout() {
  const containerRef = useRef(null); // Référence au conteneur principal
  const location = useLocation(); // Obtenir la localisation actuelle
  useEffect(() => {
      if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll au conteneur à chaque changement de route
      }

  }, [location]);


  return (
    <Box ref={containerRef}>
            <CallIconFixed /> {/* Call icon fixed */}
            <ScrollToTopButton containerRef={containerRef} />
            <Navabre />
            <Outlet />
            <Footer/>
    </Box>
  )
}

export default Layout