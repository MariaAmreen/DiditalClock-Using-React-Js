import React, { Component } from 'react';
import './DigitalClock.css';

class Clock extends Component{
    constructor(props){
        //super is react's own method
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        }
        this.updateTime();
    }
    updateTime(){
        setInterval(() => {
            //setState is react's own method to update the states
            this.setState({ currentTime: new Date().toLocaleString()
             })
        }, 1000)
    }

    render(){
        return(
            <div>
            <h2>My Digital Clock</h2>
            <h1>{this.state.currentTime}</h1>
            </div>
        )
    }
}

export default Clock;