import React from 'react';
import CreatePartyForm from '../dashComponents/CreatePartyForm.jsx';
import PartyDetailsTable from '../dashComponents/PartyDetailsTable.jsx';
import GuestsTable from '../dashComponents/GuestListTable.jsx';
import get from '../utils/get.js';
import post from '../utils/post.js';


class dash extends React.Component {
  constructor() {
    super();
    this.state = {
      PartyDetailsData: [],
    };
  }


  componentWillMount() {
    this.getFromSever('http://localhost:3000/eventlist', (data) => { this.setState({ PartyDetailsData: data.data }); });
  }



  getFromSever(url, callback) {
    get(url, callback);
  }

  postToServer(url, postData, callback) {
    post(url, postData, (data) => {
      this.setState({
        dataSource: data.data,
      });
    });
  }

  render() {
    {console.log('dash state', this.state)}
    return (
      <div>
        <h1>Dash</h1>
        <h3>Make a Party!</h3>
        <CreatePartyForm  getFromSever={this.getFromSever.bind(this)} postToServer={this.postToServer.bind(this)} />
        <h3>Your Parties!</h3>
        <PartyDetailsTable PartyDetailsData={this.state.PartyDetailsData} getFromSever={this.getFromSever.bind(this)} postToServer={this.postToServer.bind(this)} />
        <h3>Guest Details</h3>
        <GuestsTable />
      </div>
    );
  }
}

export default dash;
