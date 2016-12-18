import React from 'react';
import ReactDOM from 'react-dom';

import AppMenu from './AppMenu.jsx';
import AppDivider from './AppDivider.jsx';

ReactDOM.render(
  <div>
    <AppMenu />
    <div className="container">
      <div className="row">
        <div className="col-sm-9 profile-desc"></div>
        <AppDivider>This is a component</AppDivider>
      </div>
    </div>
  </div>,
  document.getElementById('app')
);
