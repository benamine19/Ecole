// WhyChooseUs.js
import React from 'react';
import { Grid, Typography, useMediaQuery, Box } from '@mui/material';
import image1 from '../assets/clock_12188126.png';
import image2 from '../assets/architect_6867307.png';
import image3 from '../assets/legal-document_1890467.png';
import network from "../assets/network.svg";
import idcard from "../assets/idcard.svg";
import world from "../assets/world.svg";
import ChoixCard from './ChoisCard';
import { motion } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView

// Données d'exemple pour les cartes
const services = [
  {
    title: 'Accès partout',
    description: 'Accédez aux services de manière flexible, depuis n’importe où.',
    icon: image1,
    iconColor: '#9078F7',
  },
  {
    title: 'Temps flexible',
    description: 'Contrôlez vos horaires de travail avec flexibilité.',
    icon: image2,
    iconColor: '#55CDFC',
  },
  {
    title: 'Organiser un programme',
    description: 'Gérez et organisez vos activités facilement.',
    icon: image3,
    iconColor: '#FF6A88',
  },
  {
    icon: world,
    title: "Connectez-vous de n'importe où",
    description: "Travaillez depuis n'importe quel appareil, à tout moment.",
  },
  {
    icon: network,
    title: 'Outils collaboratifs',
    description: 'Collaborez en temps réel avec vos collègues.',
  },
  {
    icon: idcard,
    title: 'Facile à utiliser',
    description: "Installez et utilisez rapidement les services.",
  },
];

const WhyChooseUs = () => {
  const isMaxWidth750 = useMediaQuery("(max-width:750px)");

  return (
    <Box sx={{ backgroundColor: '#F6F4FF',minHeight:'120vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ color: 'black', fontFamily: 'Poppins', fontSize: isMaxWidth750 ? '30px' : '35px', fontWeight: '700' }}>
          Pourquoi nous choisir
        </Typography>
      </Box>
      {/* Utilisation de Grid pour organiser les cartes */}
      <Grid 
        container 
        spacing={'10px'} // Espacement entre les cartes
        sx={{
          width: isMaxWidth750 ? '98%' : '90%',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} > {/* Contrôle de la taille des colonnes */}
            <MotionChoixCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index} // Passer l'index pour échelonner l'animation
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Composant avec animation
const MotionChoixCard = ({ title, description, icon, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation ne s'exécute qu'une seule fois
    threshold: 0.2,    // 20% visible avant le déclenchement
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initialement caché et décalé vers le bas
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animation lorsqu'il entre en vue
      transition={{ duration: 0.5, delay: index * 0.1 }} // Échelonnement basé sur l'index
    >
      <ChoixCard 
        title={title} 
        description={description} 
        icon={icon} 
      />
    </motion.div>
  );
};

export default WhyChooseUs;
