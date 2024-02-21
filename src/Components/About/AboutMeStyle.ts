import styled from "styled-components";


const AboutMeStyle = styled.div`
width: 100%;
height: 100%;
padding: 10px 40px 40px 40px;
font-size: 14px;
animation: appear 1s ease;
animation-origin: center;

@keyframes appear{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

@media (min-width: 768px){

  padding: 70px 50px 50px 50px;

}
`;
export default AboutMeStyle;
