import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="lognipage-main">
        <div className="Login-page">
          <div className="design-effect">
            <div className="Login-left">
              <div className="logo-containdiv">
                <div className="logo-center">
                  <div className="logo-div">O!</div>
                </div>
                <div>
                  <h2>OneVarsity</h2>
                </div>
              </div>

              <div className="wish-div">
                <h1>Welcome Back !</h1>
              </div>
              <div className="info">
                <p>
                  To stay connected with us <br />
                  Please Signup with your personal Info.
                </p>
              </div>

              <div className="button-sign-in">
                <Link to={'/register'}><button className="sign-up">SIGN UP</button></Link>
              </div>
            </div>
          </div>
          <hr className="vertical-line" />

          <div className="design-effect-2">
            <div className="Login-right">
              <div className="welcome">
                <h1 className="welcome">Welcome Chief !</h1>
              </div>
              <div className="info-1">
                <p>Login in to your account to continue</p>
              </div>
              <form action="">
                <div className="login-input-email">
                  <input
                    className="input-divs"
                    name="Email"
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
                {/* <div className="email-validation" id="email-validate">
                  Not Valid!
                </div> */}

                <div className="login-input-password">
                  <input
                    className="input-divs"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                {/* <div className="password-validation" id="password-validate">
                  Not Valid!
                </div> */}
                <div className="forget-password">
                  <Link className="forgot-pass-link" to={'#'}><h5>Forgot your Password?</h5></Link>
                </div>

                <div className="button-login">
                  <input
                    className="form-submision"
                    type="submit"
                    value={"LOG IN"}
                  />
                </div>
              </form>
              <div className="redirct-to-signup">
                <h5>Don't have an account ? <Link className="signup-link" to="/register">Sign Up</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
