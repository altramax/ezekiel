import ProjectGroupStyle from "./ProjectGroupStyle";
import Projects from "../Projects/Projects";
import emr from "../../assets/images//emr.png";
import ecommerce from "../../assets/images/og.png";
import musicApp from "../../assets/images/musicapp.png";

const ProjectGroup = () => {
  const ogwears = {
    text: "OGWears is a sleek and easy-to-use clothing app that makes online shopping a breeze. Users can browse a curated selection of styles, add items to their cart, and complete purchases—all in one place. Designed with a focus on simplicity and smooth navigation, OGWears delivers a seamless shopping experience that keeps fashion lovers coming back for more.",
    image: `${ecommerce}`,
    link: "https://ogwears.com.ng/",
    languages: ["TYPESCRIPT", "REACT", "JAVASCRIPT", "HTML"],
  };

  const musicAppData = {
    text: "This is a music streaming website connected to the Deezer api. you can view artist of the week, top rated artist and also search for song",
    image: `${musicApp}`,
    link: "https://songstream.netlify.app/",
    languages: ["React", "TypeScript", "Redux", "Styled Component"],
  };

  const EMR = {
    text: "A work-in-progress EMR system designed to streamline hospital workflows with real-time task assignments, scheduling, and status tracking across roles like doctors, nurses, labs, and pharmacy. Credentials Email : ajayiezekiel559@gmail.com  Password : example-password",
    image: `${emr}`,
    link: "https://eloquent-mousse-52e8d9.netlify.app/",
    languages: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
    ],
  };

  const projects = [EMR, ogwears, musicAppData];

  return (
    <ProjectGroupStyle>
      {projects.map((project) => {
        return <Projects {...project} />;
      })}
    </ProjectGroupStyle>
  );
};

export default ProjectGroup;
