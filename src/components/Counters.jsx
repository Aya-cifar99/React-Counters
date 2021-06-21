import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() { 
        const {counters, onDelete, onIncrement, onReset} = this.props;
        
        return ( 
        <div>
            <button 
            onClick={onReset} 
            className="btn btn-primary btn-sm m-2"
            >Reset
            </button>

           {counters.map( counter => 
           <Counter 
           key={counter.id} 
           onDelete={onDelete}
           counter={counter} 
           selected 
           handleIncrement={onIncrement}/>)
           }

        </div>);
    }
}
 
export default Counters;