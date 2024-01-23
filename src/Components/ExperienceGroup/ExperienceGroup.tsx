import ExperienceGroupStyle from "./ExperienceGroupStyle";
import Experience from "../Experience/Experience";
import { experienceType } from "../Experience/Experience";


const ExperienceGroup = () => {
  const exp1: experienceType = {
    key: 1,
    title: "Ea-tech",
    body: ["construction", "developemnt", "drainage"],
  };
  const exp2: experienceType = {
    key: 2,
    title: "Ea-tech",
    body: ["construction", "developemnt", "drainage"],

  };
  const exp3: experienceType = {
    key: 3,
    title: "Ea-tech",
    body: ["construction", "developemnt", "drainage"],
  };
  const exp4: experienceType = {
    key: 4,
    title: "Ea-tech",
    body: ["construction", "developemnt", "drainage"],
  };

  return (
    <ExperienceGroupStyle>
      <Experience {...exp1} />
      <Experience {...exp2} />
      <Experience {...exp3} />
      <Experience {...exp4} />
    </ExperienceGroupStyle>
  );
};

export default ExperienceGroup;
