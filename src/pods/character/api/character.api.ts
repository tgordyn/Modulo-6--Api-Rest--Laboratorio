  import axios from 'axios';
  import { Character } from './character.api-model';

  export const getCharacter = async (id: number): Promise<Character> => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  };
