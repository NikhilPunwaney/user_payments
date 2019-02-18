import './ResponseColumn.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ResponseColumn extends Component {
  render() {
    return (
      <div className="Response-col">
        <h2>{this.props.response}</h2>
      </div>
    );
  }
}

ResponseColumn.propTypes = {
  response: PropTypes.string.isRequired
};

export default ResponseColumn;
