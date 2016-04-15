import React from 'react';
// import teammate from '../aboutComponents/teammate.jsx';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';

let aboutUs = [

  {
    id: 1,
    name: 'Mark',
    job: 'Button Presser',
    description: 'lololol test',
    picture: '',
  },
  {
    id: 2,
    name: 'Jen',
    job: 'Build Captain',
    description: '',
    picture: '',
  },
  {
    id: 3,
    name: 'Lizzy',
    job: '',
    description: '',
    picture: '',
  },
  {
    id: 4,
    name: 'Kenneth',
    job: '',
    description: '',
    picture: '',
  },

];

class about extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>We bring people together to socialize.</p>
        {console.log(aboutUs)}
        {aboutUs.map(member =>
          <Card>
            <CardMedia>
              <img src={member.picture} />
            </CardMedia>
            <CardHeader
              title={member.name}
              subtitle={member.job}
            />
            <CardText>
              <p>{member.description}</p>
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

export default about;
