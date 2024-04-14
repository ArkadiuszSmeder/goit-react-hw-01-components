import React from 'react';
import PropTypes from "prop-types";
import { StyledTransactionHistory, TransactionHeader, TransactionRow, TransactionData } from './styled-transactions'

export const TransactionHistory = ({ items }) =>{
    return (
        <StyledTransactionHistory>
          <thead>
            <tr>
              <TransactionHeader>Type</TransactionHeader>
              <TransactionHeader>Amount</TransactionHeader>
              <TransactionHeader>Currency</TransactionHeader>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <TransactionRow key={item.id}>
                <TransactionData>{item.type}</TransactionData>
                <TransactionData>{item.amount}</TransactionData>
                <TransactionData>{item.currency}</TransactionData>
              </TransactionRow>
            ))}
          </tbody>
        </StyledTransactionHistory>
      );
    };

    TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
    };