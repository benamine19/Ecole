import { Box } from '@mui/material'
import React from 'react'
import Acceuil from '../components/Acceuil';
import FeatureGrid from '../components/FeatureGrid';
import TeacherGrid from '../components/TeacherGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import BacCountdown from '../components/BacCountdown';

function Home() {
  return (
     <Box>
                <Acceuil />
                <FeatureGrid/>
                <TeacherGrid/>
                <WhyChooseUs/>
                <BacCountdown/>
     </Box>
  )
}

export default Home