import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from './api/character.api';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
  if (id) {
    getCharacter(Number(id)).then(setCharacter);
    console.log('character', character);
  }
}, [id]);


  return character ? <CharacterComponent character={character} /> : <div>Loading...</div>;
};
