import "./Dishes.scss";
import dish1 from "./assets/dish 1.svg";
import dish2 from "./assets/dish 2.svg";
import dish3 from "./assets/dish 3.svg";
import dish4 from "./assets/dish 4.svg";
import dish5 from "./assets/dish 5.svg";
import dish6 from "./assets/dish 6.svg";
import dish7 from "./assets/dish 7.svg";
import dish8 from "./assets/dish 8.svg";
import breakfast from "./assets/Breakfast.svg";
import lunch from "./assets/Lunch.svg";
import dinner from "./assets/Dinner.svg";
import snacks from "./assets/Snacks.svg";
import plant_icon from "./assets/plant icon.svg";
import nuts_icon from "./assets/nuts icon.svg";
import nuts_icon2 from "./assets/nuts icon 2.svg";
import fish_icon from "./assets/fish icon.svg";
import eggs_icon from './assets/eggs icon.svg';


export const Dishes = () => {
  return (
    <div className="menu">
      <div className="food-top">
        <div className="dish1">
          <img id="dish1" src={dish1} alt="" />
          <img src={breakfast} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">
                Molestiae sed augue eu sapien hendrerit fringilla
              </p>
              <p className="kcal">420 kcal</p>
            </div>
            <div className="about">
              <p>Taque earum rerum hic tenetur a sapiente</p>
            </div>
            <div className="foot">
              <div className="diet">Diet:</div>
              <div className="slim">Slim</div>
              <div className="icons">
                <img src={plant_icon} alt="" />
                <img src={nuts_icon} alt="" />
                <img src={eggs_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="dish2">
          <img id="dish2" src={dish2} alt="" />
          <img src={lunch} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">Vel illum condimentum, risus et</p>
              <p className="kcal">254 kcal</p>
            </div>
            <div className="about">
              <p>
                Ut aut reiciendis voluptatibus maiores alias consequatur aut
              </p>
            </div>
            <div className="foot">
              <div className="diet">Diet:</div>
              <div className="slim">Vegan</div>
              <div className="icons">
                <img src={plant_icon} alt="" />
                <img src={nuts_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="dish3">
          <img id="dish3" src={dish3} alt="" />
          <img src={snacks} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">Eum fugiat nulla gravida magna</p>
              <p className="kcal">298 kcal</p>
            </div>
            <div className="about">
              <p>Perferendis doloribus asperiores repellat</p>
            </div>
            <div className="foot">
              <div className="diet">Diet:</div>
              <div className="slim">Slim</div>
              <div className="icons">
                <img src={plant_icon} alt="" />
                <img src={nuts_icon} alt="" />
                <img src={eggs_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="dish4">
          <img id="dish4" src={dish4} alt="" />
          <img src={breakfast} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">Molestiae ultrices</p>
              <p className="kcal">182 kcal</p>
            </div>
            <div className="about">
              <p>libero tempore, cum soluta nobis est eligendi</p>
            </div>
            <div className="foot">
              <div className="diet-type">
                <div className="diet">Diet:</div>
                <div className="slim">Dla mam</div>
              </div>
              <div className="icons">
                <img src={plant_icon} alt="" />
                <img src={nuts_icon2} alt="" />
                <img src={eggs_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-bottom">
        <div className="dish5">
          <img id="dish5" src={dish5} alt="" />
          <img src={dinner} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">Molestiae dapibus turpis</p>
              <p className="kcal">410 kcal</p>
            </div>
            <div className="about">
              <p>Taque earum rerum hic tenetur a sapiente</p>
            </div>
            <div className="foot">
              <div className="diet-type">
                <div className="diet">Diet:</div>
                <div className="slim">Fit</div>
              </div>
              <div className="icons">
                <img src={plant_icon} alt="" />

                <img src={eggs_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="dish6">
          <img id="dish6" src={dish6} alt="" />
          <img src={lunch} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">
                Vel illum odio ultricies, nec sollicitudin eros
              </p>
              <p className="kcal">240 kcal</p>
            </div>
            <div className="about">
              <p>
                Ut aut reiciendis voluptatibus maiores alias consequatur aut
              </p>
            </div>
            <div className="foot">
              <div className="diet-type">
                <div className="diet">Diet:</div>
                <div className="slim">Vegan</div>
              </div>
              <div className="icons">
                <img src={plant_icon} alt="" />

                <img src={nuts_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="dish7">
          <img id="dish7" src={dish7} alt="" />
          <img src={lunch} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">Eum fugiat accumsan, sapien vel</p>
              <p className="kcal">322 kcal</p>
            </div>
            <div className="about">
              <p>Perferendis doloribus asperiores repellat</p>
            </div>
            <div className="foot">
              <div className="diet-type">
                <div className="diet">Diet:</div>
                <div className="slim">Keto</div>
              </div>
              <div className="icons">
                <img src={plant_icon} alt="" />
                <img src={fish_icon} alt="" />
                <img src={nuts_icon} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="dish8">
          <img id="dish8" src={dish8} alt="" />
          <img src={dinner} alt="" id="name" />
          <div className="parent">
            <div className="title-b">
              <p className="title-break">Оlestiae placerat orci vel arc</p>
              <p className="kcal">388 kcal</p>
            </div>
            <div className="about">
              <p>libero tempore, cum soluta nobis est eligendi</p>
            </div>
            <div className="foot">
              <div className="diet-type">
                <div className="diet">
                  Diet:
                  <div className="slim">
                    Office
                    <div className="box">box</div>
                  </div>
                </div>
              </div>
              <div className="icons">
                <img src={plant_icon} alt="" />
                <img src={nuts_icon2} alt="" />
                <img src={eggs_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
