function PartyRow(props) {
  return (
    <tr>
      <td>{props.party.eventName}</td>
      <td>{props.party.location}</td>
      <td>{props.party.time}</td>
      <td>{props.party.cost}</td>
      <td>{props.party.description}</td>
    </tr>
  )
}

export default PartyRow;
