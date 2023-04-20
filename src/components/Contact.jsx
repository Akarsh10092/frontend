import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import svg from "./assets/iconsvg.svg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z84fggr",
        "template_ko5hrhm",
        form.current,
        "oRg4scUCaPUDqTjwJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <>
      <div className="contact" id="contact">
        <h1>
          Contact
          <hr />
        </h1>
        <p>Get in touch</p>
      </div>
      <div className="left">
        <div className="form">
          <h3>Write me a Message 👇</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="user_subject"></input>
            <label>Message</label>
            <textarea rows="5" placeholder="" name="message"></textarea>
            <input
              type="submit"
              value="Send"
              className="button-lights"
              onClick={handleClick}
            />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Hooray! Your message has been sent
              </Alert>
            </Snackbar>
          </form>
        </div>
        <div className="right">
          <img src={svg} alt="svgIcon" />
        </div>
      </div>
    </>
  );
};

export default Contact;
