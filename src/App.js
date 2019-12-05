import React from 'react';

const App = () => {
  let profiles = [
    { name: 'hanako', age: 10 },
    { name: 'taro', age: 12 },
    { name: 'yoshio' }
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

User.defaultProps = {
  age: 1
};

export default App;
