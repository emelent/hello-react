import React, {Component} from 'react';
import Clock from './Clock';
import ItemList from './ItemList';

class Hello extends Component{

  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      items: [
        'Narutaru',
        'Le Portrait de Petit',
        'Another',
        'Serial Experiments Lain',
        'Higurashi'
      ]
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(){
    this.setState({toggle: !this.state.toggle});
  }

  render(){
    let toggle, items;
    ({toggle, items} = this.state);

    return (
      <div className="Hello">
        {toggle ? (
          <div>
            <p>Hello <b><Clock ref="clock"/></b></p>
            <button onClick={() => this.refs.clock.startClock()}>Start Clock</button>
            <button onClick={() => this.refs.clock.stopClock()}>Stop Clock</button>
          </div>
        ) : (
          <ItemList items={items}/>
        )}
        <br/><br/>
        <button onClick={this.toggleState}>Toggle</button>
      </div>
    );
  }
}

export default Hello;
