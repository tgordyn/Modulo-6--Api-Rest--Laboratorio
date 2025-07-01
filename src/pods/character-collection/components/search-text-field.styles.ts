import { SxProps, Theme } from '@mui/material';


export const searchTextFieldStyle: SxProps<Theme> = {
  mb: 3,
  backgroundColor: '#ffffff',
  borderRadius: 2,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',

  // label
  '& .MuiInputLabel-root': {
    fontSize: '1rem',
    top: '-4px',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(14px, -9px) scale(0.85)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#1976d2',
  },

  // input
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#888',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
};
