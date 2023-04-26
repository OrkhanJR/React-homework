import "./HomePageBlog.scss";
import mobile_citrus from "./assets/mobile-citrus.png";
import vitamin_c from "./assets/Mask group Vitamin C.svg";
import clock3 from "./assets/clock 3 min read.svg";
import fast_food from "./assets/Fast food - why should we avoid it_ How does it affect our health_.svg";
import fastfood from "./assets/fast food.svg";
import blood from "./assets/blood.svg";
import bloodtext from "./assets/Blood tests - why should they be done regularly_.svg";
import clock2 from "./assets/clock 2 min read.svg";
import sweet from "./assets/sweet.svg";
import sweettext from "./assets/Sweets on a diet - can you eat them_.svg";
import clock5 from "./assets/clock 5 min read.svg";

export const HomePageBlog = () => {
  return (
    <div className="main-blog">
      <div id="blg">
        <h2>Blog</h2>
      </div>
      <div className="blog">
        <div className="left-img">
          <div style={{ marginTop: "52px" }}>
            <picture>
              <source media="(max-width: 426px)" srcSet={mobile_citrus} />
              <img src={vitamin_c} alt="" />
            </picture>
          </div>

          <div className="text-of-img">
            <h4 className="h4">
              Vitamin C - what has the most vitamin C?
              <p id="esther">Esther Howard</p>
              <p id="mae">
                Maecenas at bibendum orci, nec gravida elit. Sed viverra in est
                ac consequat. Nulla facilisi. Donec efficitur malesuada
                scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor
                sem dapibus dolor, vel congue dolor massa vitae dolor. Integer
                aliquet orci non...
              </p>
            </h4>
            <div className="clock">
              <img src={clock3} alt="" />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="right-top">
            <div className="img">
              <img src={fastfood} alt="" />
            </div>

            <a className="h4" href="#">
              <img src={fast_food} alt="" />
            </a>
            <div className="bottom">
              <p id="bell">Jerome Bell</p>
              <div className="clock">
                <img src={clock3} alt="" />
              </div>
            </div>
            <p id="efficitur">
              Efficitur malesuada scelerisque. Praesent luctus, nisi eget
              viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa
              vitae...
            </p>
          </div>

          <div className="right-middle">
            <img src={blood} alt="" />

            <a className="h4" href="#">
              <img src={bloodtext} alt="" />
            </a>

            <div className="bottom">
              <p id="howard">Esther Howard</p>
              <div className="clock">
                <img src={clock2} alt="" />
              </div>
            </div>
          </div>

          <div className="right-bottom">
            <img src={sweet} alt="" />

            <a className="h4" href="#">
              <img src={sweettext} alt="" />
            </a>
            <div className="bottom">
              <p id="henry">Courtney Henry</p>
              <div className="clock">
                <img src={clock5} alt="" />
              </div>
            </div>
            <p id="efficitur">
              Efficitur malesuada scelerisque. Praesent luctus, nisi eget
              viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa
              vitae...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
