// src/components/Acceuil.js

import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import image1 from '../assets/2_5.jpg';
import image2 from '../assets/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg';
import image3 from '../assets/vasily-koloda-8CqDvPuo_kI-unsplash.jpg';
import 'react-image-gallery/styles/css/image-gallery.css';
import './custom-image-gallery.css';

const Acceuil = () => {
    const isBetween250and400 = useMediaQuery('(max-width: 400px) and (min-width: 250px)');
    const isBetween400and600 = useMediaQuery('(max-width: 600px) and (min-width: 400px)');
    const isBetween600and890 = useMediaQuery('(max-width: 890px) and (min-width: 600px)');
    const isMinWidth890 = useMediaQuery('(min-width: 890px)');
    const isMinWidth750 = useMediaQuery('(min-width: 750px)');
    const isMinWidth500 = useMediaQuery('(min-width: 500px)');
    const isMaxWidth950 = useMediaQuery('(max-width: 950px)');


    const images = [
        {
            original: image3,
            originalAlt: 'Startup 1',
            customContent: (
                <Box>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'orange', 
                        fontFamily: 'Poppins', 
                        fontSize: isBetween250and400 ? '15px' : isBetween400and600 ? '20px' : '25px', 
                        fontWeight: '800' 
                    }}
                >
                    Là où l'innovation rejoint l'excellence
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'white', 
                        fontFamily: 'Poppins', 
                        fontSize: isBetween250and400 ? '30px' : isBetween400and600 ? '45px' : '60px', 
                        fontWeight: '800' 
                    }}
                >
                    Tech-lablab-DEV
                </Typography>
                <Typography 
                    sx={{ 
                        marginTop: '16px', 
                        fontFamily: 'Montserrat', 
                        fontSize: isBetween250and400 ? '13px' : '19px', 
                        maxWidth: '90%' 
                    }}
                >
                    Experts en création de logiciels,{isMaxWidth950 && <br/>} sites internet et applications mobiles
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '32px',
                        backgroundColor: '#ff7f11',
                        '&:hover': {
                            backgroundColor: '#e0690b',
                        },
                    }}
                >
                    Découvrez
                </Button>
            </Box>
            ),
        },
        {
            original: image2,
            originalAlt: 'Startup 2',
            customContent: (
                <Box>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'orange', 
                        fontFamily: 'Poppins', 
                        fontSize: isBetween250and400 ? '15px' : isBetween400and600 ? '20px' : '25px', 
                        fontWeight: '800' 
                    }}
                >
                    Là où l'innovation rejoint l'excellence
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'white', 
                        fontFamily: 'Poppins', 
                        fontSize: isBetween250and400 ? '30px' : isBetween400and600 ? '45px' : '60px', 
                        fontWeight: '800' 
                    }}
                >
                    Tech-lablab-DEV
                </Typography>
                <Typography 
                    sx={{ 
                        marginTop: '16px', 
                        fontFamily: 'Montserrat', 
                        fontSize: isBetween250and400 ? '13px' : '19px', 
                        maxWidth: '90%' 
                    }}
                >
                    Experts en création de logiciels,{isMaxWidth950 && <br/>} sites internet et applications mobiles
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '32px',
                        backgroundColor: '#ff7f11',
                        '&:hover': {
                            backgroundColor: '#e0690b',
                        },
                    }}
                >
                    Découvrez
                </Button>
            </Box>
            ),
        },
        {
            original: image3,
            originalAlt: 'Startup 2',
            customContent: (
                <Box>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'orange', 
                        fontFamily: 'Poppins', 
                        fontSize: isBetween250and400 ? '15px' : isBetween400and600 ? '20px' : '25px', 
                        fontWeight: '800' 
                    }}
                >
                    Là où l'innovation rejoint l'excellence
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'white', 
                        fontFamily: 'Poppins', 
                        fontSize: isBetween250and400 ? '30px' : isBetween400and600 ? '45px' : '60px', 
                        fontWeight: '800' 
                    }}
                >
                    Tech-lablab-DEV
                </Typography>
                <Typography 
                    sx={{ 
                        marginTop: '16px', 
                        fontFamily: 'Montserrat', 
                        fontSize: isBetween250and400 ? '13px' : '19px', 
                        maxWidth: '90%' 
                    }}
                >
                    Experts en création de logiciels,{isMaxWidth950 && <br/>} sites internet et applications mobiles
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '32px',
                        backgroundColor: '#ff7f11',
                        '&:hover': {
                            backgroundColor: '#e0690b',
                        },
                    }}
                >
                    Découvrez
                </Button>
            </Box>
            ),
        },
    ];

    const renderCustomItem = (item) => (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${item.original})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding:isMinWidth750?'20px':'0px',
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width:'100%',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    padding: '20px',
                    borderRadius: '10px',
                    maxWidth: '90%',
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    fontSize: isBetween250and400 ? '12px' : 'inherit', // Adjusting font size for small screens
                }}
            >
                {item.customContent}
            </Box>
        </Box>
    );

    return (
        <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <ImageGallery
                items={images}
                renderItem={renderCustomItem}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
            />
        </Box>
    );
};

export default Acceuil;