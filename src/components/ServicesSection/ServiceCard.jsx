import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardService = ({ title, description, fullDescription, image }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
          textAlign: "center",
        }}
      >
        <Typography 
          variant="h5"
          sx={{ 
            color: "#e84c88", 
            fontWeight: "bold",
            mb: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem"
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{
            mb: 0.5,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "0.95rem"
          }}
        >
          {description}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{
            textAlign: "center",
            color: "#555",
            lineHeight: 1.5,
            mt: 1
          }}
        >
          {getExtendedDescription(title, fullDescription)}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Función para extender la descripción de cada servicio
const getExtendedDescription = (title, baseDescription) => {
  const extensions = {
    "Bodas": "Cada detalle cuidadosamente planeado para reflejar tu amor único. Trabajamos contigo para crear una experiencia auténtica y llena de momentos memorables.",
    "Cumpleaños": "Celebraciones diseñadas para capturar tu esencia. Desde la temática hasta el ambiente, todo se personaliza para que vivas un día extraordinario.",
    "Eventos Corporativos": "Experiencias profesionales que inspiran y conectan. Desarrollamos ambientes que refuerzan los valores de tu marca y dejan una impresión duradera.",
    "Baby Showers": "Un ambiente cálido y emotivo para celebrar la nueva vida. Creamos espacios fotogénicos llenos de ternura donde cada momento se convierte en recuerdo.",
    "Aniversarios": "Reavivamos la magia de tus mejores momentos. Celebración diseñada para honrar tu historia de amor con un toque especial y personalizado."
  };

  return `${baseDescription} ${extensions[title] || ""}`;
};

export default CardService;