import "./HomePageDelivery.scss";
import cities from "./assets/list of cities.svg";
import check from "./assets/Check.svg";
import locate from "./assets/Locate me.svg";

export const HomePageDelivery = () => {
  return (
    <div className="container">
      <div className="delivery">
        <div className="left-side">
          <div className="right-side">
            <div className="list-cities">
              <img src={cities} alt="" />
            </div>
          </div>
          <div className="right-side"></div>

          <div>
            <h2 id="where">Where we deliver</h2>
          </div>

          <div id="left-p">
            <p>
              See if we're delivering to you right now! Use the search engine by
              entering the postal code of your locality and <br />
              see if we can deliver your order there.
            </p>
          </div>
          <div className="city-search">
            <form>
              <label htmlFor="city"></label>
              <input className="city" type="text" placeholder="City name" />
            </form>

            <div className="nip">
              <form>
                <label htmlFor="city"></label>
                <input className="nip" type="text" placeholder="NIP" />
              </form>
            </div>
          </div>
          <div className="buttons">
            <div className="check">
              <button className="check">
                <img src={check} alt="" />
              </button>
            </div>
            <div className="locate">
              <button className="locate">
                <img src={locate} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
