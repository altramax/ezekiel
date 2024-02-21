import styled from "styled-components";

const ExperienceStyle = styled.div`
  .experience__container {
    padding: 20px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    margin: 30px 0;
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  h5 {
    width: fit-content;
    font-size: 30px;
    color: #fff;
    small {
      color: #000;
    }
  }
  h6 {
    color: #fff;
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
