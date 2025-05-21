import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ContactSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "5493813533898"; // Reemplaza con tu número real
    const message = "Hola, estoy interesado en sus servicios de eventos";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };
  
  return (
    <Box id="contact"
      sx={{
        py: 8,
        px: isMobile ? 2 : 6,
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          animation: `${pulse} 8s infinite alternate`
        }
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: 4,
          p: isMobile ? 3 : 4,
          boxShadow: "0 8px 32px rgba(233, 30, 99, 0.2)",
          position: "relative",
          overflow: "hidden",
          maxWidth: 800,
          width: "100%",
          textAlign: "center",
          zIndex: 2,
          border: "1px solid rgba(232, 76, 136, 0.2)",
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #e84c88 0%, #fce4ec 100%)"
          }
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#e84c88",
            fontWeight: 600,
            mb: 2,
            fontSize: isMobile ? "1.8rem" : "2.4rem",
            fontFamily: "'Roboto', sans-serif",
            position: "relative",
            lineHeight: 1.3
          }}
        >
          Experiencias exclusivas a tu medida
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{
            color: "#555",
            mb: 4,
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: 1.6,
            position: "relative",
            fontWeight: 400
          }}
        >
          Diseñemos juntos una propuesta que refleje tus expectativas y necesidades 
          <Box component="span" sx={{ display: "block", mt: 1 }}>
            Cotiza con nosotros y descubre paquetes a tu medida.
          </Box>
        </Typography>
        
        <Box 
          sx={{ 
            position: "relative",
            display: "inline-block",
            "&:hover": {
              transform: "translateY(-3px)",
              transition: "all 0.3s ease"
            }
          }}
        >
          <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            startIcon={<WhatsAppIcon sx={{ fontSize: isMobile ? 20 : 24 }} />}
            onClick={handleWhatsAppClick}
            sx={{
              fontSize: isMobile ? "0.9rem" : "1rem",
              background: "linear-gradient(45deg, #e84c88 0%, #ec407a 100%)",
              color: "white",
              fontWeight: 600,
              padding: isMobile ? "10px 24px" : "12px 32px",
              borderRadius: "50px",
              boxShadow: "0 4px 15px rgba(232, 76, 136, 0.4)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transition: "all 0.6s ease"
              },
              "&:hover": {
                boxShadow: "0 6px 20px rgba(232, 76, 136, 0.6)",
                "&:before": {
                  left: "100%"
                }
              }
            }}
          >
            AGENDA UNA ENTREVISTA GRATIS
          </Button>
        </Box>

        <Box
          sx={{
            mt: 3,
            color: "#e84c88",
            fontSize: "0.9rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:before, &:after": {
              content: '""',
              flex: 1,
              height: "1px",
              background: "rgba(232, 76, 136, 0.3)",
              mx: 2
            }
          }}
        >
          Respuesta inmediata
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;