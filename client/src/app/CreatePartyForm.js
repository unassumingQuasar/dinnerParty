class CreatePartyForm extends React.Component {
  constructor(){
    super();
    this.state = {
      eventName: '',
      location: '',
      time: '',
      cost: '',
      description: '',
      inviteList: []
    };
  }


  handleEventNameChange(e) {
    this.setState({eventName: e.target.value});
  }

  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleCostChange(e) {
    this.setState({cost: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleInviteListChange(e) {
    this.setState({description: e.target.value});
  }

  //handleSubmit is set as the callback passed through props; not sure if we need in in redux
  render() {
    return <div className="search-bar form-inline">

      <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        <input id="eventName"
          onChange={this.handleEventNameChange.bind(this)}
          type="text" value={this.state.eventName}
          placeholder="Event Name"
        />


        <input id="location"
          type="text" onChange={this.handleLocationChange.bind(this)}
          value={this.state.location}
          placeholder="Location"
        />

        <input id="time"
          type="text" onChange={this.handleTimeChange.bind(this)}
          value={this.state.time}
          placeholder="Time"
        />

        <input id="cost"
          type="text"
          onChange={this.handleCostChange.bind(this)}
          value={this.state.cost}
          placeholder="Cost"
        />

          <textarea id="description"
            type="text"
            onChange={this.handleDescriptionChange.bind(this)}
            value={this.state.description}
            placeholder="Describe your party"
          />


        <button type="submit">
          Create Dinner Party
        </button>

      </form>
    </div>
  }
}


window.CreatePartyForm = CreatePartyForm;
