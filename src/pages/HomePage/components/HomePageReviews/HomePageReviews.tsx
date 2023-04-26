import "./HomePageReviews.scss";
import arrow from "./assets/arrow right.svg";
import stars from "./assets/stars.svg";
import name from "./assets/Name.svg";
import esther from "./assets/esther.svg";
import quote from "./assets/quote-right icon.svg";
import anonim from "./assets/anonim.svg";
import jacob from "./assets/jacob jones.svg";

export const HomePageReviews = () => {
  return (
    <>
      <div className="container">
        <div className="review">
          <div className="reviews">
            <h2 className="title">
              We cook – they enjoy every minute of their
              <img className="arrowimg" src={arrow} alt="arrow" />
              <span id="lives">lives</span>
            </h2>

            <div className="right-up">
              <div className="hawkins">
                <div className="stars">
                  <img src={stars} alt="" />
                </div>
                <div className="cloud">
                  <div className="name">
                    <img src={name} alt="" />
                    <div className="review">
                      Minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam, nisi ut aliquid ex ea commodi
                    </div>
                  </div>
                </div>
              </div>

              <div className="howard">
                <div className="stars">
                  <img src={stars} alt="" />
                </div>
                <div className="cloud">
                  <div className="name">
                    <img src={esther} alt="" />
                    <div className="review">
                      Minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam, nisi ut
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="left-down">
            <div className="because">Because we...</div>
            <div className="quote">
              <div className="quote1">
                <img src={quote} alt="" />
              </div>
              <div className="quote2">
                We don't accept half-measures and shortcuts, because what we
                care
                <br />
                about is the WOW effect. And all the luck that our efforts are
                not in
                <br />
                vain. We know this because we closely follow the opinions of our
                <br />
                consumers.
              </div>
              <div className="right-down">
                <div className="anonim">
                  <div className="stars">
                    <img src={stars} alt="" />
                  </div>
                  <div className="cloud">
                    <div className="name">
                      <img src={anonim} alt="" />
                      <div className="review">
                        Minima veniam, quis nostrum exercitationem ullam
                        corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi consequatur. Quis
                      </div>
                    </div>
                  </div>
                </div>

                <div className="jones">
                  <div className="stars">
                    <img src={stars} alt="" />
                  </div>
                  <div className="cloud">
                    <div className="name">
                      <img src={jacob} alt="" />
                      <div className="review">
                        Minima veniam, quis nostrum exercitationem ullam
                        laboriosam, nisi ut aliquid ex ea
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
