import React from 'react';

class NameForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event){
    alert('A name input was submitted: ' + this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default NameForm;
