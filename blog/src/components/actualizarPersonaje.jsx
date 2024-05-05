import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from './header';

function ActualizarPeronaje() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const onSubmit = async (data) => {
    const isEmpty = Object.values(data).some((value) => !value);
    if (isEmpty) {
      alert('Debe llenar todos los campos para actualizar el personaje.');
      return;
    }

    try {
      await fetch(`http://127.0.0.1:3010/characters/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      window.location.href = '/admin';
    } catch (error) {
      console.error('Error al actualizar el personaje:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="backgroundContent">
        <div className="form-container">
          <h1>Actualizar Personaje</h1>
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
            <Button type="submit" variant="contained" color="primary">Actualizar</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ActualizarPeronaje;
