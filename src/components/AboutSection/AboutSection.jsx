import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Diamond, AccessTime, Favorite, Star } from "@mui/icons-material";

const features = [
  { icon: <Diamond sx={{ color: "#e84c88", fontSize: 30 }} />, title: "Diseño Personalizado", description: "Eventos únicos adaptados a tu visión." },
  { icon: <AccessTime sx={{ color: "#e84c88", fontSize: 30 }} />, title: "Gestión Eficiente", description: "Organización sin estrés ni contratiempos." },
  { icon: <Favorite sx={{ color: "#e84c88", fontSize: 30 }} />, title: "Detalles que Enamoran", description: "Cada elemento cuenta una historia." },
  { icon: <Star sx={{ color: "#e84c88", fontSize: 30 }} />, title: "Excelencia Garantizada", description: "Calidad en cada paso del evento." },
];

const AboutUs  = () => {
  return (
    <Box id="about"
      sx={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: { xs: "2rem", md: "4rem" },
        backgroundColor: "#f9f7f8",
      }}
    >
      {/* Flex container for image and text */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {/* Imagen izquierda */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1628336707631-68131ca720c3?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Evento"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />

        {/* Contenido derecha */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#e84c88",
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Sobre Nosotros
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#333",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Creamos momentos inolvidables
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: 1.8,
              mb: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Transformamos tus ideas en realidades mágicas. Con experiencia, pasión y profesionalismo, te acompañamos en cada paso para que disfrutes al máximo.
            Creemos que cada celebración es una obra de arte única, le ponemos corazón y dedicación en cada proyecto, asegurando que tu visión cobre vida superando todas tus expectativas.
            Desde el primer contacto hasta el último detalle, nos encargamos de todo con excelencia y creatividad. Tu única tarea será sorprenderte con el resultado y crear recuerdos inolvidables con tus seres queridos.
          </Typography>

          {/* Lista de ítems con íconos */}
          <Grid container spacing={2}>
            {features.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box display="flex" alignItems="flex-start">
                  <Box mr={2}>{item.icon}</Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "'Montserrat', sans-serif",
                        color: "#333",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
