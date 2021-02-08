
import axios from 'axios';

export const getProjects = () => axios(`${process.env.REACT_APP_API_URL}/projects`);