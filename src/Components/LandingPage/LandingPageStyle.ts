import styled from "styled-components";
const LandingPageStyle = styled.div`
  background-color: #656e77;
  .landingpage__container {
    padding: 60px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .designs{
  .home__button{
      position: absolute;
      z-index: 2;
      top: 60px;
      left: 60px;
      cursor: pointer;
    }
  }
     

  .svg-container {
    position: absolute;
    top: 20px;
    left: 20px;
    fill: #e6e6e7;
  }

  .svg-container2 {
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
        color:#fff;
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
    justify-content: start;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
    z-index: 20;
  }

.header__container::-webkit-scrollbar{
  display: none;
}


.header__container{
  width: 100%;
  height: 60%;
  overflow: auto;
  z-index:2;

  h3{
    font-size: 50px;
    color: #fff;
   }
}

  .nav{
    width: fit-content;
    position: absolute;
    bottom: 60px;
    .section__ul{
        transition: background-color 0.3s ease-in;
        margin: auto;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    
        li {
          cursor: pointer;
          width: fit-content;
          p {
            font-weight: 600;
            padding: 10px 10px 5px 10px;
          }
        }
      }
    
      .underline {
        height: 2px;
        background-color: #fff;
      }
    
      .active{
        color: #fff;
        transition: color 0.5s ease-in, border-right 0.5s ease-in;
        border-right: 2px solid #fff;
      }
  }

  @media (min-width: 1028px) {
.homepage{
  padding-top: 70px;
}

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
    gap: 150px;
    margin-top: 0;
    justify-content: center;
    
    padding-top:0;
    flex-direction: row;

    h3{
      font-size: 100px;
      margin-bottom: -20px;
     }
    
    .header__container{
      display: flex;
      justify-content: center;
      margin-bottom: -100px;
      height: 90%;
      width: 60%;
  }
    .nav{
    position: relative;
    bottom: 0;
    

    }
  }
`;
export default LandingPageStyle;
