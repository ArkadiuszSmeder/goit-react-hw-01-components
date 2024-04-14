import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 10px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

export const FriendStatus = styled.span`
  display: inline-block;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#4CAF50' : '#ff0000')};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-weight: 600;
  margin: 0;
`;