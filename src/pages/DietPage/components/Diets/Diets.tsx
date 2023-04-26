import "./Diets.scss";
import k1000 from "../../../HomePage/components/HomePageDiets/assets/1000 kcal.svg";
import k1200 from "../../../HomePage/components/HomePageDiets/assets/1200kcal.svg";
import k1300 from "../../../HomePage/components/HomePageDiets/assets/1300 kcal.svg";
import k1500 from "../../../HomePage/components/HomePageDiets/assets/1500 kcal.svg";
import k1800 from "../../../HomePage/components/HomePageDiets/assets/Frame 3.svg";
import k2000 from "../../../HomePage/components/HomePageDiets/assets/2000kcal.svg";
import k2500 from "../../../HomePage/components/HomePageDiets/assets/2500kcal.svg";
import k3000 from "../../../HomePage/components/HomePageDiets/assets/3000kcal.svg";
import slim from "../../../HomePage/components/HomePageDiets/assets/Mask group slim.svg";
import fit from "../../../HomePage/components/HomePageDiets/assets/Mask group fit.svg";
import vegan from "../../../HomePage/components/HomePageDiets/assets/Mask group vegan.svg";
import keto from "../../../HomePage/components/HomePageDiets/assets/Mask group keto.svg";
import button from "../../../HomePage/components/HomePageDiets/assets/Choose.svg";
import gym from '../../../DietPage/components/Diets/assets/Mask group Gym.svg';
import office_box from '../../../DietPage/components/Diets/assets/Mask group Office box.svg';
import for_moms from '../../../DietPage/components/Diets/assets/Mask group For moms.svg';
import low_ig from '../../../DietPage/components/Diets/assets/Mask group Low IG.svg'

export const Diets = () => {
  return (
    <div className="diets">
      <div className="h2">
        <h2>DIETS</h2>
      </div>
      <div className="menu">
        <div className="slim">
          <img id="slim" src={slim} alt="" />
          <div>
            <h4>Slim</h4>
          </div>
          <div className="calorie">
            <button className="calorie-button">
              <img src={k1000} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1300} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1500} alt="" />
            </button>
          </div>
          <div className="about-food">
            Taque earum rerum hic tenetur a sapiente maiores alias consequatur
            aut perferendis doloribus asperiores...
          </div>
          <div className="price">
            <p className="from">from</p>
            <p className="para">57</p>
            <p id="pln">pln</p>
            <p id="day">/day</p>
            <div id="choose-btn">
              <button className="choose">
                <img src={button} alt="" />
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
              <img src={k1800} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2000} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2500} alt="" />
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
                  <img src={button} alt="" />
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
              <img src={k1300} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1500} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2000} alt="" />
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
                <img src={button} alt="" />
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
              <img src={k1300} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1500} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2000} alt="" />
            </button>
          </div>
          <div className="about-food">
            Taque earum rerum hic tenetur a sapiente maiores alias consequatur
            aut perferendis doloribus asperiores...
          </div>
          <div className="price4">
            <p className="from">from</p>
            <p className="para">62</p>
            <p className="pln">/pln</p>
            <p className="day">day</p>
            <div className="choose-btn">
              <button className="choose">
                <img src={button} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-menu">
        <div className="gym">
          <img id="gym" src={gym} alt="" />
          <div>
            <h4>Gym</h4>
          </div>
          <div className="calorie">
            <button className="calorie-button">
              <img src={k2000} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2500} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k3000} alt="" />
            </button>
          </div>
          <div className="about-food">
            Taque earum rerum hic tenetur a sapiente maiores alias consequatur
            aut perferendis doloribus asperiores...
          </div>
          <div className="price5">
            <p className="from">from</p>
            <p className="para">68</p>
            <p className="pln">/pln</p>
            <p className="day">day</p>
            <div className="choose-btn">
              <button className="choose">
                <img src={button} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="office-box">
          <img
            id="office"
            src={office_box}
            alt=""
          />
          <div>
            <h4>Office box</h4>
          </div>
          <div className="calorie">
            <button className="calorie-button">
              <img src={k1200} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1500} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1800} alt="" />
            </button>
          </div>
          <div className="about-food">
            Taque earum rerum hic tenetur a sapiente maiores lacus enim, porta
            id tincidunt...
          </div>
          <div className="price6">
            <p className="from">from</p>
            <p className="para">50</p>
            <p className="pln">/pln</p>
            <p className="day">day</p>
            <div className="choose-btn">
              <button className="choose">
                <img src={button} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="for-moms">
          <img id="moms" src={for_moms} alt="" />
          <div>
            <h4>For moms</h4>
          </div>
          <div className="calorie">
            <button className="calorie-button">
              <img src={k1800} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2000} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2500} alt="" />
            </button>
          </div>
          <div className="about-food">
            Taque earum rerum hic tenetur a sapiente maiores alias consequatur
            sapien id nisl fringilla, quis dignissim nibh...
          </div>
          <div className="price7">
            <p className="from">from</p>
            <p className="para">63</p>
            <p className="pln">/pln</p>
            <p className="day">day</p>
            <div className="choose-btn">
              <button className="choose">
                <img src={button} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="low-ig">
          <img id="low" src={low_ig} alt="" />
          <div>
            <h4>Low IG</h4>
          </div>
          <div className="calorie">
            <button className="calorie-button">
              <img src={k1500} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k1800} alt="" />
            </button>
            <button className="calorie-button">
              <img src={k2000} alt="" />
            </button>
          </div>
          <div className="about-food">
            Taque earum rerum hic tenetur a sapiente maiores alias consequatur
            aut perferendis doloribus asperiores semper fringilla...
          </div>
          <div className="price8">
            <p className="from">from</p>
            <p className="para">58</p>
            <p className="pln">/pln</p>
            <p className="day">day</p>
            <div className="choose-btn">
              <button className="choose">
                <img src={button} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
