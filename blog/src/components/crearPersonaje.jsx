import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Header from "./header"

function CrearPersonaje() {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = async (data) => {
      try {
        // Realizar una solicitud para agregar el personaje a la base de datos
        await fetch('http://127.0.0.1:3010/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // Enviar datos del formulario como JSON
        });
        // Redirigir a la página de administración después de agregar el personaje
        window.location.href = '/admin';
      } catch (error) {
        console.error('Error al agregar el personaje:', error);
      }
    };
  
    return (
      <>
        <Header />
        <div className='backgroundContent'>
          <div className="form-container"> {/* Contenedor del formulario */}
            <h1>Crear Personaje</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="input-field" type="text" placeholder="Nombre" {...register('name')} />
              <input className="input-field" type="number" placeholder="Edad" {...register('age')} />
              <input className="input-field" type="text" placeholder="Epíteto" {...register('epithet')} />
              <input className="input-field" type="text" placeholder="Ocupación" {...register('occupation')} />
              <input className="input-field" type="number" placeholder="Recompensa" {...register('bounty')} />
              <input className="input-field" type="text" placeholder="Fruta del Diablo" {...register('devilFruit')} />
              <input className="input-field" type="text" placeholder="URL de la imagen" {...register('imageUrl')} />
              <input className="input-field" type="text" placeholder="Base64 de la imagen" {...register('imageBase64')} />
              <textarea className="textarea-field" placeholder="Descripción" {...register('description')} />
              <Button type="submit" variant="contained" color="primary">Agregar</Button>
            </form>
          </div>
        </div>
      </>
    );
}

export default CrearPersonaje;