import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import AutoCompleteGuests from './AutoCompleteGuests.jsx';

class PartyDetailsTable extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {this.props.PartyDetailsData.map((party) => (
          <Card>
            <CardHeader title={party.eventName} key={party.id} />
            <CardText>
              <p>Location: {party.location}</p>
              <p>Time: {party.time}</p>
              <p>Cost: {party.cost}</p>
              <p>Description: {party.description}</p>
            </CardText>
            <CardActions>
              <AutoCompleteGuests getFromSever={this.props.getFromSever.bind(this)}
                postToServer={this.props.postToServer.bind(this)}
                id={party.id}
              />
            </CardActions>
            <List>
              {party.guestlist.map(guest => (
                <ListItem key={guest.id} primaryText={guest.name} />
              ))}
            </List>
          </Card>
        ))};
      </div>
    );
  }
}

export default PartyDetailsTable;
