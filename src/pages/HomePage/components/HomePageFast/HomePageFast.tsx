import "./HomePageFast.scss";
import heart from "./assets/heart.svg";
import left_img from "./assets/Group 95.svg";
import phone from "./assets/phone.svg";
import one from "./assets/Number 1.svg";
import two from "./assets/Number 2.svg";
import three from "./assets/Number 3.svg";
import hat from "./assets/chef-hat 1.svg";
import car from "./assets/car.svg";

export const HomePageFast = () => {
  return (
    <>
      <div className="order">
        <div id="order-fast">
          <h2>
            Order faster than you can
            <div className="heart">
              get hungry <img id="heart" src={heart} alt="" />
            </div>
          </h2>
          <div className="right-text">
            <p>
              By choosing our box catering at your door, you can be sure that
              your ready meals will be healthy and tasty.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left-img">
            <img src={left_img} alt="" />
          </div>
          <div className="right-side">
            <div className="one">
              <div className="first">
                <img src={one} alt="" />
              </div>
              <div className="phone">
                <img src={phone} alt="" />
              </div>
              <div className="h4">
                <h4>Choose a diet that suits you</h4>
                <div className="p">
                  <p>
                    Qui blanditiis praesentium voluptatum deleniti atque maxime
                    placeat facere
                  </p>
                </div>
              </div>
            </div>

            <div className="two">
              <div className="second">
                <img src={two} alt="" />
              </div>
              <div className="hat">
                <img src={hat} alt="" />
              </div>
              <div className="h4">
                <h4>We start cooking</h4>
                <div className="p">
                  <p>
                    Qui blanditiis praesentium voluptatum deleniti atque veniet
                    ut et voluptates repudiandae
                  </p>
                </div>
              </div>
            </div>

            <div className="three">
              <div className="third">
                <img src={three} alt="" />
              </div>
              <div className="car">
                <img src={car} alt="" />
              </div>
              <div className="h4">
                <h4>We're bringing the diet to your door, bon appetit!</h4>
                <div className="p">
                  Qui blanditiis praesentium voluptatum deleniti atque
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
