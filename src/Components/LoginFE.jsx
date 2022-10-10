import React from "react";
import car from "../Img/car.jpg"
import google from "../Img/google.png"
import "../Components/LoginFE.css"
const LoginFE = () => {
  return (
    <div className="wrapper">
      <div className="l-left">
        <div className="login-form-content">
          <span className="logo">n-Stop.</span>
          <br></br>
          <span className="form-title">Log In</span>
          <form action="" className="login-form">
            <label>Username</label>
            <input type="email" placeholder="Enter E-mail" required />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required />
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
          <span className="OR">Or continue with</span>
          <button className="google">
            <img src={google} alt="" />
            <p>Login with Google</p>
          </button>
          <span className="forget-pass">Forget Password ?</span>
          <span className="register">
            Don't have an account yet? Register
          </span>
        </div>
      </div>
      <div className="l-right">
        <img src={car} alt="" className="l-right-img" />
      </div>
    </div>
  );
};

export default LoginFE;
