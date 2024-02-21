import styled from "styled-components";

const SectionsStyle = styled.div`
  height: 100%;
  
  .section__container {
    background-color: #fff;
    width: 100%;
  }

  .background-color{
  background-color: #e6e6fa;
  }
  
  .section__ul{
    transition: background-color 0.3s ease-in;
    padding: 40px 20px 20px 20px;
    margin: auto;
    list-style: none;
    display: flex;
    justify-content: space-between;

    li {
      cursor: pointer;
      p {
        font-weight: 600;
        padding: 10px;
      }
    }
  }

  .underline {
    bottom: -1px;
    left: 0;
    right: 0;
    background: red;
    height: 2px;
    background-color: #8AB6F9;
  }

  .active{
    color: #DF3C5F;
    transition: color 1s ease-in;
  }

  @media (min-width: 768px) {
    width: 55%;
    margin-left: auto;
    .section__ul {
      padding: 50px 50px 20px 50px;
      width: 100%;
      position: sticky;

      top: 0;
      background-color: #fff;
      z-index: 2;
   

    }
  }
`;

export default SectionsStyle;
