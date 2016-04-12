import React from 'react';
import LoginForm from '../loginComponents/LoginForm.jsx';
import SignUpForm from '../loginComponents/SignUpForm.jsx';

function login() {
  return (
    <div>
      <h1>login test</h1>
      <LoginForm />
      <SignUpForm />
    </div>
  )
}

export default login;
