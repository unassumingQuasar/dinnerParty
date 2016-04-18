import React from 'react';
import LoginForm from '../loginComponents/LoginForm.jsx';
import '../assets/veggies.jpg';


var background = {
  'backgroundImage': 'url('+require('../assets/veggies.jpg')+')',
  'backgroundSize': 'cover',
  'backgroundRepeat': 'no-repeat',
  'height': 1000+'px'
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
