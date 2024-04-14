import React from 'react';
import PropTypes from "prop-types";
import { StyledFriendList, FriendListItem, FriendStatus, FriendAvatar, FriendName } from './styled-friends'

// export const FriendListItem = ({ avatar, name, isOnline}) => {
//     return (
//         <li className="item">
//             <span className="status">{isOnline}</span>
//             <img className="avatar" src={avatar} alt="User avatar" width="48" />
//             <p className="name">{name}</p>
//         </li>
//     );
// };

// export const FriendList = ({ friends }) => {
//     return (
//         <StyledFriendList>
//             {friends.map((friend) => (
//             <FriendListItem key={friend.id} {...friend} />
//             ))}
//         </StyledFriendList>
//     );
// };

export const FriendList = ({ friends }) => {
    return (
      <StyledFriendList>
        {friends.map((friend) => (
          <FriendListItem key={friend.id}>
            <FriendStatus isOnline={friend.isOnline} />
            <FriendAvatar src={friend.avatar} alt="User avatar" />
            <FriendName>{friend.name}</FriendName>
          </FriendListItem>
        ))}
      </StyledFriendList>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
