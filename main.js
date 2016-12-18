import React from 'react';
import ReactDOM from 'react-dom';

import AppMenu from './AppMenu.jsx';
import AppDivider from './AppDivider.jsx';
import MyTextarea from './MyTextarea.jsx';

ReactDOM.render(
  <div>
    <AppMenu />
    <div className="container">
      <div className="row">
        <div className="col-sm-9 profile-desc"></div>
        <MyTextarea />
      </div>
    </div>
  </div>,
  document.getElementById('app')
);
