'use strict';
 
const React = require('react');
const ReactAnimationFrame = require('react-animation-frame');
let bpm;

class Timer extends React.Component {
    onAnimationFrame(time, last) {
        const progress = Math.round(time / this.props.durationMs * 100);
        this.bar.style.width = `${progress}%`;
        // this.props.metronome();
        bpm = this.props.bpm;
        console.log(bpm);

        if (progress === 100) this.props.endAnimation();
    }
 
    render() {
        return (
            <div className="timer">
                <p>{this.props.message}</p>
                <div className="timer__bar" ref={node => this.bar = node}></div>
            </div>
        );
    }
}

module.exports = ReactAnimationFrame(Timer, bpm);