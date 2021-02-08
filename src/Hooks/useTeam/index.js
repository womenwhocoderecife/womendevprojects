import { useState, useEffect } from 'react';
import { getTeam } from '../../services/team';

export const useTeam = (initialState = []) => {
  const [team, setTeam] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTeam();
      setTeam(result.data);
    };

    fetchData();
  }, []);

  return { team };
};