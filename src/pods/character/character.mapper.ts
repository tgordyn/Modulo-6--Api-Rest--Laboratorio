import { Character } from './api/character.api-model';
import { CharacterVm } from './character.vm';

export const mapCharacterFromApiToVm = (apiCharacter: Character): CharacterVm => ({
  id: apiCharacter.id,
  name: apiCharacter.name,
  status: apiCharacter.status,
  species: apiCharacter.species,
  gender: apiCharacter.gender,
  image: apiCharacter.image,
});
