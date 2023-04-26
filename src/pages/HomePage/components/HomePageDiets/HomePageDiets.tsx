import "./HomePageDiets.scss";
import arrow_left from "./assets/arrow left.svg";
import arrow_right from "./assets/arrow right 2.svg";
import slim from "./assets/Mask group slim.svg";
import t1000 from "./assets/1000 kcal.svg";
import t1300 from "./assets/1300 kcal.svg";
import t1500 from "./assets/1500 kcal.svg";
import choose from "./assets/Choose.svg";
import fit from "./assets/Mask group fit.svg";
import t1800 from "./assets/Frame 3.svg";
import t2000 from "./assets/2000kcal.svg";
import t2500 from "./assets/2500kcal.svg";
import vegan from "./assets/Mask group vegan.svg";
import keto from "./assets/Mask group keto.svg";


export const HomePageDiets = () => {
  return (
    <>
      <div className="container">
        <h2 className="h2">The most popular diets</h2>
        <div className="diets">
          <div className="arrows">
            <div className="arrow-left">
              <button className="left">
                <img src={arrow_left} alt="" />
              </button>
            </div>
            <div className="arrow-right">
              <button className="right">
                <img src={arrow_right} alt="" />
              </button>
            </div>
          </div>

          <div className="menu">
            <div className="slim">
              <img id="slim" src={slim} alt="" />
              <div>
                <h4>Slim</h4>
              </div>
              <div className="calorie">
                <button className="calorie-button">
                  <img src={t1000} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t1300} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t1500} alt="" />
                </button>
              </div>
              <div className="about-food">
                Taque earum rerum hic tenetur a sapiente maiores alias
                consequatur aut perferendis doloribus asperiores...
              </div>
              <div className="price">
                <p className="from">from</p>
                <p className="para">57</p>
                <p id="pln">pln</p>
                <p id="day">/day</p>
                <div id="choose-btn">
                  <button className="choose">
                    <img src={choose} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="fit">
              <img id="fit" src={fit} alt="" />
              <div>
                <h4>Fit</h4>
              </div>
              <div className="calorie">
                <button className="calorie-button">
                  <img src={t1800} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t2000} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t2500} alt="" />
                </button>
                <div className="about-food">
                  Taque earum rerum hic tenetur a sapiente maiores...
                </div>
                <div className="price2">
                  <p className="from">from</p>
                  <p className="para">65</p>
                  <p className="pln">pln</p>
                  <p className="day">/day</p>
                  <div className="choose-btn">
                    <button className="choose">
                      <img src={choose} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="vegan">
              <img id="vegan" src={vegan} alt="" />
              <div>
                <h4>Vegan</h4>
              </div>
              <div className="calorie">
                <button className="calorie-button">
                  <img src={t1300} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t1500} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t2000} alt="" />
                </button>
              </div>
              <div className="about-food">
                Taque earum rerum hic tenetur a sapiente maiores alias
                consequatur...
              </div>
              <div className="price3">
                <p className="from">from</p>
                <p className="para">59</p>
                <p className="pln">/pln</p>
                <p className="day">day</p>
                <div className="choose-btn">
                  <button className="choose">
                    <img src={choose} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="keto">
              <img id="keto" src={keto} alt="" />
              <div>
                <h4>Keto</h4>
              </div>
              <div className="calorie">
                <button className="calorie-button">
                  <img src={t1300} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t1500} alt="" />
                </button>
                <button className="calorie-button">
                  <img src={t2000} alt="" />
                </button>
              </div>
              <div className="about-food">
                Taque earum rerum hic tenetur a sapiente maiores alias
                consequatur aut perferendis doloribus asperiores...
              </div>
              <div className="price4">
                <p className="from">from</p>
                <p className="para">62</p>
                <p className="pln">/pln</p>
                <p className="day">day</p>
                <div className="choose-btn">
                  <button className="choose">
                    <img src={choose} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
