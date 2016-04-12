import React from 'react';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Input from 'react-bootstrap/lib/Input';

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
          <Input id="userName"
            onChange={this.handleUserNameChange.bind(this)}
            type="text" value={this.state.userName}
            placeholder="What's your name?"
          />
          <Input id="password"
            type="text" onChange={this.handlePasswordChange.bind(this)}
            value={this.state.password}
            placeholder="Enter a password"
          />
          <ButtonInput bsStyle="success" type="submit" value="Login to DinnerParty" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
