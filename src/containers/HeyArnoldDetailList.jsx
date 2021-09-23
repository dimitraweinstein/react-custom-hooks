import React from 'react';
import { Link } from 'react-router-dom';
import Character from '../components/characters/Character';
import { useOneCharacter } from '../hooks/useOneCharacter';

const HeyArnoldDetails = () => {
  const { loading, character } = useOneCharacter();

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Character
        // character={character}
        image={character.image}
        name={character.name}
      />
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default HeyArnoldDetails;
