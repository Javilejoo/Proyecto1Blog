import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterID() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetch(`http://127.0.0.1:3010/posts/${id}`);
        const responseData = await response.json();
        console.log('Character data:', responseData);
        if (responseData.status === 200) {
          setCharacter(responseData);
        } else {
          console.error('Character not found:', responseData);
        }
      } catch (error) {
        console.error('Error fetching character:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!character) {
    return <h1>Character not found</h1>;
  }

  return (
    <div>
      <h2>{character.data[0].name}</h2>
      <p>Age: {character.data[0].age}</p>
      <p>Bounty: {character.data[0].bounty}</p>
      <p>Description: {character.data[0].description}</p>
      <p>Devil Fruit: {character.data[0].devilFruit}</p>
      <p>Epithet: {character.data[0].epithet}</p>
      <p>Occupation: {character.data[0].occupation}</p>
      <img src={character.data[0].imageUrl} alt={character.data[0].name} />
    </div>
  );
}

export default CharacterID;
