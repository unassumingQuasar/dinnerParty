import React from 'react';
import CreatePartyForm from '../dashComponents/CreatePartyForm.jsx';
import PartyDetailsTable from '../dashComponents/PartyDetailsTable.jsx';

import get from '../utils/get.js';
import post from '../utils/post.js';

class Dash extends React.Component {
  constructor() {
    super();
    this.state = {
      PartyDetailsData: [],
    };
  }

  componentWillMount() {
    this.getFromSever('/eventlist', (data) => { this.setState({ PartyDetailsData: data.data }); });
  }

  getFromSever(url, callback) {
    get(url, callback);
  }

  postToServer(url, postData, callback) {
    post(url, postData, callback);
  }

  optimisticStateUpdate(postData) {
    const oldPartyState = this.state.PartyDetailsData;
    const newPartySate = oldPartyState.concat([postData]);
    this.setState({PartyDetailsData: newPartySate});
  }

  otimisticGuestUpdate(postData, index) {
    const partyState = this.state.PartyDetailsData;
    partyState[index].guestlist = partyState[index].guestlist.concat([{name: postData.guestName}]);
    this.setState({PartyDetailsData: partyState});
  }

  render() {
    {
      console.log('dash state', this.state.PartyDetailsData)}

    return (
      <div>
        <h1>Dash</h1>
        <h3>Make a Party!</h3>
        <CreatePartyForm  optimisticStateUpdate={this.optimisticStateUpdate.bind(this)}
          postToServer={this.postToServer.bind(this)}
        />
        <h3>Your Parties!</h3>
        <PartyDetailsTable PartyDetailsData={this.state.PartyDetailsData}
        otimisticGuestUpdate={this.otimisticGuestUpdate.bind(this)}
          getFromSever={this.getFromSever.bind(this)} postToServer={this.postToServer.bind(this)}
        />
      </div>
    );
  }
}

export default Dash;
