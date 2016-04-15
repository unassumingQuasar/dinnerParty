import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import get from '../utils/get.js';

class AutoCompleteGuests extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }


  componentWillMount() {
    this.buildDataSource('/usernames');
  }
  // componentWillMount is invoked once before the
  // first render, see:
  // http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/
  buildDataSource(url) {
    get(url, (data) => {
      this.setState({
        dataSource: data.data,
      });
    });
  }

  // case insensitive autocomplete filter
  filter(searchText, key) {
    return key.toLowerCase().includes(searchText.toLowerCase());
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Add Friend!"
          filter={this.filter}
          dataSource={this.state.dataSource}
        />
        <FlatButton label="Invite people!" backgroundColor="green" />
      </div>

    );
  }
}

export default AutoCompleteGuests;
