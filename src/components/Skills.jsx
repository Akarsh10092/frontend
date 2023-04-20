import React from "react";
import "./styles/Styles.css";
import me from "./assets/logo512.png";
const Skills = () => {
  return (
    <div className="container">
      <div className="skill">
        <img
          src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon.png"
          alt=""
        />
        <div className="skill-name">MONGODB</div>
      </div>
      <div className="skill">
        <img
          src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp"
          alt=""
        />
        <div className="skill-name">EXPRESSJS</div>
      </div>
      <div className="skill">
        <img src={me} alt="" />
        <div className="skill-name">ReactJS</div>
      </div>
      <div className="skill">
        <img
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          alt=""
        />
        <div className="skill-name">Node.js</div>
      </div>
      <div className="skill">
        <img src="https://www.webreflection.co.uk/img/html5.svg" alt="" />
        <div className="skill-name"> HTML</div>
      </div>
      <div className="skill">
        <img
          src="https://io13-high-dpi.appspot.com/images/CSS3_Logo.svg"
          alt=""
        />
        <div className="skill-name">CSS</div>
      </div>
      <div className="skill">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
          alt=""
        />
        <div className="skill-name">JavaScript</div>
      </div>
      <div className="skill">
        <img
          src="https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30342f6a5175726572792e676966"
          alt=""
        />
        <div className="skill-name">jQuery</div>
      </div>

      <div className="skill">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
          alt=""
        />
        <div className="skill-name">Git</div>
      </div>
      <div className="skill">
        <img src="https://gilbarbara.github.io/media/logos/aws.svg" alt="" />
        <div className="skill-name">AWS</div>
      </div>
    </div>
  );
};

export default Skills;
