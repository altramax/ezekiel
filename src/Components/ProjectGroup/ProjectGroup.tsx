import ProjectGroupStyle from "./ProjectGroupStyle";
import Projects from "../Projects/Projects";
import calculator from "../../Assets/images/calculator.png";
import etravels from "../../Assets/images/e-travels.png";

const ProjectGroup = () => {
  const project1 = {
    text: "This is a Calculator built using strige and maths methodes, it demonstrates the dynamics of sting methodes",
    image: `${calculator}`,
    link: "https://altramax.github.io/Calculator-With-Neumorphism/",
  };

  const project2 = {
    text: "E tavels is a travel websiteLorem ipsum dolor, sit amet consectetur.",
    image: `${etravels}`,
    link: "https://altramax.github.io/E-Travels-website/",
  };

  return (
    <ProjectGroupStyle>
      <Projects {...project1} />
      <Projects {...project2} />

    </ProjectGroupStyle>
  );
};

export default ProjectGroup;
