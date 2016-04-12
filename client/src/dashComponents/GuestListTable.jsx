import React from 'react';
import ReactDOM from 'react-dom';
import GuestRow from './GuestRow.jsx';




class GuestsTable extends React.Component {
 constructor(){
   super();
   this.state = {
    GuestListData: []
  };
 }

 // getInitialState() {
 // }

 componentWillMount(){
   this.loadCommentsFromServer('http://localhost:3000/guestlist', (data) => { this.setState({GuestListData: data}); });
 };

 loadCommentsFromServer(url, stateKey) {

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
         {this.state.GuestListData.map(guest =>
           <GuestRow key={guest.id}guest={guest} />
         )}
       </tbody>
     </table>
   )
 }
}

export default GuestsTable;
