import React from 'react';
// import teammate from '../aboutComponents/teammate.jsx';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';

import lizzy from '../assets/lizzy.jpg';
import jen from '../assets/jen.jpg';
import ken from '../assets/ken.jpg';
import mark from '../assets/mark.jpg';

let aboutUs = [

  {
    id: 1,
    name: 'Mark',
    job: 'Button Presser',
    description: 'Presses buttons until things work. Sometimes turns out well',
    picture: mark,
  },
  {
    id: 2,
    name: 'Jen',
    job: 'Component Captain',
    description: 'Handles props like a boss',
    picture: jen,
  },
  {
    id: 3,
    name: 'Lizzy',
    job: 'Sequalizer',
    description: 'Likes learning about Blobs and can tell you all about them',
    picture: lizzy,
  },
  {
    id: 4,
    name: 'Kenneth',
    job: 'Data Cruncher',
    description: 'Enjoys jumping into the deepend where he has no idea what is happening. See postgres backend',
    picture: ken,
  },

];

let style = {
  paddingRight: '0px',
};


class about extends React.Component {
  render() {
    return (
      <div className="text-align-center">
        <h1>About</h1>
        <p>We bring people together to socialize.</p>
        {aboutUs.map(member =>
          <Card className="center">
            <CardMedia>
              <img src={member.picture} />
            </CardMedia>
            <br />
            <div className="text-align-center">
              <CardHeader
                textStyle={style}
                title={member.name}
                subtitle={member.job}
              />
              <CardText>
                <p>{member.description}</p>
              </CardText>
            </div>
          </Card>
        )}
      </div>
    );
  }
}

export default about;
