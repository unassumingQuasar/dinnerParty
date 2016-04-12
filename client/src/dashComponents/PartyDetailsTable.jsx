import React from 'react';
import ReactDOM from 'react-dom';
import PartyRow from './PartyRow.jsx';

class PartyDetailsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      PartyDetailsData: []
    };
  }

  componentWillMount(){
    this.loadCommentsFromServer('http://localhost:3000/eventlist', (data) => { this.setState({PartyDetailsData: data}); });
  };

  loadCommentsFromServer(url, stateKey) {
    console.log('ajax')

  $.ajax ({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: stateKey,
      error: (data) => { console.log('no dinner party for you!', data); }
    });
  };

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.PartyDetailsData.map(party =>
            <PartyRow key={party.id} party={party} />
          )}
        </tbody>
      </table>
    );
  }
};

export default PartyDetailsTable;
