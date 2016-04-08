
class PartyRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.party.eventName}</td>
        <td>{this.props.party.location}</td>
        <td>{this.props.party.time}</td>
        <td>{this.props.party.cost}</td>
        <td>{this.props.party.description}</td>
      </tr>
    )
  }
}


window.PartyRow = PartyRow;
