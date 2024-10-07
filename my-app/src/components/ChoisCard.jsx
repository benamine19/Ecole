import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';
import SchoolIcon from '@mui/icons-material/School';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';

const CardContainer = styled(Box)({
  maxWidth: '260px',
  minwidth: '230px',
  width: '100%',
  height: '220px',
  minHeight:'200px',
  maxHeight:'280px',
  perspective: '1000px',
  // padding:'4px 10px',
  margin: '20px auto',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
});

const CardSide = styled(Box)(({ front }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  backfaceVisibility: 'hidden',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:front?'satrt':'center',
  gap:'10px',
  alignItems: 'center',
  zIndex: front ? 2 : 1,
  transform: front ? 'none' : 'rotateY(180deg)',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  marginRight:'auto',
  marginLeft:'auto',
}));

const ChoixCard = ({ title, description, icon}) => {
  return (
    <CardContainer>
      <CardSide front>
        <Box sx={{ fontSize: 48 }}><img src={icon} width={'50px'} /></Box>
            <Typography variant="h4" sx={{  fontFamily: 'Poppins', fontWeight: '800', lineHeight: '1.1', fontSize: '25px' }} >
                  {title}
            </Typography>
            <Typography sx={{fontFamily: 'Montserrat', fontSize:'15px',lineHeight:'1.5rem' }} >
                  {description}
            </Typography>
      </CardSide>

      <CardSide>
            <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: '800', lineHeight: '1.1', fontSize: '25px' }} >
                    {title}
            </Typography>
            <Typography sx={{  fontFamily: 'Montserrat', fontSize:'15px',lineHeight:'1.5rem' }} >
                    {description}
            </Typography>
      </CardSide>
    </CardContainer>
  );
};

export default ChoixCard;
