import React, {useState} from 'react';
import {Container, Row} from "reactstrap";
import './App.css';
import TeamCard from "./teamCard.js";
import TeamForm from "./teamForm.js";

function App() {
  const [team, setTeam] = useState([{name: "Aaron", email: "aaronmyates@hotmail.com", role: "Full-stack web dev", id: Date.now()}]);

  const addMember = (newMember) => {
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
    <Container>
      <TeamForm addMember={addMember} />
      <Row>
        {team.map(member => (
          <TeamCard key={member.id} member={member} />
        ))}
      </Row>
    </Container>
      
    </div>
  );
}

export default App;
