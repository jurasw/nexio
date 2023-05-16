import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import "../../styles.css";

const Specializations: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
        <Box className="specializations">Analiza Biznesowa</Box>
        <Box className="specializations">Analiza Systemowa</Box>
        <Box className="specializations"></Box>
        <Box className="specializations">Projektowanie Architektury</Box>
        <Box className="specializations">Prototypowanie MVP</Box>
        <Box className="specializations">UX/UI Desing</Box>
        <Box className="specializations">Zarządzenie projektami</Box>
        <Box className="specializations">Programowanie</Box>
        <Box className="specializations">Konfigurowanie środowisk</Box>
        <Box className="specializations">Wdrożenia</Box>
        <Box className="specializations">Testowanie</Box>
        <Box className="specializations">Utrzymanie/serwis</Box>
      </Grid>
      <div style={{ borderRadius: "48px", minHeight: "300px", background: "#EEEEEE", marginTop: "30px" }}></div>
    </div>
  );
};

export default Specializations;
