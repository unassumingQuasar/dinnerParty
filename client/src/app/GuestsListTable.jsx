import GuestRow from './GuestRow.jsx';

var GuestsTable = (props) => (
  <table>
    <tbody>
    Guest List
      {props.guestList.map(guest =>
        <GuestRow key={guest.id}guest={guest} />
      )}
    </tbody>
  </table>
);

export default GuestsTable;