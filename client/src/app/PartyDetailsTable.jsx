import PartyRow from './PartyRow.jsx';

var PartyDetailsTable = (props) => (
  <table>
    <tbody>
    PartyDetailsTable
      {props.partyDetails.map(party =>
        <PartyRow key={party.id} party={party} />
      )}
    </tbody>
  </table>
);

export default PartyDetailsTable;