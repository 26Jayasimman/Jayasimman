import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import { useState } from "react";

function RegisterPage() {
  const initialStatesError = {
    firstname: { required: false },
    lastname: { required: false },
    email: { required: false },
    phonenumber: { required: false },
    password: { required: false },
    confirmpassword: { required: false, match: false },
  };

  const [errors, setErrors] = useState(initialStatesError);

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();

  const handleRegSubmit = (event) => {
    event.preventDefault();

    let errors = initialStatesError;
    let hasError = false;
    if (inputs.firstname == "") {
      errors.firstname.required = true;
      hasError = true;
    }
    if (inputs.lastname == "") {
      errors.lastname.required = true;
      hasError = true;
    }
    if (inputs.email == "") {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.phonenumber == "") {
      errors.phonenumber.required = true;
      hasError = true;
    }
    if (inputs.password == "") {
      errors.password.required = true;
      hasError = true;
    }
    if (
      inputs.confirmpassword == "" &&
      inputs.confirmpassword === inputs.password
    ) {
      errors.confirmpassword.required = true;
      hasError = true;
    }

    if (inputs.password !== "" && inputs.confirmpassword !== "") {
      if (inputs.password !== inputs.confirmpassword) {
        errors.confirmpassword.match = true;
        hasError = true;
      }
    }
    setErrors(errors);

    if (!hasError) {
      localStorage.setItem("userData", JSON.stringify(inputs));
      const registerTime = new Date().toISOString();
      localStorage.setItem("registerTime", registerTime);

      alert("Form Submitted");
      navigate("/");

      setInputs({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
      });
    }
  };

  const handleinputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="register-main">
        <div className="register-page">
          <div className="reg-design-effect1">
            <div className="register-left">
              <div className="reg-logo-containdiv">
                <div className="reg-logo-center">
                  <div className="reg-logo-div">O!</div>
                </div>
                <div>
                  <h2>OneVarsity</h2>
                </div>
              </div>

              <div className="reg-wish-div">
                <h1 className="reg-wish">Welcome Back Chief !</h1>
              </div>
              <div className="reg-info">
                <p>
                  To stay connected with us <br />
                  Please Login with your personal Info.
                </p>
              </div>

              <div className="reg-button-login">
                <Link to={"/"}>
                  <button className="reg-login">LOG IN</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <hr className="reg-vertical-line"/> */}
          <div className=" register-right">
            <div className="reg-design-effect2">
              <div className="reg-create-acc">
                <h1>Create an account !</h1>
              </div>

              <div className="reg-login-redirect">
                <h5>
                  Already have an account ?
                  <Link to={"/"} className="reg-login-link1">
                    Log in
                  </Link>
                </h5>
              </div>

              <form
                action=""
                className="reg-form"
                id="form-reg"
                onSubmit={handleRegSubmit}
              >
                <div className="reg-inputs">
                  <input
                    className="reg-Firstname"
                    type="text"
                    name="firstname"
                    autoComplete="First Name"
                    placeholder={"First Name"}
                    value={inputs.firstname}
                    onChange={handleinputs}
                  />
                  {errors.firstname.required ? (
                    <p className="err-message">First Name is required!</p>
                  ) : null}
                </div>
                <div className="reg-inputs">
                  <input
                    className="reg-Lastname"
                    type="text"
                    name="lastname"
                    autoComplete="Last Name"
                    placeholder={"Last Name"}
                    value={inputs.lastname}
                    onChange={handleinputs}
                  />
                  {errors.lastname.required ? (
                    <p className="err-message">Last Name is required!</p>
                  ) : null}
                </div>

                <div className="reg-email">
                  <input
                    type="text"
                    className="reg-email-input"
                    name="email"
                    autoComplete="email"
                    placeholder={"Email"}
                    value={inputs.email}
                    onChange={handleinputs}
                  />
                  {errors.email.required ? (
                    <p className="err-message">Email is required!</p>
                  ) : null}
                </div>
                <div className="reg-phone">
                  <input
                    type="text"
                    className="reg-phone-input"
                    name="phonenumber"
                    autoComplete="phone"
                    placeholder={"Phone Number"}
                    value={inputs.phonenumber}
                    onChange={handleinputs}
                  />
                  {errors.phonenumber.required ? (
                    <p className="err-message">Phone Numer is required!</p>
                  ) : null}
                </div>
                <div className="reg-password">
                  <input
                    type="password"
                    className="reg-password-input"
                    name="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={handleinputs}
                  />
                  {errors.password.required ? (
                    <p className="err-message">Password is required!</p>
                  ) : null}
                </div>
                <div className="reg-confirm-password">
                  <input
                    type="password"
                    className="reg-confirmpassword-input"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={inputs.confirmpassword}
                    onChange={handleinputs}
                  />
                  {errors.confirmpassword.required && (
                    <p className="err-message">Confirm-Password is required!</p>
                  )}
                  {errors.confirmpassword.match && (
                    <p className="err-message">
                      Oops...Password do not match !
                    </p>
                  )}
                </div>
                <div className="reg-submit">
                  <button type="submit" className="reg-submit-input">
                    REGISTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
