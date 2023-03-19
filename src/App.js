import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 0,
    };
  }

  handleChange = (e) => {
    const input = e.target.value.trim();
    const regex = /^[1-9]\d*$/;
    if (input.match(regex)) {
      this.setState({ step: parseInt(input) });
    }
  };

  handleDecrement = () => {
    const { count, step } = this.state;
    const newCount = count - step;
    this.setState({ count: newCount < 0 ? 0 : newCount });
  };

  handleIncrement = () => {
    const { count, step } = this.state;
    this.setState({ count: count + step });
  };

  render() {
    const { count, step } = this.state;
    return (
      <>
        <h1>Step:</h1>
        <input
          type="number"
          onChange={this.handleChange}
          style={{ marginLeft: "50px" }}
        ></input>
        <h1>Counter:</h1>
        <button
          style={{ padding: "13px", marginLeft: "50px", marginRight: "20px" }}
          onClick={this.handleDecrement}
        >
          {" "}
          -{" "}
        </button>
        <span style={{ padding: "13px", border: "1px solid" }}>{count}</span>
        <button
          style={{ padding: "13px", marginLeft: "20px" }}
          onClick={this.handleIncrement}
        >
          {" "}
          +{" "}
        </button>
      </>
    );
  }
}

export default Counter;
