import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Importa useLocation desde React Router

function CharacterCard() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation(); // Obtiene la ubicación actual

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:3010/posts');
        const responseData = await response.json();
        setCharacters(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {characters.map(character => (
        <a key={character.id} href={`${location.pathname === '/admin' ? '/admin' : ''}/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '200px', height: '100%', marginBottom: '20px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image={character.imageUrl}
                alt={character.name}
                style={{ maxHeight: '150px' }} // Establece la altura máxima de la imagen
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      ))}
    </>
  );
}
export default CharacterCard;
