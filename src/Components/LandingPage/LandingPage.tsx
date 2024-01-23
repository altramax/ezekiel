import LandingPageStyle from "./LandingPageStyle";
import Socials from "../SocialsContainer/Socials";
import { useState } from "react";
import { motion } from "framer-motion";
import profile__picture from "../../assets/images/my_image__black.jpg";
import AboutMe from "../About/AboutMe";
import ProjectGroup from "../ProjectGroup/ProjectGroup";
import ExperienceGroup from "../ExperienceGroup/ExperienceGroup";

const LandingPage = (): JSX.Element => {
  const [enlarge, setEnlarge] = useState<boolean>(false);
  const [selectedPath, setSelectedPath] = useState<string>("home");

  const selectorHandler = (path: string) => {
    setSelectedPath(path);
  };

  const enlargeImage = () => {
    setEnlarge(!enlarge);
  };

  return (
    <LandingPageStyle>
      <div className="landingpage__container">
        <div className="designs">
          <h1 onClick={() => selectorHandler("home")} className="home__button">
            E.A
          </h1>
          <Socials />
          <div className="svg-container">
            <svg
              width="300"
              height="300"
              data-name="corner-top-left"
              xmlns="http://www.w3.org/2000/svg"
              data-inlinesvg=".inlineSvgFile-2"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" className="color1"></stop>
                  <stop offset=".5" className="color2"></stop>
                  <stop offset="1" className="color1"></stop>
                </linearGradient>
              </defs>
              <path
                //   fill="url('#grad1')"
                d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
              ></path>
            </svg>
          </div>
          <div
            className={`${enlarge === true ? "enlarged" : "profile"}`}
            onClick={enlargeImage}
          >
            <img src={profile__picture} alt="profile picture" />
            <h1>Ezekiel Ajayi</h1>
          </div>
          <div className="svg-container2">
            <svg
              width="300"
              height="300"
              data-name="corner-top-left"
              xmlns="http://www.w3.org/2000/svg"
              data-inlinesvg=".inlineSvgFile-2"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" className="color1"></stop>
                  <stop offset=".5" className="color2"></stop>
                  <stop offset="1" className="color1"></stop>
                </linearGradient>
              </defs>
              <path
                //   fill="url('#grad1')"
                d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="main__content__container">
          <div className="header__container">
            {selectedPath === "home" ? (
              <div className="homepage">
                <h3>Welcome</h3>
                <h1>I'm Ezekiel Ajayi</h1>
                <p>
                  a frontend developer with deep fondness for creating
                  user-friendly websites and web applications. This is where I
                  show you the journey I've embarked on in the ever-evolving
                  world of software development.
                </p>
              </div>
            ) : null}
            {selectedPath === "aboutMe" ? <AboutMe /> : null}
            {selectedPath === "projects" ? <ProjectGroup /> : null}
            {selectedPath === "experience" ? <ExperienceGroup /> : null}
          </div>

          <div className="nav">
            <ul className={`section__ul`}>
              <li
                onClick={() => {
                  selectorHandler("aboutMe");
                }}
              >
                <p className={selectedPath === "aboutMe" ? "active" : ""}>
                  About
                </p>
                {selectedPath === "aboutMe" ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
              <li
                onClick={() => {
                  selectorHandler("projects");
                }}
              >
                <p className={selectedPath === "projects" ? "active" : ""}>
                  Projects
                </p>
                {selectedPath === "projects" ? (
                  <motion.div className="underline" layoutId="underline" />
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
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LandingPageStyle>
  );
};

export default LandingPage;
