import React from 'react';

class ItemList extends React.Component{

  render(){
    const items = this.props.items;
    const listItems = items.map(
      (el, i) => <li key={i}>{el}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default ItemList;
