import React from 'react';
import PropTypes from "prop-types";
import { StyledStatistics, StatsTitle, StatList, StatItem, StatLabel, StatPercentage } from './styled-statistics'

export const Statistics = ({ title, stats }) => {
    return (
        <StyledStatistics>
            <StatsTitle>{title}</StatsTitle>
            <StatList>
        {stats.map((stats) => (
          <StatItem key={stats.id}>
            <StatLabel>{stats.label}</StatLabel>
            <StatPercentage>{stats.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
        </StyledStatistics>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};