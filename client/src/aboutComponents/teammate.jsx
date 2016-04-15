import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

function teammate() {
  return (
    <div>
      <Card>
        <CardHeader>
          title={this.props.name}
          subtitle={this.props.job}
        </CardHeader>
        <CardText>
          <p>test</p>
          <p>{this.props.description}</p>
        </CardText>
      </Card>
    </div>
  );
}

export default teammate;
