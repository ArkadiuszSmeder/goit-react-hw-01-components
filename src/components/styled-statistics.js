import styled from 'styled-components';

export const StyledStatistics = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  padding: 0px;
  width: 340px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  margin: 20px;
  align-items: center;
`;

export const StatsTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 340px;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: #f5f5f5;
  width: 100%;
  border: 1px solid #ddd;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: #333;
`;

export const StatPercentage = styled.span`
  font-weight: bold;
  font-size: 16px;
`;