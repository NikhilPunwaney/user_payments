import './App.css';

import React, { Component } from 'react';

import ClientColumn from './ClientColumn';
import FormColumn from './FormColumn';
import PaymentColumn from './PaymentColumn';
import ResponseColumn from './ResponseColumn';
import logo from './logo.svg';

class App extends Component {
  state = {
    clients: [],
    payments: []
  };
  componentDidMount() {
    this.getClients();
  }
  getClients = async () => {
    const response = await fetch(`/api/clients`);
    if (response.status !== 200) {
      this.setState({ response: response.message });
    } else {
      const clients = await response.json();
      this.setState({ clients });
    };
  }
  selectClient = selectedClient => () => {
    this.setState({ selectedClient, selectedPayment: null });
    this.getPayments(selectedClient.id, this.state.status);
  }
  getPayments = async (userId, status) => {
    // TO DO: Get payments
  }
  filterPayments = status => {
    // TO DO: Filter payments
  }
  selectPayment = selectedPayment => () => {
    this.setState({ selectedPayment });
  }
  updatePayment = event => {
    // TO DO: Update payment field
  }
  handleSubmit = async e => {
    e.preventDefault();
    const selectedPayment = this.state.selectedPayment;
    const response = await fetch(`/api/payments`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedPayment),
    });
    if (response.status !== 200) {
      // TO DO: Let the user know an error has occured
      return 'Error';
    } else {
      // TO DO: Update payment in state
      // Let the user know the payment has been requested in the format:
      // 'Payment for Alaska holiday has been requested from Eliza Thornberry!' 
      return 'Success';
    };
  }
  render() {
    const clients = this.state.clients;
    const selectedClient = this.state.selectedClient;
    const payments = this.state.payments;
    const selectedPayment = this.state.selectedPayment;
    const response = this.state.response;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Summer 2019 Internship Technical Challenge
          </p>
        </header>
        <div className="App-body">
          {clients.length > 0 && (
            <ClientColumn
              clients={clients}
              selectedClient={selectedClient}
              selectClient={this.selectClient}
            />
          )}
          {selectedClient && (
            <PaymentColumn
              payments={payments}
              selectedPayment={selectedPayment}
              selectPayment={this.selectPayment}
              filterPayments={this.filterPayments}
            />
          )}
          {selectedPayment && (
            <FormColumn
              client={selectedClient}
              payment={selectedPayment}
              updatePayment={this.updatePayment}
              handleSubmit={this.handleSubmit}
            />
          )}
          {response && (
            <ResponseColumn response={response} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
