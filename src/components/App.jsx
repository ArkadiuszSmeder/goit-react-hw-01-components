import React from 'react';

import user from './Json/user.json';
import data from './Json/data.json';
import friends from './Json/friends.json';
import transactions from './Json/transactions.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';


export const App = () => {
    return (
      <div className="App">
        <Profile
          username={user.username}
          tag={user.tag} 
          location={user.location} 
          avatar={user.avatar} 
          stats={user.stats} 
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    );
  }
  
