import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import {
  cardStyle,
  mediaStyle,
  contentStyle,
  labelStyle,
  valueStyle,
} from './card.styles';

interface Props {
  character: {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
    };
  };
}

export const CharacterComponent: React.FC<Props> = ({ character }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate(-1)}>
        ← Volver a la lista
      </Button>
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={mediaStyle}
        />
        <CardContent sx={contentStyle}>
          <Typography variant="h5" gutterBottom>
            {character.name}
          </Typography>
          <Typography sx={labelStyle}>
            Status: <span style={valueStyle}>{character.status}</span>
          </Typography>
          <Typography sx={labelStyle}>
            Species: <span style={valueStyle}>{character.species}</span>
          </Typography>
          <Typography sx={labelStyle}>
            Gender: <span style={valueStyle}>{character.gender}</span>
          </Typography>
          <Typography sx={labelStyle}>
            Origin: <span style={valueStyle}>{character.origin.name}</span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
