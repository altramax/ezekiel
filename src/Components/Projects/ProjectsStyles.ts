import styled from "styled-components";

const ProjectStyle = styled.div`
  .project__group {
    transform: translateX(-100%);
    transition: opacity 0.5s ease, transform 0.5s ease;
    // background: #fff;
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
    // transform: translateX(-100%);
    // transition: opacity 0.5s ease, transform 0.5s ease;
    img {
      width: fit-content;
      height: 150px;
      border-radius: 20px;
    }
  }

  // .text__group {
 
  // }

  .language__group {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    //   padding-left: 30px;
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
      gap: 12px;
    }
    .img__group {
      width: 30%;
      img {
        height: 90px;
      }
    }

    .text__group {
      width: 60%;
    }
  }

  .language__group {
    justify-content: start;
  }
`;
export default ProjectStyle;
