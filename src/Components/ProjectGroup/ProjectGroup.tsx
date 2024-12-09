import ProjectGroupStyle from "./ProjectGroupStyle";
import Projects from "../Projects/Projects";
import weather from "../../assets/images/weather app.png";
import note from "../../assets/images/note-app.png";
import ecommerce from "../../assets/images/og.png";
import musicApp from "../../assets/images/musicapp.png"

const ProjectGroup = () => {


  const project2 = {
    text: "This is a Weather app that predicts the weather for the next seven days based on your current gio-location. It employs the use of a third party api for the predictions.",
    image: `${weather}`,
    link: "https://altramax.github.io/Weather-App/",
    languages: ["HTML", "CSS", "JAVASCRIPT"],
  };

  const project3 = {
    text: "This is Note app that helps you save your note quicky on your browser.",
    image: `${note}`,
    link: "https://altramax.github.io/Note-App/",
    languages: ["HTML", "CSS", "JAVASCRIPT"],
  };

  const project1 = {
    text: "OGWears is a sleek and easy-to-use clothing app that makes online shopping a breeze. Users can browse a curated selection of styles, add items to their cart, and complete purchases—all in one place. Designed with a focus on simplicity and smooth navigation, OGWears delivers a seamless shopping experience that keeps fashion lovers coming back for more.",
    image: `${ecommerce}`,
    link: "https://ogwears.com.ng/",
    languages: ["TYPESCRIPT", "REACT", "JAVASCRIPT", "HTML"],
  };

  const musicAppData= {
    text: "This is a music streaming website connected to the Deezer api. you can view artist of the week, top rated artist and also search for song",
    image: `${musicApp}`,
    link: "https://songstream.netlify.app/",
    languages: ["React","TypeScript", "Redux", "Styled Component"],
  };

  

  const projects = [project1, musicAppData, project2, project3];

  return (
    <ProjectGroupStyle>
      {projects.map((project) => {
        return <Projects {...project} />;
      })}
    </ProjectGroupStyle>
  );
};

export default ProjectGroup;
