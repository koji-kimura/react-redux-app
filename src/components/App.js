import React, { Component } from 'react';

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handlePlusbutton = () => {
    console.log('handlePlusButton');
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusbutton = () => {
    console.log('handleMinusbutton');
    console.log(this.state.count);
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusbutton}> +1 </button>
        <button onClick={this.handleMinusbutton}> -1 </button>
      </React.Fragment>
    );
  }
}

export default App;
