import React,  { Component } from "react";
import Counters from "./Counters";

class home extends Component {
    state = { 
        counters : [
            { id: 1, value: 0},
            { id: 2, value: 3},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
     }; 
    
    
      handleIncrement = (counter) => {
          const counters = [...this.state.counters];
          const index = counters.indexOf(counter);
          counters[index].value++;
          this.setState({ counters });
      };
    
      handleDelete = (counterId) => {
          const counters = this.state.counters.filter(ele => ele.id !== counterId);
          this.setState({ counters });
      };
    
      handleReset = () => {
          const counters = this.state.counters.map( ele => {
              ele.value = 0; 
              return ele;
          })
          this.setState({ counters });
      };
    
    render() { 
        return ( <Counters 
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
            />  );
    }
}
 
export default home;