import React from 'react';
import get from '../utils/get.js';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import AutoCompleteGuests from './AutoCompleteGuests.jsx';

class PartyDetailsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      PartyDetailsData: [],
    };
  }


  componentWillMount() {
    this.loadCommentsFromServer('http://localhost:3000/eventlist', (data) => { this.setState({ PartyDetailsData: data }); });
  }

  componentDidMount() {  }
  loadCommentsFromServer(url, stateKey) {

    $.ajax ({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: stateKey,
      error: (data) => { console.log('no dinner party for you!', data); },
    });
  }

  render() {
    {console.log('stately state', this.state)}
    return (
      <div>
        {this.state.PartyDetailsData.map((party) => (
          <Card>
            <CardHeader title={party.eventName} />
            <CardText>
              <p>Location: {party.location}</p>
              <p>Time: {party.time}</p>
              <p>Cost: {party.cost}</p>
              <p>Description: {party.description}</p>
            </CardText>
            <CardActions>
              <AutoCompleteGuests id={party.id} />
            </CardActions>
            <List>
              {party.guestlist.map(guest => (
                <ListItem primaryText={guest.name} />
              ))}
            </List>
          </Card>
        ))};
      </div>
    );
  }
}

export default PartyDetailsTable;
