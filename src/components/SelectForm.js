import React from 'react';

class SelectForm extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert(`'${this.state.value}' selected`);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange}>
          <option value="coconut">Coconut</option>
          <option value="guava">Guava</option>
          <option value="mayonaise">Mayonaise</option>
          <option value="rice">Rice</option>
        </select>
        <button>Submit</button>
      </form>
    ); 
  }
}

export default SelectForm;
