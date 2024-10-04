// LoginForm.jsx
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import { PiUserFill } from "react-icons/pi";


const LoginForm = ({ onRegistrLinkClick }) => {
  
  const form1 = document.getElementsByClassName('loginForm');
  // const form = document.querySelector('loginForm');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    // console.log(formDataObject);
  };








  //   fetch('https://reqres.in/api/users', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formDataObject) 
  //   })

  //       // Здесь можно добавить логику для отправки данных на сервер
  // };

    
    
    
    
    return (
    <div className="form-box login">
      <form className="loginForm" action=""
        onSubmit={handleSubmit} 
      >
        <h1 id="h1">Login</h1>

        <div className="inputBox">
          <input name="userLogin" 
                  type="text"
                  placeholder=" login" 
                  required 
                  autoComplete="username"
            value={login} 
            onChange={(e) => setLogin(e.target.value)}
          />
          <PiUserFill className="icon" />
        </div>

        <div className="inputBox">
          <input name="userPassword" 
                  type="password" 
                  placeholder=" password" 
                  autoComplete="current-password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaKey className="icon" />
        </div>

        <div className="rememberME">
          <input name="checkbox" 
                type="checkbox" 

                />
          <label htmlFor="remember">Remember me</label><br></br>
          {/* <a href="#">Forgot password?</a> */}
          <button>Forgot password? </button>
        </div>

        <input name="submitButton" id="submitButton1" type="submit" value={'Login'} />
        {/* <p>{login}</p>
        <p>{password}</p> */}

        <div className="registrationLink">
          Don't have an account?
          <a href="#" onClick={onRegistrLinkClick}>Register</a>
        </div> 
      </form>
    </div>
  );
};

export default LoginForm;