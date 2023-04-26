import "./Menu.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="title">
        <h2>Menu</h2>
      </div>
      <div className="categories">
        <div className="top-btn">
          <button className="top">Top rated</button>
        </div>
        <div className="button-b">
          <button className="btn-b">Breakfast</button>
        </div>
        <div className="button-2b">
          <button className="btn-2b">II Breakfast</button>
        </div>
        <div className="button-l">
          <button className="btn-l">Lunch</button>
        </div>
        <div className="button-s">
          <button className="btn-s">Snacks</button>
        </div>
        <div className="button-d">
          <button className="btn-d">Dinner</button>
        </div>

        <div className="choose">
          Choose a diet:
          <label>
            <select className="select">
              <option>All</option>
              <option>Keto</option>
              <option>Slim</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
