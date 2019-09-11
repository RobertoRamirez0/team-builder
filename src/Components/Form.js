import React, { useState } from 'react';

function Form(props) {
  const [newTeam, setNewTeam] = useState({
    name: "",
    email: "",
    role: "",
  })
  const handleText = e => {
    setNewTeam({...newTeam, [e.target.name]: e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.setTeam([...props.team, newTeam]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' 
      name='name' 
      placeholder='Member Name' 
      onChange={handleText} 
      value={newTeam.name}/>

      <input type='text' 
      name='email' 
      placeholder='Member Email' 
      onChange={handleText} 
      value={newTeam.email}/>

      <input type='text' 
      name='role' 
      placeholder='Member Role' 
      onChange={handleText} 
      value={newTeam.role}/>

      <button>Submit</button>

    </form>
  )
}

export default Form;