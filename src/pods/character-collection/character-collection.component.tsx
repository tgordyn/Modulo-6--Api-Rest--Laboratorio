import React from 'react';
import { Box } from '@mui/material';
import { SearchTextField } from './components/search-text-field.component';
import { PaginationComponent } from './components/pagination.component';
import { CharacterCard } from './components/character-card.component';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  search: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPageChange: (page: number) => void;
  onSelect: (id: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characters,
  totalPages,
  currentPage,
  search,
  onSearch,
  onPageChange,
  onSelect,
}) => {
  console.log('characters', characters);
  return (
    <>
      <SearchTextField value={search} onChange={onSearch} />

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
        {characters.map((character) => (
          <Box
            key={character.id}
            sx={{ height: '100%', cursor: 'pointer' }}
            onClick={() => onSelect(character.id)}
          >
            <CharacterCard character={character} />
          </Box>
        ))}
        <Box mt={4} display="flex" justifyContent="center">
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </Box>
      </Box>
    </>
  );
};
