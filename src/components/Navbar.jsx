import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo.png";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "./styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else if (window.scrollY < 10) {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(true);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <Box
      className={color ? "black" : "white"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        position: "sticky",
        top: 0,
        width: "100%",
        height: "80px",
        zIndex: 1,
        fontFamily: "Share Tech Mono",
      }}
    >
      <Box
        sx={{
          transform: "scale(1.6)",
          padding: "1rem",
        }}
      >
        <a href="#hero-section">
          <Avatar className="logo" alt="Logo" src={Logo} />
        </a>
      </Box>

      <Box>
        <ul className={click && show ? "nav-menu active" : "nav-menu"}>
          <li className="hover-underline-animation">
            <a href="#project">PROJECTS</a>
          </li>

          <li className="hover-underline-animation">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover-underline-animation">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {!click ? (
            <MenuIcon sx={{ fontSize: 30, color: "#fff" }} />
          ) : (
            <MenuOpenIcon
              sx={{
                fontSize: 30,
                color: "#fff",
              }}
            />
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
