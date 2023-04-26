import "./SocialMediaSignUp.scss";
import facebook from "./assets/facebook.svg";
import google from "./assets/google.svg";
import twitter from "./assets/twitter.svg";

export const SocialMediaSignUp = () => {
  return (
    <div className="smreg">
      <div className="title">
        <p>Sign up for free to start your healthy life!</p>
      </div>
      <div className="buttons">
        <div className="facebook">
          <button className="fbutton">
            <div className="icon">
              <img src={facebook} alt="" />
            </div>
            <p className="sign">Sign up with Facebook</p>
          </button>
        </div>
        <div className="facebook">
          <button className="fbutton">
            <div className="icon">
              <img src={google} alt="" />
            </div>
            <p className="sign">Sign up with Google</p>
          </button>
        </div>
        <div className="facebook">
          <button className="fbutton">
            <div className="icon">
              <img src={twitter} alt="" />
            </div>
            <p className="sign">Sign up with twitter</p>
          </button>
        </div>
      </div>
    </div>
  );
};
