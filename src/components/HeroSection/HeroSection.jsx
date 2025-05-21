import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const heroImages = [
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1559060680-36abfac01944?q=80&w=3344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleWhatsAppClick = () => {
    const phoneNumber = "5493813533898";
    const message = "Hola, estoy interesado en sus servicios de eventos";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      id="home" 
      sx={{ 
        height: '100vh',
        minHeight: '600px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
      }}
    >
      {/* Carrusel con overlay oscuro */}
      {heroImages.map((img, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 1
          }}
        />
      ))}
      
      {/* Capa de color sutil */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(232, 76, 136, 0.15) 0%, transparent 100%)',
        zIndex: 2
      }} />

      <Container sx={{ 
        position: 'relative', 
        zIndex: 3,
        px: isMobile ? 2 : 3,
        animation: 'fadeInUp 1s ease-out'
      }}>
        <Box sx={{
          '@keyframes fadeInUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)'
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: isMobile ? '2.5rem' : '4.5rem',
              mb: isMobile ? 2 : 3,
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              px: isMobile ? 1 : 0,
              animation: 'textFocusIn 1s ease-out'
            }}
          >
            <Box component="span" sx={{ color: '#ffffff' }}>Creamos </Box>
            <Box component="span" sx={{ 
              color: '#ffebee', 
              fontWeight: 800,
              textShadow: '0 0 15px rgba(232, 76, 136, 0.7)'
            }}>Experiencias </Box>
            <Box component="span" sx={{ color: '#ffffff' }}>Únicas</Box>
          </Typography>
          
          <Box sx={{
            animation: 'fadeIn 1.5s ease-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 }
            }
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: isMobile ? 3 : 4, 
                fontSize: isMobile ? '1.1rem' : '1.5rem',
                maxWidth: 800,
                mx: 'auto',
                textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '0.02em',
                px: isMobile ? 1 : 0
              }}
            >
              Transformamos tus sueños en realidad con eventos personalizados que cautivan todos los sentidos
            </Typography>
          </Box>

          <Box 
            sx={{
              display: 'inline-block',
              '&:hover': {
                transform: isMobile ? 'none' : 'scale(1.05)',
              },
              '&:active': {
                transform: 'scale(0.95)'
              },
              transition: 'transform 0.3s ease'
            }}
          >
            <Button 
              variant="contained"
              startIcon={<WhatsAppIcon sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }} />}
              onClick={handleWhatsAppClick}
              sx={{ 
                background: 'linear-gradient(45deg, #e84c88 0%, #d81b60 100%)',
                '&:hover': { 
                  background: 'linear-gradient(45deg, #d81b60 0%, #e84c88 100%)',
                  boxShadow: '0 8px 25px rgba(232, 76, 136, 0.8)'
                },
                px: isMobile ? 3 : 4,
                py: isMobile ? 1 : 1.5,
                borderRadius: '50px',
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 5px 20px rgba(232, 76, 136, 0.6)',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                minWidth: isMobile ? '220px' : 'auto',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'all 0.6s ease'
                },
                '&:hover:before': {
                  left: '100%'
                }
              }}
            >
              Contactar por WhatsApp
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Flecha indicadora simple y centrada */}
      <Box 
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-15px)' }
          }
        }}
      >
        <Box 
          component="svg" 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24"
          fill="none" 
          stroke="rgba(255,235,238,0.8)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          sx={{
            '&:hover': {
              stroke: '#e84c88'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;