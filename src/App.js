import React, { Component } from 'react';
import './App.css';

import Menu from './Menu.js';
import View from './View.js';
import Play from './Play.js';
import Settings from './Settings.js';
import Rules from './Rules.js';

class App extends Component {
    render() {
        return (
          <div className="app">
            <Menu/>
            <View>
              <Play/>
              <Settings/>
              <Rules/>
            </View>        
          </div>
        );
    }
}

export default App;
