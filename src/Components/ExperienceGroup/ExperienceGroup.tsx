import ExperienceGroupStyle from "./ExperienceGroupStyle";
import Experience from "../Experience/Experience";
import { experienceType } from "../Experience/Experience";

const ExperienceGroup = () => {
  const exp2: experienceType = {
    key: 1,
    position: "Project Manager",
    title: "Ea-tech Consults",
    year: "2018 - 2021",
    body: [
      "Project planning with the team",
      "I manage the various team members to ensure weekly deliverables ",
      "I keep the project owner abreast of all happenings in the project",
    ],
  };

  const exp1: experienceType = {
    key: 2,
    position: "Frontend-Developer",
    year: "2021 - till date",
    title: "Crestmark Teachnologies Limited",
    body: [
      "Worked closely with UX/UI designers to transform their designs into functional web applications",
      "Integrated third-party APIs and libraries to add functionality and enhance user interactions",
      "Collaborated with team members through Slack and utilized GitHub for version control",
      "Tracked project tasks, issues, and progress using Jira",
      "Maintained comprehensive documentation on Confluence",
      "Deployed applications on Netlify and Vercel",
    ],
  };

  const experiences = [exp1, exp2];

  return (
    <ExperienceGroupStyle>
      {experiences.map((experience) => {
        return <Experience {...experience} />;
      })}
    </ExperienceGroupStyle>
  );
};

export default ExperienceGroup;
