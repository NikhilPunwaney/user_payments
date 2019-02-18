import './FormColumn.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';

class FormColumn extends Component {
  render() {
    const client = this.props.client;
    const payment = this.props.payment;
    const name = `${client.firstName} ${client.lastName}`
    return (
      <form className="Form-col" onSubmit={this.props.handleSubmit}>
        <h2>New payment request</h2>
        <p>{name}</p>
        <input
          name="amount"
          placeholder="Amount"
          type="text"
          value={payment.amount}
          onChange={this.props.updatePayment}
        />
        {/* TO DO: Add a drop down to select currency with three options: USD, Euro, Rupee */}
        <br />
        <input
          name="source"
          placeholder="Source"
          type="text"
          value={client.source}
          disabled
        />
        <br />
        <input
          name="expiry"
          placeholder="Source"
          type="text"
          value={moment(client.expiry).format('MMM DD YYYY')}
          disabled
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        {/* TO DO: Disable the submit button payment status is not overdue or if the user's credit card is expired */}
        {payment.status === 'Paid' && <div>This has already been paid</div>}
        {payment.status === 'Requested' && <div>This has already been requested</div>}
        {moment(client.expiry).isBefore(moment()) && <div>Card is expired</div>}
      </form>
    );
  }
}

FormColumn.propTypes = {
  client: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  updatePayment: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default FormColumn;
