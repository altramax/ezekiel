import SectionsStyle from "./SectionsStyle";
import ProjectGroup from "../ProjectGroup/ProjectGroup";
import { useState } from "react";
import AboutMe from "../About/AboutMe";
import ExperienceGroup from "../ExperienceGroup/ExperienceGroup";
import { motion, AnimatePresence } from "framer-motion";

const Sections = () => {
  const [selectedPath, setSelectedPath] = useState<string>("aboutMe");
  const [color, setColor]= useState(false)

  const selectorHandler = (path: string) => {
    setSelectedPath(path);
  };
 

  const colorChange = (evt: boolean)=>{
   setColor(evt)
  }

  return (
    <SectionsStyle>
      <div className="section__container">
        <ul className={`section__ul ${color === true ? "background-color" : ""}`}>
          <li
            onClick={() => {
              selectorHandler("aboutMe");
            }}
          >
            <p className={selectedPath === "aboutMe" ? "active" : ""}>About</p>
            {selectedPath === "aboutMe" ? (
              <motion.div className='underline' layoutId='underline' />
            ) : null}
          </li>
          <li
            onClick={() => {
              selectorHandler("experience");
            }}
          >
            <p className={selectedPath === "experience" ? "active" : ""}>
              {" "}
              Experience
            </p>
            {selectedPath === "experience" ? (
              <motion.div className='underline' layoutId='underline' />
            ) : null}
          </li>
          <li
            onClick={() => {
              selectorHandler("projects");
            }}
          >
            <p className={selectedPath === "underline" ? "active" : ""}>
              Projects
            </p>
            {selectedPath === "projects" ? (
              <motion.div className='underline' layoutId='underline' />
            ) : null}
          </li>
        </ul>
        {selectedPath === "aboutMe" ? (
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <AboutMe />
            </motion.div>
          </AnimatePresence>
        ) : null}
        {selectedPath === "experience" ? <ExperienceGroup color={colorChange}/> : null}
        {selectedPath === "projects" ? <ProjectGroup /> : null}
      </div>
    </SectionsStyle>
  );
};

export default Sections;
