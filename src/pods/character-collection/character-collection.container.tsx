import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCharacterCollection } from './api/character-collection.api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get('page')) || 1;
  const name = searchParams.get('name') || '';

  React.useEffect(() => {
    const fetchCharacters = async () => {
      const apiResponse = await getCharacterCollection(page, name);
      setTotalPages(apiResponse.info.pages);
      const mappedCharacters = mapCharacterCollectionFromApiToVm(apiResponse);
      setCharacters(mappedCharacters);
    };

    fetchCharacters();
  }, [page, name]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString(), name });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setSearchParams({ page: '1', name: newName });
  };

  return (
    <CharacterCollectionComponent
      characters={characters}
      totalPages={totalPages}
      currentPage={page}
      search={name}
      onSearch={handleSearchChange}
      onPageChange={handlePageChange}
      onSelect={(id: number) => navigate(`/character/${id.toString()}`)}
    />
  );
};
