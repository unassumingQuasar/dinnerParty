import React from 'react';
import ReactDOM from 'react-dom';
//TODO: nest imports inside of their parent components
import CreatePartyForm from './CreatePartyForm.jsx';
import GuestRow from './GuestRow.jsx';
import GuestsTable from './GuestsListTable.jsx';
import LoginForm from './LoginForm.jsx';
import InviteFriendForm from './InviteFriendForm.jsx';
import PartyDetailsTable from './PartyDetailsTable.jsx';
import PartyRow from './PartyRow.jsx';
import SignUpForm from './SignUpForm.jsx';

var GuestListData = [
 {name: 'Mark'},
 {name: 'Jen'},
 {name: 'Lizzie'}
];

var PartyDetailsData = [
 {eventName: 'bestEverTimes',
  location: 'your house',
  time: '9am',
  cost: '$5',
  description: 'so much fun so much fun so much fun so much'
},

{eventName: 'funTimeRyou',
 location: 'my house',
 time: '7am',
 cost: '$10',
 description: 'so much fun so much fun so much fun so much fun so much fun so much'
},

{eventName: 'greatThingsHappening',
location: 'the park',
time: '7pm',
cost: '$3',
description: 'so much fun so much fun so much fun so much fun so much fun'
}
];

class App extends React.Component {
 constructor(){
   super();
 }

handleSubmit(event, formInput) {
 event.preventDefault();
 console.log(formInput);
}

 render() {
   return (
     <div>
       <CreatePartyForm handleSubmit={this.handleSubmit.bind(this)}/ >
       <PartyDetailsTable partyDetails={PartyDetailsData}/ >
       <SignUpForm handleSubmit={this.handleSubmit.bind(this)}/ >
       <LoginForm handleSubmit={this.handleSubmit.bind(this)}/ >
       <GuestsTable guestList={GuestListData}/ >
     </div>
   )
 }
}

ReactDOM.render( <App />, document.getElementById('app') );