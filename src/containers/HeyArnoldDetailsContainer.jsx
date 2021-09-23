import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHeyArnoldById } from '../services/heyArnoldApi';
import CharacterDetail from '../components/characters/CharacterDetail';

const HeyArnoldDetailsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => (
    fetchHeyArnoldById(id)
      .then((character) => {
        setCharacter(character);
      })
      .finally(() => setLoading(false))
  ), []);

  if (loading) return <h1>Loading...</h1>;

  return <CharacterDetail
    id={character.id}
    image={character.image}
    name={character.name}
  />;
};

export default HeyArnoldDetailsContainer;
