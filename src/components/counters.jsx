import React, { Component } from "react";
import Counter from "./counter";


class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, onDecrement, counters, onRestart } =
      this.props;
    return (
      <div>
        <div className="row">
          <div className=''>
            <button
              className="btn btn-danger m-2"
              onClick={onReset}
              disabled={counters.length === 0 ? "disabled" : ""}
            >
              Reset Counters
            </button>
            <button
              className="btn btn-success m-2"
              onClick={onRestart}
              disabled={counters.length !== 0 ? "disabled" : ""}
            >
              Refresh Counter
            </button>
          </div>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
