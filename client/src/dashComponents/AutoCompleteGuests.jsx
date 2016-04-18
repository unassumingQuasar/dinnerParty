import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import FlatButton from 'material-ui/lib/flat-button';

class AutoCompleteGuests extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      guestName: '',
      event: this.props.id,
    };
  }

  componentWillMount() {
    this.buildDataSource('/usernames');
  }
  // componentWillMount is invoked once before the
  // first render, see:
  // http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/
  buildDataSource(url) {
    this.props.getFromSever(url, (data) => {
      this.setState({
        dataSource: data.data,
      });
    });
  }

  // case insensitive autocomplete filter
  filter(searchText, key) {
    return key.toLowerCase().includes(searchText.toLowerCase());
  }

  handleButton(formInput) {
    this.props.otimisticGuestUpdate(formInput, this.props.index);
    this.props.postToServer('/addguest', formInput);
  }

  render() {
    return (
      <div>
        <AutoComplete
          ref="auto"
          floatingLabelText="Add Friend!"
          filter={this.filter}
          dataSource={this.state.dataSource}
          onUpdateInput={() => this.setState({ guestName: this.refs.auto.getValue() })}
        />
        <FlatButton onClick={() => this.handleButton(this.state)}
          label="Invite people!" backgroundColor="green"
        />
      </div>
    );
  }
}

export default AutoCompleteGuests;
