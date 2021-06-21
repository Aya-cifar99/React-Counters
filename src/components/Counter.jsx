import React, { Component } from 'react';
class Counter extends Component {
    
    render() { 
        return (
            <div>
                <span style={ {fontSize: 25}} className={this.getBadgeColor()}>{this.props.counter.value}</span>
                <button style={ {fontSize: 25}} onClick={()=> this.props.handleIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button style={ {fontSize: 25}} className="btn btn-danger m-2 btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    getBadgeColor() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }
}
 
export default Counter;