import React from 'react';

import { Button,ButtonToolbar } from 'react-bootstrap';

export default class AddTicket extends React.Component {
  constructor() {
    super();
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleSubmitEvent(event) {
    event.preventDefault();
    let values = {
      date: new Date(),
      email: this.refs.email.value.trim(),
      issueType: this.refs.issueType.value.trim(),
      department: this.refs.department.value.trim(),
      comment: this.refs.comment.value.trim()
    };
    this.props.addTicketList(values);
  }

  render() {
    const style={color: '#ffaaaa'}
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <div className="form-group">
          <label htmlFor="email">Email <span style={style}>*</span></label>
          <input type="text" id="email" required ref="email" />
        </div>
        <div className="form-group">
          <label htmlFor="issueType">Issue Type <span style={style}>*</span></label>
          <select className="form-control" id="issueType" required
            ref="issueType">
            <option value="">---- Select ----</option>
            <option value="Access Related Issue">Access Related Issue</option>
            <option value="Email Related Issue">Email Related Issue</option>
            <option value="Hardware Request">Hardware Request</option>
            <option value="Health & Safety">Health & Safety</option>
            <option value="Network">Network</option>
            <option value="Intranet">Intranet</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department">Assign Departmet<span style={style}>*</span></label>
          <select className="form-control" id="department" required
            ref="department">
            <option value="">---- Select ----</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Development">Development</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments <span style={style}>*</span></label>
          (<span id="maxlength">200</span> characters left)
          <textarea className="form-control" rows="3" id="comments"
            required ref="comment"></textarea>
        </div>
        <ButtonToolbar>
          <Button type="submit" bsStyle="success">Submit</Button>
          <Button type="reset" bsStyle="danger">Cancel</Button>
        </ButtonToolbar>
      </form>
    );
  }
}
