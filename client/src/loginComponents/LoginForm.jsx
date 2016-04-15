import React from 'react';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import TextField from 'material-ui/lib/text-field';

class LoginForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button><a href="http://104.236.165.244:3000/auth/google">Login with Google</a></button>
      </div>
    );
  }

}

export default LoginForm;
