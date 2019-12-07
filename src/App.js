import React from 'react';
import Proptypes from 'prop-types';

const App = () => {
  let profiles = [
    { name: 'hanako', age: 10 },
    { name: 'taro', age: 12 },
    { name: 'test', age: 1 }
  ];
  return (
    <div>
      {profiles.map((profile, index) => (
        <User name={profile.name} age={profile.age} key={index} />
      ))}
    </div>
  );
};

const User = props => {
  return (
    <div>
      I'm {props.name}, I'm {props.age}
    </div>
  );
};

User.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number.isRequired
};

export default App;
