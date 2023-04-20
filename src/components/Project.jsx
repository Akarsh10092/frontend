import React from "react";
import "./styles/Project.css";
import Card from "./Card";
import ProjectCardData from "./CardData";
const Project = () => {
  //   const [state, setState] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const fetchedData = await axios.get("http://localhost:3001/api/data");
  //         console.log(fetchedData.data[0]);
  //         setState(fetchedData.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   console.log(state);
  return (
    <div className="projects" id="project">
      <h1>
        PROJECTS
        <hr />
      </h1>
      <p>Some of my latest projects</p>
      <div className="grid-pro">
        {ProjectCardData.map((val, indx) => (
          <Card
            key={indx}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
