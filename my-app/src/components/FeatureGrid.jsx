import React, { useState } from 'react';
import { Grid, Box, Typography, Button, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FeatureGrid = () => {
  const items = [
    { icon: <SchoolIcon fontSize="large" />, title: "Visit", hoverTitle: "Bienvenue à l'école" },
    { icon: <GroupsIcon fontSize="large" />, title: "Learn More", hoverTitle: "Découvrez nos cours" },
    { icon: <AssignmentIcon fontSize="large" />, title: "Apply", hoverTitle: "Postulez dès maintenant" },
    { icon: <FavoriteIcon fontSize="large" />, title: "Giving", hoverTitle: "Participez à notre cause" }
  ];
  const isMinWidth750 = useMediaQuery('(min-width:750px)');
  return (
    <Grid container spacing={'2px'} sx={{width:isMinWidth750?'80%':'90%', marginRight:'auto',marginLeft:'auto',marginTop:'40px',marginBottom:'40px',boxShadow:'3px' }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <InViewMotionBox item={item} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

const InViewMotionBox = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          borderRadius: '8px',
          textAlign: 'center',
          p: 2,
          background: hovered
            ? 'linear-gradient(to top, #1460e3 100%, #ffffff 0%)' // Gradient from bottom to top
            : '#f9f9f9',
          backgroundSize: '200% 200%',
          transition: 'background-position 0.6s ease', // Smooth transition for background color
          backgroundPosition: hovered ? '0% 0%' : '0% 100%', // Animate background from bottom to top
        }}
      >
        <motion.div
          animate={{ color: hovered ? 'white' : '#000' }} // Change icon color on hover
          transition={{ duration: 0.5 }}
        >
          {item.icon}
        </motion.div>

        <Typography
          variant="h6"
          sx={{ mt: 2, color: hovered ? 'white' : 'black', transition: 'color 0.5s' }} // Text color change on hover
        >
          {hovered ? item.hoverTitle : item.title}
        </Typography>

        {/* Button to appear on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }} // Button appears with animation from bottom
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => alert(`${item.title} button clicked!`)}
          >
            En savoir plus
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default FeatureGrid;
