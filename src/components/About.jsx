import { Box } from "@mui/material";
import React from "react";
import me from "./assets/20191116153411.jpg";
import "./styles/Wave.css";
import Skills from "./Skills";
const About = () => {
  return (
    <div className="mobile" id="about">
      <Box
        className="mobile"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          height: 700,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 300,
            width: "20%",
            flexDirection: "column",
            gap: 2,
            fontSize: "10px",
          }}
        >
          <div className="cardBox">
            <img className="profile-img" alt="profile" src={me} />
          </div>

          <h2>AAKARSH AGARWAL</h2>
        </Box>
        <Box
          className="box"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <h1 style={{ marginLeft: "10px" }}>
            Hi<span className="wave">👋🏾</span>
          </h1>
          <br />
          <p className="para">
            I am Aakarsh, a software developer based in <b>India</b>. I develop
            full-blown web <br />
            applications using the <b>MERN Stack</b>, but I mostly love working
            on the front-end <br />
            using CSS and React.
            <br /> <br />I have been creating several Interactive Projects,
            which cater various needs. <br />I practice my skills daliy to
            achieve greater mastery over the topic
          </p>

          <Skills />
        </Box>
      </Box>
    </div>
  );
};

export default About;
