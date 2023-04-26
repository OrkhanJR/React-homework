import './HomePageFaq.scss';
import line from './assets/Line 35.svg';
import arrow from './assets/arrow right 2.svg';

export const HomePageFaq = () => {
    return (
        <div className="faq">
        <img src={line} alt="" />
        <div className="q1">
          <h3 id="q1">How do I place an order?</h3>
          <a className="q1-arrow" href="#"
            ><img src={arrow} alt=""
          /></a>
        </div>

        <img src={line} alt="" />
        <div className="q1">
          <h3 id="q1">
            On which days and at what hours does the delivery take place?
          </h3>
          <a className="q1-arrow" href="#"
            ><img src={arrow} alt=""
          /></a>
        </div>
        <img src={line} alt="" />
        <div className="q1">
          <h3 id="q1">For how long can I order a diet?</h3>
          <a className="q1-arrow" href="#"
            ><img src={arrow} alt=""
          /></a>
        </div>
        <img src={line} alt="" />
        <div className="q1">
          <h3 id="q1">Can I change the delivery address?</h3>
          <a className="q1-arrow" href="#"
            ><img src={arrow} alt=""
          /></a>
        </div>
        <img src={line} alt="" />
        <div className="q1">
          <h3 id="q1">Can I suspend catering?</h3>
          <a className="q1-arrow" href="#"
            ><img src={arrow} alt=""
          /></a>
        </div>
      </div>
    );
}