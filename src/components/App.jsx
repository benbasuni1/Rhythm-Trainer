import React from 'react';
import ReactDOM from 'react-dom';
import Tap from './Tap.jsx';
const path = require('path');

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          inputs: []
      }
    }

    handleTap () {
        var tapSound = new Audio();
        tapSound.src = "ping.mp3"
        tapSound.play();
    }
  
    render() {
      return (
        <div>
            <select name="BPM">
                <option value="80">80 BPM</option>
                <option value="100">100 BPM</option>
                <option value="120">120 BPM</option>
            </select>
            This is the App!
            <Tap tapFn={this.handleTap}/>
        </div>
      );
    }
  }

