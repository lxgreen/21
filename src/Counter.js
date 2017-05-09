import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.defaultProps = { initValue: 21};      
        this.state = {value: this.props.initValue};
    }

    render() {
        return (          
            <div className="spinner">{this.state.value}</div>
        );
    }
}

export default Counter;
