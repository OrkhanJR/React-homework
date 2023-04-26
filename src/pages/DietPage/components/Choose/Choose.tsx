import "./Choose.scss";
import right from './assets/Group 102.svg';
import left from './assets/Group 101.svg';
import choose_diet from './assets/Cant you choose your diet_.svg';
import we from './assets/text.svg';

export const Choose = () => {
  return (
    <div className="choose">
      <div className="cloud">
        <div className="right-img">
          <img src={right} alt="" />
        </div>
        <div className="left-img">
          <img src={left} alt="" />
        </div>
        <div className="center">
          <img src={choose_diet} alt="" />
          <img
            id="try"
            src={we}
            alt=""
          />
          <div className="button">
            <button className="btn">Adjust diet</button>
          </div>
        </div>
      </div>
    </div>
  );
};
