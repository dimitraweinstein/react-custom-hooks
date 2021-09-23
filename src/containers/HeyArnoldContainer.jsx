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

  if (loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner"
  />;

  return <CharacterList characters={characters} />;
};

export default HeyArnoldContainer;
