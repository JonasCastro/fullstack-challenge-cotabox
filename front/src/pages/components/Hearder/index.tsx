import React, { useState, FormEvent } from 'react';
import { Container } from './styles';

const Hearder: React.FC = () => {
  const [fistName, setFistName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participation, setParticipation] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log({
      fistName,
      lastName,
      participation,
    });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setFistName(e.target.value)}
          value={fistName}
          type="text"
          placeholder="First name"
        />
        <input
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          type="text"
          placeholder="Last name"
        />
        <input
          onChange={e => setParticipation(e.target.value)}
          value={participation}
          type="text"
          placeholder="Participation"
        />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Hearder;
