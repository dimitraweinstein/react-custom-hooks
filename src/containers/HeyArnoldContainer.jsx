import React, { useState, useEffect } from 'react';
import { fetchHeyArnold } from '../services/heyArnoldApi';
import CharacterList from '../components/characters/CharacterList';

const HeyArnoldContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => (
    fetchHeyArnold()
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false))
  ), []);

  if (loading) return <h1>Loading...</h1>;

  return <CharacterList characters={characters} />;
};

export default HeyArnoldContainer;
