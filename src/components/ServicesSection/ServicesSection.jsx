import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import CardService from "./ServiceCard";

const ServicesSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  const services = [
    {
      title: "Bodas",
      description: "Creamos bodas inolvidables",
      fullDescription:
        "Cada detalle cuenta para un día perfecto. Desde la selección del lugar hasta la coordinación del evento. Nos encargamos de la decoración, ambientación, música, catering y protocolo, asegurando una experiencia mágica y libre de estrés para los novios y sus familias.",
      image:
        "https://images.unsplash.com/photo-1622023115060-8ba23e0d0e1c?q=80&w=4331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cumpleaños",
      description: "Celebraciones personalizadas",
      fullDescription:
        "Diseñamos fiestas únicas y divertidas, desde temáticas infantiles hasta elegantes reuniones para adultos. Organizamos juegos, animación, decoración creativa, mesas dulces y mucho más, todo adaptado al gusto y estilo del homenajeado para una fiesta inolvidable.",
      image:
        "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Eventos Corporativos",
      description: "Eventos profesionales que impactan",
      fullDescription:
        "Refuerza la imagen de tu marca con lanzamientos, conferencias, capacitaciones y cenas de gala organizadas profesionalmente. Cuidamos la logística, el branding, la tecnología audiovisual y el protocolo para asegurar que tu evento sea todo un éxito.",
      image:
        "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg",
    },
    {
      title: "Baby Showers",
      description: "Celebra la llegada con dulzura",
      fullDescription:
        "Creamos ambientes acogedores y cálidos para celebrar la llegada del bebé. Incluimos juegos divertidos, decoración temática, souvenirs, catering personalizado y detalles que emocionan a los futuros padres y a sus invitados.",
      image:
        "https://images.pexels.com/photos/3593434/pexels-photo-3593434.jpeg",
    },
    {
      title: "Aniversarios",
      description: "Festeja el amor y la trayectoria",
      fullDescription:
        "Planificamos desde cenas íntimas hasta grandes celebraciones para conmemorar años de amor, logros o hitos importantes. Ambientamos el espacio, personalizamos cada detalle y hacemos que cada momento sea verdaderamente especial y emotivo.",
      image:
        "https://images.unsplash.com/photo-1557918630-5753f944dc6c?q=80&w=4126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Box id="services"
      sx={{
        py: 8,
        px: isMobile ? 2 : 6,
        backgroundColor: "#f9f7f8"
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#e84c88",
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          fontSize: { xs: "2rem", md: "2.4rem" },
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Nuestros Servicios
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: isTablet ? "wrap" : "nowrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
          overflowX: isMobile ? "hidden" : "auto",
          pb: 2,
          maxWidth: "100%",
          margin: "0 auto",
          px: isMobile ? 0 : 4,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              minWidth: isMobile ? "100%" : isTablet ? "280px" : "300px",
              maxWidth: isMobile ? "100%" : "320px",
              flex: isMobile ? "0 0 auto" : "1 1 auto",
            }}
          >
            <CardService
              title={service.title}
              description={service.description}
              fullDescription={service.fullDescription}
              image={service.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;