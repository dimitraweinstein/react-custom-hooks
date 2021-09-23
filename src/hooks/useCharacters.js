import { useState, useEffect } from 'react';
import { fetchHeyArnold } from '../services/heyArnoldApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => (
    fetchHeyArnold()
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false))
  ), []);

  return { characters, loading };

};
