import ExperienceStyle from "./ExperienceStyle";
import {useEffect, useRef } from "react";

export interface experienceType {
  key: number;
  title: string;
  body: string[];
}

const Experience = ({ title, body, key }: experienceType) => {
  

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
      <div className='experience__container' ref={item} key={key}>
        <h3>{title}</h3>
        <ul className='ul'>
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
