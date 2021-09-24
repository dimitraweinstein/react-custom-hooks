import React from 'react';
import Character from '../components/characters/Character';
import { useOneCharacter } from '../hooks/useOneCharacter';

const HeyArnoldDetails = () => {
  const { loading, character } = useOneCharacter();

  if (loading) return <h1>Loading...</h1>;

  return (
    <Character
      image={character.image}
      name={character.name}
    />
  );
};

export default HeyArnoldDetails;
