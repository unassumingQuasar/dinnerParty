import React from 'react';
import ajaxPost from '../utils/ajaxPost.jsx';
// import get from '../utils/get.js';
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

  handleFormSubmit(event, formInput) {
    event.preventDefault();
    let url = formInput.url;
    let context = this;

    ajaxPost(url, function(data, context) {
      this.state = { stateAtribute: data };
      this.setState({ stateAtribute: data });
    }, context, formInput);
    console.log(this.state).bind(this);
  }

  onChange(source, e) {
    let state = Object.assign({}, this.state);
    state[source] = e.target.value;
    console.log(state);
    this.setState(state);
  }

  invitePerson(person) {
    let invited = this.state.inviteList;
    invited.push(person);
    this.setState({ inviteList: invited });
    console.log(this.state.inviteList).bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleFormSubmit(event, this.state)}>
          <Input
            id="eventName"
            type="text"
            placeholder="Event Name"
            value={this.state.eventName}
            onChange={this.onChange.bind(this, 'eventName')}
          />
          <Input
            id="location"
            type="text"
            placeholder="Location"
            value={this.state.location}
            onChange={this.onChange.bind(this, 'location')}
          />
          <Input
            id="time"
            type="text"
            placeholder="Time"
            value={this.state.time}
            onChange={this.onChange.bind(this, 'time')}
          />
          <Input
            id="cost"
            type="text"
            placeholder="Cost"
            value={this.state.cost}
            onChange={this.onChange.bind(this, 'cost')}
          />
          <Input
            id="description"
            type="textarea"
            label="Describe the party!"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChange.bind(this, 'description')}
          />
          <ButtonInput
            type="submit"
            bsStyle="success"
            value="Create Dinner Party"
          />
        </form>
        <InviteFriendForm invitePerson={this.invitePerson.bind(this)} />
      </div>
    );
  }
}

export default CreatePartyForm;
