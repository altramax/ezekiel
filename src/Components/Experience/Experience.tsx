import ExperienceStyle from "./ExperienceStyle";
import { useEffect, useRef } from "react";

export interface experienceType {
  key: number;
  title: string;
  year: string;
  position: string;
  body: string[];
}

const Experience = ({ title, body, key, position, year }: experienceType) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);

    observer.observe(item.current);
  }, []);
  const item = useRef<any>();

  const callBack = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade__in");
      } else {
        entry.target.classList.remove("fade__in");
      }
    });
  };

  const options = {};

  return (
    <ExperienceStyle>
      <div className="experience__container" ref={item} key={key}>
        <h5>
          {title} <small>{year}</small>
        </h5>
        <h6>{position}</h6>
        <ul className="ul">
          {body &&
            body.map((txt: any, i: any) => {
              return <li key={i}>• {txt}</li>;
            })}
        </ul>
      </div>
    </ExperienceStyle>
  );
};

export default Experience;
