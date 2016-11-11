import React from 'react';

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.timerID = null;
    this.state = {
      date: new Date(),
    };
  }

  stopClock(){
    if(this.timerID !== null){
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  startClock(){
    if(this.timerID === null){
      this.timerID = setInterval(()=>this.tick(), 1000);
    }
  }

  tick(){
    this.setState({date: new Date()});
  }

  componentDidMount(){
    this.startClock();
  }

  componentWillUnmount(){
    this.stopClock();
  }

  render(){
    return (
      <span>
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}

export default Clock;
