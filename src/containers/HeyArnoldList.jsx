import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import { useCharacters } from '../hooks/useCharacters';

const HeyArnoldList = () => {
  const { characters, loading } = useCharacters();

  if (loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner"
  />;

  return <CharacterList characters={characters} />;
};

export default HeyArnoldList;
