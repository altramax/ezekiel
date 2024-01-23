import styled from "styled-components";

const ExperienceStyle = styled.div`
  .experience__container {
    padding: 20px;

    // box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    // box-shadow: inset 0 0 0 0  #8AB6F9;
    // transition: 1s ease-in-out;
    // transform: translateY (0px);
    // transition: transform 1s ease-in;
    margin: 30px 0;
    opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  }
  // .experience__container:hover {
  //   color: #31473A;
  // box-shadow: inset 100rem 0 0 0  #8AB6F9;
  // }

  h3 {
    width: fit-content;
  }
  .ul {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
    li {
      display: block;
    }
  }

  .fade__in {
   opacity: 1;
  transform: translateX(0);
  }
`;
export default ExperienceStyle;
