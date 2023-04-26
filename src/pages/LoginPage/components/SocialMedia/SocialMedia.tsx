import "./SocialMedia.scss";
import apple from "./assets/apple.svg";
import facebook from "./assets/facebook.svg";
import google from "./assets/google.svg";
import twitter from "./assets/twitter.svg";
import divider from "./assets/Divider 2.svg";

export const SocialMedia = () => {
  return (
    <>
      <div className="authorization">
        <img src={divider} alt="" />
      </div>
      <div className="icons">
        <a href="">
          <img src={facebook} alt="" />
        </a>
        <a href="">
          <img src={apple} alt="" />
        </a>
        <a href="">
          <img src={google} alt="" />
        </a>
        <a href="">
          <img src={twitter} alt="" />
        </a>
      </div>
    </>
  );
};
