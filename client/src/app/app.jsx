import React from 'react';
import ReactDOM from 'react-dom';

// var Hello = React.createClass({
//   render: function() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });

// ReactDOM.render(
//   <h1>Hello word!!</h1>,
//   document.getElementById('container')
// );

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
       <InviteFriendForm />
       <PartyDetailsTable partyDetails={PartyDetailsData}/ >
       <SignUpForm handleSubmit={this.handleSubmit.bind(this)}/ >
       <LoginForm handleSubmit={this.handleSubmit.bind(this)}/ >
       <GuestsTable guestList={GuestListData}/ >
     </div>
   )
 }
}



ReactDOM.render( <App />, document.getElementById('app') );