import React from 'react';

const MAX_CHARS = 140;
class MyTextarea extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      charLeft: MAX_CHARS
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({
      value: input,
      charLeft: MAX_CHARS - input.length
    });
  }

  render() {
    const style = {color: '#ffaaaa'};
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comments">Comments <span style={style}>*</span></label>
          (<span>{this.state.charLeft}</span> characters left)
          <textarea className="form-control" value={this.state.value}
            maxLength={MAX_CHARS} onChange={this.handleChange}
            placeholder="Controlled!"/>
        </div>
      </form>
    );
  }
}
export default MyTextarea;
