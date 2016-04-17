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
        <button><a href="/auth/google">Login with Google</a></button>
      </div>
    );
  }

}

export default LoginForm;
