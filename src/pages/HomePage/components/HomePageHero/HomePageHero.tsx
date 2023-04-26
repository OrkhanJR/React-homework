import "./HomePageHero.scss";
import left from "./assets/Group 87.png";
import right from "./assets/Group 90.png";
import test from "./assets/Heading.svg";
import play from "./assets/play icon.svg";

export const HomePageHero = () => {
  return (
    <>
      <div className="dishes">
        <img className="left" src={left} alt="" />
        <img className="right" src={right} alt="" />
      </div>
      <div className="main">
        <div className="center">
          <div className="test">
            <img src={test} alt="" />
          </div>
          <div className="p1">
            Culpa qui officia deserunt mollitia animi. Et harum quidem rerum
            facilis est et
            <div className="est">
              expedita distinctio. Nam libero tempore, cum soluta nobis est
            </div>
          </div>

          <div className="button">
            <div>
              <button className="btn">Adjust diet</button>
            </div>
            <div className="play">
              <button className="watch_btn">
                <img src={play} alt="" />
              </button>
              <p id="watch">Watch video</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
