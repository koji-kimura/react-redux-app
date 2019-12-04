import React from 'react';

function App() {
  return (
    <React.Fragment>
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
}

export default App;
