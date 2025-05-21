import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const appBarRef = useRef(null);

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const appBarHeight = appBarRef.current?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - appBarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'header', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'contact', label: 'Contacto', isButton: true }
  ];

  return (
    <AppBar id = "header"
      position="fixed" 
      ref={appBarRef}
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.98)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          px: 0, 
          display: 'flex', 
          justifyContent: 'space-between',
          width: '100%'
        }}>
          {/* Logo más elegante */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              color: '#e84c88',
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.9
              }
            }}
            onClick={(e) => {
              e.preventDefault();
              handleScroll('home');
            }}
          >
            Camila <Box component="span" sx={{ color: '#000', ml: 0.5 }}>Events Organizer</Box>
          </Typography>

          {/* Menú para desktop */}
          {!isMobile && (
            <Box sx={{ 
              display: 'flex', 
              gap: 3,
              alignItems: 'center'
            }}>
              {navItems.map((item) => (
                item.isButton ? (
                  <Button
                    key={item.id}
                    variant="contained"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.id);
                    }}
                    sx={{
                      background: 'linear-gradient(45deg, #e84c88 0%, #ec407a 100%)',
                      color: 'white',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: '50px',
                      boxShadow: '0 3px 10px rgba(232, 76, 136, 0.3)',
                      transition: 'all 0.3s ease',
                      ml: 1,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(232, 76, 136, 0.4)',
                        background: 'linear-gradient(45deg, #ec407a 0%, #e84c88 100%)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Box
                    key={item.id}
                    component="a"
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.id);
                    }}
                    sx={{
                      color: '#555',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': { 
                        color: '#e84c88',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {item.label}
                  </Box>
                )
              ))}
            </Box>
          )}

          {/* Menú hamburguesa para móviles */}
          {isMobile && (
            <>
              <IconButton 
                edge="end" 
                color="inherit" 
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ 
                  color: '#e84c88',
                  ml: 'auto'
                }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              
              <Menu
                anchorEl={anchorEl}
                open={mobileMenuOpen}
                onClose={handleMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    width: '80%',
                    maxWidth: '300px',
                    mt: 6,
                    borderRadius: '12px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                {navItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <MenuItem 
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(item.id);
                      }}
                      sx={{
                        color: item.isButton ? 'white' : '#555',
                        fontWeight: 500,
                        py: 1.5,
                        background: item.isButton ? 'linear-gradient(45deg, #e84c88 0%, #ec407a 100%)' : 'transparent',
                        borderRadius: '6px',
                        justifyContent: 'center',
                        mt: item.isButton ? 1 : 0,
                        '&:hover': {
                          background: item.isButton ? 'linear-gradient(45deg, #ec407a 0%, #e84c88 100%)' : 'rgba(232, 76, 136, 0.05)',
                          color: item.isButton ? 'white' : '#e84c88'
                        }
                      }}
                    >
                      {item.label}
                    </MenuItem>
                    {index < navItems.length - 1 && (
                      <Divider sx={{ my: 0.5, bgcolor: 'rgba(0, 0, 0, 0.05)' }} />
                    )}
                  </React.Fragment>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;