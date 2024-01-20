import styled from "styled-components";
const LandingPageStyle = styled.div`
  background-color: #656e77;
  .landingpage__container {
    padding: 80px;
    width: 100vw;
    height: 100vh;
  }

  .svg-container {
    position: absolute;
    top: 20px;
    left: 20px;
    fill: #e6e6e7;
    z-index: 1;
  }

  .svg-container2 {
    // z-index: 1 !important;
    position: absolute;
    right: 20px;
    bottom: 20px;
    rotate: 180deg;
    fill: #040c0e;
  }

  .color {
    background-color: #fff;
  }

  .profile {
    font-weight: 500;
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    gap: 15px;
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 2s ease-in;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    h1{
        display: none;
    }
  }

  .enlarged {
    z-index: 5;
    font-weight: 500;
    right: 0;
    top: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #656e77;
    cursor: pointer;
    // transition: 2s ease-in;
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    h1{
        display: block;
    }
  }

  .main__content__container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -20px;
    flex-direction: column;
    z-index: 20;
  }
.header__container{
    width: 80%;

}


  .nav{
    width: 20%;
    position: absolute;
    bottom: 60px;
    .section__ul{
        transition: background-color 0.3s ease-in;
        // padding: 0 20px;
        margin: auto;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    
        li {
          cursor: pointer;
          width: fit-content;
          p {
            // color: #00246B;
            font-weight: 600;
            padding: 10px 10px 10px 0;
          }
        }
      }
    
      .underline {
        // position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        background: red;
        height: 2px;
        background-color: #000;
      }
    
      .active{
        color: #fff;
        transition: color 1s ease-in;
      }
  }

  @media (min-width: 768px) {
    .profile {
      font-size: 10px;
      h1{
          display: inline-block;
      }
    }
    .enlarged{
        img {
            width: 500px;
            height: 500px;
    }
  }

  .main__content__container{
    flex-direction: row;
    .nav{
    position: relative;
    bottom: 0;

    }
  }
`;
export default LandingPageStyle;
