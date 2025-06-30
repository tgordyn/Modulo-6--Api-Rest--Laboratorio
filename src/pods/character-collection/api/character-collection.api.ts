import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';

export const getCharacterCollection = async (page: number): Promise<CharacterListResponse> => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  return response.data;
};
