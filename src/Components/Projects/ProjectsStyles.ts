import styled from "styled-components";

const ProjectStyle = styled.div`
  .project__group {
    transform: translateX(-100%);
    transition: opacity 0.5s ease, transform 0.5s ease;
    width: 100%;
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #222222;
    .text {
      margin: 20px 0;
    }
  }

  .img__group {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 150px;
      border-radius: 8px;
    }
  }

  .language__group {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }

  .fadein__left {
    opacity: 1;
    transform: translateX(100);
  }

  .fadein__right {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    .project__group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .img__group {
      width: 30%;
      img {
        width: 180px;
      }
    }

    .text__group {
      width: 60%;
    }
    .language__group {
      justify-content: start;
    }
  }

`;
export default ProjectStyle;
