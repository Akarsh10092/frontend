import React from "react";
import { motion } from "framer-motion";
import "./styles/HeroImage.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { socialsData } from "./CardData";
const HeroImage = () => {
  const options = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
    transition: {
      ease: "linear",
      repeat: 10000,
      repeatType: "reverse",
      duration: "0.5",
    },
  };
  return (
    <section className="hero" id="hero-section">
      <div className="content">
        <motion.p {...options}>Aakarsh Agarwal</motion.p>
        <h1>{"{MERN STACK-DEVELOPER}"}</h1>
        <p>Javascript | ReactJS | MongoDB | Express JS | Node JS</p>
        <span>
          <a href="#project" className="btn">
            Projects
          </a>
          <a href="#contact" className="btn-light">
            CONTACT
          </a>
        </span>
        <div className="icons">
          <a href={socialsData.link} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon
              sx={[
                {
                  "&:hover": {
                    color: " rgb(10, 102, 194)",
                    transition: "0.8s",
                    transform: "rotate(-360deg)",
                  },
                },
                {
                  transition: "0.8s",
                },
              ]}
            />
          </a>
          <a href={socialsData.insta} target="_blank" rel="noopener noreferrer">
            <InstagramIcon
              sx={[
                {
                  "&:hover": {
                    color: "#d62976",
                    transition: "1s",
                    transform: "rotate(-360deg)",
                  },
                },
                {
                  transition: "1s",
                },
              ]}
            />
          </a>
          <a
            href={socialsData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={[
                {
                  "&:hover": {
                    color: "grey",
                    transition: "0.8s",
                    transform: "rotate(360deg)",
                  },
                },
                {
                  transition: "0.8s",
                },
              ]}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
