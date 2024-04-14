import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 1000px;
  border-collapse: collapse;
  margin: 20px;
`;

export const TransactionHeader = styled.th`
  background-color: #00cfff;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #ddd;
  color: white;
`;

export const TransactionData = styled.td`
  text-align: center;
`;

export const TransactionRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;