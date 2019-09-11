import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form'

function App() {
  const [team, setTeam] = useState([
    {
    name: "Roberto Ramirez",
    email: "roberto@email.com",
    role: "React Developer",
  }]);
  return (
    <div className='team-list'>
      <h1>My Team</h1>
      {team.map((e, index) => (
        <div className='team-member' key={index}>
          <h3>{e.name}</h3>
          <p>Email: {e.email}</p>
          <p>Role: {e.role}</p>
        </div>
      ))}
      <Form team={team} setTeam={setTeam}/>
    </div>
  );
}

export default App;
