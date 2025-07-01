import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';

export const getCharacterCollection = async (
  page = 1,
  name?: string
): Promise<CharacterListResponse> => {
  const response = await axios.get('https://rickandmortyapi.com/api/character', {
    params: {
      page,
      ...(name && { name }),
    },
  });
  return response.data;
};
