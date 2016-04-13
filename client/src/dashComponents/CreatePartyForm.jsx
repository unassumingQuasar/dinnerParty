import React from 'react';
import ajaxPost from '../utils/ajaxPost.jsx';
import InviteFriendForm from './InviteFriendForm.jsx';

import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';

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
    let url = formInput.url;
    let context = this;

  ajaxPost(url, function (data, context) {
    this.state = { stateAtribute: data };
    this.setState({ stateAtribute: data });
  }, context, formInput);
  console.log(this.state).bind(this);
  }

  invitePerson(person) {
    var invited = this.state.inviteList;
    invited.push(person);
    this.setState({inviteList: invited});
    console.log(this.state.inviteList).bind(this);
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
          <Input id="eventName"
            onChange={this.handleEventNameChange.bind(this)}
            type="text" value={this.state.eventName}
            placeholder="Event Name"
          />

          <Input id="location"
            type="text" onChange={this.handleLocationChange.bind(this)}
            value={this.state.location}
            placeholder="Location"
          />

          <Input id="time"
            type="text" onChange={this.handleTimeChange.bind(this)}
            value={this.state.time}
            placeholder="Time"
          />

          <Input id="cost"
            type="text"
            onChange={this.handleCostChange.bind(this)}
            value={this.state.cost}
            placeholder="Cost"
          />

          <Input id="description"
            type="textarea"
            label="Describe the Party!"
            onChange={this.handleDescriptionChange.bind(this)}
            value={this.state.description}
            placeholder="Describe your party"
          />
          <ButtonInput type="submit" bsStyle="success" value="Create Dinner Party" />
        </form>
        <InviteFriendForm invitePerson={this.invitePerson.bind(this)} />
      </div>
    );
  }
}

export default CreatePartyForm;
