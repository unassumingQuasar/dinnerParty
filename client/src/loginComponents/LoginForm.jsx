import React from 'react';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import TextField from 'material-ui/lib/text-field';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      url: 'http://localhost:3000/login',
    };
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  // TODO: refactor to use getValue() to get the current state
  // see https://react-bootstrap.github.io/components.html#forms
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
          <TextField id="userName"
            onChange={this.handleUserNameChange.bind(this)}
            type="text" value={this.state.userName}
            floatingLabelText="What's your name?"
          />
          <TextField id="password"
            type="password" onChange={this.handlePasswordChange.bind(this)}
            value={this.state.password}
            floatingLabelText="Enter a password"
          />
          <ButtonInput bsStyle="success" type="submit" value="Login to DinnerParty" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
