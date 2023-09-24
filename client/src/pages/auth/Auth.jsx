import "./Auth.css";

import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>STYLER Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            className="infoInput"
            type="text"
            name="username"
            placeholder="Usernames"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account. Sign up
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="infoInput"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="username"
            placeholder="Usernames"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            className="infoInput"
            type="password"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
