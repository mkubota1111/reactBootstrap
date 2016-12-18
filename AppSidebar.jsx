import React from 'react';

class AppSidebar extends React.Component {
  render() {
    return React.DOM.ul({className: 'list-group'},
      React.DOM.li({className:'list-group-item text-muted'}, 'Profile'),
      React.DOM.li({className:'list-group-item'},
        React.DOM.a({className:'center-block text-center',href:'#'},'Image')
      ),
      React.DOM.li({className:'list-group-item text-right'}, '2.13.2014')
    )
  }
}
export default AppSidebar;
