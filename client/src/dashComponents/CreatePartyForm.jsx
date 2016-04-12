import React from 'react';
import ajaxPost from '../utils/ajaxPost.jsx';

class CreatePartyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      location: '',
      time: '',
      cost: '',
      description: '',
      inviteList: [],
      url: 'http://localhost:3000/event',
    };
  }

  handleSubmit(event, formInput) {
    event.preventDefault();
    var url = formInput.url;
    var context = this;

    ajaxPost(url, function (data, context) {
      this.state = { stateAtribute: data };
      this.setState({ stateAtribute: data });
    }, context, formInput);
  }


  handleEventNameChange(e) {
    this.setState({ eventName: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleTimeChange(e) {
    this.setState({ time: e.target.value });
  }

  handleCostChange(e) {
    this.setState({ cost: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleInviteListChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
        <div>

        <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
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
    );
  }
}

export default CreatePartyForm;
