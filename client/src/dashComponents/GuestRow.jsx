class GuestRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.guest.name}</td>
      </tr>
    )
  }
}

export default GuestRow;
