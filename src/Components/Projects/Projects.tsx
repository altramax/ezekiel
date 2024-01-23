import ProjectStyle from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Language from "../Language/Language";

interface projectType {
  image: any;
  text: string;
  link: string;
}

const Projects = ({ image, text, link }: projectType) => {


  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(proj.current);
  }, []);

  const proj = useRef<any>();

  const callBack = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadein__right");
        // entry.target.classList.remove("fadein__left");


      } else {
        entry.target.classList.remove("fadein__right");
        // entry.target.classList.add("fadein__left  ");

      }
    });
  };

  const options = {};

  return (
    <ProjectStyle>
      <div className='project__group' ref={proj}>
        <div className='img__group'>
          <Link to={link} target='_blank'>
            <img src={image} alt='' />{" "}
          </Link>
        </div>
        <div className='text__group'>
          <p className='text'>{text}</p>
          <div className='language__group'>
            <Language language='HTML' />
            <Language language='CSS' />
            <Language language='JAVASCRIPT' />
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
