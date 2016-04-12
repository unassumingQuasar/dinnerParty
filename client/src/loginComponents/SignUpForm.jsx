import React from 'react';

import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Input from 'react-bootstrap/lib/Input';

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
    };
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
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

          <Input id="Email"
            type="email" onChange={this.handleEmailChange.bind(this)}
            value={this.state.email}
            placeholder="Email"
          />

          <Input id="password"
            type="text" onChange={this.handlePasswordChange.bind(this)}
            value={this.state.password}
            placeholder="Enter a password"
          />

          <ButtonInput bsStyle="success" type="submit" value="Sign up for Dinner Party!" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
