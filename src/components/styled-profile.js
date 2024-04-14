import styled from 'styled-components';

export const StyledProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ;
border-radius: 4px;
padding: 20px;
padding-bottom: 0px;
margin: 20px;
box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
width: 300px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #888;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 340px;
  
`;

export const Stat = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 100%;
  border: 1px solid #ddd;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: #888;
  margin-right: 10px;
`;

export const StatQuantity = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const StatContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;