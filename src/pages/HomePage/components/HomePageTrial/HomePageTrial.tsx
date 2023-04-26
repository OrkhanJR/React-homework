import "./HomePageTrial.scss";
import right from "./assets/Group 94.svg";
import left from "./assets/Group 92.svg";
import order from "./assets/Order your trial diet.svg";
import trial from "./assets/Try any diet to choose the right one for you.svg";

export const HomePageTrial = () => {
  return (
    <div className="container">
      <div className="trial">
        <div className="cloud">
          <div className="right-img">
            <img src={right} alt="" />
          </div>
          <div className="left-img">
            <img className="left-img" src={left} alt="" />
          </div>
          <div className="trialcenter">
            <img id="order" src={order} alt="" />
            <img id="try" src={trial} alt="" />
            <div className="button">
              <button className="btn">Choose a diet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
