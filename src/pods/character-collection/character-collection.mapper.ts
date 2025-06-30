import { CharacterListResponse } from './api/character-collection.api-model';
import { CharacterCollection } from './character-collection.vm';
import { mapCharacterFromApiToVm } from '../character/character.mapper';

export const mapCharacterCollectionFromApiToVm = (
  apiCharacterList: CharacterListResponse
): CharacterCollection => apiCharacterList.results.map(mapCharacterFromApiToVm);
