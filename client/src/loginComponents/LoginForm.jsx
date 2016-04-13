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
        <button><a href="http://localhost:3000/auth/google">Login with Google</a></button>
        // <button onClick={(event) => this.handleSubmit(event)} value='Login with google'>Login With Google</button>
      </div>
    );
  }

}

export default LoginForm;
