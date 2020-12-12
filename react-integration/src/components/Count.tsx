import { Component } from 'react';
import CountValue from './CountValue';

interface ICountProps {
  initialValue?: number;
}

interface ICountState {
  value: number
}

class Count extends Component<ICountProps, ICountState> {
  public state = { value: this.props.initialValue || 0}

  private setValue = (delta: number) => {
    this.setState({
      value: this.state.value + delta
    });
  }

  render() {
    return (
      <div>
        <CountValue count={this.state.value} />
        <button onClick={() => this.setValue(10)}>+</button>
        <button onClick={() => this.setValue(-10)}>-</button>
      </div>
    )
  }
}

export default Count;
