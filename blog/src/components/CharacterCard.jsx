import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Importa useLocation desde React Router
import EmptyState from './emptyState'; // Importa el componente EmptyState

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

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {characters.map(character => (
        <a key={character.id} href={`${location.pathname === '/admin'? '/admin' : ''}/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit', width: '150px', marginBottom: '15px' }}>
          <Card
            sx={{
              maxWidth: 150,
              height: 250,
              width: 150,
              borderRadius: 8, // Bordes redondeados
              boxShadow: hoveredCard === character.id? '0px 4px 20px rgba(0, 0, 0, 0.1)' : '0px 2px 10px rgba(0, 0, 0, 0.1)', // Sombra
              transition: 'box-shadow 0.3s', // Transición de sombra
              opacity: hoveredCard === character.id? 1 : 0.8,
            }}
            onMouseEnter={() => setHoveredCard(character.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="100"
                image={character.imageUrl}
                alt={character.name}
                style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} // Bordes redondeados solo en la parte superior
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 'bold' }}> {/* Texto más grande y negrita */}
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
