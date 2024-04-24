import ProjectGroupStyle from "./ProjectGroupStyle";
import Projects from "../Projects/Projects";
import calculator from "../../assets/images/calculator.png";
import etravels from "../../assets/images/e-travels.png";
import weather from "../../assets/images/weather app.png";
import note from "../../assets/images/note-app.png";
import ecommerce from "../../assets/images/ecommerce.png";
import webflow from '../../assets/images/WordPress.png';
import musicApp from "../../assets/images/musicapp.png"

const ProjectGroup = () => {
  const project4 = {
    text: "This is a Calculator built using string and maths methodes, it demonstrates the dynamics of sting methodes. The simple u.i was done with neumorphism",
    image: `${calculator}`,
    link: "https://altramax.github.io/Calculator-With-Neumorphism/",
    languages: ["HTML", "CSS", "JAVASCRIPT"],
  };

  const project5 = {
    text: "E tavels is a basic travel website. It allows the user to explore the various destinations available to travel.",
    image: `${etravels}`,
    link: "https://altramax.github.io/E-Travels-website/",
    languages: ["HTML", "CSS", "JAVASCRIPT"],
  };

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
    text: "This is an Ecommerce Web app. Users can shop and visit various catergories of the web app. I'm currently working on a more interactive and market friendly verision of the app that involves a merchant side and a client side ",
    image: `${ecommerce}`,
    link: "https://e-commerce-fxo6bvsl1-altramax.vercel.app/",
    languages: ["TYPESCRIPT", "REACT", "SASS", "HTML"],
  };

  const projectwebflow = {
    text: "This is a Webflow website for an interior decoration company, it contains only two pages because it was done using the webflow free version",
    image: `${webflow}`,
    link: "https://blaqinteriorshome.webflow.io/",
    languages: ["Webflow", "HTML", "CSS", "JAVASCRIPT"],
  };

  const musicAppData= {
    text: "This is a music streaming website connected to the Deezer api. you can view artist of the week, top rated artist and also search for song",
    image: `${musicApp}`,
    link: "https://songstream.netlify.app/",
    languages: ["React","TypeScript", "Redux", "Styled Component"],
  };

  

  const projects = [project1, musicAppData, projectwebflow, project2, project3, project4, project5];

  return (
    <ProjectGroupStyle>
      {projects.map((project) => {
        return <Projects {...project} />;
      })}
    </ProjectGroupStyle>
  );
};

export default ProjectGroup;
