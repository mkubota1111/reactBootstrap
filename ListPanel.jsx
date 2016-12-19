import React from 'react';

export default class ListPanel extends React.Component {
  render() {
    let item = this.props.item;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {item.issueType}<br />
          {item.email}<br />
          {item.comment}
        </div>
        <div className="panel-footer">
          {item.date.toString()}
        </div>
      </div>
    )
  }
}
