import { Link } from "react-router-dom";
import SocialsStyle from "./SocialsStyle";
import github from "../../assets/images/github.svg";
import github__color from "../../assets/images/github __color.svg";
import linkedin from "../../assets/images/linkedin_black.svg";
import linkedin__color from "../../assets/images/linkedin__color.svg";
import email from "../../assets/images/email.svg";
import email__color from "../../assets/images/email__color.svg";

const Socials = (): JSX.Element => {
  return (
    <SocialsStyle>
      <div className="main__container">
        <Link
          to={"http://www.linkedin.com/in/ezekiel-ajayi-374311281"}
          target="_blank"
          className="linkedin container"
        >
          <img src={linkedin} alt="linkedin" className="img1" />
          <img src={linkedin__color} alt="linkedin" className="img2" />
        </Link>
        <Link
          to={"https://github.com/altramax"}
          target="_blank"
          className="github container"
        >
          <img src={github} alt="github" className="img1" />
          <img src={github__color} alt="github" className="img2" />
        </Link>
        <Link
          to={"mailto:ajayiezekiel@gmail.com"}
          target="_blank"
          className="email container"
        >
          <img src={email} alt="email" className="img1" />
          <img src={email__color} alt="email" className="img2" />
        </Link>
      </div>
    </SocialsStyle>
  );
};

export default Socials;
