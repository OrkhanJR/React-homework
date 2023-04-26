import "./More.scss";
import line from "./assets/see more line.svg";

export const More = () => {
  return (
    <div className="more">
      <button className="button">
        <h4 className="see">See more</h4>
      </button>

      <img className="line" src={line} alt="" />
    </div>
  );
};
