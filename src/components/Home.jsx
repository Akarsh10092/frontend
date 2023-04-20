import React from "react";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import { Box } from "@mui/material";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <hr />
      <HeroImage />
      <About />

      <hr />
      <Project />
      <hr />
      <Contact />
    </Box>
  );
};

export default Home;
