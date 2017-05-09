import React, { Component, Children } from 'react';
import './View.css';

class View extends Component {
    
    render() {
        const children = this.props.children;
        return (          
            <div className="view-component">               
                {Children.map(children, child => 
                   <div className='tile'>{child}</div>       
                )}                   
            </div>
        );
    }
}

export default View;