import "./HomePageBox.scss";
import plant from './assets/Group 96.svg';
import mobile_plant from './assets/mobile-plant.svg';
import folk from './assets/Group 97.svg';
import mobile_folk from './assets/mobile-folk.svg';
import diversity from './assets/Group 98.svg';
import mobile_diversity from './assets/mobile-diversity.svg';
import match from './assets/Group 99.svg';


export const HomePageBox = () => {
  return (
    <div className="box-diets">
      <div className="head">
        <h2>Box diets with which you get more</h2>
      </div>
      <div className="box">
        <div className="fresh">
          <picture>
            <source
              media="(max-width: 426px )"
              srcSet={mobile_plant}
            />
            <img src={plant} alt="" />
          </picture>

          <div className="ingr">
            <h4>Fresh ingredients</h4>
          </div>
          <div className="p">
            Donec in nisl porttitor, blandit augue in,
            <div className="in" style={{marginLeft: '-42px;', textAlign: 'center'}}>
              ullamcorper felis
            </div>
          </div>
        </div>

        <div className="taste">
          <picture>
            <source media="(max-width:426px)" srcSet={mobile_folk} />
            <img src={folk} alt="" />
          </picture>
          <div className="ingr">
            <h4>Taste</h4>
          </div>
          <div className="p">
            Apibus sed erat nec volutpat. Interdum et
            <div
              className="malesuda"
              style={{marginLeft: '-8px;', textAlign: 'center'}}
            >
              malesuada
            </div>
          </div>
        </div>

        <div className="diversity">
          <picture>
            <source
              media="(max-width:426px )"
              srcSet={mobile_diversity}
            />
            <img src={diversity} alt="" />
          </picture>
          <div className="ingr">
            <h4>Diversity</h4>
          </div>
          <div className="p">
            Proin hendrerit molestie placerat ec ante
            <div
              className="malesuda"
              style={{marginLeft: '-8px;', textAlign: 'center'}}
            >
              congue placerat non sed
            </div>
          </div>
        </div>

        <div className="match">
          <img src={match} alt="" />
          <div className="ingr">
            <h4>Match</h4>
          </div>
          <div className="p">
            Vivamus blandit, lorem non venenatis
            <div>luctus, leo dui volutpat purusquis tinci</div>
          </div>
        </div>
      </div>
    </div>
  );
};
