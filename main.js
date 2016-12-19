import React from 'react';
import ReactDOM from 'react-dom';

import AppMenu from './AppMenu.jsx';
import AddTicketForm from './AddTicketForm.jsx';

ReactDOM.render(
  <div>
    <AppMenu />
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h2>Add Ticket</h2>
          <hr />
        </div>
      </div>
    </div>
    <AddTicketForm />
  </div>,
  document.getElementById('app')
);
