import React from 'react';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Input from 'react-bootstrap/lib/Input';
import AutoCompleteGuests from './AutoCompleteGuests.jsx';


class InviteFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inviteList: '',
    };
  }
  handleSubmit(event, person) {
    event.preventDefault();
    this.props.invitePerson(person.inviteList);
  }

  handleInviteListChange(event) {
    event.preventDefault();
    this.setState({ inviteList: event.target.value });
    let friend = event.target.value;
    let invited = [];
    invited.push(friend);
    this.setState({ inviteList: invited });
  }

  render() {
    return (
      <div className="search-bar form-inline">
      <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
        <Input
          id="inviteFriend"
          type="text"
          onChange={this.handleInviteListChange.bind(this)}
          value={this.state.inviteList}
          placeholder="Invite Guest!"
        />
        <ButtonInput
          type="submit"
          value="Add a friend"
        />
      </form>
    </div>
    );
  }
}

export default InviteFriendForm;
