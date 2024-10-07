// src/components/CallIconFixed.js
import React from 'react';
import { Box, Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const CallIconFixed = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000', // Ensure it stays on top
      }}
    >
      <Fab
        color="primary"
        aria-label="call"
        href="tel:+213697412620" // You can set the phone number here
        sx={{
          backgroundColor: '#4CAF50',
          '&:hover': {
            backgroundColor: '#388E3C', // Darker green on hover
          },
        }}
      >
        <PhoneIcon />
      </Fab>
    </Box>
  );
};

export default CallIconFixed;