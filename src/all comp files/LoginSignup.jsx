import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginSignUp">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button> Continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login Here </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the Terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
