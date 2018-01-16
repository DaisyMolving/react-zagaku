import React from 'react';

export default class Greeter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    }

    this.onNameChange = this.onNameChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>This is immutable: {this.props.name} </div>
        <div>Hello, {this.state.name}</div>
        <p>Who shall I greet next?</p>
        <input type="text" onChange={this.onNameChange}></input>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
}
