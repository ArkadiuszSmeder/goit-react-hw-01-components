import React from 'react';

import user from './user.json';

import { Profile } from './components/Profile';

function App() {
    return (
      <div className="App">
        <h1>React homework template</h1> 
  
        <Profile
          username={user.username}
          tag={user.tag} 
          location={user.location} 
          avatar={user.avatar} 
          stats={user.stats} 
        />
      </div>
    );
  }
  
  export default App;

//   <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101'
//   }}
// >
//   React homework template
// </div>