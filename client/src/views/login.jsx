import React from 'react';
import LoginForm from '../loginComponents/LoginForm.jsx';
import '../assets/veggies.jpg';


var background = {
  'background-color': 'transparent',
}

function login() {
  return (
    <div  style={background}>
      <div className="center">
        <br /><br /><br /><br />
        <LoginForm />
      </div>
    </div>
  );
}

export default login;
