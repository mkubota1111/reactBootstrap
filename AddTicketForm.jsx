import React from 'react';

import List from './List.jsx';
import AddTicket from './AddTicket.jsx';

export default class AddTicketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };

    this.updateList = this.updateList.bind(this);
    this.addTicketList = this.addTicketList.bind(this);
  }

  updateList(newList) {
    this.setState({
      this: newList
    });
  }

  guid() {
    let s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  addTicketList(item) {
    let list = this.state.list;
    item.key = this.guid();
    list[item.key] = item;
    this.updateList(list);
  }

  render() {
    let items = this.state.list;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <List items={items} />
            <AddTicket addTicketList={this.addTicketList} />
          </div>
        </div>
      </div>
    );
  }
}
