class InviteFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inviteList: []
    };
  }
  handleSubmit(event, formInput) {
    event.preventDefault();
    console.log(formInput);
  }

  handleInviteListChange(event) {
    event.preventDefault();
    var friend = event.target.value;
    var invited = [];
    invited.push(friend);
    this.setState({inviteList: invited});
  }

  //handleSubmit is set as the callback passed through props; not sure if we need in in redux
  render() {
    return <div className="search-bar form-inline">

        <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
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