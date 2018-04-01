
import React from 'react';
import ReactDOM from 'react-dom';
import Tap from './Tap.jsx';
import Timer from './Timer.jsx'

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          inputs: [],
          BPM: 0,
          started: false,
          stopTime: 0
      }
    }

    handleTap () {
        var tapSound = new Audio();
        tapSound.src = "ping.mp3";
        tapSound.play();
        let tapTime = 0;
    }

    metronomeController () {
        // if(this.state.started === false && this.state.BPM !== 0) {
        // this.state.started = true;
        // this.forceUpdate();
        // let interval = (60000)/this.state.BPM;
        // let startMetronome = setInterval(() => {
        //     var metronome = new Audio();
        //     metronome.src = "Metronome.mp3";
        //     metronome.play();
        //     if(this.state.started === false) {
        //         clearInterval(startMetronome);
        //     }
        // }, interval);
        // } 
        var metronome = new Audio();
        metronome.src = "Metronome.mp3";
        metronome.play();
    }
 
    changeBPM (e) {
        let setBPM = e.target.value;
        this.state.BPM = setBPM;
        this.state.stopTime = (60000/setBPM) * 4;
        this.forceUpdate();
        console.log(this.state)
    }

    startMetronome () {

        this.state.started = true;
        this.forceUpdate();
    }

    stopMetronome () {
        this.state.started = false;
        this.forceUpdate(); 
    }
    
    render() {
      return (
        <div>
            <input type="number" placeholder="Enter BPM" name="BPM" onChange={this.changeBPM.bind(this)}></input>
            <div className="metronome" onClick={this.startMetronome.bind(this)}>Start</div>
            <div className="stopMetronome" onClick={this.stopMetronome.bind(this)}>Stop</div>
            This is the App!
            <Tap tapFn={this.handleTap}/>
            <p>Current BPM: {this.state.BPM}</p>
      {(this.state.started) ? <Timer message="testing" durationMs={this.state.stopTime} metronome={this.metronomeController}/> : <div></div> }
        </div>
      );
    }
  }