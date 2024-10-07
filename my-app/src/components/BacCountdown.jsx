import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView

// Fonction pour calculer le temps restant jusqu'à la date cible
function calculateTimeRemaining(bacDate) {
  const now = new Date();
  const diff = bacDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

// Composant de compte à rebours pour le bac
const BacCountdown = () => {
  const isMaxWidth600 = useMediaQuery("(max-width:600px)");
  const bacDate = new Date('2025-06-10T10:41:00'); // Date et heure du bac en Algérie
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(bacDate));

  // Utilisation de useInView pour détecter l'entrée dans la vue
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation déclenchée à chaque fois que l'élément entre dans la vue
    threshold: 0.2,     // 20% visible avant le déclenchement
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Met à jour le compte à rebours chaque seconde
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(bacDate));
    }, 1000);

    return () => clearInterval(intervalId); // Nettoyage du setInterval lors du démontage du composant
  }, [bacDate]);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '40px', marginBottom: '40px' }}>
      <Grid item xs={12} sm={12} md={12}>
        {/* Motion Box pour l'animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          whileHover={{
            scale: 1.05, // Agrandit légèrement la carte au survol
            transition: { duration: 0.3 }, // Transition douce
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Box
            sx={{
              textAlign: 'center',
              borderRadius: '20px',
              minHeight: '200px',
              display: 'flex',
              width: isMaxWidth600 ? '97%' : '90%',
              padding:isMaxWidth600?'4px':'15px',
              marginRight: 'auto',
              marginLeft: 'auto',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: hovered ? '#0034aa' : '#F6F4FF', // Change background color on hover
              color: hovered ? 'white' : 'black', // Change text color on hover
              transition: 'background-color 0.5s ease, color 0.5s ease', // Smooth transition for colors
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: '800', lineHeight: '1.1', fontSize: '25px' }}>
              Compte à rebours pour le <span style={{ color: hovered ? '#106dce' : 'black',fontSize:'30px',cursor:'pointer' }}>Bac</span>
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
              <Grid item xs={3}>
                <Box sx={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', backgroundColor: hovered ? '#245fe3' : '#A38FFD', borderRadius: '10px',color:'white',cursor:'pointer' }}>
                  <Typography variant="h6">{timeRemaining.days}</Typography>
                  <Typography variant="h6" sx={{ fontSize: isMaxWidth600 ? '11px' : '14px', fontWeight: '700' }}>jours</Typography>
                  </Box>
              </Grid>
              <Grid item xs={3}>
              <Box sx={{cursor:'pointer', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', backgroundColor: hovered ? '#245fe3' : '#A38FFD', borderRadius: '10px',color:'white' }}>
              <Typography variant="h6">{timeRemaining.hours}</Typography>
              <Typography variant="h6" sx={{ fontSize: isMaxWidth600 ? '11px' : '14px', fontWeight: '700' }}>heures</Typography>
              </Box>
              </Grid>
              <Grid item xs={3}>
              <Box sx={{cursor:'pointer', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', backgroundColor: hovered ? '#245fe3' : '#A38FFD', borderRadius: '10px',color:'white' }}>
              <Typography variant="h6">{timeRemaining.minutes}</Typography>
              <Typography variant="h6" sx={{ fontSize: isMaxWidth600 ? '11px' : '14px', fontWeight: '700' }}>minutes</Typography>
              </Box>
              </Grid>
              <Grid item xs={3}>
              <Box sx={{cursor:'pointer', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', backgroundColor: hovered ? '#245fe3' : '#A38FFD', borderRadius: '10px',color:'white' }}>
              <Typography variant="h6">{timeRemaining.seconds}</Typography>
              <Typography variant="h6" sx={{ fontSize: isMaxWidth600 ? '11px' : '14px', fontWeight: '700' }}>secondes</Typography>
              </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default BacCountdown;
