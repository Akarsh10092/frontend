import React from "react";
import "./styles/Card.css";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
const Card = (props) => {
  return (
    <div className="project-card">
      <img alt="{props.key}" src={props.imgsrc} className="img" />
      <h2>{props.title}</h2>
      <div className="para">
        <p>{props.text}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <a href={props.view} target="_blank" rel="noopener noreferrer">
          <button className="btn">
            Live
            <LaunchIcon sx={{ scale: "0.8" }} />
          </button>
        </a>
        <a href={props.source} target="_blank" rel="noopener noreferrer">
          <button className="btn-light">
            Github
            <GitHubIcon sx={{ scale: "0.8" }} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
