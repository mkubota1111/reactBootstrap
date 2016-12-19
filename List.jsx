import React from 'react';

import ListPanel from './ListPanel.jsx';

export default class List extends React.Component {
  constructor() {
    super();

  }

  getListOfIds(items) {
    return Object.keys(items);
  }

  createListElements(items) {
    return (
      this
        .getListOfIds(items)
        .map((itemId) => {
          let item = items[itemId];
          return (<ListPanel item={item} key={item.key}/>);
        })
        .reverse()
    );
  }

  render() {
    let items = this.props.items;
    let listItemElements = this.createListElements(items);
    return (
      <div className={listItemElements.length > 0 ? "":"bg-info"}>
        {listItemElements.length > 0 ? listItemElements :
        "You nave not raised any ticket yet. Fill this form to submit the ticket."}
      </div>
    )
  }
}
