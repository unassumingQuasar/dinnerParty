import React from 'react';
import Button from 'react-bootstrap/lib/Button';
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
          <Button bsStyle="success" type="submit">
            Login to DinnerParty
          </Button>

        </form>
      </div>
    );
  }
}

export default LoginForm;
