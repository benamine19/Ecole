import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0d0d24', color: 'white', py: 5 }}>
      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* FT Learning Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="#cfa3ff" gutterBottom>
            FT Learning
          </Typography>
          <Typography variant="body2" color="#c4c4c4">
            About pages are perfect spaces to talk about where you started, how you've grown, and the ideals that have helped your organization mature.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="#" color="#cfa3ff" sx={{ mr: 2 }}><InstagramIcon /></Link>
            <Link href="#" color="#cfa3ff" sx={{ mr: 2 }}><SendIcon /></Link>
            <Link href="#" color="#cfa3ff" sx={{ mr: 2 }}><LinkedInIcon /></Link>
            <Link href="#" color="#cfa3ff" sx={{ mr: 2 }}><TwitterIcon /></Link>
          </Box>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="#cfa3ff" gutterBottom>
            Address
          </Typography>
          <Typography variant="body2" color="#c4c4c4">
            1090 A/01 Richmond Avenue,<br />
            Houston, NY 7704, USA
          </Typography>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="#cfa3ff" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" color="#c4c4c4">
            +123 456 789 147<br />
            example@gmail.com
          </Typography>
          <Typography variant="h6" color="#cfa3ff" sx={{ mt: 2 }} gutterBottom>
            Office
          </Typography>
          <Typography variant="body2" color="#c4c4c4">
            Monday - Saturday<br />
            9AM - 10PM
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', borderTop: '1px solid #333', mt: 4, pt: 2 }}>
        <Typography variant="body2" color="#c4c4c4">
          © 2022 Copyright. <Link href="#" color="#cfa3ff">FalconThought</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
