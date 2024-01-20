import SocialsStyle from "./SocialsStyle";
import github from "../../assets/images/github.svg";
import github__color from "../../assets/images/github __color.svg";
import instagram from "../../assets/images/instagram.svg";
import instagram__color from "../../assets/images/instagram __color.svg";
import linkedin from "../../assets/images/linkedin_black.svg";
import linkedin__color from "../../assets/images/linkedin__color.svg";
import twitter from "../../assets/images/twitter.svg";
import twitter__color from "../../assets/images/twitter __color.svg";

const Socials = (): JSX.Element => {
  return (
    <SocialsStyle>
      <div className="main__container">
        <div className="linkedin container">
          <img src={linkedin} alt="linkedin" className="img1" />
          <img src={linkedin__color} alt="linkedin" className="img2" />
        </div>
        <div className="twitter container">
          <img src={twitter} alt="twitter" className="img1" />
          <img src={twitter__color} alt="twitter" className="img2" />
        </div>
        <div className="github container">
          <img src={github} alt="github" className="img1" />
          <img src={github__color} alt="github" className="img2" />
        </div>
        <div className="instagram container">
          <img src={instagram} alt="instagram" className="img1" />
          <img src={instagram__color} alt="instagram" className="img2" />
        </div>
      </div>
    </SocialsStyle>
  );
};

export default Socials;
