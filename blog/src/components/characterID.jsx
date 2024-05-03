import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from "./header";
import DeleteCharacter from "./deleteCharacter";

function CharacterID() {
  const { id } = useParams();
  const navigate = useNavigate(); // Usa useNavigate para la redirección
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAdmin = window.location.pathname.startsWith('/admin');

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
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  const handleDeleteCharacter = async () => {
    try {
      await fetch(`http://127.0.0.1:3010/posts/${id}`, {
        method: 'DELETE',
      });
      // Después de eliminar el personaje, redirige a la ruta /admin
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting character:', error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!character) {
    return <h1>Character not found</h1>;
  }

  const { name, age, bounty, description, devilFruit, epithet, occupation, imageUrl } = character.data[0];

  return (
    <div className='backgroundContent'>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.4)', maxWidth: '800px', margin: '0 auto', width: '100%', marginTop: '50px' }}>
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', marginRight: '20px' }}>
          <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>{name}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.5' }}>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Bounty:</strong> {bounty}</p>
            <p><strong> Descripcion:</strong> {description}</p>
            <p><strong>Devil Fruit:</strong> {devilFruit}</p>
            <p><strong>Epithet:</strong> {epithet}</p>
            <p><strong>Occupation:</strong> {occupation}</p>
          </div>

          {isAdmin && (
            <div style={{ marginTop: '20px' }}>
              <Link to={`/admin/character/${id}/update`} style={{ marginRight: '10px' }}>
                <button>Actualizar</button>
              </Link>

              <DeleteCharacter id={id} handleDelete={handleDeleteCharacter} />

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterID;
