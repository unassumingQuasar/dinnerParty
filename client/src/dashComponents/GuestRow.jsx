import React from 'react';

function GuestRow(props) {

  return (
    <tr>
      <td>{ this.props.guest.name }</td>
    </tr>
  );
}

export default GuestRow;
