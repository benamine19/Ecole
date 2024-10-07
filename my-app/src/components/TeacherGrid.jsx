import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import TeacherImage from '../assets/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-pen-smiling-white.jpg'; // Remplace cette image par ton propre chemin

// Liste des enseignants (à personnaliser)
const teachers = [
  {
    name: 'Nolan Aminoff',
    title: 'UI UX Designer',
    image: TeacherImage,
  },
  {
    name: 'Talan Vetrovs',
    title: 'Developer',
    image: TeacherImage,
  },
  {
    name: 'Marcus Gouse',
    title: 'Digital Marketing',
    image: TeacherImage,
  },
  {
    name: 'Jaylon Torff',
    title: 'UI UX Designer',
    image: TeacherImage,
  },
];

const TeacherGrid = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f7f7f7' }}>
      {/* Titre principal */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
        Meet Our Best Teachers
      </Typography>

      {/* Grille des enseignants */}
      <Grid container spacing={4} justifyContent="center">
        {teachers.map((teacher, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TeacherCard teacher={teacher} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const TeacherCard = ({ teacher }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animation au survol
      transition={{ type: 'spring', stiffness: 300 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}
    >
      <Card sx={{ borderRadius: '16px', boxShadow: hovered ? 6 : 2, transition: 'box-shadow 0.3s' }}>
        {/* Image de l'enseignant */}
        <CardMedia
          component="img"
          height="220"
          image={teacher.image}
          alt={teacher.name}
          sx={{
            transition: 'transform 0.3s',
            transform: hovered ? 'scale(1.1)' : 'scale(1)', // Effet de zoom au survol
            borderRadius: '16px 16px 0 0',
          }}
        />
        
        {/* Contenu textuel */}
        <CardContent sx={{ textAlign: 'center', padding: 3, backgroundColor: '#ffffff' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {teacher.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {teacher.title}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ mt: 1, backgroundColor: '#6c63ff' }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeacherGrid;
