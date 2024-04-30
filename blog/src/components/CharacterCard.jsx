import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea'; // Importar CardActionArea
import '/src/App.css';
function Content() {
  const [characters, setCharacters] = useState([]);

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
    <div className="backgroundContent">
      <div className="content-box">
        {characters.map(character => (
          <Card key={character.id} sx={{ maxWidth: 200 }}>
            <CardActionArea> {/* Usar CardActionArea */}
              <CardMedia
                component="img"
                height="150"
                image={character.imageUrl}
                alt={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Content;
