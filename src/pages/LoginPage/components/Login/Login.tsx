import "./Login.scss";
import eye from "./assets/hide icon.png";

export const Login = () => {
  return (
    <main>
      <div className="main-page">
        <h1 id="login">Log In</h1>
      </div>
      <form action="">
        <div className="mail">
          <label htmlFor="uname">Email address or user name</label>
          <input type="text" name="uname" required id="uname" />
          <div id="error-mail" style={{ color: "red", display: "none" }}>
            incorrect email or username
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">
            <div className="psw">
              Password
              <div className="img">
                <button className="see-btn">
                  <img src={eye} alt="" />
                </button>
                <button
                  className="see-btn"
                  style={{ display: "none", cursor: "pointer" }}
                ></button>
              </div>
            </div>
          </label>
          <input type="password" name="psw" required id="psw" />
          <div id="error-psw" style={{ color: "red", display: "none" }}>
            incorrect password
          </div>
        </div>

        <label className="container">
          Remember me
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </form>
      <div className="login-foot">
        <div className="terms">
          <p>
            By continuing, you agree to the <a href="">Terms of use</a> and
            <a href="">Privacy Policy</a>.
          </p>
        </div>
        <div className="login-btn">
          <button>
            <p>Log in</p>
          </button>
        </div>
        <div className="forget">
          <a className="psw" href="">Forget your password?</a>
        </div>
        <div className="register">
          <p>Don’t have an acount? <a href="/register/register.html">Sign up</a></p>
        </div>
      </div>
    </main>
  );
};
