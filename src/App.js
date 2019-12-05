import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onClick={() => {
          console.log('I am clicked');
        }}
        onChange={() => {
          console.log('I am changed');
        }}
      />
    </React.Fragment>
  );
};

const Cat = () => {
  return <div>Meow!!!</div>;
};

export default App;
