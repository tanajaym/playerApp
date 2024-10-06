
import React, { useState } from "react";
import './LogReg.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const LogReg = () => {

  const [action, setAction] = useState('');

  const registrLink = () => {
    setAction(' active');
  };

  const logLink = () => {
    setAction('');
  };

  return (
    <div className={`wrapper${action}`}>
      <LoginForm onRegistrLinkClick={registrLink} />
      <RegistrationForm onLoginLinkClick={logLink} />
    </div>
  );
};

export default LogReg;