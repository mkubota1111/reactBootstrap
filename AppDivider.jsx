import React from 'react';

class AppDivider extends React.Component {
  render() {
    return(
      <div className="divider">
        <h2>{this.props.children}</h2><hr />
      </div>
    );
  }
}

export default AppDivider;
