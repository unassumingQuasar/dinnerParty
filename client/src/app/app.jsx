import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <h1>Hello word</h1>,
  document.getElementById('container')
);

