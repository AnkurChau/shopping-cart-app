import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };


  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    console.log("test");
    window.location.reload();
  };

  handleAddItem=()=>{
    const counters=this.state.counters.concat({id:this.state.counters.at(this.state.counters.lastIndexOf),value:0});
    this.setState({counters});
  }

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="d-inline-flex flex-column card__body">
            <NavBar
              totalCounters={
                this.state.counters.filter((c) => c.value > 0).length
              }
            />
             <button
              className="btn btn-info m-2"
              onClick={()=>this.handleAddItem()}
            >
              Add item
            </button>
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
