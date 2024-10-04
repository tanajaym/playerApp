import React from "react";
import { PiUserFill } from "react-icons/pi";
import { FaKey } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const RegistrationForm = ({ onLoginLinkClick }) => {
  return (
    <div className="form-box registration">
      <form id="RegistrationForm" action="">
        <h1 id="h1">Registration</h1>

        <div className="inputBox">
          <input name="userLogin2" type="text" placeholder="  login" required />
          <PiUserFill className="icon" />
        </div>

        <div className="inputBox">
          <input name="userEmail2" type="text" placeholder="  Email" required />
          <IoIosMail className="icon" />
        </div>

        <div className="inputBox">
          <input name="userPassword2" type="password" placeholder="  password" required />
          <FaKey className="icon" />
        </div>

        <div className="rememberME">
          <input type="checkbox" id="terms_chbx" value="Remember me" />
          <label htmlFor="termsConditions">I agree to the terms & conditions</label><br></br>
        </div>

        <input id="submitButton2" type="submit" value={'Register'} />

        <div className="loginLink">
          Have an account?
          <a href="#" onClick={onLoginLinkClick}>Login</a>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;