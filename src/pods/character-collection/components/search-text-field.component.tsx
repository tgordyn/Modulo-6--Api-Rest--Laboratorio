import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchTextFieldStyle } from './search-text-field.styles';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
}

export const SearchTextField: React.FC<Props> = ({
  value,
  onChange,
  placeholder = 'Buscar...',
  label = 'Buscar Personajes',
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      value={value}
      onChange={onChange}
      sx={searchTextFieldStyle}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
};
