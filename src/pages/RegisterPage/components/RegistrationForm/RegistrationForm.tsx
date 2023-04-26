import "./RegistrationForm.scss";
import divider from "./assets/Divider.svg";

export const RegistrationForm = () => {
  return (
    <div className="smreg">
      <div className="divider">
        <img src={divider} alt="" />
      </div>
      <div className="form-title">
        <p className="title">Sign up with your email address</p>
      </div>

      <form action="">
        <div className="register">
          <div className="username">
            <label htmlFor="uname">Username</label>
            <input
              type="text"
              name="uname"
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="username">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="uname"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="username">
            <label className="psw" htmlFor="password">
              Password
              <button className="see-btn">
                <img src="/log in/login assets/see.svg" alt="" />
              </button>
            </label>
            <input
              type="password"
              name="uname"
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="psw-requirements">
            <p>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <div className="personal-info">
            <form action="">
              <div className="gender">What’s your gender? (optional)</div>

              <div className="radio">
                <input type="radio" name="radio" id="" />
                <label htmlFor="radio">Male</label>

                <input type="radio" name="radio" id="" />
                <label htmlFor="radio">Female</label>

                <input type="radio" name="radio" id="" />
                <label htmlFor="radio">Non-binary</label>
              </div>
            </form>
          </div>
          <div className="date">
            <p className="paragraph">What’s your date of birth?</p>

            <div className="date-choose">
              <label htmlFor=""></label>

              <input type="date" name="" id="" required />
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="" id="" />

            <label htmlFor="">
              <p>
                Share my registration data with our content providers for
                marketing purposes.
              </p>
            </label>
          </div>
          <div className="policy">
            <p>
              By creating an account, you agree to the
              <a href="">Terms of use</a> and <a href="">Privacy Policy.</a>
            </p>
          </div>

          <div
            className="g-recaptcha"
            data-sitekey="6LcPQkwlAAAAAJtCPeuYa-m1uFvNGLKVkMzqG4qV"
          ></div>
          <div className="sign-up">
            <div className="login-btn">
              <button>
                <p>Sign Up</p>
              </button>
            </div>
            <p className="login">
              Already have an ccount? <a href="/log in/login.html">Log in</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
