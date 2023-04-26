import "./Footer.scss";
import footer_logo from "../Header/header-assets/Logo (1).svg";
import facebook_icon from "./footer-assets/facebook icon.svg";
import instagram_icon from "./footer-assets/instagram icon.svg";
import twitter_icon from "./footer-assets/twitter icon.svg";

export const Footer = () => {
    
  return (
    <div className="footer">
      <div className="foot-nav">
        <div className="logo-foot">
          <img className="logo" src={footer_logo} alt="" />
        </div>
        <nav className="navigation">
          <a href="#"> DIETS </a>
          <a href="#">CALORIE CALCULATOR</a>
          <a href="#"> MENU </a>
          <a href="#"> DELIVERY </a>
          <a href="#"> ABOUT US </a>
          <a href="#"> BLOG </a>
          <a href="#"> FAQ </a>
        </nav>
        <div className="contacts">
          <div className="foot-p">
            Contacts:
            <h4 className="number">+1 (213) 776 24 10</h4>
          </div>
        </div>
      </div>

      <div className="icons">
        <div>
          <a href="#">
            <img src={facebook_icon} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={twitter_icon} alt="" />
          </a>
        </div>
      </div>

      <div className="pc">
        <div className="policy">
          <p>
            <a href="#">Policy privacy</a>
          </p>
        </div>
        <div className="copyright">
          <p>Copyright 2022. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
