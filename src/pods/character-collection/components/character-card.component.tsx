import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { cardStyle, contentStyle, labelStyle } from './character-card.styles';

interface Props {
  character: {
    id: number;
    name: string;
    image: string;
  };
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  if (!character) return null;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={contentStyle}>
        <Typography sx={labelStyle}>
          {' '}
          <span>{character.name}</span>
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
