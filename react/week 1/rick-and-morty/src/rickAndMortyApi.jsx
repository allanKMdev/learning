import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchCharacters = async () => {
  try {
    const response = await api.get('/character');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await api.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    return null;
  }
};
