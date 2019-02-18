const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let clients = [
  {
    id: 1,
    firstName: 'Donald',
    lastName: 'Trump',
    title: 'CEO',
    organization: 'Trump Towers',
    img: 'trump',
    source: 'tok_visa',
    expiry: moment().add(2, 'days')
  },
  {
    id: 2,
    firstName: 'Spongebob',
    lastName: 'Squarepants',
    title: 'Chef',
    organization: 'Krusty Krabs',
    img: 'spongebob',
    source: 'tok_visa_debit',
    expiry: moment().add(2, 'weeks')
  },
  {
    id: 3,
    firstName: 'Sirius',
    lastName: 'Black',
    title: 'Veteran',
    organization: 'Hogwarts',
    img: 'sirius',
    source: 'tok_mastercard',
    expiry: moment().add(2, 'months')
  },
  {
    id: 4,
    firstName: 'Petyr',
    lastName: 'Baelish',
    title: 'Little Finger',
    organization: '7 Kingdoms',
    img: 'petyr',
    source: 'tok_mastercard_debit',
    expiry: moment().subtract(2, 'years')
  }
]

let payments = [
  {
    id: 1,
    userId: 1,
    name: 'Taxes',
    amount: 999999,
    currency: 'usd',
    status: 'Overdue'
  },
  {
    id: 2,
    userId: 1,
    name: 'Tower',
    amount: 25000,
    currency: 'usd',
    status: 'Overdue'
  },
  {
    id: 3,
    userId: 2,
    name: 'Swimming classes',
    amount: 100,
    currency: 'usd',
    status: 'Paid'
  },
  {
    id: 4,
    userId: 3,
    name: 'Bail',
    amount: 5000,
    currency: 'usd',
    status: 'Requested'
  },
  {
    id: 5,
    userId: 4,
    name: 'Horse',
    amount: 20000,
    currency: 'usd',
    status: 'Overdue'
  },
  {
    id: 6,
    userId: 4,
    name: 'Red wedding',
    amount: 600000,
    currency: 'usd',
    status: 'Paid'
  }
]

app.get('/api/clients', (req, res) => {
  res.status(200).json(clients);
});
app.get('/api/payments/:userId', (req, res) => {
  let filteredPayments = payments.filter(p => p.userId === parseInt(req.params.userId, 10));
  // TO DO: Filter payments by status
  res.status(200).json(filteredPayments);
});
app.put('/api/payments', (req, res) => {
  const existingPayment = req.body;
  // TO DO: Check if payment exists. If it does not, return an appropriate response.

  // TO DO: Only process if payment status is overdue. Otherwise return an error message.

  // TO DO: Create a Stripe charge
  // The charge description should be in the format: 'Charge for John Snow'
  // Update payments
  // Return the updated payment
  return res.status(200).json(payments[0]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
