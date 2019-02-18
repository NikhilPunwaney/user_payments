import './PaymentColumn.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

class PaymentColumn extends Component {
  render() {
    const payments = this.props.payments;
    const selectedPayment = this.props.selectedPayment;
    return (
      <div className="Payment-col">
      {/* TO DO: Create a drop down with payment status options. On change, this should filter the payments shown by status. */}
        <br />
        <br />
        {payments.map(c => {
          return (
            <div key={Math.random()} className={`Client-row${selectedPayment && c.id === selectedPayment.id ? ' selected' : ''}`} onClick={this.props.selectPayment(c)}>
              <div>
                <h3>{c.name}</h3>
                <div>{c.status}</div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

PaymentColumn.propTypes = {
  payments: PropTypes.array.isRequired,
  selectedPayment: PropTypes.object,
  selectPayment: PropTypes.func.isRequired,
  filterPayments: PropTypes.func.isRequired
};

export default PaymentColumn;
