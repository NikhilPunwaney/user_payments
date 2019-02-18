import './ClientColumn.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ClientColumn extends Component {
  render() {
    const clients = this.props.clients;
    const selectedClient = this.props.selectedClient;
    return (
      <div className="Client-col">
        {clients.map(c => {
          return (
            <div key={Math.random()} className={`Client-row${selectedClient && c.id === selectedClient.id ? ' selected' : ''}`} onClick={this.props.selectClient(c)}>
              <img src={`${c.img}.png`} alt="Client" />
              <div>
                <div>{c.firstName} {c.lastName}</div>
                <div>{c.title}, {c.organization}</div>
                <div>{c.paymentStatus}</div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

ClientColumn.propTypes = {
  clients: PropTypes.array.isRequired,
  selectedClient: PropTypes.object,
  selectClient: PropTypes.func.isRequired
};

export default ClientColumn;
