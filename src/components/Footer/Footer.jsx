import React from "react";
import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      bgcolor: "#2d2d2d", 
      color: "white", 
      py: 3,
      borderTop: "2px solid #e84c88",
      position: "relative"
    }}>
      <Container maxWidth="lg">
        {/* Contenido principal compacto */}
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2
        }}>
          {/* Nombre de la empresa más compacto */}
          <Typography variant="h6" sx={{ 
            color: "#e84c88",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.6rem",
            lineHeight: 1.2,
            letterSpacing: "0.5px"
          }}>
            Camila Event Organizer
          </Typography>

          {/* Redes sociales con mejor espaciado */}
          <Box sx={{ 
            display: "flex", 
            gap: 0.5,
            "& .MuiIconButton-root": {
              p: 1
            }
          }}>
            <IconButton
              component={Link}
              href="https://www.facebook.com/share/1AdZAT14k4/"
              target="_blank"
              sx={{ 
                color: "white",
                '&:hover': { 
                  color: "#1877F2", // Azul Facebook
                  bgcolor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.3s ease"
              }}
            >
              <Facebook fontSize="large" />
            </IconButton>
            
            <IconButton
              component={Link}
              href="https://www.instagram.com/camila.event.organizer/"
              target="_blank"
              sx={{ 
                color: "white",
                '&:hover': { 
                  color: "#E1306C", // Rosa Instagram
                  bgcolor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.3s ease"
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>
            
            <IconButton
              component={Link}
              href="https://wa.me/5493813533898"
              target="_blank"
              sx={{ 
                color: "white",
                '&:hover': { 
                  color: "#25D366", // Verde WhatsApp
                  bgcolor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.3s ease"
              }}
            >
              <WhatsApp fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* Derechos reservados con corazón */}
        <Box sx={{ 
          textAlign: "center",
          pt: 2,
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}>
          <Typography variant="caption" sx={{ 
            color: "#b0b0b0",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5
          }}>
            © {new Date().getFullYear()} Camila Events. Todos los derechos reservados.
            <FavoriteIcon sx={{ 
              color: "#e84c88", 
              fontSize: "0.9rem",
              verticalAlign: "middle" 
            }} />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;