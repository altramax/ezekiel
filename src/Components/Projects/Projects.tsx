import ProjectStyle from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Language from "../Language/Language";

interface projectType {
  image: any;
  text: string;
  link: string;
  languages: string[];
}

const Projects = ({ image, text, link, languages }: projectType) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(proj.current);
  }, []);

  const proj = useRef<any>();

  const callBack = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadein__right");
      } else {
        entry.target.classList.remove("fadein__right");
      }
    });
  };

  const options = {};

  return (
    <ProjectStyle>
      <div className="project__group" ref={proj}>
        <div className="img__group">
          <Link to={link} target="_blank">
            <img src={image} alt="" />{" "}
          </Link>
        </div>
        <div className="text__group">
          <p className="text">{text}</p>
          <div className="language__group">
            {languages.map((language) => {
              return <Language language={language} />;
            })}
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
