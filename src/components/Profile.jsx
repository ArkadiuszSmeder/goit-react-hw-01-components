import React from 'react';
import PropTypes from "prop-types";
import { StyledProfile, Description, Avatar, Name, Tag, Location, Stats, Stat, StatLabel, StatQuantity } from './styled-profile'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar"/>
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        {Object.entries(stats).map(([label, quantity]) => (
            <Stat key={label}>
              <StatLabel className="label">{label}</StatLabel>
              <StatQuantity className="quantity">{quantity}</StatQuantity>
            </Stat>
        ))}
      </Stats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.number.isRequired,
  avatar: PropTypes.number.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired, 
};
