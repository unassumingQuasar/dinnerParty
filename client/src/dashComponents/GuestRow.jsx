import React from 'react';

function GuestRow(props) {
  {console.log('autoPorp',props)}

  return (
    <tr>
      <td>{ this.props.guest.name }</td>
    </tr>
  );
}

export default GuestRow;
