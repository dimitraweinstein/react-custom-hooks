import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHeyArnoldById } from '../services/heyArnoldApi';

export const useOneCharacter = () => {
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

  return { character, loading };
  
};



