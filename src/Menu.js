import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

    render() {
        return (          
            <nav className="menu">
                <ul>
                    <li className="new">PLAY</li>
                    <li className="settings">SETTINGS</li>
                    <li className="rules">RULES</li>
                </ul>         
            </nav>
        );
    }
}

export default Menu;
