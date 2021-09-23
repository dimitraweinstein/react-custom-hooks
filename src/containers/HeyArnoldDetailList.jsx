import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchHeyArnoldById } from '../services/heyArnoldApi';
import Character from '../components/characters/Character';

const HeyArnoldDetails = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => (
    fetchHeyArnoldById(id)
      .then((character) => {
        setCharacter(character);
        console.log(character, 'this is a character');
      })
      .finally(() => setLoading(false))
  ), []);

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
