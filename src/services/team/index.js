
import axios from 'axios';

export const getTeam = () => axios(`${process.env.REACT_APP_API_URL}/teams`);