import { useState, useEffect } from 'react';
import { getProjects } from '../../services/projects';

export const useProjects = (initialState = []) => {
  const [projects, setProjects] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getProjects();
      setProjects(result.data);
    };

    fetchData();
  }, []);

  return { projects };
};