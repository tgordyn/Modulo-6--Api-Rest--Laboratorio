import React from "react";
import { Box, Card, CardContent, Typography, Pagination } from "@mui/material";
import { cardStyle, contentStyle, labelStyle } from "./character.styles";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onSelect: (id: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characters,
  totalPages,
  currentPage,
  onPageChange,
  onSelect,
}) => {
  console.log('characters', characters);
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      p={2}
    >
      {characters.map((character) => (

        <Box
          key={character.id}
          sx={{ height: '100%', cursor: 'pointer' }}
          onClick={() => onSelect(character.id)}
        >
          <Card sx={cardStyle}>
            <CardContent sx={contentStyle}>
              <Typography sx={labelStyle}> <span>{character.name}</span>
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <img
                  src={character.image}
                  alt={character.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => onPageChange(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
};
