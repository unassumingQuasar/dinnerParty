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
    // var guestlist = this.state.PartyDetailsData[0].guestlist;
    //   console.log('dash state', guestlist.push({name: postData}))
  }


  // optimisticName(postData, index) {
  //   console.log('name!!!', postData)
  //   const oldPartyState = this.state.PartyDetailsData;
  //   const guestlist = this.state.PartyDetailsData[index].guestlist;
  //   const newGuestList = guestlist.concat([{name: postData.guestName}]);
  //   console.log('newlist', newGuestList)
  //   this.setState({guestlist: newGuestList});
  //   this.forceUpdate()
  // }


  optimisticName(postData, index) {
    console.log('name!!!', postData)
    const oldPartyState = this.state.PartyDetailsData;
    const guestlist = oldPartyState[index].guestlist;
    const newGuestList = guestlist.concat([{name: postData.guestName}]);
    oldPartyState[index].guestlist = newGuestList
    console.log('newlist', newGuestList)
    this.setState({PartyDetailsData: oldPartyState});
    console.log(oldPartyState)
    this.forceUpdate()
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
        optimisticName={this.optimisticName.bind(this)}
          getFromSever={this.getFromSever.bind(this)} postToServer={this.postToServer.bind(this)}
        />
      </div>
    );
  }
}

export default Dash;
