import React from 'react';

class EssayForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
       <textarea value={this.state.value} onChange={this.handleChange}></textarea>
       <button>Submit</button>
      </form>
    );
  }
}

export default EssayForm;
