import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Header from "./header";
import useApi from './useApi'; // Importa el hook useApi

function CrearPersonaje() {
    const { register, handleSubmit } = useForm();
    const { postData } = useApi(); // Usa el hook useApi para realizar la solicitud

    const onSubmit = async (data) => {
      const isEmpty = Object.values(data).some((value) => !value);
      if (isEmpty) {
        alert('Debe llenar todos los campos para agregar el personaje.');
        return;
      }
      try {
        // Realizar una solicitud para agregar el personaje a la base de datos
        await postData('https://onepieceblog-13817415a776.herokuapp.com/posts', data);
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
