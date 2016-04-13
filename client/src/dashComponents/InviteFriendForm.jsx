import React from 'react';

class InviteFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inviteList: ''
    };
  }
  handleSubmit(event, person) {
    event.preventDefault();
    this.props.invitePerson(person.inviteList)
  }

  handleInviteListChange(event) {
    event.preventDefault();
    this.setState({inviteList: event.target.value});
    let friend = event.target.value;
    let invited = [];
    invited.push(friend);
    this.setState({ inviteList: invited });
  }

  // handleSubmit is set as the callback passed through props; not sure if we need in in redux
  render() {
    return <div>

        <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
=======
    return (
      <div className="search-bar form-inline">
>>>>>>> Fix style errors

        <input id="inviteFriend"
          type="text"


          onChange={this.handleInviteListChange.bind(this)}
          value={this.state.inviteList}
          placeholder="Invite friends!"
        />

        <button type="submit">
          Add a Friend
        </button>

      </form>
    </div>
    );
  }
}

export default InviteFriendForm;
