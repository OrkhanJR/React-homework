import './Header.scss';
import logo from './header-assets/Logo (1).svg';
import bag from "./header-assets/Bag.svg";

export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="navigation">
          <a href="diets/diets.html"> DIETS </a>
          <a href="#">CALORIE CALCULATOR</a>
          <a href="#"> MENU </a>
          <a href="#"> DELIVERY </a>
          <a href="#"> ABOUT US </a>
          <a href="#"> BLOG </a>
          <a href="#"> FAQ </a>
        </nav>
        <div className="shop">
          <div className="bag">
            <img className="bag_img" src={bag} alt="" />
            <div className="button">
              <button className="btn">SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
