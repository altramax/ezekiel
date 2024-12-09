import ExperienceGroupStyle from "./ExperienceGroupStyle";
import Experience,{ experienceType } from "../Experience/Experience";

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
    year: "2021 - 2023",
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

  const exp3: experienceType = {
    key: 3,
    position: "Frontend-Developer",
    year: "2024 - Current (Remote)",
    title: "Toye Technology",
    body: [
      "Collaborated with cross-functional teams, including Backend developers, Product Managers, and QA engineers, to deliver scalable web applications",
      "Led the development of key features, ensuring seamless user experiences using React and TypeScript",
      "Implemented responsive designs for diverse devices and screen sizes",
      "Improved application performance by identifying and resolving bottlenecks in the codebase",
      "Integrated third-party APIs, ensuring robust communication between frontend components and backend services",
      "Mentored junior developers, sharing best practices in code quality and debugging",
      "Conducted regular code reviews to maintain high development standards",
      "Partnered with UI/UX designers to align designs with business objectives and user feedback",
    ],
  };

  const experiences = [ exp3, exp2, exp1];

  return (
    <ExperienceGroupStyle>
      {experiences.map((experience) => {
        return <Experience {...experience} />;
      })}
    </ExperienceGroupStyle>
  );
};

export default ExperienceGroup;
