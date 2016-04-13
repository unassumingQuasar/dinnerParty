import React from 'react';
import CreatePartyForm from '../dashComponents/CreatePartyForm.jsx';
import PartyDetailsTable from '../dashComponents/PartyDetailsTable.jsx';
import GuestsTable from '../dashComponents/GuestListTable.jsx';

// http request here, pass down the data structure as props?

function dash() {
  return (
    <div>
      <h1>Dash</h1>
      <h3>Make a Party!</h3>
      <CreatePartyForm />
      <h3>Party Details</h3>
      <PartyDetailsTable />
      <h3>Guest Details</h3>
      <GuestsTable />
    </div>
  );
}

export default dash;
