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
  }

  //handleSubmit is set as the callback passed through props; not sure if we need in in redux
  render() {
    return <div>

        <form onSubmit={(event) => this.handleSubmit(event, this.state)}>

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
  }
}

export default InviteFriendForm;
