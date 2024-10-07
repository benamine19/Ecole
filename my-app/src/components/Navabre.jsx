// src/components/Navbare.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import { useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import logo from '../assets/logo-1.png';
import { useNavigate } from "react-router-dom";

function Navbare() {
  const navigate = useNavigate();
  const theme = useTheme();
  const maxwidth710 = useMediaQuery("(max-width:710px)");
  const maxwidth700 = useMediaQuery("(max-width:700px)");

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Ajout des chemins associés à chaque élément du menu
  const menuItems = [
    

    { label: "Accueil", path: "/" },
    { label: "Cours", path: "/Our-School" },
    { label: "Abbonement", path: "/Abbonement" },
    { label: "Qui Somme Nous ?", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const DrawerList = (
    <Box sx={{ display: maxwidth710 ? "flex" : "none", flexDirection: "column", width: '250px', height: '100%' }}> 
        <img src={logo} style={{ width: '100px', height: '80px', objectFit: 'contain', marginRight: 'auto', marginLeft: 'auto' }} />
        <List sx={{ backgroundColor: "#4184c6", color: "white" }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path); // Redirige vers le chemin spécifié
                setOpen(false); // Ferme le tiroir après la navigation
              }}
              sx={{
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "#06458a",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#06458a",
                    color: "white",
                  },
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="relative"
      sx={{ 
        width: '100vw',  
        top: 0, 
        zIndex: 99, 
        backgroundColor: 'white',
        minHeight: '80px',
        color:'black'
      }}
    >
      <Toolbar 
        disableGutters 
        sx={{ padding: '0 16px' }}
      >
        <Box sx={{ display: maxwidth710 ? "flex" : "none" }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <img src={logo} style={{ width: '100px', height: '80px', objectFit: 'contain', marginRight: 'auto', marginLeft: 'auto' }} />
        <Box sx={{ flexGrow: 1, display: maxwidth700 ? "none" : "flex" }}></Box>

        <Box sx={{ flexGrow: 1, display: maxwidth710 ? "none" : "flex", justifyContent: "space-evenly", alignItems: 'center' }}>
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              variant="h6"
              onClick={() => navigate(item.path)} // Redirige lors du clic
              sx={{
                // fontFamily: "Poppins",
                fontWeight: '500',
                fontSize: "20px",
                lineHeight: '1.5rem',
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: "orange",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </AppBar>
  );
}

export default Navbare;