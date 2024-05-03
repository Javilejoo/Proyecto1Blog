import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Importa useLocation desde React Router

function CharacterCard() {
  const [characters, setCharacters] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
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
        <a key={character.id} href={`${location.pathname === '/admin'? '/admin' : ''}/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit', width: '150px', marginBottom: '15px' }}>
          <Card
            sx={{
              maxWidth: 150, 
              height: 250, // Reduced height
              width: 150, // Reduced width
              opacity: hoveredCard === character.id? 1 : 0.4, 
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={() => setHoveredCard(character.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="100" // Reduced height
                image={character.imageUrl}
                alt={character.name}
              />
              <CardContent style={{ flexGrow: 1 }}>
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