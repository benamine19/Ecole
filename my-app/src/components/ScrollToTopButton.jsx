import React from 'react';
import { Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = ({ containerRef }) => { // Recevoir la référence

  const handleScrollToTop = () => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll au conteneur
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fab
        color="secondary"
        aria-label="scroll to top"
        onClick={handleScrollToTop} // Ajouter le gestionnaire d'événements
        sx={{
          backgroundColor: '#1872cb',
          '&:hover': {
            backgroundColor: '#045aae',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default ScrollToTopButton;