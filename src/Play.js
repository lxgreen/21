import React, { Component } from 'react';
import './Play.css';
import Counter from './Counter';

class Play extends Component {
    
    render() {
        return (          
            <div className="play">
                <Counter initValue={33}/>
            </div>
        );
    }
}

export default Play;
